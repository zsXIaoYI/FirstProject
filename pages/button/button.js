// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: "",
    fruitList: [
      {
        id: 1,
        name: "苹果"
      },
      {
        id: 2,
        name: "梨子"
      },
      {
        id: 1,
        name: "香蕉"
      }
    ],
    likedFruit: []
  },
  handleChange(e){
    let gender = e.detail.value
    this.setData({
      gender: gender
    })
  },
  getLikedFruit(e){
    const checkedFruit = e.detail.value
    this.setData({
      likedFruit: checkedFruit
    })
  },

  getPhoneNumber(e){
    console.log(e)
  },  
  getUserInfo(e){
    console.log(e)
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