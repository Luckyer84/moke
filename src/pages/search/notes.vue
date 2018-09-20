<template>
	<div>
		<div class="notes-head">
			<el-carousel :interval="4000" indicator-position="outside" height="10rem">
			    <el-carousel-item v-for="item in list">
			      <a href="#">
			      	<img :src="item.src" />
			      </a>
			      <div class="title">{{item.title}}</div>
			    </el-carousel-item>
	 		</el-carousel>
		</div>
		<div class="background"></div>
		<div class="notes-body">
			<nav>
				<icon name="search-notes-liebiao" height="1.5rem" width="1.5rem"></icon>
				<router-link :to="{name:'recommend'}" class="nav-title">推荐</router-link>
				<router-link :to="{name:'information'}" class="nav-title">资讯</router-link>
				<router-link :to="{name:'news'}" class="nav-title">最新文章</router-link>
				<router-link :to="{name:'artificialIntelligence'}" class="nav-title">人工智能</router-link>
			</nav>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{src: require("../../images/search/search-shouji-roll1.jpg"),
					 title:'【Go语言干货】从入门说起，你必须要知道的'},
					{src: require("../../images/search/search-shouji-roll2.jpg"),
					title:'【实用】面对枯燥的源码，如何才能看得下去？'},
					{src: require("../../images/search/search-shouji-roll3.jpg"),
					title:'搞定JVM垃圾回收就是这么简单'},
					]
			}
		}
	}
</script>

<style scoped>
	.notes-head{
		margin: 1rem;
		height: 12rem;
	}
	el-carousel{
		position: relative;
	}
	.title{
		position: absolute;
		bottom:0;
		left: 0;
		padding: 0.5rem;
		box-sizing: border-box;
		z-index: 99;
		font-size:1.3rem ;
		color: white;
		background-color: rgba(0,0,0,0.2);
		width: 100%;
		overflow: hidden; /*自动隐藏文字*/
		text-overflow: ellipsis;/*文字隐藏后添加省略号*/
		white-space: nowrap;/*强制不换行*/
	}
	.notes-body{
		margin: 0 1.5rem 0 1.5rem;
	}
	.nav-title{
		font-size: 1.5rem;
		margin-right: 1.5rem;
		color: rgba(0,0,0,0.7);
	}
	.background{
		width: 100%;
		height: 0.5rem;
		background-color:rgba(0,0,0,0.1);
	}
	nav{
		position: relative;
		padding-bottom: 1rem;
		padding-top: 1rem;
	}
	nav:after{
		content: '';
		display: block;
		border: 0.3px solid rgba(0,0,0,0.1);
		position: absolute;
		bottom: 0;
		width: 100%;
	}
</style>