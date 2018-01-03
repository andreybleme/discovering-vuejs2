<template>
<div>
	<p>Server status: {{ status }}</p>
	<hr/>
	<button @click="changeStatus">Change Status</button>
</div>
	
</template>

<script type="text/javascript">
	export default {
		data: function () {
			return {
				status: 'Critical'
			}
		},
		methods: {
			changeStatus: function () {
				this.status = 'Normal';
			}
		}
	}
</script>

<style type="text/css"></style>