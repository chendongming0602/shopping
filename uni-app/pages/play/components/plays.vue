<template>
  <view>
    <swiper class="ps-box" :indicator-dots="true" :interval="3000" :duration="1000">
      <swiper-item class="ps-box-item" v-for="(itemBox,indexBox) in titles" :key="indexBox">
        <view class="ps-l" v-if="indexBox===0" style="height: 100%;">
          <swiper style="height: 100%;" 
            vertical 
            @change="videoChange"
            @transition="upEvent"
            @animationfinish="bindanimationfinish"
            :indicator-dots="true" 
            :interval="3000"  
            :duration="1000">
            <swiper-item style="height: 100%;" v-for="(item,index) in list" :key="index">
              <!-- 內邊距 -->
              <view v-if="item.is" class="ps-c-box" style="height: 100%;padding-bottom: 97rpx;">
                <!-- 視頻 -->
                <view style="height: 100%;"v-if="item.mediaType===isClass.VIDEO">
                  <video
                    :id="'videos'+index" 
                    loop
                    style="width:100%;height:100%"
                    src="https://minis-resources-1254468731.cos.ap-guangzhou.myqcloud.com/card/mp4.mp4" 
                    :show-fullscreen-btn="false"
                    :show-play-btn="false"
                    @play="videoStatus=true"
                    @pause="videoStatus=false"
                    :controls="true"
                    enable-play-gesture
                  ></video>
                </view>
                
                <!-- 相冊 -->
                <view style="height: 100%;"v-if="item.mediaType===isClass.IMG">
                  <view class="album-box">
                    <view 
                      class="album-item" 
                      v-for="(itemA,indexA) in item.source.images"
                      :key="indexA"
                      :style="{zIndex:itemA.in}"
                      
                    >
                      <image mode="aspectFit" :class="album_index==indexA?item.album_class:''" :style="{opacity:album_index==indexA?1:0}" :src="itemA.img"></image>
                    </view>
                  </view>
                </view>
                
              </view>
            </swiper-item>
          </swiper>
        </view>

        <view class="ps-r" v-if="ts_index===1">
          <slot name="ps_r"></slot>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  let time1=null;
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        
        list: [
          {
            al: true,
            commentCount: 3,
            cover_img: "https://oldman.tuixiu100.com/upload/20200810/183973fa6820bec965fedba260fb01f5.jpg",
            creator_id: 2,
            creator_info: "胖子明",
            followed: false,
            id: 34,
            is: true,
            islike: true,
            itemID: 34,
            likeCount: 3,
            mediaType: "images",
            shareCount: 2,
            source: {
              music: "https://album-1254468731.cos.ap-guangzhou.myqcloud…/35/20200630/08d3b5775e8bf3a2b719a52370eb891b.mp3",
              images: [
                {
                  img:"https://oldman.tuixiu100.com/upload/20200810/183973fa6820bec965fedba260fb01f5.jpg",
                },{
                  img:"https://oldman.tuixiu100.com/upload/20200810/de34bd9b004325937501584dd930dd90.jpg",
                },{
                  img:"https://oldman.tuixiu100.com/upload/20200810/f0d7fd2d02e3eaed2163271c83d3ad8b.jpg",
                }
                
                
              ]
            }
          },
          {
            commentCount: 6,
            cover_img: "http://sivler-1254468731.cos.ap-guangzhou.myqcloud.com/1583985518255.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDwekfNq96wXCi6In2jGYVDuUpSs9CAH6j%26q-sign-time%3D1583985516%3B1899345516%26q-key-time%3D1583985516%3B1899345516%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3D4d8af2c5accc47a47071240229ee67a30151e4bc",
            creator_id: 2,
            creator_info: "胖子明",
            description: "植树节快乐！一首《春暖花开》送给大家！",
            followed: false,
            id: 5877,
            is: true,
            islike: false,
            itemID: 5877,
            likeCount: 6,
            mediaType: "video",
            shareCount: 2,
            source: {
              videoSrc: "http://sivler-1254468731.cos.ap-guangzhou.myqcloud…nature%3Dd0fa5c8cfc80bf6f3ca8418909630976b2e75348"
            },
            title: "植树节快乐！一首《春暖花开》送给大家！",
            viewCount: 258
          },
          {
            al: true,
            commentCount: 3,
            cover_img: "https://oldman.tuixiu100.com/upload/20200810/183973fa6820bec965fedba260fb01f5.jpg",
            creator_id: 2,
            creator_info: "胖子明",
            followed: false,
            id: 34,
            is: true,
            islike: true,
            itemID: 34,
            likeCount: 3,
            mediaType: "images",
            shareCount: 2,
            source: {
              music: "https://album-1254468731.cos.ap-guangzhou.myqcloud…/35/20200630/08d3b5775e8bf3a2b719a52370eb891b.mp3",
              images: [
                {
                  img:"https://oldman.tuixiu100.com/upload/20200810/183973fa6820bec965fedba260fb01f5.jpg",
                },{
                  img:"https://oldman.tuixiu100.com/upload/20200810/de34bd9b004325937501584dd930dd90.jpg",
                },{
                  img:"https://oldman.tuixiu100.com/upload/20200810/f0d7fd2d02e3eaed2163271c83d3ad8b.jpg",
                }
                
                
              ]
            }
          },
          
          {
            commentCount: 6,
            cover_img: "http://sivler-1254468731.cos.ap-guangzhou.myqcloud.com/1583985518255.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDwekfNq96wXCi6In2jGYVDuUpSs9CAH6j%26q-sign-time%3D1583985516%3B1899345516%26q-key-time%3D1583985516%3B1899345516%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3D4d8af2c5accc47a47071240229ee67a30151e4bc",
            creator_id: 2,
            creator_info: "胖子明",
            description: "植树节快乐！一首《春暖花开》送给大家！",
            followed: false,
            id: 5877,
            is: true,
            islike: false,
            itemID: 5877,
            likeCount: 6,
            mediaType: "video",
            shareCount: 2,
            source: {
              videoSrc: "http://sivler-1254468731.cos.ap-guangzhou.myqcloud…nature%3Dd0fa5c8cfc80bf6f3ca8418909630976b2e75348"
            },
            title: "植树节快乐！一首《春暖花开》送给大家！",
            viewCount: 258
          },{
            commentCount: 6,
            cover_img: "http://sivler-1254468731.cos.ap-guangzhou.myqcloud.com/1583985518255.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDwekfNq96wXCi6In2jGYVDuUpSs9CAH6j%26q-sign-time%3D1583985516%3B1899345516%26q-key-time%3D1583985516%3B1899345516%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3D4d8af2c5accc47a47071240229ee67a30151e4bc",
            creator_id: 2,
            creator_info: "胖子明",
            description: "植树节快乐！一首《春暖花开》送给大家！",
            followed: false,
            id: 5877,
            is: true,
            islike: false,
            itemID: 5877,
            likeCount: 6,
            mediaType: "video",
            shareCount: 2,
            source: {
              videoSrc: "http://sivler-1254468731.cos.ap-guangzhou.myqcloud…nature%3Dd0fa5c8cfc80bf6f3ca8418909630976b2e75348"
            },
            title: "植树节快乐！一首《春暖花开》送给大家！",
            viewCount: 258
          },
       
        ],
        //分类管理
        isClass: {
          IMG: "images",
          VIDEO: "video",
          LIVE: "live"
        },
        //播放狀態
        videoStatus:true,
        album_index:-1,
      }
    },
    created() {
      //滑动的第几个
      this._current=0;
      //图片播放的第几个
      this._audiosIndex=0;
      this._page=this._plPage=1;
      setTimeout(()=>{this.startEvent(0)},200); 
    },
    methods: {
      //初始总开关
      startEvent(current){
        let {list,isClass}=this;
        try{
          list[current].mediaType===isClass.VIDEO&&this.videoStart(current);
          list[current].mediaType===isClass.IMG&&this.albumStart(current,this.album_index);
        }catch(err){
          // APP.toastShow("此条作品可能被删除了！",true);
          // setTimeout(()=>{wx.navigateBack()},1300);
        }
      },
      //视频开始
      videoStart(current){
        this._videos=uni.createVideoContext(`videos${current}`,this);
        setTimeout(()=>{this._videos.play();},200);
      },
      //相册初始开始
      albumStart(current,album_index){
        let {list}=this;
        this._audios=uni.createInnerAudioContext();
        this._audios.src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3";
        this._audios.loop=true;
        this._audios.play();
        // console.log("音樂",this._audios,li st[current].source.music)
        //初始动画
        clearTimeout(time1);
        //从第几个开始
        this.album_index=album_index;
        this.albumChange(current);
      },
      //相冊動畫
      albumChange(current){
        let ran=this.randomEvent();
        if(ran==this.ran_count) return this.albumChange(current);
        clearTimeout(time1)
        if(this.album_index>=this.list[current].source.images.length-1) this.album_index=-1
        this.album_index++;
        this.ran_count=ran;    
        this.list[current].album_class=`album${ran}`;
        //控制z-index;
        this.list[current].source.images.forEach(t=>{t.in=0});
        this.list[current].source.images[this.album_index].in=1
        this.list=JSON.parse(JSON.stringify(this.list));
        time1=setTimeout(()=>{this.albumChange(current);},3000);
      },
      randomEvent(){
        let ran=Math.floor(Math.random()*4);
        return ran
      },
      //上下滑動觸發
      videoChange(e){
        let {current}=e.detail;
        console.log(current)
        //控制不显示的隐藏
        this.isVideo(current);
        //控制列表开始
        this.videoPlay(current);
        //通知父组件
        // this.triggerEvent("changeEvent",{current,list:this.data.list});
        //评论重新请求打开
        // this.plAnew();
        //记录是上滑还是下滑
        this._current=current;
      },
      
      //隱藏顯示列表
      isVideo(current){
        let lr=current>this._current,{list}=this;
        //上滑
        if(lr){
          //未到底
          if(current<list.length-1){
            //打开下一级
            this.list[current+1].is=true;
          }else{
            this.moreEvent();
          }
          //隐藏上面的
          if(current-2>=0) this.list[current-2].is=false;
        };
        //下滑
        if(!lr){
          //未到顶
          if(current>0){
            //打开上一级
            this.list[current-1].is=true;
          }else{
            console.log("到顶")
          }
          //隐藏上面的
          if(current<list.length-2) this.list[current+2].is=false;
        }
        // console.log(this.list)
      },
      //列表加载更多
      async moreEvent(){
        console.log("加載更多")
        // //没数据
        // if(this._more) return;
        // //节流
        // if(this._mores) return;
        // this.setData({
        //   "objs.id":this.data.list[this.data.list.length-1].id
        // });
        // this._mores=true;
        // //在执行加载
        // this._action="up";
        // await this.getList();
        // this._mores=false;
      },
      //滑动控制器
      videoPlay(current){
        // let lr=current>this._current;
        let {list,isClass}=this;
        //将视频/相册音乐清除
        this._videos&&this._videos.stop();
        this._audios&&this._audios.destroy();
        this._audios&&this._audios.stop();
        this._videos="";
        this._audios="";
        // console.log(this._audios,"音乐")
        //是视频
        list[current].mediaType===isClass.VIDEO&&this.videoStart(current);
        //是相册
        list[current].mediaType===isClass.IMG&&this.albumStart(current,-1);
      },
      //上下改變時觸發
      upEvent(){},
      //上下改變動畫結束觸發
      bindanimationfinish(){},
     }
  }
</script>

<style scoped lang="scss">
  .ps-box {
    height: 100vh;
  }
  .album-box{
    width: 100%;
    height: 100%;
    position: relative;
    .album-item{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #000;
    }
    .album-item image{
      width: 100%;
      height: 100%;
      transform: translate(100vw,100vh);
    }
  }
  @keyframes album0{
    0%{
      transform: translateX(100vw);
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    40%,70%{
      transform: translateX(0px);
      opacity: 1;
      width: 100%;
      height: 100%;
    }
    100%{
      transform: translateX(-100vw);
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
  .album0{
    animation: album0 3s;
animation-fill-mode: forwards;
  }
  @keyframes album1{
    0%{
      transform: translateY(100vh);
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    40%,70%{
      transform: translateY(0px);
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    100%{
      transform: translateY(-100vh);
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .album1{
    animation: album1 3s;
  animation-fill-mode: forwards;
  }
  
  @keyframes album2{
    0%{
      transform: scale(0);
      opacity: 0;
    }
    40%,70%{
      transform: scale(1);
      opacity: 1;
    }
    100%{
      transform: scale(0);
      opacity: 0;
    }
  }
  .album2{
    animation: album2 3s;
   animation-fill-mode: forwards;
  }
  
  @keyframes album3{
    0%{
      transform: scale(1.5);
      opacity: 0;
    }
    40%,70%{
      transform: scale(1);
      opacity: 1;
    }
    100%{
      transform: scale(0);
      opacity: 0;
    }
  }
  .album3{
    animation: album3 3s;
    animation-fill-mode: forwards;
  }
</style>
