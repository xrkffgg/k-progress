<template lang="pug">
  .k-progress
    .k-progress-outer
      .k-progress-outer-bg(:class="border ? 'k-progress-outer-bg-border' : ''" :style="getOuterStyle()")
      .k-progress-outer-line(:id="`k-progress-line-${idNow}`" :class="status ? 'k-progress-outer-line-' + status : ''" :style="getLineStyle()")
        .k-progress-outer-line-active(v-if="active" :style="getActiveStyle()")
      .k-progress-outer-cut(v-if="type === 'lump'" :style="getCutStyle()")
        div(v-for="item in items" :key="item" :style="getCutBarStyle()")
    .k-progress-text(v-if="showText") {{ content }}
</template>

<script>
export default {
  name: 'KProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    showText: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: '#ebeef5'
    },
    cutColor: {
      type: String,
      default: '#ebeef5'
    },
    cutWidth: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: 'line',
      validator: val => ['line', 'lump',].indexOf(val) > -1
    },
    border: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      validator: val => ['success', 'warning', 'error'].indexOf(val) > -1
    },
    lineHeight: {
      type: Number,
      default: 6
    },
    color: {
      type: [String, Array, Function],
      default: ''
    },
    colorFlow: {
      type: Boolean,
      default: false
    },
    flowSecond: {
      type: Number,
      default: 5,
      validator: val => val => [1, 2, 3, 4, 5, 6].indexOf(val) > -1
    },
    activeColor: {
      type: [String, Array],
      default: ''
    },
    format: Function
  },
  data() {
    return {
      items: [],
      idNow: '',
    }
  },
  computed: {
    content() {
      if (typeof this.format === 'function') {
        return this.format(this.percent) || '';
      } else {
        return `${this.percent}%`;
      }
    }
  },
  mounted () {
    if (this.type === 'lump') {
      this.countCut()
    }
    this.idNow = this.getUUID()
  },
  methods: {
    getOuterStyle(){
      let result = '';
      result += `background: ${this.bgColor};`;
      result += `height: ${this.lineHeight}px;`;
      return result;
    },

    getLineStyle() {
      let result = '';
      result += `width: ${this.percent}%;`;
      result += `height: ${this.lineHeight}px;margin-top: -${this.lineHeight}px;`;
      if (this.color) {
        if (typeof(this.color) === 'string') {
          result += `background: ${this.color};`;
        } else if (Array.isArray(this.color) && (this.color.length < 7)) {
          // 只取 6 种颜色
          let colors = '';
          let i = this.color.length;
          this.color.map((co, index) =>{ index === i - 1 ? colors += co : colors += co + ', ' })
          result += `background: linear-gradient(to right, ${colors});`;
        } else if (typeof(this.color) === 'function') {
          result += `background: ${this.color(this.percent)};`;
        }
      }
      if(!this.border){
        result += `border-radius: 0px`;
      }
      if(this.colorFlow){
        result += `animation: kp-flow ${this.flowSecond}s linear infinite`;
      }
      return result;
    },

    getActiveStyle() {
      let result = '';
      if (this.activeColor) {
        if (typeof(this.activeColor) === 'string') {
          result = `background: ${this.activeColor};`;
        }
      }
      return result;
    },

    countCut() {
      const that = this;
      let kpl = document.getElementById(`k-progress-line-${this.idNow}`)
      let kplSet = setInterval(() =>{
        kpl = document.getElementById(`k-progress-line-${this.idNow}`)
        if(kpl){
          clearInterval(kplSet);
          let lno = parseInt(kpl.offsetWidth / (that.lineHeight + that.cutWidth));
          that.items = [...Array(lno).keys()];
        }
      }, 1)
    },

    getCutStyle() {
      let result = '';
      result += `height: ${this.lineHeight}px; margin-top: -${this.lineHeight}px;`;
      return result;
    },

    getCutBarStyle() {
      let result = '';
      result += `width: ${this.lineHeight}px;`;
      result += `border-right: ${this.cutWidth}px solid ${this.cutColor};`;
      return result;
    },

    getUUID () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
      })
    },
  },
}
</script>