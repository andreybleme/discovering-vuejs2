export const fruitMixin = {
  data () {
    return {
      msg: 'WELCOME TO YOUR VUE.JS APP',
      fruits: ['Banana', 'Apple', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits: function () {
      return this.fruits.filter((elem) => {
        return elem.match(this.filterText);
      })
    }  
  }
}