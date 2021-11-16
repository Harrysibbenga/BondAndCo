<template>
  <div>
    <admin-comp-edit-posts
      :posts="posts"
      :edit.sync="editModal"
      :delete.sync="deleteModal"
      :post.sync="emitedPost"
    />
    <admin-modals-delete
      :modal.sync="deleteModal"
      :item.sync="emitedPost"
      :confirmation.sync="confirmDelete"
    />
    <admin-modals-edit
      :modal.sync="editModal"
      :edit.sync="clickedPost"
      :confirmation.sync="confirmEdit"
    />
  </div>
</template>

<script>
import { serviceCol } from '@/services/firebase'

export default {
  data() {
    return {
      editModal: false,
      deleteModal: false,
      confirmDelete: false,
      confirmEdit: false,
      emitedPost: {
        id: '',
        sub: {
          id: '',
        },
        headline: {
          id: '',
        },
        content: {
          type: '',
        },
      },
      newPost: {},
      msg: {
        type: '',
        message: '',
      },
    }
  },
  computed: {
    posts() {
      return this.$store.getters['services/services']
    },
    clickedPost: {
      get() {
        const clickedPost = {
          sub: {
            id: this.emitedPost.sub.id,
            url: this.emitedPost.sub.url,
            alt: this.emitedPost.sub.alt,
          },
          headline: {
            id: this.emitedPost.headline.id,
            url: this.emitedPost.headline.url,
            alt: this.emitedPost.headline.alt,
          },
          content: {
            type: this.emitedPost.type,
            title: this.emitedPost.title,
            content: this.emitedPost.content,
          },
          id: this.emitedPost.id,
          slug: this.emitedPost.slug,
        }
        return clickedPost
      },
      set(newVal) {
        this.newPost = newVal
      },
    },
  },
  watch: {
    confirmDelete(newVal, oldVal) {
      if (newVal === true) {
        this.deleteConfirm(newVal)
      }
    },
    confirmEdit(newVal, oldVal) {
      if (newVal === true) {
        this.editConfirm(newVal)
      }
    },
  },
  methods: {
    reset() {
      this.confirmEdit = false
      this.confirmDelete = false
    },
    deleteConfirm(confirm) {
      if (confirm) {
        serviceCol
          .doc(this.clickedPost.id)
          .delete()
          .then(() => {
            this.deleteModal = false
            this.msg = {
              type: 'danger',
              message: 'Post deleted',
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
          .catch((error) => {
            this.msg = {
              type: 'warning',
              message: error.message,
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
      }
    },
    editConfirm(confirm) {
      if (confirm) {
        let slugArry = []
        const newSlug = []

        // create slug
        slugArry = this.clickedPost.content.title.split(' ')

        slugArry.forEach((item) => {
          newSlug.push(item.toLowerCase())
        })

        this.clickedPost.slug = newSlug.join('-')

        if (this.clickedPost.headline.url === '') {
          this.clickedPost.headline.url = this.defaultImg.url
          this.clickedPost.headline.alt = this.defaultImg.alt
        }
        if (this.clickedPost.sub.url === '') {
          this.clickedPost.sub.url = this.defaultImg.url
          this.clickedPost.sub.alt = this.defaultImg.alt
        }

        serviceCol
          .doc(this.clickedPost.id)
          .update({
            title: this.clickedPost.content.title,
            content: this.clickedPost.content.content,
            type: this.clickedPost.content.type,
            slug: this.clickedPost.slug,
            lastUpdateOn: new Date(),
            headline: {
              id: this.clickedPost.headline.id,
              url: this.clickedPost.headline.url,
              alt: this.clickedPost.headline.alt,
            },
            sub: {
              id: this.clickedPost.sub.id,
              url: this.clickedPost.sub.url,
              alt: this.clickedPost.sub.alt,
            },
          })
          .then(() => {
            this.reset()
            this.msg = {
              type: 'success',
              message: 'Post updated',
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
      }
    },
  },
}
</script>
