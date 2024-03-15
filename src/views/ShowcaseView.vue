<template>
  <div class="container">
    <h1>Projects</h1>

    <div class="row">
      <div class="box">
        <div class="image" style="background-image: url(./spela-blenkus-400.png);"></div>
        <h5>Špela Blenkuš</h5>
      </div>
      <div class="box">
        <div class="image" style="background-image: url(./helene-feldbauer-400.png);"></div>
        <h5>Helene Feldbauer</h5>
      </div>
      <div class="box">
        <div class="image" style="background-image: url(./feldenkrais-slovenia-400.png);"></div>
        <h5>Feldenkrais Slovenia</h5>
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
  }

  .box {
    width: 200px;
    

    display: flex;
    flex-direction: column;
    align-items: center;

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
}
</style>
