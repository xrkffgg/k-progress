<template>
  <div>
    <k-progress 
      status="success" 
      type="line"
      :percent="20" >
    </k-progress>
    <k-progress 
      active 
      status="error" 
      type="lump"
      :cut-width="4"
      :percent="50" >
    </k-progress>
    <k-progress 
      active 
      status="error" 
      type="line"
      :border="false"
      :color="['#40a9ff', '#5cdbd3']"
      :percent="60" >
    </k-progress>
    <k-progress 
      active 
      status="error" 
      type="lump"
      :border="false"
      :line-height="8"
      :cut-width="4"
      :cut-color="'#40a9ff'"
      :color="['#f5af19', '#f12711']"
      :percent="80" >
    </k-progress>

     <k-progress  
      type="line"
      :color-flow="true"
      :flow-second="2"
      :color="['#40a9ff', '#5cdbd3', '#cf1322', '#722ed1']"
      :percent="60" >
    </k-progress>

    <k-progress  
      type="line"
      :color-flow="true"
      :color="['#40a9ff', '#5cdbd3', '#cf1322', '#722ed1']"
      :percent="60" >
    </k-progress>

    <k-progress 
      active 
      status="error" 
      type="lump"
      :border="false"
      :color="['#40a9ff', '#5cdbd3', '#cf1322', '#722ed1']"
      :percent="60" >
    </k-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  methods: {
  },
}
</script>
