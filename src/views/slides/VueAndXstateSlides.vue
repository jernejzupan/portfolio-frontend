<script setup>
import { ref } from 'vue'
import Presentation from '@/components/Presentation.vue'
import Slide from '@/components/Slide.vue'
</script>

<template>
  <Presentation>
    <Slide>
      <h1>Vue & xState</h1>
    </Slide>
    <Slide>
      <h2>Finite State Machines</h2>
      <img src="/fsm-semaphor-wh.png" />
    </Slide>
    <Slide>Final slide. Thanks for watching!</Slide>
  </Presentation>
</template>

<style scoped>
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
img {
  max-width: 350px;
}
</style>
