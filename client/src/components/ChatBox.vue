<template>
  <div class="chatbox">
      <input class="chatbox__input" placeholder="write something" />
  </div>
</template>

<script>
export default {

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