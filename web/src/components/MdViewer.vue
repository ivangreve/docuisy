<template>
  <div>
    <v-btn
      v-if="fileContent"
      color="primary"
      fab
      medium
      dark
      class="mb-10 mt-5"
      fixed
      right
      bottom
      @click="editFile"
    >
      <v-icon v-if="editMode">mdi-window-close</v-icon>
      <v-icon v-else>mdi-pencil</v-icon>
    </v-btn>
    <EditorMd v-if="editMode" />
    <div
      v-else
      v-html="getMdHtml()"
      class="v-md-editor-preview vuepress-markdown-body"
    ></div>
  </div>
</template>

<script>
import EditorMd from "@/components/EditorMd.vue"
import { mapState, mapActions, mapMutations } from "vuex"
let md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
})

export default {
  computed: {
    ...mapState("file", ["fileContent", "filePath", "editMode"])
  },
  components: { EditorMd },
  data() {
    return {}
  },
  created() {
    this.configureParser()
  },
  methods: {
    ...mapActions("file", ["saveFile", "setEditMode"]),
    ...mapMutations("file", ["setEditMode"]),
    editFile() {
      this.setEditMode(!this.editMode)
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

<style>
h1 {
  margin-top: 0 !important;
}
h1,
h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
</style>
