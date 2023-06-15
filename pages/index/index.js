Page({
  data: {
    arr:[]
  },
  addCar(e){
    // console.log('添加购物车');
    var index = e.currentTarget.dataset.index;
    wx.showLoading({
      title:"加载中..."
    });
    wx.request({
      url: 'http://localhost:3000/car',
      method:'post',
      data:{
        num:1,
        goods:this.data.arr[index]
      },
      success:r=>{
        console.log('r',r.data);
        wx.hideLoading();
      }
    })
  },
  onShow(){
    // console.log('index show')
    // 加载页面数据
    wx.request({
      url: 'http://localhost:3000/goods',
      method:'get',
      success:r=>{
        console.log('r',r.data);
        this.setData({
          arr:r.data
        })
      }
    })
  }
})
