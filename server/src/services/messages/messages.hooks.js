const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const {
  setField
} = require('feathers-authentication-hooks');

const limitToUser = setField({
  from: 'params.user._id',
  as: 'params.query.user_id'
});

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      setField({
        from: 'params.user._id',
        as: 'data.user_id'
      }),
    ],
    update: [limitToUser],
    patch: [limitToUser],
    remove: [limitToUser]
  },

  after: {
    all: [],
    find: [
      async (context) => {
        const user_ids = [...new Set(context.result.data.map(message => message.user_id.toString()))];
        const users = await context.app.service('users').find({
          paginate: false,
          query: {
            _id: {
              $in: user_ids
            },
          },
        });

        const usersByID = users.reduce((byId, user) => {
          byId[user._id] = user;
          return byId;
        },{});
        context.result.data.forEach(message => {
          message.user = usersByID[message.user_id]; 
        });
      }
    ],
    get: [],
    create: [async (context) => {
      context.result.user = await context.app.service('users').get(context.result.user_id);
    }],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
