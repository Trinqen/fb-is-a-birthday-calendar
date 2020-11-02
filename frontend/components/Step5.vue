<template>
  <div class="step-container">
    <div class="card-container">
      <div class="card">
        <icon-alarm-add />
        <div class="text">
          <h1>{{ totalAdded }}</h1>
          <p>useful notifications</p>
        </div>
      </div>
      <div class="card">
        <icon-alarm-disable />
        <div class="text">
          <h1>{{ totalRemoved }}</h1>
          <p>deleted notifications</p>
        </div>
      </div>
      <div class="card">
        <el-progress
          type="dashboard"
          :percentage="percentage"
          :width="64"
          :stroke-width="2"
          color="#5cb87a"
        />
        <div class="text">
          <h1>{{ percentage }}%</h1>
          <p>less notifications</p>
        </div>
      </div>
    </div>
    <p class="text-center">
      Congratulations, you've made your first step towards a world with less
      notifications. <br />
      Download your new calendar file below and import it to your preferred
      calendar. <br />The best thing to do is to create a separate agenda for
      all your birthdays<br /><br />
      Please spread the word and help people get rid of their overengineered
      birthday calendar.<br />

      <small>PS: Watch the social dilemma on Netflix<br /></small>
      <small
        ><small><small>PPS: Netflix please sponsor me</small></small></small
      >
    </p>
  </div>
</template>

<script>
export default {
  components: {
    IconAlarmAdd: () => import('~/components/icons/alarm-add'),
    IconAlarmDisable: () => import('~/components/icons/alarm-disable'),
  },
  props: {
    totalAdded: {
      type: Number,
    },
    totalRemoved: {
      type: Number,
    },
  },
  computed: {
    percentage() {
      if (this.totalRemoved === 0) return 0
      else
        return Math.round(
          (this.totalRemoved / (this.totalAdded + this.totalRemoved)) * 100
        )
    },
  },
}
</script>

<style lang="less" scoped>
.step-container {
  padding: 0 10%;
}
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;

  > :not(:last-child) {
    margin-right: 40px;
  }

  .card {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 20px;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    .text {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      p {
        margin-top: 0;
      }
    }
  }
}

.text-center {
  text-align: center;
}
</style>
