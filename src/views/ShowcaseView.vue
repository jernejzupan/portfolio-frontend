<script setup>
function open(url) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="container">
    <h1>Projects</h1>

    <div class="row1">
      <div class="box" @click="open('https://www.spelablenkus.com/')">
        <div class="image" style="background-image: url(/spela-blenkus-400.png)"></div>
        <h5>Špela Blenkuš</h5>
      </div>
      <div class="box" @click="open('https://www.helenefeldbauer.com/')">
        <div class="image" style="background-image: url(/helene-feldbauer-400.png)"></div>
        <h5>Helene Feldbauer</h5>
      </div>
      <div class="box" @click="open('https://www.feldenkrais.si/')">
        <div class="image" style="background-image: url(/feldenkrais-slovenia-400.png)"></div>
        <h5>Feldenkrais Slovenia</h5>
      </div>
    </div>

    <h1>Graphics</h1>

    <div class="row2">
      <div class="box">
        <video src="/light-house-v00.mp4" autoplay muted loop></video>
      </div>
      <div class="box">
        <img src="/sunrise-bohinj-v01.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/tractor-stuck-in-mud-v00.jpg" alt="" />
      </div>
      <div class="box">
        <video src="/romania-bridge-timelaps-v01.mp4" autoplay muted loop></video>
      </div>
      <div class="box">
        <video src="/water-fork-square-v02.mp4" autoplay muted loop></video>
      </div>
      <div class="box">
        <video src="/water-mill-v04.mp4" autoplay muted loop></video>
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

  .row1 {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;

    @media (--tablet-breakpoint) {
      width: 650px;
    }

    @media (--mobile-breakpoint) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  .box {
    width: 200px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 0;

    .image {
      width: 200px;
      height: 280px;
      background-size: cover;
      border: var(--line-width) solid var(--color-dark);
    }

    h5 {
      margin: 1rem 0.2rem;
      text-align: center;
    }
  }

  .row2 {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    margin-top: 32px;

    @media (--tablet-breakpoint) {
      width: 650px;
    }

    @media (--mobile-breakpoint) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .box {
      --box-size: 250px;

      @media (--tablet-breakpoint) {
        --box-size: 200px;
      }

      width: var(--box-size);
      cursor: pointer;

      display: flex;
      flex-direction: column;
      align-items: left;
      margin: 8px 0;

      border: var(--line-width) solid var(--color-dark);

      img {
        width: var(--box-size);
        height: var(--box-size);
      }

      video {
        width: var(--box-size);
        height: var(--box-size);
      }
    }
  }
}
</style>
