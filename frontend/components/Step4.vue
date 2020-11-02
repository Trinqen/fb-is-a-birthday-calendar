<template>
  <div class="birthdays">
    <h3>
      {{
        isTypeSelect
          ? 'Select your best friends'
          : "Remove all friends you don't want reminders for"
      }}
    </h3>
    <div class="tables">
      <div>
        <h4>
          {{
            isTypeSelect
              ? `${deletedBirthdays.length} people will be removed`
              : `${selectedBirthdays.length} people will be selected`
          }}
        </h4>
        <el-table
          :data="isTypeSelect ? deletedBirthdays : selectedBirthdays"
          height="350"
        >
          <el-table-column prop="birthdayPerson" label="Name" :min-width="50">
          </el-table-column>
          <el-table-column prop="date" label="Date" :min-width="30">
          </el-table-column>
          <el-table-column align="right" fixed="right" :min-width="20">
            <template slot-scope="scope">
              <el-button
                v-if="isTypeSelect"
                plain
                size="mini"
                type="success"
                @click="handleSelect(scope.$index)"
                >Select</el-button
              >
              <el-button
                v-else
                plain
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <h4>
          {{
            isTypeSelect
              ? `${selectedBirthdays.length} people will be selected`
              : `${deletedBirthdays.length} people will be removed`
          }}
        </h4>
        <el-table
          :data="isTypeSelect ? selectedBirthdays : deletedBirthdays"
          height="350"
        >
          <el-table-column prop="birthdayPerson" label="Name" :min-width="45">
          </el-table-column>
          <el-table-column prop="date" label="Date" :min-width="25">
          </el-table-column>
          <el-table-column align="right" fixed="right" :min-width="30">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                @click="
                  isTypeSelect
                    ? handleDelete(scope.$index)
                    : handleSelect(scope.$index)
                "
                >Undo</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectionType: String,
    selectedBirthdays: Array,
    deletedBirthdays: Array,
  },
  computed: {
    isTypeSelect() {
      return this.selectionType === 'select'
    },
  },
  methods: {
    handleDelete(index) {
      this.$emit('delete-selected', index)
    },
    handleSelect(index) {
      this.$emit('select-deleted', index)
    },
  },
}
</script>

<style lang="less">
.birthdays {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h3,
  h4 {
    margin-bottom: 10px;
    text-align: center;
  }

  .tables {
    width: 80%;
    display: flex;

    > div {
      flex-grow: 1;
      padding: 0 10px;
    }
  }
}
</style>
