<template>
	<view>
		<view class="navBg">
		  <view :style="{height:nav.CustomBar+'px',paddingTop:nav.StatusBar+'px'}" class="contentFixed" >
        <slot></slot>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nav: {//自定义导航
				    Custom:{},
				    CustomBar:64,
				    StatusBar:20,
				    is:false
				},
			};
		},
    created() {
      // #ifdef MP
      this.navEvent();
      // #endif
    },
    methods:{
      navEvent(){
        return new Promise((resolve,reject)=>{
          if(this.nav.is) return resolve(this.nav);
          uni.getSystemInfo({//自定义导航
            success: e => {
              this.nav.StatusBar = e.statusBarHeight;
              let capsule = uni.getMenuButtonBoundingClientRect();
              if (capsule) {
                this.nav.Custom = capsule;
                this.nav.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;//整体高度
              } else {
                this.nav.CustomBar = e.statusBarHeight + 50;//整体高度
              };
              this.nav.is=true;
              resolve(this.nav)
              // console.log(this.nav)
            }
          });
        });
      },
    }
	}
</script>

<style>
.contentFixed{
  position: fixed;
  top: 0;
  width: 100%;
  padding-right: 220rpx;
  z-index: 999;
  /* background: #f00; */
}
.jianLeft{
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  max-width: 100%;
  margin-left: 30rpx;
  font-size: 30rpx;
  color: #fff;
}
.jianLeft image{
  width: 25rpx;
  height: 27rpx;
  transform: rotate(180deg);
  margin-right: 15rpx;
}
.navTitle{
  position: absolute;
  text-align: center;
  /* width: calc(100% - 340rpx); */
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  height: 60rpx;
  font-size: 32rpx;
  line-height: 60rpx;
  cursor: none;
  pointer-events: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  z-index: 999;
  color: #fff;
}

.myIndex{
  /* width: 174rpx; */
  height: 62rpx;
  background: rgba(1,1,1,0.2);
  border-radius: 32rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20rpx;
  color: #fff;
}
.myIndex image{
  width: 36rpx;
  height: 36rpx;
  margin-right: 10rpx;
  opacity: 1;
  transform: rotate(0deg);
}
</style>
