<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" v-for="cert in certifications" v-bind:key="cert.name">
        <v-card class="elevation-2">
          <v-card-title>
            <v-icon large left>mdi-seal</v-icon>
            <span class="title">{{cert.name}}</span>
          </v-card-title>
          <v-card-subtitle>
            <span>{{cert.date}}</span>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
  data: function() {
    return {
      certifications: [
        {
          name: "応用情報技術者",
          date: "2011年4月"
        },
        {
          name: "セキュリティスペシャリスト",
          date: "2012年10月"
        },
        {
          name: "データベーススペシャリスト",
          date: "2014年4月"
        },
        {
          name: "ネットワークスペシャリスト",
          date: "2015年10月"
        },
        {
          name: "銀行業務検定 外為3級",
          date: "2015年3月"
        }
      ]
    };
  }
};
</script>
