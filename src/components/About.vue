<template>
  <v-container>
    <v-row justify="center">
      <v-card max-width="400px">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>
        <v-card-text>
          <v-row dense justify="center">
            <v-col cols="4" class="text-right mr-3">Name</v-col>
            <v-col cols="7" class="text-left ml-3"
              >西濃 拓郎 (Takuro Nishino)</v-col
            >
          </v-row>
          <v-row dense justify="center">
            <v-col cols="4" class="text-right mr-3">University</v-col>
            <v-col cols="7" class="text-left ml-3"
              >神戸大学大学院工学研究科</v-col
            >
          </v-row>
          <v-row dense justify="center">
            <v-col cols="4" class="text-right mr-3">GitHub</v-col>
            <v-col cols="7" class="text-left ml-3">
              <a href="https://github.com/nishitaku">nishitaku</a>
            </v-col>
          </v-row>
          <v-row dense justify="center">
            <v-col cols="4" class="text-right mr-3">Bitbucket</v-col>
            <v-col cols="7" class="text-left ml-3">
              <a href="https://bitbucket.org/nishitaku/">nishitaku</a>
            </v-col>
          </v-row>
          <v-row dense justify="center">
            <v-col cols="4" class="text-right mr-3">Qiita</v-col>
            <v-col cols="7" class="text-left ml-3">
              <a href="https://qiita.com/nishitaku">nishitaku</a>
            </v-col>
          </v-row>
          <v-row dense justify="center">
            <v-col cols="4" class="text-right mr-3">Twitter</v-col>
            <v-col cols="7" class="text-left ml-3">
              <a href="https://twitter.com/nishitaku_dev">nishitaku</a>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About'
};
</script>
