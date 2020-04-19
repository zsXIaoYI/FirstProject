var helloData = {
  name: '小黑'
}

Page({

  /**
   * 页面的初始数据
   */
  // data: helloData,
  data: {
    name: '小红'
  },
  changeName: function(e){
    this.setData({
      name: '小白'
    })
  }
})
