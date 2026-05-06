<template>
  <header class="home-header">
    <div ref="personalImage" class="personal-image">
      <img
        :src="'/hero-portrait.png'"
        alt="Rizky Aditya Ichwanto"
        loading="eager"
      />
    </div>

    <div class="container" style="padding-top: 140px; padding-bottom: 32px; position: relative; z-index: 2;">
      <div ref="hangerEl" class="hanger">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>Based in Indonesia</span>
      </div>
    </div>

    <div class="container" style="position: relative; z-index: 2;">
      <div class="row" style="gap: 8px;">
        <div class="flex-col">
          <h4 style="font-size: 0.875rem; font-weight: 500; opacity: 0.55; display: flex; align-items: center; gap: 8px; letter-spacing: -0.01em;">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4">
              <polyline points="3,0 12,0 12,9"/>
              <line x1="12" y1="0" x2="0" y2="12"/>
            </svg>
            Full-Stack Developer &amp; Engineer
          </h4>
        </div>
      </div>
    </div>

    <div class="big-name" style="position: relative; z-index: 2; margin-top: 40px;">
      <div ref="nameWrap" class="name-wrap">
        <h1>
          Rizky Aditya Ichwanto<span class="spacer">&mdash;</span>
        </h1>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const personalImage = ref(null)
const hangerEl = ref(null)
const nameWrap = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  tl.fromTo(hangerEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.5 })
    .fromTo(nameWrap.value, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out' }, '-=0.4')

  gsap.to(nameWrap.value, {
    x: '-22%',
    scrollTrigger: {
      trigger: '.home-header',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  })

  gsap.to(personalImage.value?.querySelector('img'), {
    y: '-15%',
    scrollTrigger: {
      trigger: '.home-header',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  })
})
</script>
