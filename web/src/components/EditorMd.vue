<template>
  <v-md-editor
    v-model="fileContent"
    @save="onSaveClick"
    height="800px"
  ></v-md-editor>
</template>

<script>
//let axiosInstance = require("@/plugins/axiosInstance");
import { mapState, mapActions } from "vuex"

export default {
  computed: {
    ...mapState("file", ["fileContent", "filePath"])
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    ...mapActions("file", ["saveFile"]),

    onSaveClick(e) {
      let payload = {
        path: this.filePath,
        fileContent: e
      }
      this.saveFile(payload)
    }
  }
}
</script>
