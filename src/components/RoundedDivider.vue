<template>
  <div class="rounded-div-wrap" :class="{ top: position === 'top', bottom: position === 'bottom' }">
    <div class="rounded-div"></div>
  </div>
</template>

<script setup>
defineProps({
  position: { type: String, default: 'bottom' },
})
</script>
