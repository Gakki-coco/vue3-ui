<template>
  <div class="top-nav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggle-icon" @click="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
  setup() {
    const asideVisible = inject<Ref<Boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {toggleAside}
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  background: pink;
  display: flex;
  padding: 16px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggle-icon {
    display: none;
    width: 24px;
    height: 24px;
    background: skyblue;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }
    > .toggle-icon {
      display: inline-block;
    }
  }
}
</style>
