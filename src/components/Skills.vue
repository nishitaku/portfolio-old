<template>
  <v-container>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="skill in skills" v-bind:key="skill.type">
        <v-expansion-panel-header color="teal lighten-5">{{
          skill.type
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item v-for="datum in skill.data" v-bind:key="datum.name">
              <v-list-item-title>{{ datum.name }}</v-list-item-title>
              <v-rating readonly :value="datum.rating" dense></v-rating>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header color="teal lighten-5"
          >資格</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <v-list two-line>
            <v-list-item v-for="cert in certifications" v-bind:key="cert.name">
              <v-list-item-content>
                <v-list-item-title>{{ cert.name }}</v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
                <span>{{ cert.date }}</span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: 'Skills',
  data: function() {
    return {
      skills: [
        {
          type: '言語',
          data: [
            {
              name: 'TypeScript',
              rating: 4
            },
            {
              name: 'Swift',
              rating: 3
            },
            {
              name: 'Java',
              rating: 2
            },
            {
              name: 'C/C++',
              rating: 2
            },
            {
              name: 'Python 3',
              rating: 2
            },
          ]
        },
        {
          type: 'プラットフォーム',
          data: [
            {
              name: 'Web',
              rating: 4
            },
            {
              name: 'iOS',
              rating: 3
            },
            {
              name: 'Android',
              rating: 2
            },
          ]
        },
        {
          type: 'フロントエンドフレームワーク',
          data: [
            {
              name: 'Angular',
              rating: 5
            },
            {
              name: 'Vue.js',
              rating: 3
            },
            {
              name: 'React',
              rating: 2
            }
          ]
        },
        {
          type: 'Webアプリケーションフレームワーク',
          data: [
            {
              name: 'Express',
              rating: 4
            },
            {
              name: 'Nest.js',
              rating: 4
            },
            {
              name: 'Django',
              rating: 2
            },
            {
              name: 'Flask',
              rating: 2
            }
          ]
        },
        {
          type: 'CSSフレームワーク',
          data: [
            {
              name: 'Angular Material',
              rating: 3
            },
            {
              name: 'Tailwind CSS',
              rating: 3
            },
            {
              name: 'Vuetify',
              rating: 2
            },
            {
              name: 'Bulma',
              rating: 2
            },
            {
              name: 'Buetify',
              rating: 2
            },
            {
              name: 'Material-UI',
              rating: 2
            },
            {
              name: 'PrimeNG',
              rating: 2
            },
          ]
        },
        {
          type: 'クラウドサービス',
          data: [
            {
              name: 'Firebase',
              rating: 4
            },
            {
              name: 'AWS',
              rating: 3
            },
            {
              name: 'IBM Cloud',
              rating: 2
            },
            {
              name: 'Twilio',
              rating: 2
            }
          ]
        }
      ],
      certifications: [
        {
          name: '応用情報技術者',
          date: '2011年4月'
        },
        {
          name: 'セキュリティスペシャリスト',
          date: '2012年10月'
        },
        {
          name: 'データベーススペシャリスト',
          date: '2014年4月'
        },
        {
          name: 'ネットワークスペシャリスト',
          date: '2015年10月'
        },
        {
          name: '銀行業務検定 外為3級',
          date: '2015年3月'
        }
      ]
    };
  }
};
</script>
