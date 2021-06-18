<template>
  <select @change="$emit('get-city', this.selected)" v-model="selected"  name="cities" id="">
    <option  v-for="city in cities" :value="city" :key="city">{{ city }}</option>
  </select>
  
</template>

<script>
export default {
  name: 'Cities',
  props: {
      cities: Array
  },
  data(){
      return {
         selected:'Taipei'
      }
  },
  methods:{
     
  },
 // emits:['get-city'],
  //emits: ['getCity'],  
}
</script>

<style></style>
