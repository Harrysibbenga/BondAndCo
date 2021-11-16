<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model.trim="postContent.title"
          label="Title"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <h3 class="pb-1">Main content</h3>
        <ui-editor
          class="black--text"
          :content.sync="postContent.content"
        ></ui-editor>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    postContent: {
      get() {
        return this.content
      },
      set(newVal) {
        this.$emit('update:content', newVal)
      },
    },
  },
}
</script>
