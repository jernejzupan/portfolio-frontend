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
  await router.isReady();
  dialPosition.value = navItems[route.name].id;
})

const mobileNavCollapsed = ref(true)

function toggle() {
  mobileNavCollapsed.value = !mobileNavCollapsed.value;
}

</script>

<template>
  <header>
    <nav>
      <div v-for="(item, name) in navItems">
        <RouterLink :to="item.to" :key="item.id">
          {{ item.title }}
        </RouterLink>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer> ©2024 by Jernej Zupan </footer>
</template>

<style scoped>

header {
  height: var(--header-height);
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;

    width: 800px;

    @media (--tablet-breakpoint) {
      width: 600px;
    }

  }
}

main {
  min-height: calc(100vh - var(--header-height) - var(--footer-height) );
}

footer {
  height: var(--footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
