<template>
  <h2>示例一</h2>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h2>示例二</h2>
  <div>
    <Button>普通</Button>
    <Button size="big">大大大</Button>
    <Button size="small">小小小</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: {Button},
  setup() {

  }
}
</script>