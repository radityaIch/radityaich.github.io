<template>
  <section id="projects" style="padding: 40px 0 100px;">
    <!-- Work list -->
    <div class="section">
      <div class="container">
        <div class="grid-sub-title">
          <div class="flex-col">
            <h5>Recent work</h5>
          </div>
        </div>

        <ul class="work-items" ref="workListEl">
          <li v-for="(project, i) in projects" :key="i">
            <div class="stripe"></div>
            <router-link
              :to="'/work/' + project.slug"
              class="row"
              @mouseenter="onItemHover(i)"
              @mouseleave="onItemLeave"
            >
              <div class="flex-col">
                <h4><span>{{ project.title }}</span></h4>
              </div>
              <div class="flex-col" style="flex: 0 0 auto;">
                <p>{{ project.category }}</p>
              </div>
            </router-link>
          </li>
          <div class="stripe last"></div>
        </ul>
      </div>
    </div>

    <!-- Floating preview image -->
    <div ref="floatImage" class="mouse-pos-list-image">
      <div class="float-image-wrap">
        <div
          v-for="(project, i) in projects"
          :key="'img-' + i"
          class="float-image-inner"
          :class="{ visible: hoveredIndex === i }"
          :style="{ backgroundImage: 'url(' + project.image + ')' }"
        />
      </div>
    </div>

    <!-- Work tiles -->
    <div style="padding: 120px 0 60px;">
      <div class="container">
        <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px 24px;">
          <li v-for="(project, i) in projects" :key="'tile-' + i">
            <router-link :to="'/work/' + project.slug" class="single-tile-wrap">
              <div class="tile-image">
                <div class="overlay" :style="{ backgroundImage: 'url(' + project.image + ')' }"></div>
              </div>
              <div style="padding: 20px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <h4 style="font-size: 1.125rem; font-weight: 600; margin: 0;">{{ project.title }}</h4>
                  <p style="font-size: 0.8125rem; opacity: 0.35; margin: 0;">{{ project.year }}</p>
                </div>
                <div class="stripe" style="margin-bottom: 8px;"></div>
                <p style="font-size: 0.8125rem; opacity: 0.4; margin: 0;">{{ project.category }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'

gsap.registerPlugin(ScrollTrigger)

const workListEl = ref(null)
const floatImage = ref(null)
const hoveredIndex = ref(-1)
let mouseX = 0
let mouseY = 0

const onMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  if (floatImage.value) {
    gsap.to(floatImage.value, {
      x: mouseX,
      y: mouseY,
      duration: 0.9,
      ease: 'power3.out',
    })
  }
}

const onItemHover = (i) => {
  hoveredIndex.value = i
  floatImage.value?.classList.add('visible')
  document.body.style.cursor = 'none'
}

const onItemLeave = () => {
  hoveredIndex.value = -1
  floatImage.value?.classList.remove('visible')
  document.body.style.cursor = ''
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)

  const items = workListEl.value?.querySelectorAll('li')
  if (!items) return

  items.forEach((item, i) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: workListEl.value,
          start: 'top 85%',
        },
      }
    )
  })

  const tiles = document.querySelectorAll('.single-tile-wrap')
  tiles.forEach((tile, i) => {
    gsap.fromTo(
      tile,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tile,
          start: 'top 88%',
        },
      }
    )
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>
