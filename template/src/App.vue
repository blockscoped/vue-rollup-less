<template>
  <div id="app">
    <input type="checkbox" name="show-navigation" id="show-navigation" class="hidden" value="" v-model="navigationOpen" v-on:click="closeSearch">
    <input type="checkbox" name="show-search" id="show-search" class="hidden" value="" v-model="searchOpen" v-on:click="closeNav">
    <site-header :is-desktop="isDesktop"></site-header>

    <site-menu v-if="!isDesktop">
      <site-navigation></site-navigation>
    </site-menu>

    <site-search v-if="!isDesktop"></site-search>

    <label class="action-mask--navigation" for="show-navigation"></label>
    <label class="action-mask--search" for="show-search"></label>

    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  computed: {
    navigationOpen() {
      return this.$store.getters.navigationOpen;
    },
    searchOpen() {
      return this.$store.getters.searchOpen;
    },
    isDesktop() {
      return this.$store.getters.isDesktop;
    }
  },
  methods: {
    closeNav() {
      this.$el.querySelector('#show-navigation').checked = false;
    },
    closeSearch() {
      this.$el.querySelector('#show-search').checked = false;
    },
    handleResize() {
      /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
      console.log(window.innerWidth);

      if (window.innerWidth >= 1000) {
        this.$store.dispatch('isDesktop');
      } else {
        this.$store.dispatch('isMobile');
      }
    }
  }
};
</script>

<style lang="less">
@import "styles/master.less";

html {
  height: 100%;
}

body {
  height: 100%;
  position: relative;
  font-family: @body-font;
  font-weight: @body-font-weight;
  display: block;
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100%;
  position: relative;
  font-family: @body-font;
  font-weight: @body-font-weight;
  display: block;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  flex: 1 0 auto;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
