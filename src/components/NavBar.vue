<template>
  <nav class="nav-bar">
    <div class="credits-top">
      <router-link to="/" class="btn-click" style="text-decoration: none; color: inherit;">
        <span class="btn-text">&copy; {{ new Date().getFullYear() }} Rizky Aditya</span>
      </router-link>
    </div>
    <ul class="links-wrap">
      <li class="btn btn-link" v-if="isProject">
        <router-link to="/" class="btn-click" style="text-decoration: none; color: inherit;">
          <span class="btn-text"><span class="btn-text-inner">&larr; Back</span></span>
        </router-link>
      </li>
      <template v-else>
        <li class="btn btn-link">
          <router-link to="/#projects" class="btn-click" style="text-decoration: none; color: inherit;">
            <span class="btn-text"><span class="btn-text-inner">Work</span></span>
          </router-link>
        </li>
        <li class="btn btn-link">
          <router-link to="/#about" class="btn-click" style="text-decoration: none; color: inherit;">
            <span class="btn-text"><span class="btn-text-inner">About</span></span>
          </router-link>
        </li>
        <li class="btn btn-link">
          <router-link to="/#contact" class="btn-click" style="text-decoration: none; color: inherit;">
            <span class="btn-text"><span class="btn-text-inner">Contact</span></span>
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isProject = computed(() => route.name === 'project')
</script>
