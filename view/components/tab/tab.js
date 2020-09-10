// components/tab/tab.js

let app=getApp(),att=async function(){
  //兼容iPhoneX
  app.navEvent().then(nav=>{
    this.setData({
      isX:nav.isX
    })
  });
  // let unread=await app.infoCount();
  // this.setData({
  //   unread
  // });
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabCount: Number
  },
  pageLifetimes: {
    show: function() {
      // this.setData({
      //   unread:app.globalData.myinfo.infoCount
      // })
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        name: "首页",
        url:"/pages/tabs/index/index"
       
      },
      {
        name: "旅游",
        url:"/pages/tabs/travel/travel"
      },
      {
        name:"发布",
        url:"/pages/tabs/add/add"
      },
      {
        name:"消息",
        url:"/pages/tabs/info/info"
      },
      {
        name: "我的",
        url:"/pages/tabs/my/my"
      },
     
    ],
    isX:false,
    unread:0
  },
  lifetimes: {
    attached: att,
  },
  attached: att,
  /**
   * 组件的方法列表
   */
  methods: {
    tabEvent(e) {
      let { index } = e.currentTarget.dataset,{list,tabCount}=this.data;
      if(index==tabCount) return;
      // if(!app.globalData.login.is&&(index==3||index==2||index==4)) return this.triggerEvent("tabIdex", {index,is:true});
      wx.switchTab({
        url: list[index].url,
      })
      this.triggerEvent("tabIdex", {index,is:false});
    },
    // infoEvent(){
    //   if(this.data.unread<=0) return; 
    //   this.setData({
    //     unread:this.data.unread-1
    //   });
    //   app.globalData.myinfo.infoCount-=1;
    // },
    
  }
})
