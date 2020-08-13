<template>
  <div>
    <v-treeview
      :items="directoryTree"
      :dense="true"
      :open-on-click="true"
      :rounded="true"
      :return-object="true"
      :activatable="true"
      item-key="name"
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.extension">{{
          open ? "mdi-folder-open" : "mdi-folder"
        }}</v-icon>
        <v-icon v-else>{{ files[item.extension] }}</v-icon>
      </template>
      <template v-slot:label="{ item }">
        <a @click="selectFile(item)">{{ item.name }}</a>
      </template>
    </v-treeview>
  </div>
</template>

<script>
let axiosInstance = require("@/plugins/axiosInstance")
import { mapActions } from "vuex"

export default {
  props: [],
  data() {
    return {
      directoryTree: [],
      open: ["public"],
      files: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-code-json",
        md: "mdi-language-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel"
      }
    }
  },
  mounted() {
    this.getDirectoryTree()
  },
  methods: {
    ...mapActions("file", ["getFile"]),
    getDirectoryTree() {
      axiosInstance.get("/api/documents/getDirectoryTree").then((response) => {
        this.directoryTree = response.data
      })
    },
    async selectFile(item) {
      let payload = {
        path: item.path
      }
      this.getFile(payload)
    }
  }
}
</script>

<style></style>
