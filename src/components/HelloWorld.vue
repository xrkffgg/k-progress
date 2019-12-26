<template>
  <div>
    <k-progress :percent="pers" :color="getColor"></k-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pers: 10,
    }
  },

  mounted () {
    setTimeout(() =>{
      this.pers = 100
    },2000);
  },

  methods: {
    getColor(percent) {
      if(percent == 100){
        return '#40a9ff'
      } else {
        return '#9254de'
      }
    }
  },
}
</script>
