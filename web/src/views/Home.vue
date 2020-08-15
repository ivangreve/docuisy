<template>
  <v-container fluid style="height: 100%">
    <v-row no-gutters style="height: 100vh;">
      <v-col cols="2">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Docuisy
              </v-list-item-title>
              <v-list-item-subtitle>
                Wiki
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <FolderTree /> </v-navigation-drawer
      ></v-col>
      <v-col cols="10" justify="center">
        <SkeletonMarkDown v-if="this.loading" />
        <MdViewer v-else />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
let axiosInstance = require("@/plugins/axiosInstance")
import MdViewer from "@/components/MdViewer.vue"
import FolderTree from "@/components/FolderTree.vue"
import SkeletonMarkDown from "@/components/SkeletonMarkDown.vue"
import { mapState } from "vuex"

export default {
  name: "Home",
  components: {
    MdViewer,
    FolderTree,
    SkeletonMarkDown
  },
  data() {
    return {
      fileContent: ""
    }
  },
  computed: {
    ...mapState("loading", ["loading"])
  },
  mounted() {},
  methods: {}
}
</script>
