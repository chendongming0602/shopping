<template>
	<view>
		<view class="product-window" :style="{width:width+'%'}"  :class="(open ? 'on' : '')+' '+direction">
      <view class="iconfont icon-guanbi" @click="open=false" v-if="is_close"></view>
		  <slot></slot>
		</view>
    <view class="mask" v-if="is_mask" @touchmove.prevent :hidden="!open" @click="open=false"></view>
	</view>
</template>

<script>
	export default {
    props:{
      direction:{
        type:String,
        default:"below"
      },
      width:{
        type:Number,
        default:100
      },
      is_close:{
        type:Boolean,
        default:true
      },
      is_mask:{
        type:Boolean,
        default:true
      }
    },
		data() {
			return {
				open:false 
			};
		},
    methods:{
      show(){this.open=true;},
      close(){this.open=false;}
    }
	}
</script>

<style lang="scss" scoped>
  view{
    box-sizing: border-box;
  }
	.product-window {
		position: fixed;
		background-color: #fff;
		z-index: 77;
		border-radius: 16rpx 16rpx 0 0;
		padding: 30rpx;
		transform: translate3d(0, 100vh, 0);
		-webkit-transform: translate3d(0, 100vh, 0);
		transition: all .3s cubic-bezier(.25, .5, .5, .9);
		-webkit-transition: all .3s cubic-bezier(.25, .5, .5, .9);
	}

  .below{
    left: 0;
    bottom: 0;
    transform: translate3d(0, 100vh, 0);
    -webkit-transform: translate3d(0, 100vh, 0);
  }
  .up{
    top: 0;
    left: 0;
    transform: translate3d(0, -100vh, 0);
    -webkit-transform: translate3d(0, -100vh, 0);
  }
  .right{
    right: 0;
    top: 0;
    height: 100%;
    transform: translate3d(100vw, 0, 0);
    -webkit-transform: translate3d(100vw, 0, 0);
  }
  .left{
    left: 0;
    top: 0;
    height: 100%;
    transform: translate3d(-100vw, 0, 0);
    -webkit-transform: translate3d(-100vw, 0, 0);
  }
  .product-window.on {
  	transform: translate3d(0, 0, 0);
  	-webkit-transform: translate3d(0, 0, 0);
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: .5;
    z-index: 5;
  }
  .product-window .iconfont {
  	position: absolute;
  	right: 30rpx;
  	top: 20rpx;
  	font-size: 35rpx;
  	color: #8a8a8a;
  }
  
</style>
