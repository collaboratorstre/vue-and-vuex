<template>
  <div id="app">
   <!--  <img src="./assets/logo.png">
    <hello></hello> -->
     <router-view></router-view>
     <nav>
     <div>
        <router-link to="/home">home</router-link>
     </div>
     <div>
       <router-link to="/market">market</router-link>
     </div>
     <div>
        <router-link to="/cart">cart<span class="mqt">{{qt1}}</span></router-link>
     </div>
     <div>
         <router-link to="/mine">mine</router-link>
     </div>
       
        
       
      
     </nav>
   
   
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  data(){
    return{
      qt:0
    }

  },
  computed:{
    qt1(){
      this.qt=this.$parent.$store.state.qt;
      return this.qt
    }
  }
}
</script>

<style type="text/css" scoped  lang="less">
#app{
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;

  nav{
    width:100%;
    height:60px;
    display:flex;
    justify-content:space-between;
    position:fixed;
    left:0;
    right:0;
    bottom:0; 
    background:#ccc;
    opacity:1;

    div{
      width:25%;
      text-align:center;
      line-height:60px;
      position:relative;
      .mqt{
        display:inline-block;
        width:20px;
        height:20px;
        border-radius:50%;
        border:1px red solid;
        color:red;
        text-align:center;
        line-height:20px;
        position:absolute;
        top:5px;
        right:5px;
      }
    }

  }
}
</style>
