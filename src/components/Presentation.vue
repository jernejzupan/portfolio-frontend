<script setup>
import { ref, provide, inject, onMounted, onUnmounted } from 'vue'

const showLayout = inject('showLayout')
onMounted(() => {
  showLayout.value = false
})
onUnmounted(() => {
  showLayout.value = true
})

const currentSlide = ref(0)
const slideCount = ref(0)

const registerSlide = () => slideCount.value++
const nextSlide = () => (currentSlide.value = (currentSlide.value + 1) % slideCount.value)
const prevSlide = () =>
  (currentSlide.value = (currentSlide.value - 1 + slideCount.value) % slideCount.value)

provide('registerSlide', registerSlide)
provide('nextSlide', nextSlide)
provide('prevSlide', prevSlide)
provide('slideCount', slideCount)
provide('currentSlide', currentSlide)
</script>

<template>
  <div class="presentation" @keydown.right="nextSlide" @keydown.left="prevSlide" tabindex="0">
    <slot></slot>
  </div>
</template>

<style scoped>
.presentation {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
