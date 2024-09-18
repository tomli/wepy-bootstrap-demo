Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    a: Number,
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
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      this.mat = new (wx.getXrFrameSystem().Matrix4)();
      console.log('xr-scene', xrScene);
    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: async function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
      await this.setPoster();
      this.scene.event.addOnce('touchstart', this.placeNode.bind(this));
    },
    handleARReady: function({detail}) {
      console.log('ar-ready', this.scene.ar.arModes, this.scene.ar.arVersion);
    },
    handleARError: function({detail}) {
      console.log('ar-error', detail);
    },
    handleARTrackerState: function({detail}) {
      // 事件的值即为`ARTracker`实例
      const tracker = detail.value;
      // 获取当前状态和错误信息
      const {state, errorMessage} = tracker;
      this.triggerEvent('arTrackerState', tracker);
    },
    handleLog: function({detail}) {
      const {el, value} = detail;
      console.log('log', detail.value);
    },
    placeNode(event) {
      console.log('event', event)
      const {clientX, clientY} = event.touches[0];
      console.log('{clientX, clientY}', {clientX, clientY})
      const {frameWidth: width, frameHeight: height} = this.scene;

      if (clientY / height > 0.8 && clientX / width < 0.2) {
        this.scene.getNodeById('setitem').visible = false;
        this.scene.ar.resetPlane();
      } else {
        this.scene.ar.placeHere('setitem', true);
      }

      this.scene.event.addOnce('touchstart', this.placeNode.bind(this));
    },
    async setPoster() {
      const scene = this.scene;
      const xrSystem = wx.getXrFrameSystem();

      // 替换贴图
      const frameElm = this.scene.getElementById('frame');
      const frameGLTF = frameElm.getComponent(xrSystem.GLTF);
      console.log('frameGLTF', frameGLTF)

      const textureAsset = await scene.assets.loadAsset({
        type: 'texture',
        assetId: `texture-1`,
        // src: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/waifu.png',
        // src: 'https://6d6f-movief-b3iye-1300901012.tcb.qcloud.la/blank_kanagawa.png',
        src: 'https://6d6f-movief-b3iye-1300901012.tcb.qcloud.la/posters/test.png',
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

    },
    handleDragMoon: function({detail}) {
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
    },
    getFrameTransform: function() {
      const scene = this.scene;
      // const xrSystem = wx.getXrFrameSystem();
      const frameElm = this.scene.getElementById('frame');
      // const frameGLTF = frameElm.getComponent(xrSystem.GLTF);
      const transform = frameElm._components.transform;
      return transform;
    },
    flip(xyz) {
      const transform = this.getFrameTransform();
      console.log('transform', transform);
      transform.rotation[xyz] += degrees_to_radians(90)
    },
    translate(xyz, val) {
      const transform = this.getFrameTransform();
      console.log('transform', transform);
      transform.position[xyz] += val
    },
    reset() {
      const transform = this.getFrameTransform();
      console.log('transform.rotation.x', transform.rotation.x);
      console.log('transform.rotation.y', transform.rotation.y);
      console.log('transform.rotation.z', transform.rotation.z);
      transform.rotation.x = 0
      transform.rotation.y = degrees_to_radians(-90)
      transform.rotation.z = 0
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
