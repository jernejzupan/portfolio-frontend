<script setup>
import { computed } from 'vue'

const props = defineProps({
  count: Number,
  position: Number
})

const offset = computed(() => {
  return `calc(${((props.position - 0.5) * 100) / props.count}% - 10px)`
})
</script>

<template>
  <div class="dial mb-collapsed">
    <svg class="pointer" :style="{ left: offset }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
      <polygon points="0 10 10 10 5 0 0 10" />
    </svg>
  </div>
</template>

<style scoped>
.dial {
  background-color: var(--color-light);
  height: calc(var(--header-dial-height) - var(--line-width));
  border-top: var(--line-width) solid var(--color-dark);
  pointer-events: none;
}

.dial .pointer {
  height: 20px;
  position: relative;
  top: -20px;
  transition: 0.5s;
  fill: var(--color-primary);
}
</style>
