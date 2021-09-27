<template lang="pug">
  .actions
    button.actions__attack-button.heading(@click='DECREASE_STAT(kickAssData)')| Kick ass!
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data(){
    return{
      kickAssData:{
        damage: 36,
        energyCost: 15,
        actionPointsCost: 2,
      }
    }
  },
  methods:{
    ...mapMutations(['DECREASE_STAT'])
  }

}
</script>

<style lang="scss" scoped>
  .actions{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 33%;
  }
  .actions__attack-button{
    width: 200px;
    height: 50px;
    background-color: $violet;
    border-radius: 25px;
  }

</style>