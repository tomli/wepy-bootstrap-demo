import { searchFilm } from '../lib/mfan';
import { allFilms, posterModel, TouchModes } from '../lib/constants';
const _ = require('../lib/underscore.wx');

var sceneReadyBehavior = require('../lib/behavior-scene/scene-ready');


// 当前触摸点位置
let currentTouchX = 0;
let currentTouchY = 0;

// 触摸点序号
let rotateIdx = -1;
let moveIdx = -1;

//摇杆所处中心
let centerX = 50;
let centerY = 50;
//摇杆宽高
let hWidth = 40;
let hHeight = 40;
//摇杆盘半径
let radius = 50;

const optModeList = ["move", "rotate", "scale"]

Page({
  behaviors:[sceneReadyBehavior],
  data: {
    posters: [
      false,  false, false,  false, false,  false
      ],
    fakePosters: [
      {film: "佛得角翩翩起舞",image: "https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2900068296.jpg"},
      {film: "先跳舞",image: "https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2900676287.jpg"},
      {film: "999号房间",image: "https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2892469649.jpg"},
      {film: "重回天鹅湖",image: "https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2901030209.jpg"},
      {film: "重回天鹅湖",image: "https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2901030209.jpg"},
      {film: "伊拉克已逝之美",image: "https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2908449504.jpg"}
      ],
    platform:undefined,
    filmOnTheFly:undefined,
    selectedSearchResult:undefined,
    showBackBtn:true,
    displaySetting:false,
    displayMovieSearch:false,
    showARTrackerState:false,
    selectedPosterIdx: 0,
    trackerUpdateTimes:0,
    arTrackerState: 0,
    addedCount:0,
    touchMode: TouchModes.None,
    posX: '0.00',
    posY: '0.00',
    posZ: '0.00',
    title:"AR 相机渲染案例",
    hint:"请缓慢左右移动手机\n 当蓝色锚点出现时，点击屏幕将海报放于锚点所在平面上",
    intro:"基础的平面识别案例，有一个图标用于展示目前平面定位的区域。每次点击渲染区域，会触发新的一次模型的的加载与模型放置到对应的平面区域。",
    //相对背景偏移，命名 h=handle 摇杆
    hTop: 30,
    hLeft: 30,
    transferData:{
      //相对摇杆中心的偏移
      biasX: 0,
      biasY: 0,

      //开始旋转时的基准点
      initRotX: 0,
      initRotY: 0,
      //旋转时的触摸点位置
      biasRotX: 0,
      biasRotY: 0,
    },
    optMode: optModeList[0]
  },
  onLoad(){
    wx.xrTitle = this.data.title;
    const si = wx.getSystemInfoSync()
    console.log('si', si);
    this.setData({
      platform: si.platform,
      search: this.search.bind(this),
      addedCount: this.data.posters.filter(p=>p!==false).length,
    })

    this.wall = this.selectComponent("#main-frame");
  },
  onClickBack() {
    // wx.showToast({title: "onClickBack"})
    wx.navigateBack()
  },
  toggleDisplaySetting() {
    this.setData({
      displaySetting: !this.data.displaySetting
    })
  },
  toggleDisplayMovieSearch() {
    this.setData({
      displayMovieSearch: !this.data.displayMovieSearch
    })
    // if(this.data.displayMovieSearch && this.data.displayMovieSearch){
    //   let hint = "请缓慢左右移动手机, 当蓝色锚点出现时，点击屏幕将海报放于锚点所在平面上";
    //   this.setData({
    //     hint
    //   })
    // }
  },
  flipX() {
    if(this.wall)
      this.wall.flip('x', 5)
  },
  flipY() {
    if(this.wall)
      this.wall.flip('y', 5)
  },
  flipZ() {
    if(this.wall)
      this.wall.flip('z', 5)
  },
  flipRight() {
    if(this.wall)
      this.wall.flip(posterModel.change.rotationAxis.x, 5)
  },
  flipLeft() {
    if(this.wall)
      this.wall.flip(posterModel.change.rotationAxis.x, -5)
  },
  scale(amount) {
    if(this.wall){
      this.wall.scale('x', amount)
      this.wall.scale('y', amount)
      this.wall.scale('z', amount)
    }
  },
  large() {
    this.scale(posterModel.change.scale)
  },
  small() {
    this.scale(-posterModel.change.scale)
  },
  reset() {
    if(this.wall)
      this.wall.reset()
  },
  up() {
    if(this.wall)
      this.wall.translate('z', -posterModel.change.posDiff)
  },
  down() {
    if(this.wall)
      this.wall.translate('z', posterModel.change.posDiff)
  },
  left() {
    if(this.wall)
      this.wall.translate('x', -posterModel.change.posDiff)
  },
  right() {
    if(this.wall)
      this.wall.translate('x', posterModel.change.posDiff)
  },
  changeOptMode(e) {
    let {optMode} = this.data
  //   wx.showToast({
  //   // title: "正在检测墙",
  //   icon:"none",
  //   title: optModeList.indexOf(optMode)+"",
  // });
    if(optMode === optModeList[optModeList.length-1])
      optMode = optModeList[0]
    else
      optMode = optModeList[optModeList.indexOf(optMode)+1]
    console.log('optMode', optMode);
    this.setData({
      optMode
    })
  },
  resetPlane() {
    if(this.wall)
      this.wall.resetPlane()
  },
  handleMyARTrackerState(e) {
    console.log('handleMyARTrackerState e', e);
    const {state, error} = e.detail;
    if(state){

      const arTrackerState = wx.getXrFrameSystem().EARTrackerState[state]
      // let hint = "ArTrackerState变为"+arTrackerState;
      let hint = state===2?"点击屏幕将海报放于锚点所在平面上":"请缓慢左右移动手机, 当蓝色锚点出现时，点击屏幕将海报放于锚点所在平面上";
      let title = state===1?"正在检测可以放置海报的竖直平面..":"已检测到可以放置海报的竖直平面！"
      if(state===2){
        wx.showToast({
          // title: "正在检测墙",
          icon:"none",
          title
          // title: "点右下角按钮选择要张贴的海报",
        });
      }
      this.setData({
        hint,
        trackerUpdateTimes: ++this.data.trackerUpdateTimes
      })
    }else{
      console.error("state="+state);
      console.error("error="+error);
      // this.setData({
      //   hint: "不对"
      // })
    }
    this.setData({
      arTrackerState: state,
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
  changeLight(e) {
    if(this.wall)
      this.wall.moveLight()
  },
  selectPoster(e) {
   const {idx} = e.currentTarget.dataset
    this.setData({
      selectedPosterIdx: parseInt(idx),
      displayMovieSearch: false
    });
  },
  selectFakePoster(e) {//TODO: remove after debug
   const {idx} = e.currentTarget.dataset
    console.log('idx', idx);
    let filmOnTheFly = this.data.fakePosters[parseInt(idx)];
    console.log('filmOnTheFly', filmOnTheFly);
    this.setData({
      filmOnTheFly ,
      displayMovieSearch: false
    });
  },
  addPoster(e) {
    // let { selectedPosterIdx } = this.data
    let { addedCount } = this.data
    if( addedCount < 6 ){
      this.setData({
        // selectedPosterIdx: selectedPosterIdx+1,
        touchMode: TouchModes.AddingPoster,
        // selectedPosterIdx,
        displayMovieSearch: true
      });
    }else{
      wx.showToast({
        title: '最多放6张！',
      });
    }
  },

  search: async function (value) {
    return await searchFilm(value,  allFilms)
  },

  selectResult: async function (e) {
    console.log('select result', e.detail)
    const {value} = e.detail.item
    const {film, director, dbid, image} = value
    this.setData({
      filmOnTheFly:value,
    })
  },
/*

  selectPosterFromSearchResult: async function (e) {
    const { selectedSearchResult } = this.data
    const {film, director, dbid, image} = selectedSearchResult
    this.setData({
      displayMovieSearch: false,
      selectedSearchResult: false,
      filmOnTheFly:selectedSearchResult
    })

  },
*/
  //把poster放到场景里后更新posters和filmOnTheFly
  handlePosterPlaced({detail}) {
    const { selectedPosterIdx } = detail
    wx.showToast({
      title: "PosterPlaced:"+selectedPosterIdx,
    });
    const { posters, filmOnTheFly } = this.data
    posters[selectedPosterIdx] = filmOnTheFly
    this.setData({
      touchMode: TouchModes.None,
      selectedPosterIdx,
      posters,
      addedCount: posters.filter(p=>p!==false).length,
      filmOnTheFly: false ,
      intro: "PosterPlaced:"+selectedPosterIdx
    })
  },
  selectedPosterTransformChange({detail}) {
    const { selectIdx, transform } = detail
    console.log('selectedPosterTransformChange', transform);
    // console.log('selectedPosterTransformChange rotation', transform.rotation);
    // console.log('selectedPosterTransformChange rotation x', transform.rotation.x);
    // console.log('selectedPosterTransformChange rotation y', transform.rotation.y);
    // console.log('selectedPosterTransformChange rotation z', transform.rotation.z);
    // if(transform.rotation.x && typeof transform.rotation.x === 'number'){
    const rotation = transform.rotation
    wx.showToast({
      title: "PosterPlace",
    });
    this.setData({
      intro: JSON.stringify({
        x: rotation.x,
        y: rotation.y,
        z: rotation.z,
      })
    })
    // }
  },
  handleInfoListener(cur) {
    const detail = cur.detail;

    this.setData({
      posX: detail.posX,
      posY: detail.posY,
      posZ: detail.posZ
    });
  },

  touchStart(e) {},
  touchMove: function (e) {
    //无旋转触摸点触屏时，保证移动触摸点为第一触摸点
    if (rotateIdx == -1) {
      moveIdx = 0;
    } else {
      //当两点触屏时，保证移动触摸点与旋转触摸点对应的点序列互斥
      moveIdx = ~rotateIdx & 0x01;
    }
    var touchX = e.touches[moveIdx].clientX - 30;
    var touchY = e.touches[moveIdx].clientY - (this.data.height - 100);
    var posInfo = this.limitPosition(touchX, touchY);
    this.setData({
      hLeft: centerX - hWidth / 2 + posInfo.posX,
      hTop: centerY -  hHeight / 2 + posInfo.posY,
      transferData:{
        biasX: posInfo.posX,
        biasY: posInfo.posY,
      }
    })
  },
  touchEnd: function (e) {
    moveIdx = -1;
    //当位移触摸点松开时，保证旋转触摸点取的为第一接触点
    if (rotateIdx == 1)
      rotateIdx = 0;
    this.setData({
      hLeft: centerX - hWidth / 2,
      hTop: centerY - hHeight / 2,
      transferData:{
        biasX: 0,
        biasY: 0,
      }
    });
  },

  // 将位移强度限制在摇杆盘的范围中
  limitPosition: function (touchX, touchY) {
    var x = touchX - centerX;
    var y = touchY - centerY;
    var z = Math.sqrt(x * x + y * y);
    // 位移未超出摇杆盘范围时
    if (z <= radius) {
      x = Math.round(x);
      y = Math.round(y);
      return {
        posX: x,
        posY: y
      };
    } else {
      // 位移超出摇杆盘范围，需要对应限制位移强度
      var ratio = radius / z;
      x = x * ratio;
      y = y * ratio;
      x = Math.round(x);
      y = Math.round(y);
      return {
        posX: x,
        posY: y
      };
    }
  }
});

