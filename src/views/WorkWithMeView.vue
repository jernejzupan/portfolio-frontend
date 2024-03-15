<template>
  <div class="container">
    <div class="spacer-1"></div>
    <div class="box no-border">
      <h3>START</h3>
    </div>
    <div class="circle"></div>
    <div class="line"></div>
    <div class="arrow"></div>
    <div class="box">
      <h3>PLAN</h3>
    </div>
    <div class="line"></div>
    <div class="arrow"></div>
    <div class="box">
      <h3>DESIGN</h3>
    </div>
    <div class="line"></div>
    <div class="arrow"></div>
    <div class="box">
      <h3>BUILD</h3>
    </div>
    <div class="line"></div>
    <div class="arrow"></div>
    <div class="box">
      <h3>HANDOVER</h3>
    </div>
    <div class="line"></div>
    <div class="arrow"></div>
    <div class="circle"></div>
    <div class="box no-border">
      <h3>NEW PAGE</h3>
    </div>
    <div class="spacer-2"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .spacer-1 {
    height: 10vh;
    width: 100%;
  }

  .spacer-2 {
    height: 45vh;
    width: 100%;
  }

  .circle {
    --circle-size: 24px;
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: var(--circle-size);
    border: var(--line-width) solid var(--color-dark);
  }

  .line {
    width: var(--line-width);
    height: 32px;
    background-color: var(--color-dark);
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid var(--color-dark);
  }

  .box {
    --box-padding: 0.8rem;
    --box-width: 250px;

    width: calc(var(--box-width) - 2 * var(--box-padding) - 2 * var(--line-width));
    border: var(--line-width) solid var(--color-dark);

    padding: var(--box-padding);
    text-align: center;

    p {
      margin-bottom: var(--box-padding);
      font-size: 1.2rem;
    }
  }

  .no-border {
    border: none;
  }
}
</style>
