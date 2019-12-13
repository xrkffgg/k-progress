<template>
  <div
    class="k-progress">
    <div 
      class="k-progress-outer">
      <div
        class="k-progress-outer-bg"
        :style="'background:' + bgColor + '; height:' + lineHeight + 'px;'">
      </div>
      <div 
        class="k-progress-outer-line"
        :class="type ? 'k-progress-outer-line-' + type : ''"
        :style="getLineStyle()">
        <div 
          :class="active ? 'k-progress-outer-line-active' : ''"
          :style="getActiveStyle()">
        </div>
      </div>
    </div>
    <div 
      class="k-progress-text"
      v-if="showText">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'kProgress',
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
    type: {
      type: String,
      validator: val => ['success', 'warning', 'error'].indexOf(val) > -1
    },
    lineHeight: {
      type: Number,
      default: 6
    },
    color: {
      type: [String, Array],
      default: ''
    },
    activeColor: {
      type: [String, Array],
      default: ''
    },
    format: Function
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
  methods: {
    getLineStyle() {
      let result = '';
      result += `width: ${this.percent}%;`;
      if(this.lineHeight){
        result += `height: ${this.lineHeight}px; margin-top: -${this.lineHeight}px;`;
      }
      if(this.color){
        if (typeof(this.color) === 'string') {
          result += `background: ${this.color};`;
        } else if (typeof(this.color) === 'object' && this.color.length == 2) {
          result += `background: linear-gradient(90deg, ${this.color[0]} 0%, ${this.color[1]} 100%);`;
        }
      }
      return result;
    },
    getActiveStyle() {
      let result = '';
      if(this.activeColor){
        if (typeof(this.activeColor) === 'string') {
          result += `background: ${this.activeColor};`;
        } else if (typeof(this.activeColor) === 'object' && this.activeColor.length == 2) {
          result += `background: linear-gradient(90deg, ${this.activeColor[0]} 0%, ${this.activeColor[1]} 100%);`;
        }
      }
      return result;
    },
  },
}
</script>

<style lang="scss">
$default-color: #409eff;
$success-color: #67c23a;
$warning-color: #e6a23c;
$error-color: #f56c6c;

  .k-progress {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #606266;
    font-size: 14px;
    line-height: 1.5;
    margin-right: 8px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    &-outer {
      width: calc(100% - 55px);
      &-bg {
        width: 100%;
        position: relative;
        z-index: -1;
        border-radius: 100px;
      }
      &-line {
        background: $default-color;
        border-radius: 100px;
        transition: all .4s cubic-bezier(.08, .82, .17, 1) 0s;
        &-success {
          background: $success-color;
        }
        &-warning {
          background: $warning-color;
        }
        &-error {
          background: $error-color;
        }
        &-active {
          background: #fff;
          height: inherit;
          border-radius: 10px;
          opacity: 0;
          animation: progress-active 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
          content: '';
        }
      }
    }

    &-text {
      width: 55px;
      margin-left: 10px;
      text-align: left;
      word-break: keep-all;
    }
  }

@keyframes progress-active {
  0% {
    width: 0;
    opacity: 0.2;
  }
  30% {
    width: 0;
    opacity: 0.6;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
</style>