<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <service :service="service"></service>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      service: {},
    }
  },
  async fetch({ store, route }) {
    this.slug = route.params.slug
    await store.dispatch('services/setService', this.slug).then((data) => {
      this.post = data
    })
  },
  head() {
    const post = this.$store.getters['services/service']
    return {
      title: post.title,
      meta: [
        {
          hid: 't-type',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: post.title,
        },
        {
          hid: 'og-desc',
          property: 'og:description',
          content: post.tite,
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: 'https://bondaccountants.co.uk/services/' + this.slug,
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: post.headline.url,
        },
        {
          hid: 'og-site_name',
          property: 'og:site_name',
          content: 'Bond & Co Accountants',
        },
        { hid: 'og-type', property: 'og:type', content: 'post' },
        { name: 'robots', content: 'index,follow' },
        {
          hid: 'description',
          name: 'description',
          content: post.title,
        },
      ],
    }
  },
  created() {
    this.slug = this.$route.params.slug
    this.$store
      .dispatch('services/setService', this.slug)
      .then((doc) => {
        this.service = {
          head: {
            title: doc.title,
            url: doc.headline.url,
            alt: doc.headline.alt,
          },
          body: {
            url: doc.sub.url,
            content: doc.content,
            alt: doc.sub.alt,
          },
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  destroyed() {
    this.$store.commit('services/clearService')
  },
}
</script>
