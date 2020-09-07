<template>
  <h2>示例一</h2>
  <div class="section">
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h2>示例二</h2>
  <div>
    <div class="section">
      <Button>普通</Button>
      <Button size="big">大大大</Button>
      <Button size="small">小小小</Button>
    </div>
    <div class="section">
      <Button theme="link">普通</Button>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link" size="small">小小小</Button>
    </div>
    <div class="section">
      <Button theme="text">普通</Button>
      <Button theme="text" size="big">大大大</Button>
      <Button theme="text" size="small">小小小</Button>
    </div>
  </div>
  <h2>示例三</h2>
  <div>
    <div class="section">
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div class="section">
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div class="section">
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <h2>示例四</h2>
  <div class="section">
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h2>示例五</h2>
  <div class="section">
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
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

<style lang="scss" scoped>
.section {
  margin-bottom: 8px;
}
</style>