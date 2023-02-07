<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-earth-southeast-asia-filled text-4xl inline-block />
    <p>
      Hi, {{ router.currentRoute.value.params.name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
