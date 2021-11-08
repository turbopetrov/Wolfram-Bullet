<template lang="pug">
  .avatar
    .avatar__frame
      img.avatar__img(:src= '"assets/img/avatars/" + characterClass + ".png" ')

</template>

<script>
export default {
  props:{
    characterClass:{
      type:String,
      default: 'hunter'
    }
  },
  data(){
    return{

    }
  }

}
</script>

<style lang="scss" scoped>
  .avatar{
    width: 250px;
    height: 180px;
    &__frame{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: url('../../assets/img/coolFrame.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__img{
      width: auto;
      height: 80%;
    }
  }
</style>