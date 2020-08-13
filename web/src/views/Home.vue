<template>
  <v-container fluid style="height: 100%">
    <v-row style="height: 100vh;">
      <v-col cols="2" style="min-width: 100px;">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Wiki
              </v-list-item-title>
              <v-list-item-subtitle>
                Folders
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <FolderTree /> </v-navigation-drawer
      ></v-col>
      <v-col cols="10">
        <MdViewer />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
let axiosInstance = require("@/plugins/axiosInstance")
import MdViewer from "@/components/MdViewer.vue"
//import EditorMd from "@/components/EditorMd.vue"
import FolderTree from "@/components/FolderTree.vue"

export default {
  name: "Home",
  components: {
    //EditorMd,
    MdViewer,
    FolderTree
  },
  data() {
    return {
      fileContent: ""
    }
  },
  mounted() {},
  methods: {}
}
</script>
