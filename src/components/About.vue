<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>PROFLIE</v-card-title>
          <v-card-text>
            <v-row
              dense
              justify="center"
              v-for="profile in profiles"
              v-bind:key="profile.name"
            >
              <v-col cols="4" class="text-right mr-3">{{ profile.name }}</v-col>
              <v-col cols="7" class="text-left ml-3">{{ profile.value }}</v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon href="https://github.com/nishitaku">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn icon href="https://bitbucket.org/nishitaku">
              <v-icon>mdi-bitbucket</v-icon>
            </v-btn>
            <v-btn icon href="https://twitter.com/nishitaku_dev">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon href="https://qiita.com/nishitaku">
              <v-img src="qiita-favicon.png" width="20px"></v-img>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>SPECIALTY</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                two-line
                v-for="specialty in specialties"
                v-bind:key="specialty.title"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ specialty.title }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="summary"
                    v-html="specialty.summary"
                  ></v-list-item-subtitle>
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
  name: 'About',
  data: function() {
    return {
      profiles: [
        {
          name: '名前',
          value: 'nishitaku'
        },
        {
          name: '職業',
          value: 'フリーランスエンジニア'
        },
        {
          name: '拠点',
          value: '岐阜'
        },
        {
          name: '学歴',
          value: '神戸大学大学院'
        }
      ],
      specialties: [
        {
          title: 'フロントエンド',
          summary: '<li>Angularを使ったSPA開発</li>'
        },
        {
          title: 'バックエンド',
          summary: '<li>業務ロジックの設計、開発</li><li>DB設計</li>'
        },
        {
          title: 'クラウドサービスの活用',
          summary: '<>Firebase</><li>AWS</li>'
        },
        {
          title: 'スマホアプリ',
          summary: '<li>Android</li><li>Swift</li>'
        }
      ]
    };
  }
};
</script>

<style scoped>
.summary {
  white-space: normal;
}
</style>
