<template>
<div class="site-search">
  <form method="get" action="">
    <fieldset>
      <legend>Search</legend>

      <input type="search" name="q" value="" placeholder="Search">
      <button class="button--icon fa-search">Search</button>
    </fieldset>
  </form>
</div>
</template>

<script>
export default {
  name: 'site-search'
};
</script>

<style lang="less">
@import "../styles/theme.less";
@import "../styles/util/media-queries.less";

.site-search {
  overflow-y: auto;
  position: fixed;
  box-sizing: border-box;
  right: 0;
  top: @site-header-height;
  height: 100%;
  width: 250px;
  transform: translate3d(100%, 0, 0);
  transition: transform 0.5s ease-out;
  transition-delay: 0.015s;
  padding-bottom: 60px;
  z-index: 5;
  background: @site-menu-background-color;
  overflow-x: hidden;
  overflow-y: auto;

  @media @760 {
    top: @site-header-height--760;
  }

  @media @1000 {
    top: @site-header-height--1000;
  }

  #show-search:checked ~ &,
  #show-search:checked ~ .site-header .site-menu & {
    transform: translate3d(0, 0, 0);
  }

  form {
    position: relative;

    input {
      margin: 0;
      padding: 15px 55px 15px 18px;
      border: none;
      width: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid @site-search-input-border-bottom-color;
      -webkit-appearance: none;
      border-radius: 0;
    }

    button {
      position: absolute;
      padding: 0;
      border: none;
      right: 0;
      top: 0;
      height: 100%;
      width: 43px;
      color: transparent;
      font-size: 0;
      background: none;
    }
  }

  .site-header & {
    transform: none;
    position: relative;
    padding: 0;
    top: auto;
    order: 4;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-self: center;

    form {
      display: flex;
      align-items: center;
    }
  }
}
</style>
