<template>
  <div>
    <service-head :head="service.head"></service-head>
    <service-body :body="service.body"></service-body>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
