<template>
  <div>
    <v-img
      id="about"
      :src="require('../../assets/images/Coffee.jpg')"
      height="800"
    >
    </v-img>
  </div>
</template>

<style scoped>
.description-text {
  opacity: 0.7;
}

@media (min-width: 960px) {
  .description-text {
    max-width: 600px;
  }
}
</style>
