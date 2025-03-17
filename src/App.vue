<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { ref, provide } from 'vue'

import NavButton from '@/components/NavButton.vue'

import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'

const router = useRouter()
const route = useRoute()
const showLayout = ref(true)
provide('showLayout', showLayout)

const navItems = {
  home: { title: 'HOME', to: '/', id: 1 },
  'work-with-me': { title: 'WORK WITH ME', to: '/work-with-me', id: 2 },
  showcase: { title: 'SHOWCASE', to: '/showcase', id: 3 },
  about: { title: 'ABOUT', to: '/about', id: 4 }
}

const mobileNavCollapsed = ref(true)

function toggleNav() {
  mobileNavCollapsed.value = !mobileNavCollapsed.value
}

function closeNav() {
  mobileNavCollapsed.value = true
}
</script>

<template>
  <header v-if="showLayout">
    <div class="btn">
      <NavButton @toggle="toggleNav" :mobileNavCollapsed="mobileNavCollapsed" />
    </div>
    <nav :class="{ 'mb-collapsed': mobileNavCollapsed }">
      <div v-for="(item, name) in navItems">
        <RouterLink @click="closeNav" :to="item.to" :key="item.id">
          {{ item.title }}
        </RouterLink>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer v-if="showLayout">
    <div class="social">
      <a href="https://www.instagram.com/jernejzupan90/" target="_blank">
        <IconInstagram />
      </a>
      <a href="https://github.com/jernejzupan/" target="_blank">
        <IconGithub />
      </a>
      <a href="https://www.linkedin.com/in/jernej-zupan-b587a9129/" target="_blank">
        <IconLinkedin />
      </a>
    </div>
    <div>©2025 by Jernej Zupan</div>
  </footer>
</template>

<style scoped>
.mb-collapsed {
  @media (--mobile-breakpoint) {
    display: none;
  }
}

header {
  min-height: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btn {
    display: none;

    @media (--mobile-breakpoint) {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;

    width: 800px;

    @media (--tablet-breakpoint) {
      width: 600px;
    }

    @media (--mobile-breakpoint) {
      flex-direction: column;
      height: 100vh;
      justify-content: start;
      align-items: center;
    }

    div {
      display: flex;
      margin: 1rem;

      a {
        color: var(--color-dark);

        &:hover {
          color: var(--color-secondary);
        }

        @media (--mobile-breakpoint) {
          font-size: 2rem;
        }
      }
    }
  }
}

main {
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}

footer {
  height: var(--footer-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social {
    display: flex;
    margin-bottom: 0.5 rem;
  }

  a {
    display: block;
    padding: 4px;

    svg {
      fill: var(--color-dark);

      &:hover {
        fill: var(--color-secondary);
      }
    }
  }
}
</style>
