<template>
  <div>
    <RoundedDivider position="top" />

    <div class="footer-wrap">
      <footer id="contact" class="section footer" style="position: relative; z-index: 1;">
        <div class="container medium">
          <!-- Heading -->
          <div class="row" style="margin-bottom: 60px;" ref="headingRow">
            <div class="flex-col">
              <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 28px;">
                <div style="width: 52px; height: 52px; border-radius: 50%; overflow: hidden; background: #2a2a35;">
                  <img
                    :src="'/hero-portrait.png'"
                    alt="Rizky Aditya Ichwanto"
                    style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(40%);"
                  />
                </div>
                <div class="arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5">
                    <polyline points="3,0 12,0 12,9"/>
                    <line x1="12" y1="0" x2="0" y2="12"/>
                  </svg>
                </div>
              </div>
              <h2>
                <span>Let's work</span>
                <span>together</span>
              </h2>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="row" style="margin-bottom: 80px;" ref="btnRow">
            <div class="flex-col">
              <div class="stripe" style="margin-bottom: 48px;"></div>
              <div ref="magneticWrap">
                <a href="mailto:raditya2678@gmail.com" class="btn btn-round btn-click">
                  <div class="btn-fill"></div>
                  <span class="btn-text">
                    <span class="btn-text-inner">Get in touch</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact links -->
          <div class="row" style="margin-bottom: 60px;" ref="linksRow">
            <div class="flex-col" style="display: flex; flex-direction: column; gap: 10px;">
              <a href="mailto:raditya2678@gmail.com" class="btn btn-click btn-rounded-pill" style="width: fit-content;">
                <div class="btn-fill"></div>
                <span class="btn-text">
                  <span class="btn-text-inner">raditya2678@gmail.com</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom footer -->
        <div class="container medium">
          <div class="row bottom-footer" ref="bottomFooter">
            <div class="flex-col" style="flex: 1;">
              <div class="bottom-footer" style="display: flex; gap: 80px; flex-wrap: wrap;">
                <div class="credits">
                  <h5>Version</h5>
                  <p>2025 &copy; Edition</p>
                </div>
                <div>
                  <h5>Local time</h5>
                  <p ref="timeSpan">--:-- WIB</p>
                </div>
              </div>
            </div>
            <div class="flex-col" style="flex: 0.4;">
              <div class="socials">
                <h5>Socials</h5>
                <ul>
                  <li><a href="https://github.com/radityaIch" target="_blank" rel="noopener noreferrer" class="btn-click"><span class="btn-text"><span class="btn-text-inner">GitHub</span></span></a></li>
                  <li><a href="https://www.linkedin.com/in/rizky-aditya-ichwanto/" target="_blank" rel="noopener noreferrer" class="btn-click"><span class="btn-text"><span class="btn-text-inner">LinkedIn</span></span></a></li>
                  <li><a href="https://www.instagram.com/_raditya.lib" target="_blank" rel="noopener noreferrer" class="btn-click"><span class="btn-text"><span class="btn-text-inner">Instagram</span></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="overlay-gradient"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RoundedDivider from './RoundedDivider.vue'

gsap.registerPlugin(ScrollTrigger)

const headingRow = ref(null)
const btnRow = ref(null)
const linksRow = ref(null)
const bottomFooter = ref(null)
const magneticWrap = ref(null)
const timeSpan = ref(null)

let intervalId = null

const updateTime = () => {
  if (!timeSpan.value) return
  const now = new Date()
  const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' }
  const timeString = now.toLocaleTimeString('en-US', options)
  timeSpan.value.textContent = `${timeString} WIB`
}

onMounted(() => {
  updateTime()
  intervalId = setInterval(updateTime, 1000)

  gsap.fromTo(
    headingRow.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: headingRow.value, start: 'top 85%' },
    }
  )
  gsap.fromTo(
    btnRow.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: btnRow.value, start: 'top 90%' },
    }
  )
  gsap.fromTo(
    linksRow.value,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: linksRow.value, start: 'top 92%' },
    }
  )
  gsap.fromTo(
    bottomFooter.value,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: bottomFooter.value, start: 'top 95%' },
    }
  )

  // Magnetic effect
  const roundBtn = magneticWrap.value?.querySelector('.btn-click')
  if (roundBtn) {
    roundBtn.addEventListener('mousemove', (e) => {
      const rect = magneticWrap.value.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(magneticWrap.value, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out',
      })
    })
    roundBtn.addEventListener('mouseleave', () => {
      gsap.to(magneticWrap.value, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      })
    })
  }
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
