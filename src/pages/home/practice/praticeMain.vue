<template>
	<div class="main-all">
		<div class="main-tip main-tip1 clearfix">
			<div class="left">
				<el-badge value="hot" class="item">
					<img src="../../../images/home/path6.jpg" />
				</el-badge>
			</div>
			<div class="right">
				<div>
					<p class="p1">DevOps理论+实践之路</p>
					<p class="p2">
						<span>￥344</span>
						<span>高级</span>
					</p>
				</div>
			</div>
		</div>
		
		<div class="main-tip main-tip2 clearfix">
			<div class="left">
				<img src="../../../images/home/path5.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">Spring Cloud</p>
					<p class="p2">
						<span>￥412</span>
						<span>高级</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip3 clearfix">
			<div class="left">
				<img src="../../../images/home/path7.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">Pyhton flask构建微信小程序</p>
					<p class="p2">
						<span>￥213</span>
						<span>中级</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip4 clearfix">
			<div class="left">
				<el-badge value="new" class="item">
					<img src="../../../images/home/path3.jpg" />
				</el-badge>
			</div>
			<div class="right">
				<div>
					<p class="p1">分布式实务实践</p>
					<p class="p2">
						<span>￥231</span>
						<span>高级</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip4 clearfix">
			<div class="left">
				<img src="../../../images/home/path2.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">深度学习之精神网络</p>
					<p class="p2">
						<span>￥350</span>
						<span class="app">APP专享价  ￥340.00</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip4 clearfix">
			<div class="left">
				<img src="../../../images/home/path1.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">PHP进阶：面向对象初识</p>
					<p class="p2">
						<span>￥190</span>
						<span>中级</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip4 clearfix">	
			<div class="left">
				<el-badge value="hot" class="item">
					<img src="../../../images/home/path4.jpg" />
				</el-badge>
			</div>
			<div class="right">
				<div>
					<p class="p1">RabbitMQ消息中间技术精讲</p>
					<p class="p2">
						<span>￥286</span>
						<span>中级</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.main-all{
		margin-top: 1.5rem;
	}
	.main-tip{
		padding-bottom: 0.5rem;
	}
	.left{
		width: 10rem;
		height: 7rem;
		margin-right: 1rem;
		float: left;
	}
	.right{
		height: 7rem;
		float: left;
		position: relative;
		width: 60%;
		display: flex;
	}
	.right>div{
		align-self: center;
	}
	.p1{
		font-size: 1.2rem;
		letter-spacing: 1px;
	}
	.p2{
		color: #666;
		margin-top: 0.5rem;
	}
	.p2 span{
		margin-right: 1rem;	
	}
	.right:after{
		content: '';
		display: block;
		border: 0.5px solid rgba(0,0,0,0.1);
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.app{
		color: red;
		border: 1px solid red;
		padding: 0.2rem 0.3rem 0.2rem 0.3rem;
		border-radius: 2px;
	}	
</style>