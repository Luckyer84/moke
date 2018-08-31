<template>
	<div class="notes-head">
		<el-carousel indicator-position="outside" :interval="2000" arrow="always" height="10rem">
		    <el-carousel-item v-for="item in list">
		      <a href="#">
		      	<img :src="item.src" />
		      </a>
		      <div class="title">{{item.title}}</div>
		    </el-carousel-item>
 		</el-carousel>
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
	}
	el-carousel{
		position: relative;
	}
	.title{
		position: absolute;
		bottom:0;
		left: 0;
		padding: 0.5rem;
		z-index: 99;
		font-size:1.3rem ;
		color: white;
		background-color: rgba(0,0,0,0.2);
		width: 100%;
		overflow: hidden; /*自动隐藏文字*/
		text-overflow: ellipsis;/*文字隐藏后添加省略号*/
		white-space: nowrap;/*强制不换行*/
	}
</style>