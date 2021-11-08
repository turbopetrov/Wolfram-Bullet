<template lang="pug">
  .actions
    button.actions__attack-button.heading(@click='action')| Kick ass!
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data(){
    return{
      kickAssData:{
        damage: 36,
        energyCost: 16,
        actionPointsCost: 3,
      }
    }
  },
  methods:{
    ...mapMutations(['DECREASE_STAT']),
    action(){
      this.$emit('kickAss', this.kickAssData);
    }
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