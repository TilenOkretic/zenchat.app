<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { useActions } from "@u3u/vue-hooks";

export default {
  setup() {
    const { reauth } = useActions("auth", ["reauth"]);

    reauth();
    
  },
};
</script>


<style lang="scss">
@import "./styles/main";
</style>
