<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-skeleton-loader
          ref="skeleton"
          width="700"
          :boilerplate="true"
          type="list-item-three-line"
          class="mb-5"
        ></v-skeleton-loader>

        <v-skeleton-loader
          ref="skeleton"
          width="700"
          :boilerplate="true"
          type="list-item-two-line"
          class="mb-10"
        ></v-skeleton-loader>

        <v-skeleton-loader
          ref="skeleton"
          :boilerplate="true"
          type="card"
          class="mb-15"
        ></v-skeleton-loader>

        <v-skeleton-loader
          ref="skeleton"
          width="700"
          :boilerplate="true"
          type="paragraph"
          class="mb-5"
        ></v-skeleton-loader>

        <v-skeleton-loader
          ref="skeleton"
          width="400"
          :boilerplate="true"
          type="text"
        ></v-skeleton-loader>

        <v-skeleton-loader
          ref="skeleton"
          width="400"
          :boilerplate="true"
          type="text"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
