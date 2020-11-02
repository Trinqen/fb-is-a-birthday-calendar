<template>
  <div class="preferences-step">
    <h2>Select preferences</h2>
    <div class="setting">
      <h5 class="tooltip-title">
        Calendar event title<at-tooltip
          >{name} represents the name of the birthday boy/girl<br />
          Please include {name} in the title</at-tooltip
        >
      </h5>
      <el-input size="medium" v-model="value.title"></el-input>
      <small>Example: {{ titleExample }}</small>
    </div>
    <div class="setting">
      <h5 class="tooltip-title">
        Calendar event description<at-tooltip
          >Optional<br />{name} represents the name of the birthday
          boy/girl</at-tooltip
        >
      </h5>
      <el-input size="medium" v-model="value.description" width="50"></el-input>
      <small>Example: {{ descriptionExample }}</small>
    </div>
    <div class="setting">
      <h5 class="tooltip-title">Selection method</h5>
      <el-tooltip class="item" effect="dark" placement="top-start">
        <div slot="content">Select this if you know who you want to select</div>
        <el-radio v-model="value.selectionType" label="select"
          >Select my best friends</el-radio
        >
      </el-tooltip>
      <el-tooltip class="item" effect="dark" placement="top-start">
        <div slot="content">
          Select this if you don't know who you want to select
        </div>
        <el-radio v-model="value.selectionType" label="delete"
          >Remove unnecessary friends</el-radio
        >
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AtTooltip: () => import('~/components/AtTooltip'),
  },
  props: {
    value: {
      type: Object,
    },
  },
  computed: {
    titleExample() {
      return this.value.title.replace('{name}', 'John Snow')
    },
    descriptionExample() {
      return this.value.description.replace('{name}', 'John Snow')
    },
  },
}
</script>

<style lang="less" scoped>
.preferences-step {
  padding: 0 15%;
}
.setting {
  margin-top: 20px;
}

h3,
p {
  margin: 5px 0;
}

.tooltip-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  :first-child {
    margin-left: 5px;
  }
}
</style>
