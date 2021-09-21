<template lang="pug">
  .control-panel
    .control-panel__inner-wrapper
      slot
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
  .control-panel{
    box-sizing: border-box;
    width: 100vw;
    height: 40vh;
    background: $dark-grad;
    border: 10px solid $violet;
    &__inner-wrapper{      
      padding: 30px 50px;
    }
  }
</style>