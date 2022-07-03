<template>
  <div class="card-container" v-if="JSON.parse(question.answers).length">
    <div class="container">
      <div class="card-header" v-html="question.content"></div>
      <div class="card-body">
        <AnswerCard
          :answer="answer"
          v-for="(answer, index) in JSON.parse(question.answers)"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnswerCard from "../components/AnswerCard.vue";

export default {
  name: "question-card",
  props: ["question"],
  components: { AnswerCard },
};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 25px 0;
  .card-header {
    background-color: #8d99ae;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
  }
  .card-body {
    background-color: #edf2f4;
  }
}
</style>