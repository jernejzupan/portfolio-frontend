<script setup>
import { computed, ref, reactive } from 'vue'

function mmm(m1, m2, out) {
  out[0][0] = m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0]
  out[0][1] = m1[0][0] * m2[0][1] + m1[0][1] * m2[1][1]
  out[1][0] = m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0]
  out[1][1] = m1[1][0] * m2[0][1] + m1[1][1] * m2[1][1]
  return out
}

function mvm(m, v, out) {
  out[0] = m[0][0] * v[0] + m[0][1] * v[1]
  out[1] = m[1][0] * v[0] + m[1][1] * v[1]
  return out
}

function diamond() {
  const [X, Y, Z] = [0, 1, 2]
  const [a, b, c, d, e] = [1.0, 2.0, 1.5, 0.5, -1.5]

  let vertices = []
  for (let i = 0; i <= 13; i++) vertices.push(0)

  const rot30 = [
    [0.5 * Math.sqrt(3), -0.5],
    [0.5, 0.5 * Math.sqrt(3)]
  ]

  let rot = [
    [1.0, 0.0],
    [0.0, 1.0]
  ]

  // generate diamond vertices
  for (let i = 0; i < 6; i++) {
    vertices[i] = mvm(rot, [a, 0], [0, 0, c])
    rot = mmm(rot, rot30, [
      [0, 0],
      [0, 0]
    ])
    vertices[i + 6] = mvm(rot, [b, 0], [0, 0, d])
    rot = mmm(rot, rot30, [
      [0, 0],
      [0, 0]
    ])
  }
  vertices[12] = [0, 0, e]

  let edges = [
    // hexagon A
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 1],
    // A to B connections
    [1, 7],
    [2, 7],
    [2, 8],
    [3, 8],
    [3, 9],
    [4, 9],
    [4, 10],
    [5, 10],
    [5, 11],
    [6, 11],
    [6, 12],
    [1, 12],
    // hexagon B
    [7, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [12, 7],
    // B to bottom
    [7, 13],
    [8, 13],
    [9, 13],
    [10, 13],
    [11, 13],
    [12, 13]
  ]

  return { vertices, edges }
}

const object = diamond()

const count = 1200
let sin_idx = ref(0)
let cos_idx = ref(0 + count / 4)

const sin_array = [...Array(count).keys()].map((i) => Math.sin((i / count) * Math.PI * 2))

let fi = (-15 * Math.PI) / 180
let siny = Math.sin(fi)
let cosy = Math.cos(fi)

setInterval(() => {
  sin_idx.value += 1
  cos_idx.value += 1
  if (sin_idx.value >= count) sin_idx.value = 0
  if (cos_idx.value >= count) cos_idx.value = 0
}, 1000 / 60)

const lines = computed(() =>
  object.edges.map((edge, index) => {
    let scale = 60
    const [X, Y, Z] = [0, 1, 2]
    const [v1, v2] = edge

    const p1 = object.vertices[v1 - 1]
    const p2 = [0, 0, 0]
    const p3 = [0, 0, 0]
    const p4 = object.vertices[v2 - 1]
    const p5 = [0, 0, 0]
    const p6 = [0, 0, 0]

    let sinz = sin_array[sin_idx.value]
    let cosz = sin_array[cos_idx.value]

    // rotate edge start point in xy plane
    p2[X] = p1[X] * cosz - p1[Y] * sinz
    p2[Y] = p1[X] * sinz + p1[Y] * cosz
    p2[Z] = p1[Z]

    // rotate edge start point in xz plane
    p3[X] = p2[X] * cosy - p2[Z] * siny
    p3[Y] = p2[Y]
    p3[Z] = p2[X] * siny + p2[Z] * cosy

    // rotate end start point in xz plane
    p5[X] = p4[X] * cosz - p4[Y] * sinz
    p5[Y] = p4[X] * sinz + p4[Y] * cosz
    p5[Z] = p4[Z]

    // rotate end start point in xz plane
    p6[X] = p5[X] * cosy - p5[Z] * siny
    p6[Y] = p5[Y]
    p6[Z] = p5[X] * siny + p5[Z] * cosy

    // project and scale onto 2D plane
    let x1 = scale * p3[Y]
    let y1 = -scale * p3[Z]
    let x2 = scale * p6[Y]
    let y2 = -scale * p6[Z]

    // calculate line width
    let width = (p6[X] + p3[X]) / 3 + 3

    return { x1, y1, x2, y2, width, key: index }
  })
)
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="-150 -150 300 300">
    <line
      v-for="{ x1, y1, x2, y2, width, key } in lines"
      :key
      :x1
      :y1
      :x2
      :y2
      :stroke-width="width"
      class="line"
    />
  </svg>
</template>
<style scoped>
.line {
  stroke: var(--color-dark);
  stroke-linecap: round;
}
</style>
