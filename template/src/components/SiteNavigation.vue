<template>
  <nav class="site-navigation">
    <ul class="no-bullet">
      <li class="home">
        <router-link to="/">Home</router-link>
      </li>
      <!-- TODO: get these from placements service when it's ready -->
      <li class="movies">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'site-navigation'
};
</script>

<style lang="less">
@import "../styles/theme.less";
@import "../styles/util/media-queries.less";

.site-navigation {
  li {
    border-bottom: 1px solid @site-nav-item-border-color;

    a {
      font-family: @site-nav-font;
      font-size: @site-nav-font-size;
      color: @site-nav-font-color;
      font-weight: @site-nav-font-size-weight;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 16px;
      height: 48px;

      @media @800 {
        height: 56px;
        padding: 0 24px;
        font-size: @site-nav-font-size--800;
      }

      &:before {
        content: "";
        font-family: FontAwesome;
        display: inline-block;
        font-size: @font-size-l;
        color: currentColor;
        vertical-align: top;
        margin-right: 8px;
        width: 32px;
        text-align: initial;
      }

      .clicked & {
        &:hover {
          color: @site-nav-font-color-hover;
        }
      }

      &:active,
      .selected& {
        color: @site-nav-font-color-active;
      }
    }
    // TODO: set these via html fa-xxx class
    &.home {
      a:before {
        content: "\f015";
      }
    }

    &.movies {
      a:before {
        content: "\f008";
      }
    }

    &.tv-shows {
      a:before {
        content: "\f26c";
      }
    }

    &.kids {
      a:before {
        content: "\f1ae";
      }
    }

    &.live {
      a:before {
        content: "\f017";
      }
    }

    &.rentals {
      a:before {
        content: "\f145";
      }
    }

    &.sport {
      a:before {
        content: "\f1e3";
      }
    }
  }

  .site-header & {
    flex-grow: 1;
    order: 3;
    flex-basis: 50%;
    padding: 0 3%;
    display: flex;

    ul {
      display: flex;
      flex-direction: row;

      li {
        border: none;
        display: flex;

        &.non-desktop {
          display: none;
        }

        a {
          display: flex;
          align-items: center;
          font-weight: @site-nav-font-size-weight-desktop;
          padding: 0 16px;

          @media @800 {
            height: @site-header-height--800;
          }

          &:before {
            display: none;
          }
        }
      }
    }
  }
}
</style>
