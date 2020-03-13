<template>
    <div class="mine">
      这是我的页面
    </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      fActive:0
    }
  },
  mounted(){
    this.initData();
  },
  methods:{
    initData(){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
