// components/youLike/youLike.js
const att=function(){
    this.setClientHeight();
};
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        good_list:{
            type:Array,
            value:[]
        }
    },
    lifetimes:{
        attached:att
    },
    attached:att,
    /**
     * 组件的初始数据
     */
    data: {
        clientHeight:"580",
        circular: false,
        autoplay: false,
        interval: 3000,
        duration: 500,
    },

    /**
     * 组件的方法列表
     */
    methods: {
          /**
   * 商品详情跳转
   */
        goDetail: function (e) {
            let item = e.currentTarget.dataset.items;
            if (item.activity && item.activity.type === "1") {
            wx.navigateTo({
                url: `/pages/activity/goods_seckill_details/index?id=${item.activity.id}&time=${item.activity.time}&status=1`
            });
            } else if (item.activity && item.activity.type === "2") {
            wx.navigateTo({ url:  `/pages/activity/goods_bargain_details/index?id=${item.activity.id}`});
            } else if (item.activity && item.activity.type === "3") {
            wx.navigateTo({
                url: `/pages/activity/goods_combination_details/index?id=${item.activity.id}`
            });
            } else {
            wx.navigateTo({ url: `/pages/goods_details/index?id=${item.id}` });
            }
        },
        //获取元素高度
        setClientHeight: function () {
            if (!this.data.good_list.length) return;
            var query = wx.createSelectorQuery().in(this);
            query.select("#list0").boundingClientRect();
            var that = this;
            query.exec(function (res) {
              that.setData({
                clientHeight: res[0].height + 20
              });
            });
        },
    }
})
