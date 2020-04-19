// pages/demo1/demo1.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "小菜松",
    num: 1200,
    isMale: true,
    person: {
      name: "赵小驴",
      age: 26
    },
    list: [
      {
        name: "小黑",
        age: 26
      }, {
        name: "小白",
        age: 26
      }
    ],
    num1:1
  },
  
  handleInput(e){
    this.setData({
      val: e.detail.value
    })
  },
  handleTap(e){
    console.log(e)
    const operation = e.currentTarget.dataset.operation
    this.setData({
      num1: this.data.num1 + operation
      
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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