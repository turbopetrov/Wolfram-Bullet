<template lang="pug">
  .character-stat
    .character-stat__name.heading| {{statName}}:
    .character-stat__status-bar.paragraph_xs
      .character-stat__status-bar-fill(
      :style="{background: `var(${'--' + color})`, width: `${valueInProcent+'%'}`}"
    )| {{valueInProcent + '%'}}
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex'
export default {
  props:{
    statName:{
      type: String,
      default: 'Some stat',
    },
    color:{
      type: String,
      default: 'red'
    },
  },
  data() {
    return{
      currentValue: '',
    }
  },
  computed:{
    ...mapGetters(['guardStats']),
    valueInProcent(){
      let currentValue = this.guardStats.find(stat=>stat.name === this.statName).currentValue;
      let startValue = this.guardStats.find(stat=>stat.name===this.statName).startValue;
      return currentValue/startValue*100
    }
  },
  methods:{
    ...mapMutations(['INCREASE_STAT','DECREASE_STAT'])
  },
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
    &__status-bar-fill{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      transition: .5s;
      text-align: center;
    }
  }
  .btn{
    width: 40px;
    height: 10px;
  }
</style>