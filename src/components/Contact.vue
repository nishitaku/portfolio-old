<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>ご連絡はメールまたはDMで</v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-img src="mail.png" max-width="217px" max-height="21"></v-img>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-twitter</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <a href="https://twitter.com/nishitaku_dev">@nishitaku_dev</a>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact'
};
</script>

