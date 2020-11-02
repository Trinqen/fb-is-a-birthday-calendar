<template>
  <el-tooltip class="item" effect="dark" placement="top-start">
    <div slot="content">
      <slot></slot>
    </div>
    <icon-info />
  </el-tooltip>
</template>

<script>
export default {
  components: {
    IconInfo: () => import('~/components/icons/c-info'),
  },
}
</script>

<style lang="less" scoped></style>
