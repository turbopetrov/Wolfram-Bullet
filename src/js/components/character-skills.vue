<template lang="pug">
.skill
  p.skill__name.heading| {{ name }}:
  p.skill__value.heading| {{ basicValue }}
  p.skill__value-add.heading(:style="{color: 'var(--green)'}")| +{{ addValue }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Skill name",
    },
    basicValue: {
      type: Number,
      default: 0,
    },
    addValue: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .skill{
    display: flex;
    width: 250px;
    &__name{
      width: 60%;
    }
    &__value{
      display: flex;
      justify-content: center;
      width: 25%;
    }
    &__value-add{
      width: 25%;
    }
  }
</style>