<template>
  <main data-barba="container" data-barba-namespace="home">
    <LoadingScreen @loaded="loaded = true" />
    <template v-if="loaded">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HorizontalGallery />
      <ContactFooter />
    </template>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingScreen from '../components/LoadingScreen.vue'
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import HorizontalGallery from '../components/HorizontalGallery.vue'
import ContactFooter from '../components/ContactFooter.vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const loaded = ref(false)

onMounted(() => {
  ScrollTrigger.refresh()
})
</script>
