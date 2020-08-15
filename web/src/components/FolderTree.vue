<template>
  <div>
    <v-skeleton-loader
      v-if="this.loading"
      ref="skeleton"
      :boilerplate="true"
      type="list-item-three-line"
      class="mx-auto"
    ></v-skeleton-loader>
    <v-treeview
      v-else
      :items="directoryTree"
      :dense="true"
      :open-on-click="false"
      :rounded="true"
      :return-object="true"
      :activatable="true"
      item-key="hash"
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.extension">{{
          open ? "mdi-folder-open" : "mdi-folder"
        }}</v-icon>
        <v-icon v-else>{{ files[item.extension] }}</v-icon>
      </template>

      <template v-slot:append="{ item, open, leaf }">
        <v-btn
          icon
          v-if="!item.extension && (open || leaf)"
          @click="createFile(item)"
        >
          <v-icon>mdi-file-plus-outline </v-icon>
        </v-btn>
        <v-btn
          icon
          v-if="!item.extension && (open || leaf)"
          @click="createFolder(item)"
        >
          <v-icon>mdi-folder-plus-outline </v-icon>
        </v-btn>
      </template>

      <template v-slot:label="{ item }">
        <a @click="selectFile(item)">{{ item.name }}</a>
      </template>
    </v-treeview>
  </div>
</template>

<script>
let axiosInstance = require("@/plugins/axiosInstance")
import { mapState, mapActions, mapMutations } from "vuex"

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
  computed: {
    ...mapState("loading", ["loading"])
  },
  mounted() {
    this.getDirectoryTree()
  },
  methods: {
    ...mapActions("file", ["getFile"]),
    ...mapMutations("loading", ["setLoading"]),

    getDirectoryTree() {
      this.setLoading(true)
      axiosInstance
        .get("/api/documents/getDirectoryTree")
        .then((response) => {
          this.setLoading(false)
          this.directoryTree = response.data
        })
        .catch((error) => {
          alert("Error fetching data")
        })
    },
    async selectFile(item) {
      if (item.type == "directory") return

      let payload = {
        path: item.path
      }
      this.getFile(payload)
    },
    createFolder(item) {
      const payload = {
        path: item.path,
        folderName: "new folder"
      }
      axiosInstance
        .post("/api/documents/createFolder", payload)
        .then((response) => {
          this.getDirectoryTree()
        })
        .catch((error) => {
          alert("Error create file")
        })
    },
    createFile(item) {
      const payload = {
        path: item.path,
        fileName: "file.md"
      }

      axiosInstance
        .post("/api/documents/createFile", payload)
        .then((response) => {
          this.getDirectoryTree()
        })
        .catch((error) => {
          alert("Error create file")
        })
    }
  }
}
</script>

<style></style>
