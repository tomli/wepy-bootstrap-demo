var sceneReadyBehavior = require('../lib/behavior-scene/scene-ready');

Page({
  behaviors:[sceneReadyBehavior],
  data: {
    showBackBtn:true,
    showARTrackerState:false,
    title:"AR 相机渲染案例",
    hint:"默认扫描图片见官网开发文档\n组件 -> xr-frame -> 示例",
    intro:"基础的平面识别案例，有一个图标用于展示目前平面定位的区域。每次点击渲染区域，会触发新的一次模型的的加载与模型放置到对应的平面区域。",
  },
  onLoad(){
    wx.xrTitle = this.data.title;

    this.wall = this.selectComponent("#main-frame");
  },
  onClickBack() {
    wx.showToast({title: "onClickBack"})
    wx.navigateBack()
  },
  flipX() {
    if(this.wall)
      this.wall.flip('x')
  },
  flipY() {
    if(this.wall)
      this.wall.flip('y')
  },
  flipZ() {
    if(this.wall)
      this.wall.flip('z')
  },
  reset() {
    if(this.wall)
      this.wall.reset()
  },
  up() {
    if(this.wall)
      this.wall.translate('z', .1)
  },
  down() {
    if(this.wall)
      this.wall.translate('z', -.1)
  },
  left() {
    if(this.wall)
      this.wall.translate('x', -.1)
  },
  right() {
    if(this.wall)
      this.wall.translate('x', .1)
  },
  handleMyARTrackerState(e) {
    console.log('handleMyARTrackerState e', e);
    const {state, error} = e.detail;
    if(state){

      const arTrackerState = wx.getXrFrameSystem().EARTrackerState[state]
      // let hint = "ArTrackerState变为"+arTrackerState;
      let hint = state===2?"当蓝色锚点出现时，点击屏幕将海报放于锚点所在平面上":"请缓慢左右移动手机";
      wx.showToast({
        title: hint,
      });
      this.setData({
        hint: hint
      })
    }else{

      this.setData({
        hint: "不对"
      })
    }
    this.setData({
      showARTrackerState: !this.data.showARTrackerState
    })
  },
  changeCaptureState(e) {

    if (this.data.captureState) {
      wx.showToast({
        title: '等待上次截屏完成！',
      });
      return;
    }

    this.setData({captureState: 1});
    // hack，其实应该等待异步方法完成
    setTimeout(() => {
      this.setData({captureState: 0});
    }, 1000);
  },
});

