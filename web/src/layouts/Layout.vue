<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" width="400" app clipped>
      <v-list dense>
        <FolderTree />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense clipped-left color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-container class="d-flex justify-space-between align-center" fluid>
        <div>
          <v-toolbar-title>
            <h3 class="d-none d-sm-flex">{{ title }}</h3>
          </v-toolbar-title>
        </div>
      </v-container>
    </v-app-bar>
    <v-content>
      <!-- <slot /> -->
      <SkeletonMarkDown v-if="loading" class="mx-10" />
      <MdViewer v-else class="ma-10 " />
    </v-content>
  </v-app>
</template>

<script>
import MdViewer from "@/components/MdViewer.vue"
import FolderTree from "@/components/FolderTree.vue"
import SkeletonMarkDown from "@/components/SkeletonMarkDown.vue"
import { mapState, mapMutations } from "vuex"

export default {
  data: () => ({
    drawer: true,
    title: "Docuisy"
  }),
  components: { MdViewer, SkeletonMarkDown, FolderTree },
  computed: {
    ...mapState("loading", ["loading"])
  },
  methods: {}
}
</script>

<style>
h1 {
  font-size: 1.5rem !important;
}
.v-treeview-node.v-treeview-node--rounded .v-treeview-node__root {
  margin: 0px;
}
</style>
