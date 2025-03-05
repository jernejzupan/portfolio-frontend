<script setup>
import FeedbackMachine from '@/components/DemoFeedbackMachine.vue'
</script>

<template>
  <div class="container">
    <div class="spacer-1"></div>
    <FeedbackMachine />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

  .spacer-1 {
    height: 15vh;
    width: 100%;

    @media (--mobile-breakpoint) {
      height: 5vh;
    }
  }
}
</style>
