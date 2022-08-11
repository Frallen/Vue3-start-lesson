<template>
<select v-model="modelValue" @change="changeOption">
  <option disabled value="">Выберите опцию</option>
  <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
</select>
</template>

<script>
export default {
  name: "select",
  props:{
    modelValue: {
      type:String,
    },
    options:{
      type:Array,
      //обозначааю что пришедшие массив для селекта может быть пустым
      default:()=>[]
    }
  },
  methods:{
    changeOption(event){
      this.$emit("update:modelValue",event.target.value)
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="less" scoped>

</style>