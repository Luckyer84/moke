<template>
	<div class="path-container">
		<div class="path-headerall">
			<div class="path-header">
				<div class="tip">
						<p class="p1">Web前端攻城狮</p>
						<p class="p2">2个路径   1个套餐</p>
				</div>
				<div class="tip">
					<p class="p1">Java前端攻城狮</p>
					<p class="p2">3个路径   4个套餐</p>
				</div>
				<div class="tip">
					<p class="p1">Android前端攻城狮</p>
					<p class="p2">4个路径   7个套餐</p>
				</div>
				<div class="tip">
					<p class="p1">PHP前端攻城狮</p>
					<p class="p2">2个路径   3个套餐</p>
				</div>
			</div>
			<span class="path-line"></span>
		</div>
		<div class="path-body">
			<main-item></main-item>
		</div>
	</div>
</template>

<script>
	import pathMain from './path/pathMain'
	
	export default{
		components:{
			'main-item':pathMain
		}
	}
</script>

<style scoped>
	.path-container{
		overflow: scroll;
		width: 100%;
	}
	.path-header{
		display: flex;
		flex-flow: nowrap row;
		width: 50rem;
		margin-top: 1rem;
	}
	.tip{
		height: 4rem;
		width: 11rem;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		background-color: rgba(153,0,255,0.1);
		margin-right: 1rem;
		float: left;
	}
	.tip>p{
		margin: auto;
	}
	.p1{
		color: rgba(153,0,255,1);
	}
	.p2{
		color:rgba(153,0,255,0.5);
		transform: scale(0.7);
		-webkit-transform: scale(0.7);
	}
	.path-headerall:after{
		content: '';
		display: block;
		margin-top: 1.5rem;
		border:1px solid rgba(153,0,255,0.1);
		width:100%
	}
	.path-headerall{
		position: relative;
	}
	.path-line{
		display: block;
		border:1px solid rgba(153,0,255,0.5);
		position: absolute;
		bottom: 0;
		left: 0;
		width: 5rem;
	}
	.path-body{
		margin-top: 1.5rem;
	}
</style>