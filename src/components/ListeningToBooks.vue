<template>
    <div class="listeningToBooks">
        这是听书页面
    </div>
</template>

<script>
export default {
  name: 'ListeningToBooks',
  data () {
    return {
    }
  },
  mounted(){
    this.initData();
  },
  methods:{
    initData(){
      if(this.$route.path.indexOf("/listeningToBooks")>-1){
        this.fActive = 3
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
