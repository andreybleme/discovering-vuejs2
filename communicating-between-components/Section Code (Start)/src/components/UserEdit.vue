<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
	methods: {
		editAge: function () {
			eventBus.$emit('ageWasEdited', this.userAge);
		}
	}
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
