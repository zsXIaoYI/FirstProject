// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // temp: {
    //   type: String,
    //   value: ""
    // }
    tabs: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      const {index} = e.currentTarget.dataset
      this.triggerEvent("itemChange", {index})
      /**
       * 
      // let list = this.data.tabs
      let list = JSON.parse(JSON.stringify(this.data.tabs))
      list.forEach((v, i)=>i===index?v.isActive=true:v.isActive=false)
      this.setData({
        tabs: list
      })
       */
    }
  }
})
