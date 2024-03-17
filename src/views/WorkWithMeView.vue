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
      <h3>CONTACT</h3>
      <form action="https://formspree.io/f/xyyrdkob" method="POST">
        <label>
          Email:
        </label>
        <input type="email" name="email" />
        <label>
          Message:
        </label>
        <textarea name="message"></textarea>
        <!-- your other form fields go here -->
        <button type="submit">SEND</button>
      </form>
    </div>
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
    --box-padding: 16px;
    --box-width: 300px;

    width: calc(var(--box-width) - 2 * var(--box-padding) - 2 * var(--line-width));
    border: var(--line-width) solid var(--color-dark);

    padding: var(--box-padding);
    text-align: center;


    form {
      margin-top: 16px;

      * {
        width: calc(100% - 48px);
        margin: 16px auto;
      }

      input {
        border: var(--line-width) solid var(--color-dark);
        padding: 8px;
      }

      textarea {
        border: var(--line-width) solid var(--color-dark);
        padding: 8px;
        min-height: 64px;
        resize: vertical;
      }

      button {
        border: none;
        padding: 8px 16px;
        font-size: 24px;
        width: calc(100% - 24px);
        background-color: var(--color-dark);
        color: var(--color-light);
        cursor: pointer;
      }

    }

  }

  .no-border {
    border: none;
  }
}
</style>
