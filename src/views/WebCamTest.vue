<template>
  <div class="hello">
    <h2>Web Camera</h2>
    <p>
      자동으로 사진찍기
    </p>
  </div>
  <div id="app" class="web-camera-container">
    <div class="camera-button">
      <button type="button" 
              class="button is-rounded" 
              :class="{ 'is-primary': !isCameraOpen, 'is-danger': isCameraOpen }"
              @click="toggleCamera">
        <span v-if="!isCameraOpen">Open Camera</span>
        <span v-else>Close Camera</span>
      </button>
    </div>

    <div v-show="isCameraOpen && isLoading" class="camera-loading">
      <ul class="loader-circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div v-if="isCameraOpen" 
         v-show="!isLoading" 
         class="camera-box" 
         :class="{ 'flash': isShotPhoto }">

      <div class="camera-shutter" :class="{ 'flash': isShotPhoto }"></div>

      <video v-show="!isPhotoTaken" 
             ref="camera" 
             :width="450" 
             :height="337.5" 
             autoplay></video>

      <canvas v-show="isPhotoTaken" 
              id="photoTaken" 
              ref="canvas" 
              :width="450" 
              :height="337.5"></canvas>
    </div>

    <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
      <button type="button" 
              class="button" 
              @click="takePhoto">
              <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
      </button>
    </div>

    <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
      <a id="downloadPhoto" 
         download="my-photo.jpg" 
         class="button" 
         role="button" 
         @click="downloadImage">Download</a>
    </div>
  </div>
</template>
<script>
export default {
  el: '#app',
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      uploadImages: []
    }
  },
  mounted() {
    this.autoOpenCamera();
  },
  methods: {
    autoOpenCamera() {
      this.isCameraOpen = true;
      this.createCameraElement();
    },
    toggleCamera() {
      console.log("🚀 ~ toggleCamera ~ toggleCamera:")
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement()
      }
    },
    
    createCameraElement() {
      console.log("🚀 ~ createCameraElement ~ createCameraElement:");
      this.isLoading = true;
      
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});

			navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
          console.log("🚀 ~ createCameraElement ~ stream:", stream)
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(() => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
				});
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
      //사진을 서버에 업로드하기 위해 따로 저장해둔다.
      this.link = this.$refs.canvas.toDataURL('image/jpeg');
      
      //사진을 3장까지 보관한다.
      console.log("🚀 ~ takePhoto ~ this.uploadImages.length:", this.uploadImages.length);
      if(this.uploadImages.length < 3) {
        this.uploadImages.push(this.link);
      } else {
        
        this.uploadImages.shift();
        this.uploadImages.push(this.link);
        //사진을 3장 찍으면 멈춘다.
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      }
    },
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken")
                             .toDataURL("image/jpeg")
                             .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
  }
}
</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
}

.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 500px;
}
.web-camera-container .camera-button {
  margin-bottom: 2rem;
}
.web-camera-container .camera-box .camera-shutter {
  opacity: 0;
  width: 450px;
  height: 337.5px;
  background-color: #fff;
  position: absolute;
}
.web-camera-container .camera-box .camera-shutter.flash {
  opacity: 1;
}
.web-camera-container .camera-shoot {
  margin: 1rem 0;
}
.web-camera-container .camera-shoot button {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.web-camera-container .camera-shoot button img {
  height: 35px;
  object-fit: cover;
}
.web-camera-container .camera-loading {
  overflow: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
  min-height: 150px;
  margin: 3rem 0 0 -1.2rem;
}
.web-camera-container .camera-loading ul {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 999999;
  margin: 0;
}
.web-camera-container .camera-loading .loader-circle {
  display: block;
  height: 14px;
  margin: 0 auto;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  position: absolute;
  width: 100%;
  padding: 0;
}
.web-camera-container .camera-loading .loader-circle li {
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  line-height: 10px;
  padding: 0;
  position: relative;
  margin: 0 0 0 4px;
  background: #999;
  animation: preload 1s infinite;
  top: -50%;
  border-radius: 100%;
}
.web-camera-container .camera-loading .loader-circle li:nth-child(2) {
  animation-delay: 0.2s;
}
.web-camera-container .camera-loading .loader-circle li:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes preload {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
