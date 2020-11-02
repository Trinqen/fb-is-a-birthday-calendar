<template>
  <div>
    <Nuxt />
    <div class="fixed">
      <el-button type="text" size="mini" @click="githubButtonClicked"
        ><icon-pasta height="12" width="14" /> Look at the spaghetti
        code</el-button
      >
      <div @mouseover="hover = true" @mouseleave="hover = false">
        <el-button
          type="text"
          size="mini"
          @click="coffeeButtonClicked"
          class="covfefe-button"
          ><icon-covfefe v-if="!hover" height="14" width="14" />
          <img
            v-else
            src="~/static/mr-covfefe.png"
            alt="Mr cofveve"
            class="mr-covfefe"
          />
          Get me a covfefe</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    IconCovfefe: () => import('~/components/icons/coffee'),
    IconPasta: () => import('~/components/icons/pasta'),
  },
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    coffeeButtonClicked() {
      window.open('https://ko-fi.com/trinqen', '_blank')
    },
    githubButtonClicked() {
      window.open(
        'https://github.com/Trinqen/fb-is-a-birthday-calendar',
        '_blank'
      )
    },
  },
}
</script>

<style lang="less">
html {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ebf2ff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.fixed {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  right: 0;
  padding: 10px;

  > div {
    margin-left: 10px;
  }

  .mr-covfefe {
    width: 14px;
    height: 14px;
  }
}
</style>
