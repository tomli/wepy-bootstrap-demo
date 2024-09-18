Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    a: Number,
  },
  data: {
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
      console.log('xr-scene', xrScene);
    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
      this.setPoster();
    },
    handleARReady: function({detail}) {
      console.log('ar-ready', this.scene.ar.arModes, this.scene.ar.arVersion);
    },
    handleARError: function({detail}) {
      console.log('ar-error', detail);
    },
    handleLog: function({detail}) {
      const {el, value} = detail;
      console.log('log', detail.value);
    },
    async setPoster() {
      const scene = this.scene;
      const xrSystem = wx.getXrFrameSystem();

      // 替换贴图
      const frameElm = this.scene.getElementById('frame');
      const frameGLTF = frameElm.getComponent(xrSystem.GLTF);
      const textureAsset = await scene.assets.loadAsset({
        type: 'texture',
        assetId: `texture-1`,
        src: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/waifu.png',
      });
      for(const mesh of frameGLTF.meshes) {
        console.log('textureAsset', textureAsset.value);
        mesh.material.setTexture('u_baseColorMap', textureAsset.value);
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
      const { dir, target, camera } = detail.value;
      console.log('dir handleDragMoon', dir);
      const cameraPos = camera.el._components.transform.worldPosition;
      const k = -cameraPos.y / dir[1];
      const x = cameraPos.x + k * dir[0];
      const z = cameraPos.z + k * dir[2];
      const len = Math.sqrt(x * x + z * z);
      // if (len > this.data.innerRing) {
      // }
      const transform = target._components.transform;
      console.log('transform.position', transform.position);
      const scale = len > this.data.outerRing ? this.data.outerRing / len : 1.0;
      console.log('scale', scale);
      transform.position.x = x * scale;
      transform.position.z = z * scale;
      // transform.position.x = transform.position.x +  dir[0];
      // transform.position.y = transform.position.y +  dir[1];
    },
  }
})
