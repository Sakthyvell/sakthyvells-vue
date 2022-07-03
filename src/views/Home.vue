<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in posts.slice(0, 2)"
      :key="index"
    />
    <div class="blog-card-container">
      <div class="container">
        <div class="blog-card-wrap">
          <h3>View More Recent Blog Posts</h3>
          <div class="blog-cards">
            <div class="row">
              <BlogCard
                size="col-sm-6"
                :post="post"
                v-for="(post, index) in posts.slice(0, 4)"
                :key="index"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="container">
        <h2>hit me up for a chat!</h2>
        <a href="mailto:sakthyvell@outlook.com">
          <Button title="Get in touch" customclass="btn-lg btn-dark" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Button from "../components/generics/Button.vue";

import axios from "axios";

export default {
  name: "Home-Page",
  components: { BlogPost, BlogCard, Button },
  data() {
    return {
      welcomeScreen: {
        title: "Hi ! I am Sakthyvell",
        blogPost:
          "I type for a living ...",
        welcomeScreen: true,
        photo: "logo",
      },
      posts: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;

      Promise.all([this.loadPosts()])
        .then((values) => {
          values[0] = this.posts;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async loadPosts() {
      axios
        .get(`${this.apiRoute.blogUrl}blog`)
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

.contact {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
