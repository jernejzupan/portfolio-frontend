<script setup>
import { computed } from 'vue'

const emit = defineEmits(['toggle'])

const props = defineProps({
  mobileNavCollapsed: Boolean
})

const showX = computed(() => !props.mobileNavCollapsed)

function toggle() {
  emit('toggle')
}
</script>

<template>
  <svg
    @click="toggle"
    class="nav-btn-menu dt-collapsed"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
  >
    <g class="nav-btn-menu-lines">
      <path
        class="line-edge"
        :class="{ 'line-edge-x': showX }"
        d="m45,43H15c-4,0-8-4-8-8v-15c0-5,4-9,8-5l12,12"
      />
      <line class="line-mid" :class="{ 'line-mid-x': showX }" x1="15" y1="30" x2="45" y2="30" />
      <path
        class="line-edge"
        :class="{ 'line-edge-x': showX }"
        d="m15,17h30c4,0,8,4,8,8v15c0,5-4,9-8,5l-12-12"
      />
    </g>
  </svg>
</template>

<style scoped>
.nav-btn-menu {
  height: 60px;
  float: right;
}

.nav-btn-menu-lines {
  stroke: var(--color-dark);
  fill: none;
  stroke-width: 5px;
}

.line-mid {
  transform-origin: 30px 30px;
  transition: 1s;
}

.line-mid-x {
  transform: rotate(-45deg) scaleX(1.42);
}

.line-edge {
  stroke-dasharray: 30px 120px;
  stroke-dashoffset: 0px;
  transition: 1s;
}

.line-edge-x {
  stroke-dashoffset: -70px;
}
</style>
