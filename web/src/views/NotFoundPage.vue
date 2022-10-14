<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold mb-4">404 Not Found</h1>
        <router-link :to="{ name: 'Home' }" custom v-slot="{ href, navigate }">
          <button class="btn btn-primary" :href="href" @click="navigate">
            Back to Home
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
