<template lang="pug">
.page
  app-test-fight
</template>

<script>
import testFight from './components/test-fight.vue'

export default {
  components:{
    'app-test-fight': testFight,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .page{
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

</style>