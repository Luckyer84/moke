<template>
	<div class="main-all">
		<div class="main-tip main-tip1 clearfix">
			<div class="left">
				<img src="../../../images/home/path1.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">前端小白入门系列课程</p>
					<p class="p2">
						<span>￥134</span>
						<span class="app">APP专享价  ￥120.00</span>
					</p>
				</div>
			</div>
		</div>
		
		<div class="main-tip main-tip2 clearfix">
			<div class="left">
				<img src="../../../images/home/path2.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">Java零基础入门</p>
					<p class="p2">
						<span>￥152</span>
						<span>7步骤·10门课</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip3 clearfix">
			<div class="left">
				<img src="../../../images/home/path3.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">Java进阶：数据库</p>
					<p class="p2">
						<span>￥250</span>
						<span>8门课</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip4 clearfix">
			<div class="left">
				<img src="../../../images/home/path4.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">SSM框架整合</p>
					<p class="p2">
						<span>￥120</span>
						<span class="app">APP专享价  ￥99.00</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip4 clearfix">
			<div class="left">
				<img src="../../../images/home/path5.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">Android进阶：网络数据存储</p>
					<p class="p2">
						<span>￥150</span>
						<span class="app">APP专享价  ￥140.00</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip4 clearfix">
			<div class="left">
				<img src="../../../images/home/path6.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">PHP进阶：面向对象初识</p>
					<p class="p2">
						<span>￥190</span>
						<span>4步骤·8门课</span>
					</p>
				</div>
			</div>
		</div>
		<div class="main-tip main-tip4 clearfix">
			<div class="left">
				<img src="../../../images/home/path7.jpg" />
			</div>
			<div class="right">
				<div>
					<p class="p1">HTML5与css3动态实现</p>
					<p class="p2">
						<span>￥236</span>
						<span class="app">APP专享价  ￥220.00</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
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