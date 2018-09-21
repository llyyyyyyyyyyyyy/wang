<template>
<div>
    {{content}}
</div>
</template>
<script>
import wangeditor from './wangeditor'
export default {
    data(){
        return{
            content:[]
        }
    },
    components:{
        wangeditor
    },
    methods:{
    catchData(){
          this.content=value      //在这里接受子组件传过来的参数，赋值给data里的参数
        }
  },
}
</script>
<style lang="scss" scoped>

</style>
