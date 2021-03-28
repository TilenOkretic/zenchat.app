<template>
  <form class="chatbox" @submit="send_message()">
      <input v-model="message" class="chatbox__input" placeholder="write something" />
  </form>
</template>

<script>

import { ref } from '@vue/composition-api';
import { useState, useActions } from '@u3u/vue-hooks';

export default {

    setup() {

        const message = ref('');

        const { user } = useState('auth', ['user']);

        const { createMessage } = useActions('messages', ['createMessage']);

        const send_message = () => {
            createMessage({ text: message.value, user_id: user.value._id});
            message.value = '';
        }

        return {
            send_message,
            message
        }

    }

}
</script>

<style lang="scss" scoped>

@import '../styles/abstracts/variables';

.chatbox {
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
}

.chatbox__input{
    background: $text_medium;
    width: 90%;
    height: 90%;
    outline: none;
    border: none;
    font-size: 2rem;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 10px;
    transition: 330ms;

    &::placeholder {
        color: rgba(0, 0, 0, 0.50);
        text-transform: uppercase;
        padding: 1rem 0;
    }
}

.chatbox__input:focus, .chatbox__input:hover {
    margin-bottom: 20px;
    width: 95%;
    height: 95%;
    outline: none;
    border: none;
    font-size: 2.5rem;
    padding: 10px;
    border-radius: 20px;
    transition: 330ms;

}

</style>