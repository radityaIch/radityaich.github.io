<template>
  <section class="section home-intro">
    <div class="container medium">
      <div class="row" style="align-items: flex-start; gap: 80px;">
        <div class="flex-col" style="flex: 1.4;">
          <h4 ref="introH4" class="animate">
            Helping businesses thrive with fluid, end-to-end digital solutions.
            Together we craft experiences that stand out. No compromises, always
            on the cutting edge of modern web technology.
          </h4>
        </div>
        <div class="flex-col" style="flex: 1; display: flex; flex-direction: column; gap: 32px; padding-top: 8px;">
          <p ref="introP" class="animate" style="font-size: 0.9375rem; line-height: 1.7; opacity: 0.5;">
            I am driven by a relentless commitment to continuous self-improvement
            and delivering complete, end-to-end solutions. I believe in finishing
            what I start — ensuring every architecture is solid and every bug is
            squashed. No half-measures, just thorough, well-crafted code.
          </p>
          <div ref="roundBtn" class="animate">
            <a
              href="#about"
              class="btn btn-round btn-click"
              style="width: 140px; height: 140px;"
            >
              <div class="btn-fill"></div>
              <span class="btn-text">
                <span class="btn-text-inner">About me</span>
              </span>
            </a>
          </div>
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

const introH4 = ref(null)
const introP = ref(null)
const roundBtn = ref(null)

onMounted(() => {
  gsap.fromTo(
    introH4.value,
    { opacity: 0, y: 50 },
    {
      opacity: 0.85,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: introH4.value, start: 'top 85%' },
    }
  )
  gsap.fromTo(
    introP.value,
    { opacity: 0, y: 30 },
    {
      opacity: 0.5,
      y: 0,
      duration: 0.8,
      delay: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: introP.value, start: 'top 88%' },
    }
  )
  gsap.fromTo(
    roundBtn.value,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay: 0.3,
      ease: 'back.out(1.7)',
      scrollTrigger: { trigger: roundBtn.value, start: 'top 90%' },
    }
  )
})
</script>
