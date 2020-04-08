<template>
  <div>
      <div>List-Detail</div>
      <p>{{deliveryValue}}</p>
      <p>{{toChildrenObj}}</p>
      <p>{{toChildrenArr}}</p>
  </div>
</template>

<script>
export default {
    props:['deliveryValue','toChildrenObj','toChildrenArr'],
    data(){
        return {
            test:{
                deliveryValue:"123"
            }
        }
    }
}
</script>

<style>

</style>