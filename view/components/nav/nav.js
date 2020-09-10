// components/nav/nav.js
const app=getApp(),
att=function(){
  app.navEvent().then(nav=>{
    this.setData(nav)
  });
};
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:"商场"
    },
    is_return:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },
  lifetimes: {
    attached: att,
  },
  attached: att,
  /**
   * 组件的方法列表
   */
  methods: {
    myIndex(){
      this.triggerEvent('myIndex', {});
    }
  }
})
