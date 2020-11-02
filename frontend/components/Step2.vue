<template>
  <div class="step1">
    <p>
      Upload the .ics file of the extracted Facebook birthdays from the previous
      step
    </p>
    <el-upload
      :file-list="value"
      :before-upload="checkExtension"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :on-exceed="handleExceed"
      :multiple="false"
      :limit="1"
      action=""
    >
      <el-button>Upload calendar file</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    value: Array,
  },
  methods: {
    checkExtension(file) {
      const fileName = file.name
      const fileExtension = fileName.split('.')[1]
      if (fileExtension !== 'ics') {
        this.$message('Please upload a calendar file: .ics')
        return false
      }
      return true
    },
    handleRemove(file, fileList) {
      this.$emit('input', fileList)
      this.$emit('remove')
    },
    handleSuccess(response, file, fileList) {
      this.$emit('input', fileList)
    },
    handleExceed() {
      this.$message('Only one file allowed')
    },
  },
}
</script>

<style lang="less">
.step1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 20%;

  > p {
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
