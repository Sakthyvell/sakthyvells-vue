<template>
  <div class="qna-container">
    <div class="container">
      <div class="qna-wrap">
        <div class="qna-heading">
          <h3>Questions &amp; Answers</h3>
        </div>
        <div class="searchbar">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                id="formGroupExampleInput"
                placeholder="Search for Questions ..."
                v-model="search"
              />
            </div>
          </form>
        </div>
        <div class="qna-cards">
          <QuestionCard
            :question="question"
            v-for="(question, index) in filteredQnA"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from "../components/QuestionCard.vue";

import axios from "axios";

export default {
  name: "q-n-a",
  components: { QuestionCard },
  data() {
    return {
      questions: [],
      search: "",
      timeout: null,
      filterquestions: [],
    };
  },
  computed : {
      filteredQnA(){
        return this.questions.filter((question) =>{
          return question.content.match(this.search);
        });
      }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;

      Promise.all([this.getQuestions(this.search)])
        .then((values) => {
          this.questions = values[0];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    
    async getQuestions(term) {
      return axios
        .get(`${this.apiRoute.blogUrl}qna/?search=${term}`)
        .then((response) => (response.data));
    },

  },
};
</script>

<style lang="scss" scoped>
.qna-container {
  .container {
    .qna-wrap {
      .qna-heading {
        h3 {
          padding: 25px 0;
          text-align: center;
        }
      }
    }
  }
}
</style>