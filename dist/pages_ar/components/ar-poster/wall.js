import { posterModel, posterModels, TouchModes } from '../../lib/constants';

// 位移速度
let speed = 5;
let camera;
// 初始化是否完成的标记
let initFinish = false;


Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    posters: {
      type: Array,
      value: [false, false, false, false, false, false],
    },
    touchMode: Number,
    filmOnTheFly: Object,
    selectedPosterIdx: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        if (newVal !== oldVal && newVal>=0) {
          this.setSelectedPosterTransform(newVal);
        }
      },
    },
    captureState: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        if (newVal !== oldVal) {
          if (newVal === 1) {
            this.capture();
          }
        }
      },
    },
    transferData: {
      type:Object,
      observer(newVal, oldVal){
        if(newVal.biasRotX != undefined){
          this.biasRotX = newVal.biasRotX;
          this.biasRotY = newVal.biasRotY;
        }

        if(newVal.initRotX != undefined){
          this.initRotX = newVal.initRotX;
          this.initRotY = newVal.initRotY;
        }

        if(newVal.biasX != undefined){
          this.biasX = newVal.biasX;
          this.biasY = newVal.biasY;
        }
      },
    },
  },
  data: {
    captureQuality: 0.8,
    captureType: 'jpg',
    loaded: false
  },
  lifetimes: {
    attached() {
      console.log('data.a', this.data.a) // expected 123
    }
  },
  methods: {
   async handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      this.mat = new (wx.getXrFrameSystem().Matrix4)();
      console.log('xr-scene', xrScene);
      // 绑定tick事件
      // xrScene.event.add('tick', this.handleTick.bind(this));
      this.arTrackerState = 0

      this.biasRotX = 0;
      this.biasRotY = 0;
      this.initRotX = 0;
      this.initRotY = 0;
      this.biasX = 0;
      this.biasY = 0;
      camera = xrScene.getElementById("camera");
      initFinish = true;
      // await this.createModels();
    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: async function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
      // this.getFrameTransform()
      // await this.setPoster();
      this.scene.event.addOnce('touchstart', this.placeNode.bind(this));
    },
    createModels: async function() {
      // let gltf = 'https://6d6f-movief-b3iye-1300901012.tcb.qcloud.la/3d/poster/framed_image/framed_image.gltf';
      // let gltf = '/pages_ar/asserts/models/framed_image/framed_image.gltf';
      // let gltf = '/pages_ar/asserts/models/poster_frame/sss.gltf';
      let gltfModel = posterModel;
      // let gltf = '/pages_ar/asserts/models/poster_frame/sss.gltf';
      // const {value: model} = await this.scene.assets.loadAsset({type: 'gltf', assetId: 'gltf-frame', src: gltf});
      // return
      const xrSystem = wx.getXrFrameSystem();
      this.root = this.scene.getElementById('root');
      // 添加6个相框
      for (let i = 0; i < 6; i++) {
        const { value: model } = await this.scene.assets.loadAsset({
          type: 'gltf',
          assetId: 'gltf-frame' + i,
          src: gltfModel.url
        });
        // 动态改动模型根节点
        const containerEle = this.scene.createElement(xrSystem.XRNode, {
          position: '0 0 0',
          visible: false,
          'node-id': 'frameWrapper' + i
        });

        const gltf1 = this.scene.createElement(xrSystem.XRGLTF, {
          ...gltfModel.nodeConfig,
          'node-id': 'poster' + i
        });
        gltf1.getComponent(xrSystem.GLTF).setData({
          model: model
        });
        gltf1.setId('poster' + i); //结果是backendId，没用
        // console.log('gltf1', gltf1);

        containerEle.addChild(gltf1);
        // 先挂到场上，但是可以放在离屏
        this.root.addChild(containerEle);
        // containerEle.visible = false
        this.scene.getNodeById('frameWrapper' + i).visible = false;
        // console.log('this.scene.getNodeById(\'frameWrapper\'+i)', this.scene.getNodeById('frameWrapper'+i));
        // console.log('this.scene.getNodeById(\'poster\'+i)', this.scene.getNodeById('poster'+i));
        // const frameElm = this.scene.getNodeById('frameWrapper'+i).getChildByClass(xrSystem.GLTF)
        // console.log('frameElm', frameElm)
        wx.showToast({
          title: 'createElement' + i
        });
      }
    },

    handleARReady: async function({detail}) {
      console.log('ar-ready', this.scene.ar.arModes, this.scene.ar.arVersion);
      await this.createModels();
      this.setSelectedPosterTransform(this.data.selectedPosterIdx)
    },
    handleARError: function({detail}) {
      console.log('ar-error', detail);
    },
    handleARTrackerState: function({detail}) {
      // 事件的值即为`ARTracker`实例
      const tracker = detail.value;
      // 获取当前状态和错误信息
      const {state, errorMessage} = tracker;
      this.arTrackerState = state
      this.triggerEvent('arTrackerState', tracker);
    },

    handleLog: function({detail}) {
      const {el, value} = detail;
      console.log('log', detail.value);
    },

    placeNode(event) {
      console.log('event', event)
      // if(TouchModes.AddingPoster === this.data.touchMode){
      let { posters, filmOnTheFly } = this.data
      // const filmOnTheFly = {film: "伊拉克已逝之美",image: "https://img9.doubanio.com/view/photo/l_ratio_poster/public/p2908449504.jpg"}
      // filmOnTheFly = posters[this.data.selectedPosterIdx]
      if(filmOnTheFly && this.arTrackerState===2 ){
        let selectedPosterIdx = posters.indexOf(false)
        // for (const film of posters) {
        //   if(!film)
        //     return
        // }
        if(selectedPosterIdx >= 0){
          const {clientX, clientY} = event.touches[0];
          console.log('{clientX, clientY}', {clientX, clientY})
          const {frameWidth: width, frameHeight: height} = this.scene;

          // let { selectedPosterIdx } = this.data
          // if(selectedPosterIdx === 0)
          //   selectedPosterIdx = 1
          let frameID = 'frameWrapper'+selectedPosterIdx;
          if (clientY / height > 0.8 && clientX / width < 0.2) {
            this.scene.getNodeById(frameID).visible = false;
            this.scene.ar.resetPlane();
          } else {
            // const selectIdx = selectedPosterIdx+1
            this.scene.ar.placeHere(frameID, true);
            // const transform = this.settSelectedPosterTransform(selectIdx);
            // console.log('placeHere transform', transform);
            this.triggerEvent('posterPlaced', { selectedPosterIdx })
            this.setPoster(selectedPosterIdx, filmOnTheFly.image)
          }
        }else{
          wx.showToast({
            title: '最多放6张！',
          });
        }
      }
      this.scene.event.addOnce('touchstart', this.placeNode.bind(this));
    },

    async setPoster(selectedPosterIdx, image) {
      // const { selectedPosterIdx, filmOnTheFly } = this.data
      const scene = this.scene;
      const xrSystem = wx.getXrFrameSystem();

      // 替换贴图
      // const frameWrapper = this.scene.getNodeById('frameWrapper'+selectedPosterIdx)
      // if(frameWrapper.el.children.length === 0){
      //   wx.showToast({
      //     title: "frameWrapper"+selectedPosterIdx+" has no gftl",
      //   });
      // }
      // const frameElm = frameWrapper.el.children[0]
      // const frameElm = frameWrapper.getChildAtIndex(0)
      // const frameElm = frameWrapper.getChildByClass(xrSystem.GLTF)
      const frameElm = this.scene.getNodeById('poster'+selectedPosterIdx).el
      console.log('frameElm', frameElm)
      // const frameElm = this.scene.getElementById('poster'+selectedPosterIdx);
      const frameGLTF = frameElm.getComponent(xrSystem.GLTF);
      console.log('frameGLTF', frameGLTF)

      let textureAsset = this.scene.assets.getAsset('texture', image)
      if(!textureAsset)
         textureAsset = await scene.assets.loadAsset({
          type: 'texture',
          assetId: image,
          // src: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/waifu.png',
          // src: 'https://6d6f-movief-b3iye-1300901012.tcb.qcloud.la/blank_kanagawa.png',
          // src: 'https://6d6f-movief-b3iye-1300901012.tcb.qcloud.la/posters/test.png',
          src: image,
          // width:390, height:565
        });
      // const textureAsset2 = await this.scene.assets.getAsset('texture', 'surface_texture1')
      console.log('textureAsset', textureAsset)
      // console.log('textureAsset2', textureAsset2)
      // textureAsset.value.update({width:390, height:565})
      // textureAsset.value.wrapU = 3
      // textureAsset.value.pixelFormat()
      console.log('textureAsset.value', textureAsset.value)
      console.log('textureAsset.value.width()', textureAsset.value.width)
      console.log('textureAsset.value.pixelFormat()', textureAsset.value.pixelFormat)
      let done = 0
      for(const mesh of frameGLTF.meshes) {
        done++
        if(done<=1)
          continue
        console.log('mesh', mesh);
        mesh.material.setTexture('u_baseColorMap', textureAsset.value)
      }
      /*

            // 替换状态
            const ballonBlendElm = this.scene.getElementById('ballonBlend');
            const ballonBlendGLTF = ballonBlendElm.getComponent(xrSystem.GLTF);
            for(const mesh of ballonBlendGLTF.meshes) {
              // 清理模型金属度
              mesh.material.setVector('u_specularFactor', xrSystem.Vector3.createFromNumber(0, 0, 0));

              // 通过alphaMode 的 Setter 设置，或者写入renderState，但需要手动控制宏
              mesh.material.alphaMode = "BLEND";
              mesh.material.setVector('u_baseColorFactor', xrSystem.Vector4.createFromNumber(0, 0.5, 0, 0.5));
            }
      */

      wx.showToast({
        title: "海报已替换到像框内",
      });
    },

/*    handleDragMoon: function({detail}) {
      console.log('handleDragMoon', detail.value)
      const { dir, target, camera } = detail.value;
      const cameraPos = camera.el._components.transform.worldPosition;
      const k = -cameraPos.y / dir[1];
      const x = cameraPos.x + k * dir[0];
      const z = cameraPos.z + k * dir[2];
      const len = Math.sqrt(x * x + z * z);
      // if (len > this.data.innerRing) {
      // }
      const transform = target._components.transform;
      const scale = len > this.data.outerRing ? this.data.outerRing / len : 1.0;
      transform.position.x = x * scale;
      transform.position.z = z * scale;
      // transform.position.x = transform.position.x +  dir[0];
      // transform.position.y = transform.position.y +  dir[1];
      transform.position.z = z * scale;
    },*/

    setSelectedPosterTransform: function(idx) {
      console.log('setSelectedPosterTransform idx', idx);
      // const scene = this.scene;
      // const xrSystem = wx.getXrFrameSystem();
      const frameElm = this.scene.getElementById('poster'+idx);
      if(frameElm){
        // const frameGLTF = frameElm.getComponent(xrSystem.GLTF);
        this.posterTransform = frameElm._components.transform;
        console.log('placeHere transform', this.posterTransform);
        this.triggerEvent('selectedPosterTransformChange', { transform: this.posterTransform });
        return frameElm;
      }
    },
    flip(xyz, degree) {
      const transform = this.posterTransform
      // console.log('transform', transform);
      if(transform)
        transform.rotation[xyz] += degrees_to_radians(degree)
    },
    translate(xyz, val) {
      const transform = this.posterTransform
      // console.log('transform', transform);
      if(transform)
        transform.position[xyz] += val
    },
    scale(xyz, val) {
      const transform = this.posterTransform
      // console.log('transform', transform);
      if(transform)
        // transform.scale[xyz] = val
        transform.scale[xyz] += val
    },
    resetPlane(xyz, val) {
      this.scene.getNodeById('setitem').visible = false;
      this.scene.ar.resetPlane();
    },
    reset() {
      const transform = this.posterTransform
      console.log('transform.rotation.x', transform.rotation.x);
      console.log('transform.rotation.y', transform.rotation.y);
      console.log('transform.rotation.z', transform.rotation.z);
      transform.rotation.x = 0
      transform.rotation.y = degrees_to_radians(-90)
      transform.rotation.z = 0
    },
    handleTick: function (dt) {
      //确保handleReady时期的初始化完成
      if (!initFinish)
        return;

      const xrFrameSystem = wx.getXrFrameSystem();
      var deltaTime = dt.detail.value / 1000;

      // let nowPos = xrFrameSystem.Vector3.createFromNumber(0, 0, 0)
      // camera.getComponent(xrFrameSystem.Transform).worldQuaternion.toEulerAngles(nowPos)
      // this.triggerEvent('infoListener', {
      //   posX: radians_to_degrees(nowPos.x).toFixed(2),
      //   posY: radians_to_degrees(nowPos.y).toFixed(2),
      //   posZ: radians_to_degrees(nowPos.z).toFixed(2),
      // });


      if (this.posterTransform) {
        const nowPos = this.posterTransform.rotation
        this.triggerEvent('infoListener', {
            posX: radians_to_degrees(nowPos.x).toFixed(2),
            posY: radians_to_degrees(nowPos.y).toFixed(2),
            posZ: radians_to_degrees(nowPos.z).toFixed(2),
        });
        // // console.log('this.posterTransform.rotation.x=', this.posterTransform.rotation.x);
        // const nowPos = this.posterTransform.position
        // this.triggerEvent('infoListener', {
        //   posX: nowPos.x.toFixed(2),
        //   posY: nowPos.y.toFixed(2),
        //   posZ: nowPos.z.toFixed(2),
        // });
      }

      return
      //------摄像头位移逻辑------//
      const x = this.biasX;
      const y = this.biasY;

      if (x || y) {
        const position = this.posterTransform.position
        const z = Math.sqrt(x * x + y * y);
        var ratio = z / 50 /100; //此处除以50，因为摇杆盘半径为50
        ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
        var temp = xrFrameSystem.Vector3.createFromNumber(-x / z, 0, -y / z);
        temp = temp.scale(ratio * speed * deltaTime);
        //位移需要根据旋转角度做转化, 这里需要取得camera的世界旋转矩阵
        temp.applyQuaternion(camera.getComponent(xrFrameSystem.Transform).worldQuaternion);
        position.set(position.add(temp));
        return
        if (x){
          // console.log('translate x', x);
          if(x<0)
           this.translate("x", -.01)
          else
            this.translate("x", .01)
        }

        if (y){
          // this.translate("y", y)
          if(x<0)
            this.translate("y", -.01)
          else
            this.translate("y", .01)
        }

      }

    },
    moveLight() {
      const light = this.scene.getNodeById('light');
      light.rotation.x = Math.PI - light.rotation.x;
      light.rotation.y += Math.PI;
      console.log('light.rotation.x', light.rotation.x);
      console.log('light.rotation.y', light.rotation.y);
      console.log('light.rotation.z', light.rotation.z);
    },
    async capture() {
      this.scene.getNodeById('gltf-anchor').visible = false;
      await this.scene.share.captureToFriends({
        fileType: this.data.captureType,
        quality: this.data.captureQuality
      });
      this.scene.getNodeById('gltf-anchor').visible = true;

    },
  }
})
function degrees_to_radians(degrees)
{
  // Store the value of pi.
  var pi = Math.PI;
  // Multiply degrees by pi divided by 180 to convert to radians.
  return degrees * (pi/180);
}
function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
