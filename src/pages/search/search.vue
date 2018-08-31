<template>
	<div class="search-all">
		<div class="search-head clearfix">
			<div class="search-head-left" @click="change">
				<div class="title first"><router-link :to="{name:'notes'}"><span>手记</span></router-link></div>
				<div class="title"><router-link :to="{name:'question',params:{id:1},query:{name:'jkl'}}"><span>猿问</span></router-link></div>
				<div class="title"><router-link :to="{name:'trend'}"><span>动态</span></router-link></div>
			</div>
			<div class="search-head-right">
				<icon name='search-sousuo' height="2rem" width="2rem"></icon>
			</div>
		</div>
		<div class="search-body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import {changeSize} from '../../mixins/home.js'
	export default{
		data(){
			return{
				isA:false,
			}
		},
		methods:{
			change(){
				changeSize()
			}
		}
		
	}
</script>

<style scoped>
	.search-head{
		padding: 3rem 1.5rem 1.5rem 1.5rem;
		background-color: rgba(0,0,0,0.7);
	}
	.search-head-left{
		display: flex;
		flex-direction: row;
		align-items:flex-end;
		float: left;
	}
	.title{
		color: white;
		font-size: 1.5rem;
		letter-spacing: 1px;
		margin-right: 1.5rem
	}
	.title span{
		color: white;
	}
	.first{
		font-size: 2rem;
	}
	.search-head-right{
		float: right;
	}
	.class-a{
		font-size: 2rem;	
	}
</style>