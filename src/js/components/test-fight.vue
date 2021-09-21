<template lang="pug">
.test-fight
  .test-fight__inner-wrapper.blur
    .test-fight__screen
    app-control-panel
      .test-fight__character
        .test-fight__character-wrapper
          app-character-avatar(characterClass="guard")
          .test-fight__character-skills
            app-character-skill.test-fight__skill(name="Strenght", :basicValue= 15, :addValue= 2)
            app-character-skill.test-fight__skill(name="Agility", :basicValue= 15, :addValue= 2)
            app-character-skill.test-fight__skill(name="Intellect", :basicValue= 15, :addValue= 2)
            app-character-skill.test-fight__skill(name="Charisma", :basicValue= 15, :addValue= 2)
        .test-fight__character-stats
          app-character-stat(statName="Health", color="red")
          app-character-stat(statName="Energy", color="yellow")
          app-character-stat(statName="Action points", color="blue")
</template>

<script>
import controlPanel from "./control-panel.vue";
import characterStat from "./character-stat.vue";
import characterSkill from "./character-skills.vue";
import characterAvatar from "./character-avatar.vue";
export default {
  components: {
    "app-control-panel": controlPanel,
    "app-character-stat": characterStat,
    "app-character-skill": characterSkill,
    "app-character-avatar": characterAvatar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.test-fight {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/img/bg.jpg");
  &__inner-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  &__screen {
    width: 100%;
    height: 60%;
  }
  &__character {
    width: 30%;
    &-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }

  &__character-skills {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  &__skill{
    margin-top: 15px;    
  }
  &__character-stats {
    width: 85%;
    margin-top: 20px;
  }
}
</style>