<template lang="pug">
  .character.heading|
    .character__wrapper
      app-character-avatar(:characterClass= 'characterClass')
      .character__skills
        app-character-skill.character__skill(
          v-for='skill in guardSkills',
          :key='skill.id',
          :name='skill.name',
          :basicValue='skill.value'
        )
    .character__stats
      app-character-stat(
        v-for='stat in guardStats',
        :key='stat.id',
        :statName='stat.name',
        :color='stat.color'
        )

</template>

<script>
import { mapGetters } from 'vuex';
import characterStat from "./character-stat.vue";
import characterSkill from "./character-skills.vue";
import characterAvatar from "./character-avatar.vue";
export default {
  components:{
    "app-character-stat": characterStat,
    "app-character-skill": characterSkill,
    "app-character-avatar": characterAvatar,
  },
  props:{
    characterClass:{
      type: String,
      default: 'hunter',
    }
  },
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['guard','guardSkills','guardStats']),
  }
}
</script>

<style lang="scss" scoped>
  .character{
    width: 33%;
    height: 100%;
    &__wrapper{
      display: flex;
      justify-content: space-between;
    }
    &__skills{
      display: flex;
      flex-direction: column;
      justify-content: start;
    }
    &__skill:not(:first-child){
      margin-top: 15px;
    }
    &__stats{
      width: 85%;
      margin-top: 20px;
    }

  }
</style>