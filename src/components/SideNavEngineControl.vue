<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['setPosition'])

const props = defineProps({
  position: Number
})

function setPosition(position) {
  emit('setPosition', position)
}

const rotation = computed(() => `rotate(${67.5 - (props.position - 1) * 45}deg)`)
const translation = computed(() => `translate(0px, ${(props.position - 1) * 50}px)`)
</script>

<template>
  <div class="ec-box mb-collapsed">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 400">
      <!--rect class="cls-7" width="340" height="370" /-->
      <circle class="ec-line" cx="210" cy="190" r="120" />
      <circle class="ec-line" cx="210" cy="190" r="40" />
      <line class="ec-line" x1="125" y1="105" x2="182" y2="162" />
      <line class="ec-line" x1="170" y1="190" x2="90" y2="190" />
      <line class="ec-line" x1="182" y1="218" x2="125" y2="275" />
      <text class="ec-text" transform="translate(162 90) rotate(67.5)">
        <tspan @click="setPosition(1)">WHAT</tspan>
      </text>
      <text class="ec-text" transform="translate(110 155) rotate(22.5)">
        <tspan @click="setPosition(2)" data-link="#segment--who">WHO</tspan>
      </text>
      <text class="ec-text" transform="translate(120 235) rotate(-22.5)">
        <tspan @click="setPosition(3)" data-link="#segment--why">WHY</tspan>
      </text>
      <text class="ec-text" transform="translate(175 290) rotate(-67.5)">
        <tspan @click="setPosition(4)" data-link="#segment--how">HOW</tspan>
      </text>
      <path
        :style="{ transform: rotation }"
        class="ec-leaver"
        d="m89,158l-16,24-8-8-8,8-35,4-5-4-7,8,8,8,4-4,35,4,8,8,8-8,16,24,138-23v-18l-138-23Zm72,44l-65,4-3-13,4-3-4-3,3-13,65,4-3,12,3,12Z"
      />
      <!--rect class="ec-line" x="210" y="50" width="120" height="280" /-->
    </svg>
  </div>

  <div class="ec-box dt-collapsed">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 250">
      <!--rect class="cls-5" x="0" width="90" height="250"/-->
      <rect class="ec-line" x="10" y="4" width="80" height="240" />
      <text class="ec-text" transform="translate(32 67) rotate(-45)">
        <tspan @click="setPosition(1)">WHO</tspan>
      </text>
      <text class="ec-text" transform="translate(30 120) rotate(-45)">
        <tspan @click="setPosition(2)">WHAT</tspan>
      </text>
      <text class="ec-text" transform="translate(34 166) rotate(-45)">
        <tspan @click="setPosition(3)">WHY</tspan>
      </text>
      <text class="ec-text" transform="translate(32 218) rotate(-45)">
        <tspan @click="setPosition(4)">HOW</tspan>
      </text>
      <path
        :style="{ transform: translation }"
        class="ec-leaver"
        d="M4,8v72h86V8H4ZM32,76l-10-6,2-4-4,2-6-10L58,14l8,10,10,8-44,44Z"
      />
    </svg>
  </div>
</template>

<style scoped>
.ec-box {
  position: fixed;
  right: 0;
  width: 200px;

  @media (--tablet-breakpoint) {
    width: 80px;
  }
}

.ec-text {
  font-family: Roboto;
  font-size: 18px;
  fill: var(--color-primary);
  cursor: pointer;
}

.ec-line {
  fill: var(--color-light);
  stroke-width: var(--line-width);
  stroke: var(--color-dark);
}

.ec-leaver {
  fill: var(--color-dark);
  transform-origin: 210px 190px;
  transition: 1s;
  pointer-events: none;
}
</style>
