<template>
  <section class="section horizontal-items">
    <div class="container">
      <!-- Row 1 — scrolls left -->
      <div class="horizontal-row" ref="row1" style="margin-bottom: 24px;">
        <div class="horizontal-single-item" v-for="(img, i) in row1Images" :key="'r1-' + i">
          <div class="overlay" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
        </div>
      </div>
      <!-- Row 2 — scrolls right -->
      <div class="horizontal-row" ref="row2">
        <div class="horizontal-single-item" v-for="(img, i) in row2Images" :key="'r2-' + i">
          <div class="overlay" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const row1Images = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop',
]

const row2Images = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop',
]

const row1 = ref(null)
const row2 = ref(null)

onMounted(() => {
  if (row1.value) {
    gsap.to(row1.value, {
      x: '-20%',
      ease: 'none',
      scrollTrigger: {
        trigger: row1.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    })
  }
  if (row2.value) {
    gsap.fromTo(
      row2.value,
      { x: '-20%' },
      {
        x: '0%',
        ease: 'none',
        scrollTrigger: {
          trigger: row2.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      }
    )
  }
})
</script>
