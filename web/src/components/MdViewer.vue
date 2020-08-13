<template>
  <div>
    <v-btn
      v-if="fileContent"
      color="primary"
      fab
      medium
      dark
      class="mb-15"
      @click="editFile"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <EditorMd v-if="editMode" />
    <div v-else class="markdown-body" v-html="getMdHtml()"></div>
  </div>
</template>

<script>
import EditorMd from "@/components/EditorMd.vue"
import { mapState, mapActions } from "vuex"
require("@/assets/github-markdown.css")
let md = require("markdown-it")()

export default {
  computed: {
    ...mapState("file", ["fileContent", "filePath"])
  },
  components: { EditorMd },
  data() {
    return {
      editMode: false
    }
  },
  created() {
    this.configureParser()
  },
  methods: {
    ...mapActions("file", ["saveFile"]),
    editFile() {
      this.editMode = !this.editMode
    },
    getMdHtml() {
      const html = md.render(this.fileContent)
      return html
    },
    configureParser() {
      md.use(require("markdown-it-container"), "spoiler", {
        validate: function(params) {
          return params.trim().match(/^spoiler\s+(.*)$/)
        },

        render: function(tokens, idx) {
          var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/)

          if (tokens[idx].nesting === 1) {
            // opening tag
            return (
              "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n"
            )
          } else {
            // closing tag
            return "</details>\n"
          }
        }
      })
    }
  }
}
</script>

<style></style>
