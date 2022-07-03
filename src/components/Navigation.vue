<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        >sakthyvells</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'Blog' }"
              >Blog</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'QnA' }"
              >Q&amp;A</router-link
            >
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              MORE
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="nav-link" :to="{ name: 'Home' }"
              >Home</router-link
            >
              <a class="dropdown-item" v-for="(cat, index) in category" :key="index"/>
              <a class="dropdown-item" href="#">Deep Learning</a>
            </div>
          </li> -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";

export default {
  name: "nav-bar",
  components: {},
  data() {
    return {
      category: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;

      Promise.all([this.loadCategories()])
        .then((values) => {
          values[0] = this.category;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async loadCategories() {
      axios
        .get(`${this.apiRoute.blogUrl}category`)
        .then((response) => (this.posts = response.data));
      return this.posts;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding: 1.5rem 1rem;
  font-weight: 700;
}
</style>