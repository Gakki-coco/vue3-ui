<template>
  <h1>示例1</h1>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: {Button},
  setup() {

  }
}
</script>