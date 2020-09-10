var app = getApp();
Component({
  properties: {
    imgUrls:{
      type:Object,
      value:[]
    },
    videoline: 
      {
        type:String,
        value:""
      }
  },
  data: {
    indicatorDots: true,
    circular: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    currents: "1",
    controls:true
  },
  ready:function(){
    this.videoContext = wx.createVideoContext('myVideo',this);
  },
  methods: {
    img_pre(e){
      let {url}=e.currentTarget.dataset;
      wx.previewImage({
        current:url,
        urls: this.data.imgUrls,
      });
    },
    bindPause:function(){
      this.videoContext.play();
       this.setData({
        controls:false
       });
    },
    change: function (e) {
      this.setData({
        currents: e.detail.current + 1
      })
    }
  }
})

