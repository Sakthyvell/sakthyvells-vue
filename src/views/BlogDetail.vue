<template>
  <div class="container">
    <div class="title">
      <h3 class="title-wording">{{ post.title }}</h3>
      <p class="title-detail">
        <span v-if="post.author == ''">By {{ post.author }}</span>| Updated on {{ post.date }}
      </p>
      <hr>
    </div>
    <div class="content" v-html="post.body"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "blog-detail",
  data() {
    return {
      blogSlug: this.$route.params.slug,
      post: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;

      Promise.all([this.getPost(this.blogSlug)])
        .then((values) => {
          values[0] = this.post;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getPost(slug) {
      axios
        .get(`${this.apiRoute.blogUrl}blog/${slug}`)
        .then((response) => (this.post = response.data));
      return this.post;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 5rem 0;
  .title {
    .title-detail {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 24px;
    }
  }
}

.content {
  padding: 50px 0;
}
</style>