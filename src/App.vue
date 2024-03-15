<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import NavDial from '@/components/NavDial.vue'
import NavButton from '@/components/NavButton.vue'
import { ref, computed, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()

const navItems = {
  home: { title: 'HOME', to: '/', id: 1 },
  'work-with-me': { title: 'WORK WITH ME', to: '/work-with-me', id: 2 },
  showcase: { title: 'SHOWCASE', to: '/showcase', id: 3 },
  about: { title: 'ABOUT', to: '/about', id: 4 }
}

const dialPosition = ref(1)

const currentRouteName = computed(() => route.name)

onMounted(async () => {
  await router.isReady()
  dialPosition.value = navItems[route.name].id
})

const mobileNavCollapsed = ref(true)

function toggleNav() {
  mobileNavCollapsed.value = !mobileNavCollapsed.value
}

function closeNav() {
  mobileNavCollapsed.value = true
}
</script>

<template>
  <header>
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

  <footer>©2024 by Jernej Zupan</footer>
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
  justify-content: center;
  align-items: center;
}
</style>
