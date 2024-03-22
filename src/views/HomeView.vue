<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="spacer-1"></div>
    <div class="title">
      <h1>Jernej Zupan</h1>
      <h3>Web Design & Development</h3>
    </div>
    <div class="spacer-2"></div>
    <div class="box">
      <h2>WHAT</h2>
      <p>
        I blend design and technical expertise to craft custom websites that not only visually
        captivate but also drive the ambitions of small businesses and creative individuals. I
        collaborate closely with my clients, turning their visions into unique and effective digital
        creations.
      </p>
      <RouterLink to="/showcase">SHOWCASE</RouterLink>
    </div>
    <div class="line"></div>
    <div class="box">
      <h2>WHO</h2>
      <p>
        Hi, I'm Jernej, a freelance web designer/developer. I’m passionate about the intersection of
        technical graphical design, programming, and the ever-evolving world of digital media.
        Understanding the unique essence of your brand or creative endeavor is at the core of my
        approach.
      </p>
      <RouterLink to="/about">ABOUT</RouterLink>
    </div>
    <div class="line"></div>
    <div class="box">
      <h2>WHY</h2>
      <p>
        What sets me apart is not just my proficiency in cutting-edge design tools and programming
        languages but my commitment to understanding your vision. I believe in building not just
        websites but digital experiences that resonate with your audience. I'm not just here to
        create a website; I'm here to be a partner in realizing your online aspirations.
      </p>
    </div>
    <div class="line"></div>
    <div class="box">
      <h2>HOW</h2>
      <p>
        If you're a small business owner or a creative individual looking to expand their presence
        in the digital landscape, let's collaborate.
      </p>
      <RouterLink to="/work-with-me">WORK WITH ME</RouterLink>
    </div>
    <div class="spacer-3"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .spacer-1 {
    height: 15vh;
    width: 100%;

    @media (--mobile-breakpoint) {
      height: 5vh;
    }
  }

  .spacer-2 {
    height: 20vh;
    width: 100%;

    @media (--mobile-breakpoint) {
      height: 15vh;
    }
  }

  .title {
    text-align: center;
    font-weight: 700;

    h1 {
      margin-bottom: 1rem;
    }
  }

  .spacer-3 {
    height: 20vh;
    width: 100%;
  }

  .line {
    width: var(--line-width);
    height: 30vh;
    background-color: var(--color-dark);
  }

  .box {
    --box-padding: 1.2rem;
    --box-width: 300px;

    max-width: calc(var(--box-width) - 2 * var(--box-padding) - 2 * var(--line-width));
    min-height: 100px;
    border: var(--line-width) solid var(--color-dark);

    position: relative;
    padding: var(--box-padding);
    text-align: center;

    p {
      margin-bottom: var(--box-padding);
      font-size: 1.2rem;
    }

    h2 {
      position: absolute;
      top: -4rem;
    }
  }
}
</style>
