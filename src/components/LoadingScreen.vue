<template>
  <div v-if="visible" class="loading-container">
    <div class="loading-screen">
      <div class="rounded-div-wrap top">
        <div class="rounded-div"></div>
      </div>

      <div class="loading-words">
        <h2
          v-for="(word, i) in words"
          :key="i"
        >
          {{ word }}<div class="dot"></div>
        </h2>
      </div>

      <div class="rounded-div-wrap bottom">
        <div class="rounded-div"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['loaded'])
const visible = ref(true)

const words = [
  'Hello',
  'Halo',
  'Bonjour',
  'Ciao',
  'Olá',
  'Hallo',
  'Welcome',
  'Home',
]

onMounted(() => {
  const els = document.querySelectorAll('.loading-words h2')
  if (!els.length) return

  const tl = gsap.timeline()

  // Show greetings one by one
  words.forEach((_, i) => {
    if (i === 0) {
      tl.set(els[i], { opacity: 1 })
      tl.to(els[i], { opacity: 0, duration: 0.35 }, '+=0.25')
    } else if (i < words.length - 1) {
      tl.set(els[i], { opacity: 1 })
      tl.to(els[i], { opacity: 0, duration: 0.35 }, '+=0.25')
    } else {
      tl.set(els[i], { opacity: 1, delay: 0.3 })
    }
  })

  // Pause on last word, then exit
  tl.to({}, { duration: 0.6 })
  tl.to('.loading-container', {
    yPercent: -100,
    duration: 1.2,
    ease: 'power4.inOut',
    onComplete: () => {
      visible.value = false
      emit('loaded')
    },
  })
})
</script>
