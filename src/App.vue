<template>
  <v-app>
    <v-main>
      <v-card
        ><v-navigation-drawer permanent app>
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img
                  src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1200"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Super User
                </v-list-item-title>
                <v-list-item-subtitle>superuser@mail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <router-link style="text-decoration: none; color: inherit" to="/">
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="green darken-1">mdi-domain</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item></router-link
            >
            <router-link
              style="text-decoration: none; color: inherit"
              to="/pending"
            >
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="green darken-1">mdi-selection-search</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Pending</v-list-item-title>
              </v-list-item></router-link
            >
            <router-link
              style="text-decoration: none; color: inherit"
              to="/archive"
            >
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="green darken-1">mdi-archive</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Archive</v-list-item-title>
              </v-list-item></router-link
            >
          </v-list>
        </v-navigation-drawer></v-card
      >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
};
</script>
