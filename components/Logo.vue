<template>
  <div>
    <v-img
      :src="require('../assets/images/Bond & Co logo - All White.png')"
      :max-width="width"
      :max-height="height"
    >
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 250,
    },
    height: {
      type: Number,
      default: 100,
    },
  },
}
</script>
