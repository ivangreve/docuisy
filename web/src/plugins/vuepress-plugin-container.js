// .vuepress/config.js
module.exports = {
  plugins: [
    // you can use this plugin multiple times
    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: ""
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "theorem",
        before: (info) => `<div class="theorem"><p class="title">${info}</p>`,
        after: "</div>"
      }
    ],

    // this is how VuePress Default Theme use this plugin
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: {
          "/": "TIP",
          "/zh/": "sas"
        }
      }
    ]
  ]
}
