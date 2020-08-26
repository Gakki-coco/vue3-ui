<template>
  <div>导航栏 |
    <router-link to="/">HelloWorld</router-link> |
    <router-link to="/gakki">Gakki</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>
