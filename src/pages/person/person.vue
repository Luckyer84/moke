<template>
	<div class="person-all">
		<div class="person-head">
			<el-upload
				  class="avatar-uploader"
				  action=" " 
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
		 		 <img v-if="imageUrl" :src="imageUrl" class="avatar">
		 		 <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<div class="person-head-info">
				<div class="head-info-up">
					<span class="name">懵智于心丶</span>
					<span class="sex-male" v-show='isShow'>
						<icon name="person-male" height="2rem" width="2rem"></icon>
					</span>
					<span class="sex-female" v-show='!isShow'>
						<icon name="person-female" height="2rem" width="2rem"></icon>
					</span>
				</div>
				<div class="person-head-down">
					<span>学习时长</span>&nbsp;
					<span class="studyhour">15小时</span>&nbsp;&nbsp;&nbsp;&nbsp;
					<span>经验</span>&nbsp;
					<span class="exprience">2652</span>
				</div>
			</div>
		</div>
		<div class="person-head-list">
			<div >
				<span>关注</span>
				<b class="attention">12</b>
			</div>
			<div>
				<span>粉丝</span>
				<b class="fans">2</b>
			</div>
			<div>
				<span>积分</span>
				<b class="score">15</b>
			</div>
		</div>
		<div class="line"></div>
		<div class="person-body">
			<el-row>
				<el-col :span="6">
					<div class="history">
						<icon name="person-history" height="2.5rem" width="2.5rem"></icon>
						<p>最近学习</p>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="history">
						<icon name="person-collection" height="2.5rem" width="2.5rem"></icon>
						<p>我的收藏</p>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="history">
						<icon name="person-shizhan" height="2.5rem" width="2.5rem"></icon>
						<p>我的实战</p>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="history">
						<icon name="person-path" height="2.5rem" width="2.5rem"></icon>
						<p>我的路径</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="person-main">
			<main-item></main-item>
		</div>
	</div>
</template>

<script>
	import personMain from'./personMain'
	
	 export default {
	    data() {
	      return {
	        imageUrl: '',
	        isShow:true
	      };
	    },
	    methods: {
	      handleAvatarSuccess(res, file) {
	        this.imageUrl = URL.createObjectURL(file.raw);
	      },
	      beforeAvatarUpload(file) {
	        const isJPG = file.type === 'image/jpeg';
	        const isLt2M = file.size / 1024 / 1024 < 2;
	
	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
	      }
	    },
	    components:{
	    	'main-item':personMain
	    }
  	}

</script>

<style scoped>
	.person-all{
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}
	.person-head{
		margin-top: 2rem;
		display: flex;
		align-items: center;
	}
   .avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius:  6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
  }
 
  .avatar-uploader .el-upload:hover {
    	border-color: #409EFF;
  }
  .avatar-uploader-icon {
	    font-size: 2rem;
	    color: #8c939d;
	    width: 7rem;
	    height: 7rem;
	    line-height: 7rem;
	    text-align: center;
	    border: dashed 1px rgba(0,0,0,0.3);
	    border-radius:50% ;
  }
  .avatar {
    width: 7rem;
    height: 7rem;
    display: block;
  }
  .person-head{
  	display: flex;
  	flex-flow: row nowrap;
  }
  .person-head-info{
  	margin-left: 1.5rem;
  }
  .person-head-down{
  	margin-top: 1rem;
  	font-size: 1.1rem;
  	letter-spacing: 1px;
  }
  .name{
  	font-size:2rem ;
  	letter-spacing: 2px;
  }
  .person-head-list{
  	display: flex;
  	justify-content: space-around;
  	font-size: 1.3rem;
  	margin-top: 1.5rem;
  }
  .person-head-list b{
  	font-weight:bolder;
  }
  .line{
  	width:100%;
  	border: 0.5px solid rgba(0,0,0,0.1);
  	margin-top: 1.5rem;
  }
  .person-body,
  .person-main{
  	margin-top: 1.5rem;
  }
  .history{
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  }
  .history p{
  	margin-top: 1rem;
  }
</style>