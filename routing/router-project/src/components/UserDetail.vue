<template>
	<div>
		<h1>Lucas Detail {{ id }}</h1>
  		<p>Hello I'm Lucas this is the Details page</p>
  		<button @click="goToUser">Go to user</button>
  		<router-link tag="button" :to="{ name: 'user-edit', params: { id: $route.params.id }, query: { locale: 'en'}}">Edit</router-link>
	</div>
</template>

<script>
export default {
  name: 'app',
  data () {
  	return {
  		id: this.$route.params.id
  	}
  },
  methods: {
  	goToUser () {
  		this.$router.push('/')
  	}
  }
}
</script>

<style>

</style>
