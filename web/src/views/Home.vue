<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <FolderTree @fileClicked="fileClicked" />
      </v-col>
      <v-col cols="10">
        <EditorMd :fileInfo="fileInfo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
let axiosInstance = require("@/plugins/axiosInstance");
import EditorMd from "@/components/EditorMd.vue";
import FolderTree from "@/components/FolderTree.vue";

export default {
  name: "Home",
  components: {
    EditorMd,
    FolderTree
  },
  data() {
    return {
      fileContent: ""
    };
  },
  mounted() {},
  methods: {
    getDocumentContent(path) {
      axiosInstance
        .post("/api/documents/getFileContent", { path: path })
        .then(response => {
          this.fileInfo = response.data;
        });
    },
    // onSaveClick() {
    //   axiosInstance
    //     .post("/api/documents/saveFileContent", {
    //       path: "./wiki/README.md",
    //       fileContent: this.fileContent
    //     })
    //     .then(response => {
    //       console.log(response);
    //     });
    // },
    fileClicked(item) {
      this.getDocumentContent(item.path);
    }
  }
};
</script>
