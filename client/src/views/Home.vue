<template>
  <div class="home">
    <div class="container">
      <img v-if="!user && !loading" src="../assets/bacground.png" alt="" />
      <Button v-if="!user && !loading" class="mt-4" @click.native="login_with_github()">
        <span class="mr-1">Login With GitHub</span>
        <svg viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" fill="none"
          stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1" style="
            --darkreader-inline-fill: none;
            --darkreader-inline-stroke: currentColor;
          " data-darkreader-inline-fill="" data-darkreader-inline-stroke="">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
          </path>
        </svg>
      </Button>

      <pre v-if="user && !loading" class="txt-light">{{
        JSON.stringify(user, null, 2)
      }}</pre>

      <Button v-if="user && !loading" class="mt-4" @click.native="logout()">
        <span>Log out</span>
      </Button>

      <Loading v-if="loading"></Loading>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  import Button from "@/components/Button";
  import Loading from "@/components/Loading";

  import {
    useActions,
    useState
  } from "@u3u/vue-hooks";

  export default {
    name: "Home",
    components: {
      Button,
      Loading,
    },
    setup() {
      const {
        user,
        loading
      } = useState("auth", ["user", "loading"]);
      const {
        login_with_github,
        logout
      } = useActions("auth", [
        "login_with_github",
        "logout",
      ]);

      return {
        user,
        loading,
        login_with_github,
        logout,
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../styles/abstracts/variables";

  .home {
    width: 100%;
    height: 100%;
    background: $bg;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .home h1 {
    font-size: 5rem;
    letter-spacing: 0.5rem;
  }

  .home img {
    width: 50rem;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>