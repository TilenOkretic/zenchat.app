import feathers from '../../feathers';

let listener;

export default {
    namespaced: true,
    state: {
        loading: false,
        error: '',
        users_by_id: {},
        messages: []
    },
    mutations: {},
    actions: {
        async listen({
            state
        }) {
            const users = await feathers.service('users').find({
                query: {
                    $limit: 100
                }
            });
         
            state.users_by_id = users.data.reduce((by_id, user) => {
                by_id[user._id] = user;
                return by_id;
            },{});
         
            const messages = await feathers.service('messages').find({
                query: {
                    $sort: { createdAt: 1 } 
                }
            });


            state.messages = messages.data.map((message) => {
                message.user = state.users_by_id[message.user_id];
                return message;
            });
            
            feathers.service('messages').off('created', listener);
            listener = (message) => {
                message.user = state.users_by_id[message.user_id];
                state.messages.push(message); 
            }
            feathers.service('messages').on('created', listener);
        },
        async createMessage(_,message){
            const created = await feathers.service('messages').create(message);
        }
    }
}