<template>
 <div class="container">
   <div class="row">
    <server-header></server-header>
   </div>
   
   <hr>
   
   <div class="row">
    <server-body></server-body>
   </div>
   
   <hr>
   
   <div class="row">
    <server-footer></server-footer>
   </div>
 </div>
</template>

<script>
  import ServerHeader from './components/Shared/ServerHeader.vue'
  import ServerBody from './components/Server/ServerBody.vue'
  import ServerFooter from './components/Shared/ServerFooter.vue'
 
  export default {
    components: {
      'server-header': ServerHeader,
      'server-body': ServerBody,
      'server-footer': ServerFooter
    }
 }
</script>

<style>
</style>