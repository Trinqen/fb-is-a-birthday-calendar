<template>
  <div>
    <div class="container">
      <div class="title">
        <icon-party />
        <h1>Facebook is a birthday calendar</h1>
      </div>
      <p>
        Over the years, Facebook has changed from being a platform to connect
        with your friends to being an overengineered birthday calendar that
        collects your data. After watching The Social Dilemma on Netflix, I
        realized that most of the time I spend on Facebook I use to mindlessly
        scroll through a combination of advertisements and clickbait news
        articles. I also realized that the only thing keeping me from deleting
        Facebook was the birthday reminders for my close friends. Because let's
        face it, who isn't relying on Facebook to tell them other people's
        birthdays? To be able to delete my account, I created this website that
        helps you extract all the birthdays of your friends from Facebook and
        lets you select which ones you want to keep. Nobody needs a reminder for
        the birthday of that one guy you went to summer camp with ten years ago,
        that you haven't heard from since (I'm sorry Paul).
      </p>
      <p>
        This whole thing is free for everyone to use and won't store your data
        in any way or form. <br />
      </p>
      <div>
        <el-button @click="$router.push('getmemybirthdays')" type="primary"
          >Get started</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    IconParty: () => import('~/components/icons/party'),
  },
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0 20%;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    display: flex;
    align-items: center;

    > :first-child {
      margin-right: 10px;
    }
  }

  > *:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
