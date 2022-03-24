
<template>
 
    <!-- <HeaderComponent title="To-Do"/>  -->

    <div id="content">
    <router-view/>
    </div>

  

</template>
 <style>
 #content{
   padding: auto;
   font-size: 13px;
   margin: 50px;
 }
 </style>
<script>
//import HeaderComponent from './components/HeaderComponent.vue';


export default {
  name: 'App',
  components: {
    //HeaderComponent,
    
  }
}
</script>







    HeaderComponent