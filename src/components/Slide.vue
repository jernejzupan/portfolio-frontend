<script setup>
import { ref, inject } from 'vue'
import { RouterLink } from 'vue-router'

const registerSlide = inject('registerSlide')
const nextSlide = inject('nextSlide')
const prevSlide = inject('prevSlide')
const slideCount = inject('slideCount')
const currentSlide = inject('currentSlide')
const slideIndex = ref(registerSlide())
</script>

<template>
  <div v-show="currentSlide === slideIndex" class="slide">
    <slot></slot>

    <!-- Navigation menu -->
    <div class="nav-menu">
      <span><RouterLink to="/" style="margin-right: 20px">HOME</RouterLink></span>
      <button @click="prevSlide">◀</button>
      <span>{{ currentSlide + 1 }} / {{ slideCount }}</span>
      <button @click="nextSlide">▶</button>
    </div>
  </div>
</template>

<style scoped>
.slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.nav-menu {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
}

.nav-menu button {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
}

.nav-menu button:hover {
  color: var(--color-primary);
}
</style>
