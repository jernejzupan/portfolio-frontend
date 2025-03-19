<script setup>
import { ref, provide, inject, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showLayout = inject('showLayout')
const currentSlide = ref(0)
const slideCount = ref(0)

onMounted(() => {
  showLayout.value = false

  const slideFromUrl = parseInt(route.query.slide, 10)
  if (!isNaN(slideFromUrl) && slideFromUrl >= 0 && slideFromUrl < slideCount.value) {
    currentSlide.value = slideFromUrl
  }
})
onUnmounted(() => {
  showLayout.value = true
})

watch(currentSlide, (newIndex) => {
  router.replace({ query: { slide: newIndex } })
})

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
