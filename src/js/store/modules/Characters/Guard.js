export default{
  state:{
    guard:{
      stats:[
        {
          id: 1,
          name: 'health',
          startValue: 100,
          currentValue: 100,
          color: 'red'
        },
        {
          id: 2,
          name: 'energy',
          startValue: 100,
          currentValue: 100,
          color: 'yellow'
        },
        {
          id: 3,
          name: 'actionPoints',
          startValue: 10,
          currentValue: 10,
          color: 'blue'
        }
      ],
      skills:[
        {
          id: 1,
          name: 'attack',
          value: 10
        },
        {
          id: 2,
          name: 'rAttack',
          value: 20
        },
        {
          id: 3,
          name: 'defense',
          value: 30
        },
        {
          id: 4,
          name: 'x_Skill',
          value: 50},
      ]
      },
  },

  getters:{
    guard(state){
      return state.guard
    },
    guardSkills(state){
      return state.guard.skills
    },
    guardStats(state){
      return state.guard.stats
    },
   
  },
  mutations:{
    INCREASE_STAT(state, playload){
      return state.guard[statName]+=value;
    },
    DECREASE_STAT(state, playload){
      let stat = state.guard.stats.find(stat=>stat.name===playload.statName);
      stat.currentValue -= playload.value
      
    }
  }
}