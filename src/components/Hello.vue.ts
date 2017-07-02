import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './Hello.html?style=./Hello.scss'

import {Prop} from 'vue-property-decorator'

@WithRender
@Component
export default class Hello extends Vue {
  @Prop({type: Boolean, default: false})
  links: boolean

  @Prop({type: Boolean, default: false})
  ecosystem: boolean

  msg = 'Welcome 2 Your Vue.js App'
}
