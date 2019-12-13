<template>
  <div>
    <k-progress :percent="50" ></k-progress>
    <k-progress :percent="60" :show-text="false" ></k-progress>
    <k-progress :percent="80" :format="format"></k-progress>
    <k-progress :percent="100" :format="format"></k-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['#22075e', '#c41d7f'],
    }
  },

  methods: {
    format(percent) {
      if(percent == 100){
        return '^_^'
      }
      return 'QAQ'
    }
  },
}
</script>
