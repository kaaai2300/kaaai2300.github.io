<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'body',
    style: 'margin: 0;'
  },
})
</script>
<style>
/* html,body, #__nuxt, #__layout{
  height:100%!important;
  width: 100%!important;
} */
</style>