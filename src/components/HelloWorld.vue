<template>
  <div>
    <k-progress
      :percent="50"
      :show-text="true" 
      active
      :format="fooo"
      :active-color="colors"
      :line-height="10">
    </k-progress>
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
    fooo(percent) {
      return percent + '百分'
    }
  },
}
</script>
