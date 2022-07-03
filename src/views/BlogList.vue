<template>
  <div class="blog-card-container">
    <div class="container">
      <div class="blog-card-wrap">
        <h3>All Blog Posts</h3>
        <div class="searchbar">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                id="formGroupExampleInput"
                placeholder="Search for Blogs ..."
                v-model="search"
              />
            </div>
          </form>
        </div>
        <div class="blog-cards">
          <div class="row">
            <BlogCard
              :post="post"
              size="col-sm-4"
              v-for="(post, index) in filteredPosts"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";

import axios from "axios";

export default {
  name: "Blog-List",
  components: { BlogCard },
  data() {
    return {
      posts: [],
      search: '',
    };
  },
  computed: {
    filteredPosts(){
      return this.posts.filter((post) =>{
          return post.content.match(this.search);
        });
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;

      Promise.all([this.getPosts()])
        .then((values) => {
           this.posts = values[0];
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getPosts() {
      axios
        .get(`${this.apiRoute.blogUrl}blog/`)
        .then((response) => (this.posts = response.data));
      return this.posts;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-container {
  background-color: #f1faee;
  padding: 50px 0;

  .blog-card-wrap {
    padding: 25px 25px;

    h3 {
      justify-content: center;
    }
  }
}
</style>