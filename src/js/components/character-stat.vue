<template lang="pug">
  .character-stat
    .character-stat__name.heading| {{statName}}:
    .character-stat__status-bar(
      :style="{background: `var(${'--' + color})`}"
    )
</template>

<script>
export default {
  props:{
    statName:{
      type: String,
      default: 'Some stat',
    },
    color:{
      type: String,
      default: 'red'
    }
  },
  data() {
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
  .character-stat{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
    &__status-bar{
      width: 300px;
      height: 10px;
      border-radius: 5px;
    }
  }
</style>