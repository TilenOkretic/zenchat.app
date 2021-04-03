import feathers from '../../feathers';

let listener;

export default {
    namespaced: true,
    state: {
        loading: false,
        error: '',
        messages: []
    },
    mutations: {},
    actions: {
        async listen({
            state
        }) {

            const messages = await feathers.service('messages').find({
                query: {
                    $sort: { createdAt: 1 } 
                }
            }); 

            state.messages = messages.data;
            
            feathers.service('messages').off('created', listener);
            listener = (message) => {
                state.messages.push(message);
            }
            await feathers.service('messages').on('created', listener);
            var area = document.querySelector('.messages__main--msgholder');
            area.scrollTop = area.scrollHeight;
            
        },
        async createMessage(_,message){
            const created = await feathers.service('messages').create(message);
            var area = document.querySelector('.messages__main--msgholder');
            area.scrollTop = area.scrollHeight;
        }
    }
}