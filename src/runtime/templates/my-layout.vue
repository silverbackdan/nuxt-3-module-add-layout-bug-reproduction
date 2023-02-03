<template>
  <div class="my-layout">
    <div class="header">
      My Layout Header
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="sass">
$blue: blue
.my-layout
  background: $blue
</style>
