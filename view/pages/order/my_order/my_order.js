import { getProductDetail } from '../../../api/store.js';
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getGoodsDetails();
    },
    getGoodsDetails: function () {
        var that = this;
        getProductDetail(74).then(res => {
          var good_list = res.data.good_list || [];
          var count = Math.ceil(good_list.length / 4);
          var goodArray = new Array();
          for (var i = 0; i < count; i++) {
            var list = good_list.slice(i * 4, i * 4 + 4);
            if (list.length) goodArray.push({ list: list });
          }
          that.setData({
            good_list: goodArray,
          });
        });
      },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})