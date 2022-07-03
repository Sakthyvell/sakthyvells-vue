<template>
  <blockquote class="blockquote mb-0">
      <p v-html="answer.body"></p>
      <footer v-if="answer.reference" class="blockquote-footer">For extra information refer <a :href="answer.reference" target="_blank"><cite title="Source Title">here</cite></a></footer>
    <hr>
    </blockquote>
</template>

<script>
export default {
    name : "answer-card",
    props : ["answer"],
}
</script>

<style>

</style>