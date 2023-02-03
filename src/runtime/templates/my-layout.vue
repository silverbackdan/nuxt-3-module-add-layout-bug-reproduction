<template>
  <div class="my-layout">
    <div class="header">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/page2">Page 2</NuxtLink>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style>
.my-layout {
  background: gray;
}
</style>
