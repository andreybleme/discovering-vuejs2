<template>
	<div>
		<h1>Lucas Edit {{ id }}</h1>
  		<p>Hello I'm Lucas this is the Edit page</p>
      <p>Query? {{ $route.query.locale }}</p>
  		<button @click="goToUser">Go to user</button>
      <button>Confirm</button>
      <div id="data" style="height: 700px;">Additional info</div>
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
