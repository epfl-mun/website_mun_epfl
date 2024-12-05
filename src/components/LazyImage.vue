<template>
  <div class="relative" :style="{ height: height, width: width, '--parent-width': width, '--montains-transform' : montainsTransform, '--montains-shadow' : mountainsShadow, '--sunOrigin' : sunOrigin, '--sunSize' : sunSize }">
        <div v-if="loading" class="image-loader"></div>
        <img v-show="!loading" :src="src" @load="onLoad" @error="onError" :alt="alt" class="w-full h-full object-cover" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: '100%'
      },
      width: {
        type: String,
        default: '100%'
      },
        mountainsShadow: {
            type: String,
            default: '100px -300px'
        },
      montainsTransform: {
        type: String,
        default: 'rotate(45deg) translate(30%, 70%)'
      },
      sunOrigin: {
        type: String,
        default: '300px 1500px'
      },
      sunSize: {
        type: String,
        default: '10%'
      }
    },
    data() {
      return {
        loading: true
      }
    },
    methods: {
      onLoad() {
        this.loading = false;
      },
      onError() {
        this.loading = false;
      }
    }
  }
  </script>
  
  <style>
.image-loader {
  width: 100%;
  height: 100%;
  position: relative;
  background: #EEEEEE;
  overflow: hidden;
}

.image-loader:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: var(--montains-transform);
  background: #ff9371;
  box-shadow: var(--montains-shadow) 0 5px #ff3d00;
  animation: slide 2s infinite ease-in-out alternate;
}

.image-loader:after {
  content: "";
  position: absolute;
  left: 10px;
  top: 10px;
  width: var(--sunSize);
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: #ff3d00;
  transform: rotate(0deg);
  transform-origin: var(--sunOrigin);
  animation: rotate 2s infinite ease-in-out;
}

@keyframes slide {
  0% , 100% {
    bottom: -100%
  }

  25% , 75% {
    bottom: -2%
  }

  20% , 80% {
    bottom: 2%
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-15deg)
  }

  25% , 75% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(25deg)
  }
}
  
  </style>