<template>
  <v-container fluid>
    <v-container class="px-0" fluid>
      <v-switch
        v-model="upload"
        :label="`Upload multiple images first ?: ${upload.toString()}`"
      ></v-switch>
    </v-container>
    <v-row v-if="upload">
      <admin-modals-multi-upload></admin-modals-multi-upload>
    </v-row>
    <v-row v-if="!upload">
      <v-col cols="12">
        <h1>Service images</h1>
      </v-col>
      <v-col cols="6">
        <h2>Headline</h2>
        <admin-comp-image-upload
          :image.sync="post.headline"
        ></admin-comp-image-upload>
      </v-col>
      <v-col cols="6">
        <h2>Sub</h2>
        <admin-comp-image-upload
          :image.sync="post.sub"
        ></admin-comp-image-upload>
      </v-col>
      <v-container>
        <v-col cols="12">
          <admin-comp-standard-form
            :content="post.content"
          ></admin-comp-standard-form>
        </v-col>

        <v-btn class="ma-5" color="primary" @click="submitForm"
          >Create service</v-btn
        >

        <ui-message :msg.sync="msg"></ui-message>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import { serviceCol } from '@/services/firebase'

export default {
  data() {
    return {
      post: {
        headline: {
          id: '',
          url: '',
          alt: '',
        },
        sub: {
          id: '',
          url: '',
          alt: '',
        },
        content: {
          title: '',
          content: '',
          type: 'service',
        },
      },
      msg: {
        type: 'info',
        message: '',
      },
      upload: false,
    }
  },
  methods: {
    reset() {
      this.post = {
        headline: {
          id: '',
          url: '',
          alt: '',
        },
        sub: {
          id: '',
          url: '',
          alt: '',
        },
        content: {
          title: '',
          content: '',
          type: 'service',
        },
        slug: '',
      }
    },
    addPost() {
      let slugArry = []
      const newSlug = []

      // create slug
      slugArry = this.post.content.title.split(' ')

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.post.slug = newSlug.join('-')

      if (this.post.headline.url === '') {
        this.post.headline.url = this.defaultImg.url
        this.post.headline.alt = this.defaultImg.alt
      }
      if (this.post.sub.url === '') {
        this.post.sub.url = this.defaultImg.url
        this.post.sub.alt = this.defaultImg.alt
      }

      serviceCol
        .add({
          title: this.post.content.title,
          content: this.post.content.content,
          type: this.post.content.type,
          slug: this.post.slug,
          createdOn: new Date(),
          headline: {
            id: this.post.headline.id,
            url: this.post.headline.url,
            alt: this.post.headline.alt,
          },
          sub: {
            id: this.post.sub.id,
            url: this.post.sub.url,
            alt: this.post.sub.alt,
          },
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Post added',
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
        .catch((err) => {
          this.msg = {
            type: 'warning',
            message: err.message,
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
    },
    submitForm() {
      if (this.post.content.title === '' || this.post.content.content === '') {
        this.msg = {
          type: 'Warning',
          message:
            'Missing information please make sure the post information is filled',
        }
        setTimeout(() => {
          this.msg = {
            type: '',
            message: '',
          }
        }, 2000)
      } else {
        this.addPost()
      }
    },
  },
}
</script>
