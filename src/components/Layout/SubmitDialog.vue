<template>
  <div class="text-center">
    <v-dialog v-model="submit_dialog" width="720">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green lighten-2 white--text"
          v-bind="attrs"
          v-on="on"
          class="ml-4"
        >
          Submit New Image</v-btn
        >
      </template>

      <v-card>
        <v-card>
          <v-row justify="center" align="center">
            <image-input
              class="mt-2"
              rotateClockwiseIcon="Rotate Right"
              rotateCounterClockwiseIcon="Rotate Left"
              flipVerticallyIcon="Flip Vertically"
              flipHorizontallyIcon="Flip Horizontally"
              uploadIcon="Click To Select Image"
              clearable
              v-model="image"
              clearIcon="Clear Selection" /></v-row
        ></v-card>
        <!-- <v-file-input
          small-chips
          accept="image/*"
          label="File input"
          v-model="image"
        ></v-file-input> -->

        <v-card-actions class="mt-2">
          <v-btn color="primary" text @click="submit_dialog = false">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submitImage"> Upload </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import ImageInput from "vuetify-image-input";
export default {
  data: () => ({
    submit_dialog: false,
    image: null,
    image_data: null,
  }),
  components: {
    ImageInput,
  },
  methods: {
    submitImage() {
      this.submit_dialog = false;
      console.log(this.image);
    },

    //Convert Image To String Format
    // getBase64(file) {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve(reader.result);
    //     reader.onerror = (error) => reject(error);
    //   });
    // },
  },
};
</script>