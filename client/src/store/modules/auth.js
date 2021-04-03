import feathers from '../../feathers';

export default {
    namespaced: true,
    state: {
        loading: false,
        error: '',
        user: null
    },
    mutations: {},
    actions: {
        async reauth({
            state
        }) {
            state.loading = true;
            try {
                const {
                    user
                } = await feathers.reAuthenticate();
                await new Promise((resolve) => setTimeout(resolve, 2500));
                state.user = user;
            } catch (error) {

            }
            state.loading = false;
        },
        login_with_github({
            state
        }) {
            state.loading = true;
            async function receive_message(event) {

                // if (event.origin != 'http://zenchatapi.ddns.net/') {
                if (event.origin != 'http://localhost:4040') {
                    console.error('Invalid origin', event.origin);
                } else {

                    const {
                        user
                    } = await feathers.authenticate({
                        strategy: 'jwt',
                        accessToken: event.data.token,
                    });

                    await new Promise((resolve) => setTimeout(resolve, 2500));
                    state.user = user;
                    state.loading = false;
                }
            }

            window.addEventListener('message', receive_message, {
                once: true
            });
            // window.open('http://zenchatapi.ddns.net/oauth/github');
            window.open('http://localhost:4040/oauth/github');
        },
        async logout({
            state
        }) {
            state.loading = true;
            await feathers.logout();
            await new Promise((resolve) => setTimeout(resolve, 2500));
            state.user = null;
            state.loading = false;
        }
    },
}