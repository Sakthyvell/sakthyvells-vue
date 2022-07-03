<template>
  <div :class="size">
    <div class="card">
      <img :src="post.cover_photo" class="card-img-top" alt="Testing" />
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <p class="card-text">
          Updated on {{post.date}}
        </p>
         <router-link class="link" :to="{ name: 'BlogDetail', params: {slug:post.slug} }">
          <Button class='href-btn' title="Read more" customclass="btn btn-dark"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from  "../components/generics/Button.vue";

export default {
  name: "blog-card",
  props: ["post", "size"],
  components: {Button,},
};
</script>

<style lang="scss" scoped>
.card {
  margin: 25px 0;

  .card-img-top{
    width: auto;
    height: 500px;
  }
}
</style>