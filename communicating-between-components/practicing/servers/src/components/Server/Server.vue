<template>
    <li 
    	class="list-group-item"
    	style="cursor: pointer"
    	@click="serverSelected">
        Server #{{ server.id }}
    </li>
</template>

<script type="text/javascript">

import { serverBus } from '../../main';

export default {
	props: ['server'],
	methods: {
		serverSelected: function () {
			serverBus.$emit('serverSelected', this.server);
		}
	}
}
</script>

<style type="text/css"></style>