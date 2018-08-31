<template>
	<div class="main-total">
		<div class="main-background">
			<div class="main-body">
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-ding" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>我的订单</div>
	  				</el-col>
				</el-row>
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-yue" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>我的余额</div>
	  				</el-col>
				</el-row>
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-cart" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>购物车</div>
	  				</el-col>
				</el-row>
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-youhui" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>优惠券</div>
	  				</el-col>
				</el-row>
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-duihuan" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>电子兑换码</div>
	  				</el-col>
				</el-row>
			</div>
		</div>
		
		<div class="main-background">
			<div class="main-body">
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-shouji" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>我的手记</div>
	  				</el-col>
				</el-row>
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-yuanwen" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>我的猿问</div>
	  				</el-col>
				</el-row>
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-class" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>我的课表</div>
	  				</el-col>
				</el-row>
			</div>
		</div>
		<div class="main-background">
			<div class="main-body">
				<el-row class="elrow">
	  				<el-col :span="4" class="main-body-icon">
	  					<icon name="person-main-shezhi" height="1.5rem" width="1.5rem"></icon>
	  				</el-col>
	  				<el-col :span="18" :offset="2" class="main-body-detail">
	  					<div>设置</div>
	  				</el-col>
				</el-row>
			</div>
		</div>	
	
	</div>
</template>

<script>
</script>

<style scoped>
	.main-background{
		background-color: rgba(102,102,102,0.1);
		padding-top: 0.5rem;
	}
	.main-body{
		margin-top: 0.3rem;
		background-color: white;
	}
	.elrow{
		padding: 1rem 0 1rem 0;
	}
	.main-body-icon{
		text-align: center;
	}
	.main-body-detail:after{
		content: '';
		display: block;
		width: 100%;
		border: 0.5px solid rgba(0,0,0,0.1);
		margin-top: 1rem;
	}
</style>