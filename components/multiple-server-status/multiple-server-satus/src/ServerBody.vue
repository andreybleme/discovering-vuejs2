<template>
 <div>
 <server-info></server-info>
 <server-details></server-details>
 </div>
</template>

<script>
 	import ServerInfo from './ServerInfo.vue'
 	import ServerDetails from './ServerDetails.vue'
 	
 	export default {
 		components: {
 			'server-info': ServerInfo,
 			'server-details': ServerDetails,
 		}
 	}
</script>