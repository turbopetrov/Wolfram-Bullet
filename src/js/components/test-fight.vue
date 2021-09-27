<template lang="pug">
.test-fight
  .test-fight__inner-wrapper.blur
    .test-fight__screen
    app-control-panel
      app-character(characterClass= 'guard')
      app-character-actions
</template>

<script>
import controlPanel from "./control-panel.vue";
import character from './character.vue';
import characterActions from './character-actions.vue'
export default {
  components: {
    "app-control-panel": controlPanel,
    "app-character": character,
    "app-character-actions": characterActions,
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
  &__actions {
    width: 33%;
    height: 100%;

  }
}
</style>