<template>
	<div id="home-container" >
		<div class="home-header">
			<el-badge :is-dot="isShow" class="item">
				<icon name="home-cart" height="1.5rem" width="1.5rem"></icon>
			</el-badge>
			<div class="header-searchbox">人工智能&nbsp;小程序&nbsp;Python</div>
			<icon name="home-history" height="1.5rem" width="1.5rem"></icon>
		</div>
		<div>	
			<nav @click="mode">
				<div  class="t">
					<router-link :to="{name:'commend'}" tag="div">
						<icon name="recom" height="1.5rem" width="1.5rem"></icon>
						<span  class="tag" style="color: red;">推荐</span>
					</router-link>
				</div>
				<div  class="t">
					<router-link :to="{name:'course'}" tag="div">
						<icon name="class" height="1.5rem" width="1.5rem"></icon>
						<span  class="tag">课程</span>
					</router-link>
				</div>
				<div  class="t">
					<router-link :to="{name:'path'}" tag="div">
						<icon name="path" height="1.5rem" width="1.5rem"></icon>
						<span class="tag">路径</span>
					</router-link>
				</div>
				<div  class="t">
					<router-link :to="{name:'practice'}" tag="div">
						<icon name="study" height="1.5rem" width="1.5rem"></icon>
						<span class="tag">实战</span>
					</router-link>
				</div>
			</nav>
			<div class="underline"></div>
		</div>
		<div class="home-body">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	import {move} from'../../mixins/home.js'
	import commend from'./commend'
	import course from'./course'
	
	export default{
		data (){
			return {
				isShow:true
			}
		},
		methods:{
			mode:function(){
				move()
			}
		},

		components:{
			'commend-item':commend,
			'course-item':course
		}
	}
</script>

<style scoped>
	.home-header{
		background-color:red ;
		padding:2rem 1rem 0.5rem 1rem;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}
	.header-searchbox{
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		width: 80%;
		border-radius:2rem;
		text-align: center;
		color: rgba(255,255,255,0.7);
		background-color: rgba(100,100,100,0.1);
		border: 1px solid rgba(0,0,0,0.1);
	}
	nav{
		display: flex;
		flex-direction: row;
		padding: 1.5rem 0 1.5rem 1.5rem;
	}
	nav>div{
		display: flex;
		align-items: center;
		font-size: 1.5rem;	
	}
	span{
		margin-left: 0.3rem;
	}
	.t:not(:nth-child(1)){
		margin-left:2.5rem;
	}
	.underline{
		content: ' ';
		width: 2.5rem;
		border: 1px solid red;
		position: absolute;
		left: 3.7rem;
		top: 9rem;
		}
	.home-body{
		margin: 0 1.5rem 0 1.5rem;
		position: relative;
	}
	.tag{
		display: inline-block;
	}
</style>