<template>
  <div>
    <legals-head :head="legals.head"></legals-head>
    <legals-body :body="legals.body"></legals-body>
  </div>
</template>

<script>
export default {
  props: {
    legals: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
