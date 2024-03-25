<script setup>
function open(url) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="container">
    <h1>Projects</h1>

    <div class="row">
      <div class="box clickable" @click="open('https://www.spelablenkus.com/')">
        <img src="/spela-blenkus-400-560.png" />
        <h5>Špela Blenkuš</h5>
      </div>
      <div class="box clickable" @click="open('https://www.helenefeldbauer.com/')">
        <img src="/helene-feldbauer-400-560.png" />
        <h5>Helene Feldbauer</h5>
      </div>
      <div class="box clickable" @click="open('https://www.feldenkrais.si/')">
        <img src="/feldenkrais-slovenia-400-560.png" />
        <h5>Feldenkrais Slovenia</h5>
      </div>
    </div>

    <h1>Gallery</h1>

    <div class="row">
      <div class="box">
        <video src="/light-house-lowres-v01.mp4" autoplay muted loop></video>
      </div>
      <div class="box">
        <img src="/sunrise-bohinj-lowres-v00.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/tractor-stuck-in-mud-lowres-v00.jpg" alt="" />
      </div>
      <div class="box">
        <video src="/romania-bridge-timelaps-lowres-v00.mp4" autoplay muted loop></video>
      </div>
      <div class="box">
        <video src="/water-fork-square-lowres-v01.mp4" autoplay muted loop></video>
      </div>
      <div class="box">
        <video src="/water-mill-lowres-v04.mp4" autoplay muted loop></video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .row {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    margin-top: 32px;
    margin-bottom: 64px;

    @media (--tablet-breakpoint) {
      width: 650px;
    }

    @media (--mobile-breakpoint) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .clickable {
      cursor: pointer;
    }

    .box {
      display: flex;
      flex-direction: column;
      align-items: left;
      margin: 8px 0;

      width: 30%;

      @media (--mobile-breakpoint) {
        width: 90%;
        max-width: 320px;
      }

      h5 {
        margin: 1rem 0.2rem;
        text-align: center;
      }

      img,
      video {
        width: calc(100% - 2 * var(--line-width));
        border: var(--line-width) solid var(--color-dark);
      }
    }
  }
}
</style>
