<template>
	<div>{{id}}</div>
</template>

<script>
	export default{
		data(){
			return{
				id:''
			}
		},
		mounted(){
			let path=this.$route.query.name;
			this.id=path
		}
	}
</script>

<style>
</style>