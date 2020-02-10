<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
      prominent
      src="https://picsum.photos/1920/1080?random&grayscale"
      shrink-on-scroll
      scroll-target="#scrolling"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>
      <v-toolbar-title>nishitaku's portfolio</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs grow background-color="transparent">
          <v-tab to="/about">About</v-tab>
          <v-tab to="/works">Works</v-tab>
          <v-tab to="/skills">Skills</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <v-sheet id="scrolling" class="overflow-y-auto" max-height="100vh" color="transparent">
        <router-view></router-view>
      </v-sheet>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
