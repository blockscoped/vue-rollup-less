<template>
  <div class="site-menu" id="site-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'site-menu'
};
</script>

<style lang="less">
@import "../styles/theme.less";
@import "../styles/util/media-queries.less";

.site-menu {
  overflow-y: auto;
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: @site-header-height;
  height: 100%;
  width: 250px;
  transform: translate3d(-100%, 0, 0);
  transition: transform 0.5s ease-out;
  transition-delay: 0.015s;
  padding-bottom: 60px;
  background: @site-menu-background-color;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 5;

  @media @760 {
    top: @site-header-height--760;
  }

  @media @1000 {
    top: @site-header-height--1000;
  }

  #show-navigation:checked ~ &,
  #show-navigation:checked ~ .site-header & {
    transform: translate3d(0, 0, 0);
  }

  .site-header & {
    position: static;
    transform: none;
    transition: none;
    display: flex;
    flex: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    top: 0;
    width: auto;
    padding: 0;
    margin-top: -@global-navigation-height;
    overflow: visible;
    background: @site-menu-background-colour-desktop;

    .placeholder {
      order: 1;
      height: @global-navigation-height;
      flex: 1 1 50%;
    }
  }
}

</style>
