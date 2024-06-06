<template>
  <div class="container">
    <div class="row-1">
      <img src="/profile-pic-square.jpg" alt="" />
      <div>
        <h1>Hi, my name is Jernej</h1>
      </div>
    </div>
    <div class="row-2">
      <p>
        I've always had a great interest in animation and graphics, particularly the kind of stuff
        where math is used to create the resulting image, such as 3D and vector graphics.
        <br /><br />
        I studied electrical engineering and later a bit of computer science. I'm an embedded
        systems engineer turned web developer.
        <br /><br />
        My other passions and hobbies are drawing, making music, surfing, hiking, climbing,
        traveling, playing football, and tinkering with electronics.
      </p>
    </div>
    <div class="row-3">
      <h2>Work Experience</h2>
      <div>
        <h6>Frelance Web-Designer/Developer</h6>
        <p>Feb 2022 - Present</p>
        <p>
          spelablenkus.com <br />
          helenefeldbauer.com <br />
          feldenkrais.si
        </p>
      </div>
      <div>
        <h6>Field Application Engineer</h6>
        <p>Nov 2016 - Feb 2021</p>
        <p>Vector Austria GmbH</p>
        <p>Automotive software</p>
      </div>
      <div>
        <h6>Hardware/Software Engineer</h6>
        <p>Oct 2015 - Jul 2016</p>
        <p>Iskra, d.d.</p>
        <p>Energetics and transport</p>
      </div>
    </div>
    <div class="row-3">
      <h2>Education</h2>
      <div>
        <h6>University of Vienna, Faculty of Computer Science</h6>
        <p>2021 - 2022 Master, Computer Science (Bildungskarenz)</p>
      </div>
      <div>
        <h6>University of Ljubljana, Faculty of Electrical Engineering</h6>
        <p>2012 - 2016 Master’s degree, Electronics</p>
        <p>2008 - 2012 Bachelor’s degree, Electronics</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  --column-width: 800px;

  @media (--tablet-breakpoint) {
    --column-width: 600px;
  }

  width: var(--column-width);

  @media (--mobile-breakpoint) {
    width: 90%;
  }

  .row-1 {
    margin: 32px 0;
    max-width: var(--column-width);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (--mobile-breakpoint) {
      flex-direction: column;
    }

    img {
      height: calc(0.5 * var(--column-width));
    }

    div {
      display: flex;
      align-items: center;

      h1 {
        text-align: center;
        font-size: 4rem;
        padding: 1rem;
      }
    }
  }

  .row-2 {
    margin: 32px 0;
    width: 100%;
  }

  .row-3 {
    margin: 32px 0;
    width: 100%;

    div {
      h6 {
        padding-bottom: 0.4rem;
        font-weight: 700;
      }

      border-left: var(--line-width) solid var(--color-dark);
      padding-left: 1rem;
      margin-top: 1rem;
    }
  }
}
</style>
