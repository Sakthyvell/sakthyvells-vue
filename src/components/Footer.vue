<template>
  <footer class="text-muted">
    <div class="container">
      <router-link class="header" :to="{ name: 'Home' }"
        >sakthyvells</router-link
      >
        <p class="float-right">
          <a href="https://github.com/Sakthyvell" target="_blank"><img :src="require(`../assets/images/github.png`)" class="icons"/></a>
          <a href="https://my.linkedin.com/in/sakthyvell" target="_blank"><img :src="require(`../assets/images/linkedin.png`)" class="icons"/></a>
          <a href="mailto:sakthyvell@outlook.com" target="_blank"><img :src="require(`../assets/images/email.png`)" class="icons"/></a>
        </p>
        
      <div class="footer-desc">
        <p>
          The source code for this site can be found <a href="#">here</a>. Feel
          free to use it. Create an issue if you face any problem.
        </p>
        <div class="icons"></div>
        <p>&copy; Copyright 2022 All Right Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-bar",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #264653;
  padding: 25px 0;

  .header {
    text-align: center;
    padding: 50px 25px;
    font-size: 24px;
    color: #fff;
    margin-bottom: 16px;
    text-decoration: none;
    font-weight: 600;
    @media (min-width: 800px) {
      text-align: initial;
    }
  }

  .container > .footer-desc {
    padding: 25px;
    color: #fff;

    a {
      text-decoration: none;
      color: #fff;
      cursor: pointer;
    }
  }

  .icons {
    width: 40px;
    height: auto;
    filter: invert(100%);
  }
}
</style>