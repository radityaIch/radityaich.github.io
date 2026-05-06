<template>
  <div data-barba="container" data-barba-namespace="project">
    <NavBar />

    <!-- Project Hero -->
    <section class="project-hero" ref="heroSection">
      <div class="container medium">
        <div class="project-meta-top" ref="metaTop">
          <div class="flex" style="justify-content: space-between; align-items: center;">
            <span class="project-label">{{ project.category }}</span>
            <span class="project-year">{{ project.year }}</span>
          </div>
        </div>
        <h1 class="project-title" ref="projectTitle">{{ project.title }}</h1>
      </div>

      <div class="project-hero-image" ref="heroImage">
        <img :src="project.image" :alt="project.title" />
      </div>
    </section>

    <!-- Project Info -->
    <section class="project-info">
      <div class="container medium">
        <div class="info-grid" ref="infoGrid">
          <div class="info-block">
            <h5>Role</h5>
            <p>{{ project.role }}</p>
          </div>
          <div class="info-block">
            <h5>Client</h5>
            <p>{{ project.client }}</p>
          </div>
          <div class="info-block">
            <h5>Year</h5>
            <p>{{ project.year }}</p>
          </div>
        </div>

        <div class="project-description" ref="projectDesc">
          <p>{{ project.description }}</p>
        </div>

        <div class="project-tags" ref="projectTags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="project-gallery" v-if="project.gallery.length">
      <div class="container">
        <div class="gallery-grid">
          <div
            v-for="(img, i) in project.gallery"
            :key="i"
            class="gallery-item"
            :class="{ wide: i === 0 }"
            ref="galleryItems"
          >
            <img :src="img" :alt="project.title + ' ' + (i + 1)" />
          </div>
        </div>
      </div>
    </section>

    <!-- Next Project -->
    <section class="next-project" v-if="nextProject">
      <div class="stripe"></div>
      <div class="container medium">
        <router-link :to="'/work/' + nextProject.slug" class="next-project-link">
          <span class="next-label">Next project</span>
          <h2>{{ nextProject.title }}</h2>
          <div class="next-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <ContactFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'
import NavBar from '../components/NavBar.vue'
import ContactFooter from '../components/ContactFooter.vue'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const router = useRouter()

const slug = route.params.slug
const project = projects.find((p) => p.slug === slug)

if (!project) {
  router.push('/')
}

const currentIndex = projects.findIndex((p) => p.slug === slug)
const nextProject = computed(() => {
  const next = (currentIndex + 1) % projects.length
  return projects[next]
})

const metaTop = ref(null)
const projectTitle = ref(null)
const heroImage = ref(null)
const infoGrid = ref(null)
const projectDesc = ref(null)
const projectTags = ref(null)
const galleryItems = ref([])

onMounted(() => {
  const tl = gsap.timeline()

  tl.fromTo(metaTop.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .fromTo(projectTitle.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' }, '-=0.3')
    .fromTo(heroImage.value, { opacity: 0, y: 60, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }, '-=0.5')

  gsap.fromTo(
    infoGrid.value?.children,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: infoGrid.value, start: 'top 85%' },
    }
  )

  gsap.fromTo(
    projectDesc.value,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: projectDesc.value, start: 'top 85%' },
    }
  )

  gsap.fromTo(
    projectTags.value?.children,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: { trigger: projectTags.value, start: 'top 90%' },
    }
  )

  galleryItems.value.forEach((item, i) => {
    if (!item) return
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 88%' },
      }
    )
  })
})
</script>

<style scoped>
.project-hero {
  padding-top: 140px;
  padding-bottom: 60px;
}

.project-meta-top {
  margin-bottom: 24px;
}

.project-label {
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.4;
  font-weight: 500;
}

.project-year {
  font-size: 0.8125rem;
  opacity: 0.4;
  font-weight: 500;
}

.project-title {
  font-size: clamp(2.5rem, 7vw, 6rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0;
}

.project-hero-image {
  margin-top: 48px;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
}

.project-hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Info */
.project-info {
  padding: 80px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 60px;
}

.info-block h5 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  opacity: 0.35;
  margin-bottom: 8px;
}

.info-block p {
  font-size: 1rem;
  opacity: 0.7;
  margin: 0;
}

.project-description {
  max-width: 700px;
  margin-bottom: 40px;
}

.project-description p {
  font-size: 1.125rem;
  line-height: 1.7;
  opacity: 0.65;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  font-size: 0.8125rem;
  padding: 8px 18px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.tag:hover {
  border-color: rgba(255, 255, 255, 0.3);
  opacity: 0.9;
}

/* Gallery */
.project-gallery {
  padding: 40px 0 100px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.gallery-item {
  border-radius: 4px;
  overflow: hidden;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-item:hover img {
  transform: scale(1.03);
}

/* Next Project */
.next-project {
  padding: 80px 0 120px;
}

.next-project .stripe {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 60px;
}

.next-project-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #fff;
  position: relative;
  padding-bottom: 40px;
}

.next-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.35;
  font-weight: 500;
  margin-bottom: 16px;
}

.next-project-link h2 {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  transition: opacity 0.3s ease, transform 0.5s cubic-bezier(0.77, 0, 0.18, 1);
}

.next-project-link:hover h2 {
  opacity: 0.5;
  transform: translateX(20px);
}

.next-arrow {
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.3;
  transition: opacity 0.3s ease, transform 0.5s cubic-bezier(0.77, 0, 0.18, 1);
}

.next-project-link:hover .next-arrow {
  opacity: 0.8;
  transform: translateX(10px);
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .gallery-item.wide {
    grid-column: span 1;
  }
}
</style>
