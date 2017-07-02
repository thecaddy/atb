import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './TextBox.html?style=./TextBox.scss'

import {Prop} from 'vue-property-decorator'

@WithRender
@Component
export default class TextBox extends Vue {
}

Vue.component('another-text-box', TextBox)
