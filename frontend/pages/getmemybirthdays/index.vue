<template>
  <div class="container">
    <div class="title">
      <h1>Facebook is a birthday calendar</h1>
      <div @click="goBack">
        <icon-arrow-left />
        <p>
          I don't remember what I was doing and want to read the intro again
        </p>
      </div>
    </div>
    <el-steps :active="activeStep" align-center class="stepper">
      <el-step title="Step 1" description="Download ICAL file"></el-step>
      <el-step title="Step 2" description="Upload ICAL file"></el-step>
      <el-step title="Step 3" description="Select preferences"></el-step>
      <el-step title="Step 4" description="Make your selection"></el-step>
      <el-step title="Step 5" description="Review and complete"></el-step>
    </el-steps>
    <div class="step">
      <step1 v-if="activeStep === 0"></step1>
      <step2
        v-if="activeStep === 1"
        v-model="fileList"
        @remove="resetList"
      ></step2>
      <step3 v-if="activeStep === 2" v-model="preferences"></step3>
      <step4
        v-if="activeStep === 3"
        :selectionType="preferences.selectionType"
        :selectedBirthdays="selectedBirthdays"
        :deletedBirthdays="deletedBirthdays"
        @delete-selected="deleteSelected"
        @select-deleted="selectDeleted"
      />
      <step5
        v-if="activeStep === 4"
        :totalAdded="selectedBirthdays.length"
        :totalRemoved="deletedBirthdays.length"
      ></step5>
    </div>
    <div class="buttons">
      <el-button v-if="activeStep !== 0" @click="previous">Previous</el-button>
      <el-button
        v-if="activeStep !== 4"
        type="primary"
        @click="next"
        :disabled="!nextValid"
        >Next</el-button
      >
      <el-button v-if="activeStep === 4" type="success" @click="downloadIcal"
        >Finish and download calendar file</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Step1: () => import('~/components/Step1'),
    Step2: () => import('~/components/Step2'),
    Step3: () => import('~/components/Step3'),
    Step4: () => import('~/components/Step4'),
    Step5: () => import('~/components/Step5'),
    IconArrowLeft: () => import('~/components/icons/arrow-left'),
  },
  data() {
    return {
      activeStep: 0,
      fileList: [],
      preferences: {
        title: "🎂 {name}'s birthday",
        description: "This is an example description for {name}'s birthday",
        selectionType: 'select',
      },
      birthdays: [],
      selectedBirthdays: [],
      deletedBirthdays: [],
    }
  },
  computed: {
    activeStepComponent() {
      return `Step${this.activeStep + 1}`
    },
    nextValid() {
      if (this.activeStep === 1) {
        return this.step2Valid
      } else if (this.activeStep === 2) {
        return this.step3Valid
      } else if (this.activeStep === 2 || this.activeStep === 3) {
        return this.step4Valid
      }
      return true
    },
    step2Valid() {
      return this.fileList.length ? true : false
    },
    step3Valid() {
      return this.preferences.title.includes('{name}')
    },
    step4Valid() {
      return this.selectedBirthdays.length ? true : false
    },
  },
  methods: {
    goBack() {
      this.$confirm(
        'You will lose all current progression. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }
      )
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {})
    },
    async next() {
      if (this.activeStep === 2 && !this.birthdays.length) await this.parseICS()
      if (this.activeStep === 2) {
        console.log(this.birthdays.length)
        if (this.preferences.selectionType === 'select') {
          this.deletedBirthdays = [...this.birthdays]
          this.selectedBirthdays = []
        } else {
          this.selectedBirthdays = [...this.birthdays]
          this.deletedBirthdays = []
        }
      }
      this.activeStep++
    },
    previous() {
      this.activeStep--
    },
    resetList() {
      this.birthdays = []
    },
    deleteSelected(index) {
      const deleting = this.selectedBirthdays[index]
      this.selectedBirthdays.splice(index, 1)
      this.deletedBirthdays.push(deleting)
    },
    selectDeleted(index) {
      const selecting = this.deletedBirthdays[index]
      this.deletedBirthdays.splice(index, 1)
      this.selectedBirthdays.push(selecting)
    },
    async parseICS() {
      this.$axios.setHeader('Content-Type', 'text/plain', ['post'])
      const file = this.fileList[0]
      const result = await this.$axios.post('parseICS/', file.raw)
      if (result.data) this.birthdays = result.data
      else this.$message('Something went wrong')

      this.birthdays.map((item) => {
        item.summary = item.summary.replace(`&#039\;`, "'")
        item.description = item.description.replace(`&#039\;`, "'")
        const birthdayPerson = item.summary.split('🎂 ')[1]
        item.birthdayPerson = birthdayPerson
        item.summary = this.preferences.title.replace('{name}', birthdayPerson)
        item.description = this.preferences.description.replace(
          '{name}',
          birthdayPerson
        )
        const date = new Date(item.start)

        const options = { month: 'numeric', day: 'numeric' }
        item.date = date.toLocaleDateString(undefined, options)
      })
    },
    async downloadIcal() {
      this.$axios.setHeader('Content-Type', 'application/json', ['post'])
      const result = await this.$axios.post(
        'downloadIcal/',
        this.selectedBirthdays
      )
      const blob = new Blob([result.data], { type: 'text/calendar' })
      console.log(result.data)
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'lucky-birthday-people'
      link.click()
      URL.revokeObjectURL(link.href)

      this.$router.push('/')
    },
  },
}
</script>

<style lang="less">
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px 50px;

  .stepper {
    margin: 20px 0;
  }

  .step {
    flex-grow: 1;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      cursor: pointer;
      flex-grow: 1;
      display: flex;
      align-items: center;
      padding-left: 20px;
      max-width: 25%;

      :first-child {
        margin-right: 10px;
      }

      &:hover {
        opacity: 70%;
      }
    }
  }
}
</style>
