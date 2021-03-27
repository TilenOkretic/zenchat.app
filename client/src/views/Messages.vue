<template>

    <div class="container">
        <Navbar />
        <main class="messages__main">
            <ChatBox class="messages__main--bottom" />
        </main>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import ChatBox from "@/components/ChatBox";


    import {
        watch
    } from '@vue/composition-api';

    import {
        useActions,
        useState,
        useRouter
    } from "@u3u/vue-hooks";

    export default {
        name: "Messages",
        components: {
            Navbar,
            ChatBox
        },
        setup() {

            const {
                router
            } = useRouter();

            const {
                user,
                loading
            } = useState("auth", ["user", "loading"]);
            const {
                logout,
            } = useActions("auth", [
                "logout",
            ]);


            watch(user, () => {
                if (!user.value) {
                    router.push('/');
                }
            });

            return {
                user,
                loading,
                logout,
            };
        },
    };
</script>

<style lang="scss" scoped>
    @import '../styles/abstracts/variables';

    .container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        background: $bg;
    }

    .messages__main {
        height: 100%;
        position: relative;
    }

    
    .messages__main--bottom {
        position: absolute;
        bottom: 0;
    }
</style>