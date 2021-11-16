<template>
  <v-dialog
    v-model="editModal"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-title class="text-h3 white--text">{{
        post.content.title
      }}</v-card-title>
      <v-card-text>
        <v-row>
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
          <v-col cols="12">
            <admin-comp-standard-form
              :content="post.content"
            ></admin-comp-standard-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click.native="cancelEdit">Close</v-btn>
        <v-btn color="primary" @click.native="saveEdit">Save changes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    edit: {
      type: Object,
      default: () => ({}),
    },
    modal: {
      type: Boolean,
      default: false,
    },
    confirmation: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      updatedPost: {},
    }
  },
  computed: {
    editModal: {
      get() {
        return this.modal
      },
      set(newVal) {
        this.$emit('update:modal', newVal)
      },
    },
    post: {
      get() {
        return this.edit
      },
      set(newVal) {
        this.updatedPost = newVal
      },
    },
  },
  methods: {
    saveEdit() {
      this.$emit('update:confirmation', true)
      this.$emit('update:edit', this.updatedPost)
      this.close()
    },
    cancelEdit() {
      this.$emit('update:confirmation', false)
      this.close()
    },
    close() {
      this.editModal = false
    },
  },
}
</script>
