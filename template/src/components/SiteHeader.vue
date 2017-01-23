<template>
  <header :class="[{ desktop : isDesktop}, 'site-header']">
    <label v-if="!isDesktop" for="show-navigation" class="button--icon fa-bars">Menu</label>
    <a href="#" class="header-brand">Home</a>
    <site-menu v-if="isDesktop">
      <div class="placeholder"></div>
      <site-navigation></site-navigation>
      <site-search></site-search>
    </site-menu>
    <label v-if="!isDesktop" for="show-search" class="button--icon right fa-search">Search</label>
  </header>
</template>

<script>
export default {
  name: 'site-header',
  computed: {
    isDesktop() {
      return this.$store.getters.isDesktop;
    }
  }
};
</script>

<style lang="less">
@import "../styles/theme.less";
@import "../styles/util/media-queries.less";

.site-header {
  background: @site-header-background-colour;
  border-bottom: none;
  border-top: none;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: @site-header-height;
  margin: 0 auto auto;
  padding: 0 20px;
  position: relative;
  top: 0;
  transition: transform 0.5s ease-out;
  width: 100%;
  z-index: 100;
  box-shadow: @site-header-box-shadow;

  &.fixed {
    position: fixed;
  }

  @media @760 {
    height: @site-header-height--760;
  }

  @media @1000 {
    height: @site-header-height--1000;

    &.desktop {
      padding-top: @global-navigation-height;
      height: calc(@site-header-height--1000 + @global-navigation-height);

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: @global-navigation-height;
        background: @global-navigation-background-colour;
      }
    }
  }

  .header-brand {
    width: 75px;
    text-align: center;
    text-indent: -9999px;
    background: url('../assets/logo.png') center center no-repeat;
    background-size: 100% auto;

    @media @760 {
      width: 100px;
    }

    @media @1000 {
      width: 120px;
    }
  }

  .button--icon {
    cursor: pointer;
    display: block;
    height: 40px;
    left: 12px;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    z-index: 5;
    color: @site-header-icon-button-font-colour;
    background: @site-header-icon-button-background-colour;

    @media @760 {
      left: 20px;
    }

    @media @1000 {
      .desktop& {
        display: none;
      }
    }

    &.right {
      left: auto;
      right: 12px;

      @media @760 {
        right: 20px;
      }
    }

    &.fa-search:before {
      #show-search:checked ~ & {
        content: "\f00d";
      }
    }

    &.fa-bars:before {
      #show-navigation:checked ~ & {
        content: "\f00d";
      }
    }
  }
}
</style>
