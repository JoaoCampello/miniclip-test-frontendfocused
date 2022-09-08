<template>
  <div>
    <v-row justify="center" class="ma-4">
      <h2>Pending Approval</h2>
    </v-row>
    <v-divider class="ml-3 mr-3"></v-divider>
    <v-container fluid>
      <v-layout align-center justify-space-around row fill-height wrap>
        <v-flex v-for="item in pendings" :key="item.id" xs3>
          <image-card :item="item" /> </v-flex
      ></v-layout>
    </v-container>
  </div>
</template>
  <script>
import api from "../api/home_data.json";
import ImageCard from "@/components/Layout/ImageCard.vue";

export default {
  data: () => ({
    pendings: [],
  }),
  mounted() {
    this.pendings = api.filter((w) => w.approved == null);
  },
  components: {
    ImageCard,
  },
};
</script>