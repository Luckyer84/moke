<template>
	<div class="pratice-all">
		<div class="pratice-carousel">
			<el-carousel :interval="4000" indicator-position="outside"  height="100px">
	   			<el-carousel-item v-for="item in list" >
	      			 <a href="#">
	      			 	<img v-bind:src="item.src" />
	      			 </a>
	    		</el-carousel-item>
	 		 </el-carousel>
	 	</div>
	 	<div class="pratice-title">
	 		<div class="pratice-item">
	 		 	<a class="pratice-item-tip">
	 		 		<span>前言技术</span>
	 		 		<span class="tipclass">18门课</span>
	 		 	</a>
	 		 	<a class="pratice-item-tip">
	 		 		<span>前端开发</span>
	 		 		<span class="tipclass">46门课</span>
	 		 	</a>
	 		 	<a class="pratice-item-tip">
	 		 		<span>后端开发</span>
	 		 		<span class="tipclass">80门课</span>
	 		 	</a>
	 		 	<a class="pratice-item-tip">
	 		 		<span>移动开发</span>
	 		 		<span class="tipclass">17门课</span>
	 		 	</a>
	 		 	<a class="pratice-item-tip">
	 		 		<span>算法数学</span>
	 		 		<span class="tipclass">8门课</span>
	 		 	</a>
	 		 	<a class="pratice-item-tip">
	 		 		<span>数据库</span>
	 		 		<span class="tipclass">7门课</span>
	 		 	</a>
	 		 	<span class="pratice-line"></span>
	 		 </div>
	 	</div>
	 	<div class="pratice-body">
	 		<main-item></main-item>
	 	</div>
	</div>
</template>

<script>
	import praticeMain from './practice/praticeMain'
	
	export default{
		data(){
			return{
				list:[
					{src: require("../../images/home/pratice1.jpg")},
					{src: require("../../images/home/pratice2.jpg")},
					{src: require("../../images/home/pratice3.jpg")}
					]
			}
		},
		components:{
			'main-item':praticeMain
		}
	}
</script>

<style scoped>
	.pratice-all{
		width: 100%;
		overflow: scroll;
	}
	.pratice-item{
		display: flex;
		flex-flow: row nowrap;
		width: 45rem;
	}
	.pratice-item-tip{
		display: flex;
		flex-direction: column;
		
		padding: 0.5rem 1rem 0.5rem 1rem;
		background-color: rgba(255,204,0,0.2);
		border-radius: 0.5rem;
		margin-right: 0.5rem;
	}
	.pratice-item-tip>span{
		margin: auto;
		letter-spacing:2px; 
	}
	.tipclass{
		-webkit-transform: scale(0.7);
		transform: scale(0.7);
	}
	.pratice-title{
		position: relative;
	}
	.pratice-title:after{
		content: '';
		display: block;
		margin-top: 1.5rem;
		border:1px solid rgba(255,204,0,0.3);
		width: 100%;
	}
	.pratice-line{
		display: block;
		border:1px solid rgba(255,204,0,0.5);
		position: absolute;
		bottom: 0;
		left: 0;
		width: 5rem;
	}
</style>