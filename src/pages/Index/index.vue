<template>
  <div>
    <p class="index-p">Index-index</p>
    <img src="~@/assets/images/jerry.png" alt="" srcset="">
  </div>
</template>
<script>
export default {
    name:"IndexIndex",
    created(){
      console.log(process.env.VUE_APP_BASE_API,'输出VUE_APP_BASE_API');
      
    }
}
</script>
<style>
@import '~@/assets/styles/component.css'
</style>