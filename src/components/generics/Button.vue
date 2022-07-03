<template>
    <button type="button" :class="customclass">{{title}}</button>
</template>

<script>
export default {
     name : 'normal-btn',
     props : {
         title : String,
         customclass : String,
     },
}
</script>

<style scoped>

</style>