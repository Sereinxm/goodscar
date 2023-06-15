Page({
  data: {
    carArr:[]
  },
  onShow() {
    wx.request({
      url: 'http://localhost:3000/car',
      method:'get',
      success:r=>{
        console.log('r',r.data);
        this.setData({
          carArr:r.data
        })
      }
    })
  }
})