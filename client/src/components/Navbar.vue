<template>
    <header class="navbar">
            <Button style="border:none;padding:5px;" @click.native="logout()">Logout</Button>
            <Loading v-if="loading" class="icon" />
    </header>
</template>

<script>
    import Button from "@/components/Button";
    import Loading from "@/components/Loading";


    import {
        useActions,
        useState
    } from '@u3u/vue-hooks';

    export default {
        name: "Messages",
        components: {
            Button,
            Loading
        },
        setup() {
            const {
                logout
            } = useActions('auth', ['logout']);
            const {
                loading
            } = useState('auth', ['loading']);
            return {
                logout,
                loading
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/abstracts/variables";

    .navbar {
        display: flex;
        align-items: center;
        background: $bg_dark;
        width: 100%;
        height: 70px;
    }

    .icon{ 
        width: 50px;
        height: 50px;
        margin-left: auto;
    }
</style>