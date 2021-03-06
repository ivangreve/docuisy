import Vue from "vue"
import "highlight.js/styles/default.css"
import Highlight from "vue-markdown-highlight"
Vue.use(Highlight)

import VueMarkdownEditor from "@kangc/v-md-editor"
import enUS from "@kangc/v-md-editor/lib/lang/en-US"
import "@kangc/v-md-editor/lib/style/base-editor.css"
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js"

VueMarkdownEditor.use(vuepressTheme)
VueMarkdownEditor.lang.use("en-US", enUS)
Vue.use(VueMarkdownEditor)
