<template>
  <div v-if="message.user" class="message">
    <div class="message__avatar">
        <img :src="message.user.image" id="image">
    </div>
    <div class="message__contents">
      <div class="message_info"><span class="message_info--username">{{message.user.name}}</span><span class="ml-0d5 message_info--date">{{new Date(message.createdAt).toLocaleString()}}</span></div>
      <div class="message_text">{{message.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['message'],
};
</script>

<style lang="scss" scoped>

@import '../styles/abstracts/variables';

* {
    color: $text_light;
}

.message {
  display: flex;
}

.message__contents {
  margin: 1rem;
}

.message__avatar { 
  margin: 0.5rem;
}

.message_info--username {
  color: $text-primary;
}

.message_info--date {
  color: $text-medium;
}



#image {
  width: 50px;
  border-radius: 50%;
}

</style>