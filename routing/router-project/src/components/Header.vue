<template>
	<ul class="nav">
	    <router-link to="/" tag="li" active-class="active" exact>Home</router-link>
	    <router-link to="/user-detail" tag="li" active-class="active">Link</router-link>
	</ul>
</template>
<style type="text/css">
.active {
  color: #42b983;
}
</style>