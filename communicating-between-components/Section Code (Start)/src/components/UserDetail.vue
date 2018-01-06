<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }} </p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name using CB function</button>
    </div>
</template>

<script>
	export default {
		props: {
			myName: {
				type: String,
				// required: true
				default: 'Lucas'
			},
			resetFn: Function
		},
		methods: {
			switchName: function () {
				return this.myName.split("").reverse().join("");
			},
			resetName: function () {
				this.myName = 'Lucas';
				this.$emit('nameWasReset', this.myName);
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
