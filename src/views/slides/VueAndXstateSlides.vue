<script setup>
import { ref } from 'vue'
import Presentation from '@/components/Presentation.vue'
import Slide from '@/components/Slide.vue'
</script>

<template>
  <Presentation>
    <Slide>
      <h1>Vue & xState</h1>
      <img class="qr" src="/qr-code-vue-and-xstate.png" />
    </Slide>

    <Slide>
      <h2>FSM Semaphor</h2>
      <img src="/fsm-semaphor-wh.png" />
      <a href="https://codepen.io/jernejzupan/pen/vEYdxoX?editors=1111" target="_blank">Example</a>
    </Slide>

    <Slide>
      <h2>Regular Expressions</h2>
      <img src="/fsm-regex-wh.png" />
    </Slide>

    <Slide>
      <h2>FSM Semaphor (fewer states)</h2>
      <img src="/fsm-semaphor-2-wh.png" />
      <a href="https://codepen.io/jernejzupan/pen/jEOzELm?editors=0011" target="_blank">Example</a>
    </Slide>

    <Slide>
      <h2>Moore vs. Mealy machines</h2>
      <img src="/fsm-moor-vs-meely-wh.png" />
    </Slide>

    <Slide>
      <h2>Problem with FSM</h2>
      <img src="/fsm-problem-wh.png" />
    </Slide>

    <Slide>
      <h2>Two instances</h2>
      <img src="/fsm-parallel-wh.png" />
    </Slide>

    <Slide>
      <h2>Too many arrows</h2>
      <img src="/fsm-too-many-arrows-wh.png" />
    </Slide>

    <Slide>
      <h2>State charts</h2>
      <img src="/fsm-statechart-wh.png" />
    </Slide>

    <Slide>
      <h2>Libraries</h2>
      <p>Sismic (python)</p>
      <p>Qt (C++, python)</p>
      <p>QP (Embedded C/C++)</p>
      <p>xState (JS)</p>
    </Slide>

    <Slide>
      <h2>MVC</h2>
      <img src="/fsm-mvc-wh.png" />
    </Slide>

    <Slide>
      <h2>Vue + xState ♥️</h2>
      <img src="/fsm-mvc-vue-xstate-wh.png" />
    </Slide>

    <Slide>
      <h2>Thank You!</h2>
      <img class="qr" src="/qr-code-vue-and-xstate.png" />
    </Slide>
  </Presentation>
</template>

<style scoped>
h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
}
h2 {
  font-size: 4rem;
  margin-bottom: 1rem;
}
h3 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
p {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
img {
  width: 100%;
  max-width: 800px;
}

.qr {
  max-width: 300px;
}

a {
  font-size: 2rem;
}
</style>
