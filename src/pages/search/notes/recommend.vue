<template>
	<div class="recommend-all">
		<div v-for="(item,index) in list" :key="item.id">
			<router-link :to="{name:'view',params:{id:item.id}}"  class="recommend-content">
				<div class="recommend-content-left">
					<div class="left-title">{{item.title}}</div>
					<div class="left-tag" v-for="(tag,index) in item.tags" >
						<span>{{tag.tagname}}</span>
					</div>
				</div>
				<div class="recommend-content-right">
					<img :src="item.src" />
				</div>
			</router-link>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.getList();
		},
		methods:{
			getList:function(){
			this.$http.get("http://localhost:3000/db").then((res) =>{
				this.list=res.body.resultOne;
				})		
			}
		}
	}
</script>

<style scoped>
	.recommend-content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
		padding-bottom: 2rem;
		position: relative;
	}
	.recommend-content:after{
		content: '';
		display: block;
		border: 0.3px solid rgba(0,0,0,0.1);
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.left-title{
		word-wrap:break-word;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	.left-tag>span{
		border: 1px solid rgba(0,0,0,0.7);
		color: rgba(0,0,0,0.7);
		border-radius: 3px ;
		padding:0 0.2rem 0 0.2rem;
		margin-top: 0.2rem;
		margin-right: 1rem;
		float: left;
	}
	img{
		width: 8rem;
		height: 8rem;
		padding-left: 2rem;
	}
</style>