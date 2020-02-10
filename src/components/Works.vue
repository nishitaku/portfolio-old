<template>
  <v-container>
    <v-switch label="新しい順" v-on:change="works.reverse()"></v-switch>
    <v-timeline :dense="isMobile">
      <v-timeline-item v-for="work in works" v-bind:key="work.span">
        <span v-if="!isMobile" slot="opposite">{{work.span}}</span>
        <v-card class="elevation-2" v-if="work.title">
          <v-card-title class="headline">{{work.title}}</v-card-title>
          <v-card-subtitle v-if="isMobile">{{work.span}}</v-card-subtitle>
          <v-card-text v-if="work.summary || work.items || work.techs">
            <p v-if="work.summary">{{work.summary}}</p>
            <div v-if="work.link">
              <a
                href="https://play.google.com/store/apps/details?id=com.swimmy_ss.app.triathlon&hl=ja&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              >
                <img
                  alt="Google Play で手に入れよう"
                  src="https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png"
                  width="200"
                />
              </a>
            </div>
            <v-chip-group column v-if="work.techs">
              <v-chip v-for="tech in work.techs" v-bind:key="tech">{{tech}}</v-chip>
            </v-chip-group>
            <ul>
              <li v-for="item in work.items" v-bind:key="item.text">
                {{item.text}}
                <v-chip-group column>
                  <v-chip v-for="tech in item.techs" v-bind:key="tech">{{tech}}</v-chip>
                </v-chip-group>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "Works",
  data: function() {
    return {
      works: [
        {
          title: "株式会社日立製作所に入社",
          span: "2011年4月"
        },
        {
          title: "メガバンク勘定系システム開発",
          span: "2011年4月〜2016年2月",
          summary:
            "要件定義から参画した巨大プロジェクト。準備作業から設計、実装、テストまで一通り経験。",
          items: [
            {
              text: "手順書及び各種基準書の整備"
            },
            {
              text: "ツール開発",
              techs: ["C#", "VBA", "PostgreSQL"]
            },
            {
              text: "共通フレームワークの開発",
              techs: ["Java", "Oracle"]
            },
            {
              text: "結合テスト管理"
            }
          ]
        },
        {
          title: "メガバンク送金システム開発",
          span: "2016年3月〜2016年10月",
          summary:
            "支援のため参画した巨大プロジェクトパート2。開発はバックエンドを少し。主に結合テスト管理を担当。",
          techs: ["Java"]
        },
        {
          title: "独立してフリーランスに",
          span: "2016年11月"
        },
        {
          title: "カラオケ機器開発",
          span: "2016年11月〜2018年3月",
          summary:
            "旧機種の機能追加、新機種の開発、生産工程及び市場不具合の調査、修正を担当",
          techs: ["Android 2.1", "Android 4.4", "C", "JavaScript"]
        },
        {
          title: "電力需要予測エンジン開発",
          span: "2018年5月〜2018年6月",
          summary: "過去の需要量や気象データを元に、LSTMでモデル作成",
          techs: ["Python 3", "Keras"]
        },
        {
          title: "印刷テスト自動化",
          span: "2018年4月〜2018年7月",
          summary: "iOS、Androidからの印刷テストをAppiumで自動化",
          techs: ["Java", "Python 3", "Appium"]
        },
        {
          title: "Google Assistant 印刷アプリ開発",
          span: "2018年7月〜2018年10月",
          summary:
            "Google AssistantからGoogle Driveに保存したファイルを印刷するVUIアプリケーション",
          techs: [
            "Directflow",
            "Actions on Google",
            "Node.js",
            "Express",
            "JavaScript",
            "MongoDB"
          ]
        },
        {
          title: "脆弱性情報チェックシステム開発",
          span: "2018年9月〜2018年12月",
          summary:
            "NVD及びJVNが提供する脆弱性情報データベースを元に、関連する脆弱性情報を取得するWebアプリケーション",
          techs: ["Python 3", "Django", "JavaScript"]
        },
        {
          title: "Web会議システムクラウド移行",
          span: "2018年10月〜2018年12月",
          summary: "オンデマンドをAWSへ移行。DBサーバの構築を主に担当",
          techs: ["SQL Server", "WSFC"]
        },
        {
          title: "旅行LINEアプリ開発",
          span: "2018年10月〜2018年10月",
          summary:
            "ハッカソン向けに開発。LINEグループで旅行計画を共有するLIFFアプリケーション",
          techs: ["LIFF", "Javascript", "Python3", "Flask"]
        },
        {
          title: "トライアスロン目標設定アプリ開発",
          span: "2018年11月〜2019年11月",
          summary: "iOS/Androidアプリ。設計から開発、リリース作業まで担当",
          link: true,
          techs: ["React Native", "Expo"]
        },
        {
          title: "通信販売基幹システム開発",
          span: "2019年1月〜2019年6月",
          summary:
            "楽天、Yahoo!ショッピングなどのショッピングサイトの注文情報、在庫情報を管理するWebアプリケーション",
          techs: ["Angular 7", "Nest.js", "MongoDB", "GCP"]
        },
        {
          title: "木材検査システムGUI開発",
          span: "2019年7月〜2020年2月",
          summary:
            "既存のシステムが保存した木材画像を表示したり、検査シミュレーションするためのWebアプリケーション",
          techs: ["Angular 8", "Express", "MongoDB"]
        },
        {
          title: "カラオケ機器開発",
          span: "2019年10月〜2020年1月",
          summary: "既存機種の機能追加",
          techs: ["C", "JavaScript", "Android 2.1"]
        },
        {
          title: "カラオケ電源制御アプリGUI開発",
          span: "2019年12月〜2020年1月",
          summary: "カラオケ機器の電源ON/OFFを管理するWebアプリケーション",
          techs: ["Vue.js", "Java"]
        },
        {
          title: "カラオケLINE予約アプリ開発",
          span: "2020年2月〜2020年3月",
          summary: "カラオケ店舗の空室検索、予約するLINEアプリケーション",
          techs: ["Vue.js", "LIFF", "Firebase"]
        },
        {
          title: "カードゲームシステム開発",
          span: "2020年1月〜2020年2月",
          summary:
            "ハッカソン向けに開発。手札と場のシームレスなカード移動を、Firestoreを使って実現",
          techs: ["React", "Firebase"]
        }
      ]
    };
  },
  computed: {
    isMobile() {
      const mobileBreakpoints = ["xs", "sm"];
      return mobileBreakpoints.some(e => this.$vuetify.breakpoint.name === e);
    }
  }
};
</script>
