<script setup>
import { ref, onUnmounted } from 'vue'
import SideNavEngineControl from '@/components/SideNavEngineControl.vue'
import TickMarks from '@/components/TickMarks.vue'

const sideNavPosition = ref(1)

function setPosition(position) {

  const positionToId = {
    1: 'segment--what',
    2: 'segment--who',
    3: 'segment--why',
    4: 'segment--how'
  }

  const segment = document.getElementById(positionToId[position])

  segment.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })

}

window.addEventListener('scroll', () => {
  const body = document.body
  const doc = body.parentNode
  const scrollPosition = (body.scrollTop || doc.scrollTop) / (doc.scrollHeight - doc.clientHeight) * 100

  for (let i = 1; i <= 4; i++) {
    const y = 100 * (i - 1) / (4 - 1)
    if (scrollPosition < y + 20 && scrollPosition > y - 20) {
      sideNavPosition.value = i
    }
  }

});

</script>

<template>
  <main>
    <div class="left">
      <TickMarks />
    </div>
    <div class="mid">
      <div id="segment--what" class="segment">
        <p>
          I blend design and technical expertise to craft <span>custom websites</span> that not only
          <span>visually captivate</span> but also drive the <span>ambitions</span> of small
          businesses and <span>creative</span> individuals. I collaborate closely with my clients,
          turning their visions into <span>unique</span> and effective digital creations.
        </p>
      </div>
      <div id="segment--who" class="segment">
        <p>
          Hi, I'm Jernej, a freelance web designer/developer. I’m passionate about the intersection
          of technical graphical design, programming, and the ever-evolving world of digital media.
          Understanding the unique essence of your brand or creative endeavor is at the core of my
          approach.
        </p>
      </div>
      <div id="segment--why" class="segment">
        <p>
          What sets me apart is not just my proficiency in cutting-edge design tools and programming
          languages but my commitment to understanding your vision. I believe in building not just
          websites but digital experiences that resonate with your audience. I'm not just here to
          create a website; I'm here to be a partner in realizing your online aspirations.
        </p>
      </div>
      <div id="segment--how" class="segment">
        <p>
          If you're a small business owner or a creative individual looking to expand their presence
          in the digital landscape, let's collaborate.
        </p>
      </div>
    </div>
    <div class="right">
      <SideNavEngineControl @setPosition="setPosition" :position="sideNavPosition" />
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: row;
}

.segment {
  max-width: 500px;
  margin: 0 auto;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
}

.segment p {
  position: relative;
  letter-spacing: 0.1em;
  line-height: 2rem;
}

.segment p span {
  font-weight: 900;
}

.left,
.right {
  flex: 1;
  min-width: 110px;
}

.mid {
  flex-basis: 1000px;
}

div {
  /* border: 1px solid pink; */
}
</style>
