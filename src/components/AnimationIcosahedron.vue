<script setup>
import { computed, ref, reactive } from 'vue'

const icosahedron = {
  vertices: [
    [0.0, -1.0, 0.0],
    [0.7236, -0.447215, 0.52572],
    [-0.276385, -0.447215, 0.85064],
    [-0.894425, -0.447215, 0.0],
    [-0.276385, -0.447215, -0.85064],
    [0.7236, -0.447215, -0.52572],
    [0.276385, 0.447215, 0.85064],
    [-0.7236, 0.447215, 0.52572],
    [-0.7236, 0.447215, -0.52572],
    [0.276385, 0.447215, -0.85064],
    [0.894425, 0.447215, 0.0],
    [0.0, 1.0, 0.0]
  ],
  edges: [
    [12, 10],
    [1, 2],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 2],
    [7, 3],
    [8, 4],
    [9, 5],
    [10, 6],
    [11, 2],
    [12, 7],
    [5, 10],
    [2, 3],
    [7, 8],
    [1, 6],
    [6, 11],
    [4, 9],
    [3, 4],
    [8, 9],
    [11, 7],
    [2, 7],
    [11, 12],
    [4, 5],
    [9, 10],
    [12, 8],
    [3, 8],
    [12, 9],
    [5, 6],
    [10, 11]
  ]
}

const count = 400
let sin_idx = ref(0)
let cos_idx = ref(0 + count / 4)

const sin_array = [...Array(count).keys()].map((i) => Math.sin((i / count) * Math.PI * 2))

setInterval(() => {
  sin_idx.value += 1
  cos_idx.value += 1
  if (sin_idx.value >= count) sin_idx.value = 0
  if (cos_idx.value >= count) cos_idx.value = 0
}, 1000 / 60)

const lines = computed(() =>
  icosahedron.edges.map((edge, index) => {
    const [X, Y, Z] = [0, 1, 2]
    const [v1, v2] = edge

    const p1 = icosahedron.vertices[v1 - 1]
    const p2 = icosahedron.vertices[v2 - 1]

    let sin = sin_array[sin_idx.value]
    let cos = sin_array[cos_idx.value]

    const x1 = 100 * (p1[X] * cos - p1[Z] * sin)
    const y1 = 100 * p1[Y]

    const x2 = 100 * (p2[X] * cos - p2[Z] * sin)
    const y2 = 100 * p2[Y]

    return { x1, y1, x2, y2, key: index }
  })
)
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="-150 -150 300 300">
    <line v-for="{ x1, y1, x2, y2, key } in lines" :key :x1 :y1 :x2 :y2 class="line" />
  </svg>
</template>
<style scoped>
.line {
  stroke-width: var(--line-width);
  stroke: var(--color-dark);
  stroke-linecap: round;
}
</style>
