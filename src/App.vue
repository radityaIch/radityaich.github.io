<template>
  <div id="barba-wrapper" data-barba="wrapper">
    <router-view v-slot="{ Component, route }">
      <transition
        name="page"
        mode="out-in"
        @before-leave="beforeLeave"
        @enter="onEnter"
      >
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useLenis } from './composables/useLenis'

useLenis()

const beforeLeave = () => {
  window.scrollTo(0, 0)
}

const onEnter = () => {
  window.scrollTo(0, 0)
}
</script>

<style>
.page-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
