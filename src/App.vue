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

const currentRouteName = computed(() => route.name)

const dialPosition = ref(1)
const dialPositionsCount = ref(Object.keys(navItems).length)

function setDialPosition(position) {
  dialPosition.value = position;
}

function resetDialPosition() {
  dialPosition.value = navItems[route.name].id;
}

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
    <div class="col-logo">
      <!--img class="logo-jzb" src="/logo-v00.svg" height="60px" alt="" srcset=""-->
    </div>
    <div class="col-nav" :class="{ 'mb-collapsed': mobileNavCollapsed }">
      <nav>
        <div v-for="(item, name) in navItems">
          <RouterLink @mouseover="setDialPosition(item.id)" @mouseout="resetDialPosition()" :to="item.to"
            :class="{ 'text-glow-primary': name === currentRouteName }" :key="item.id">
            {{ item.title }}
          </RouterLink>
        </div>
      </nav>

      <NavDial :count="dialPositionsCount" :position="dialPosition" />
    </div>
    <div class="col-btn">
      <NavButton @toggle="toggle" :mobileNavCollapsed="mobileNavCollapsed" />
    </div>
    <div class="row-spacer"></div>
  </header>

  <RouterView />

  <footer style="height: 200px"></footer>
</template>

<style>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr var(--container-width) 1fr;
  grid-template-areas: 'logo nav btn' 'spacer spacer spacer';

  @media (--tablet-breakpoint) {
    grid-template-columns: 1fr 50px;
    grid-template-areas: 'logo btn' 'nav nav' 'spacer spacer';
  }

  .col-logo {
    background-color: var(--color-light);
    min-height: var(--header-nav-height);
    min-width: 110px;
    grid-area: logo;
  }

  .col-nav {
    background-color: var(--color-light);
    min-height: var(--header-nav-height);
    grid-area: nav;

    nav {
      width: 100%;
      min-height: calc(var(--header-nav-height) - var(--header-dial-height));
      display: flex;
      flex-direction: row;
      align-items: center;

      @media (--tablet-breakpoint) {
        flex-direction: column;
      }

      div {
        flex: 1;
        display: flex;
        justify-content: center;

        a {
          color: var(--color-dark);
          width: 100%;
          font-size: 18px;
          letter-spacing: 0;
          text-align: center;
          text-decoration: none;
          padding: 10px;

          @media (--tablet-breakpoint) {
            padding: 10px 0;
          }
        }
      }
    }
  }

  .col-btn {
    background-color: var(--color-light);
    height: var(--header-nav-height);
    grid-area: btn;
  }

  .row-spacer {
    height: var(--header-spacer-height);
    grid-area: spacer;
  }
}
</style>
