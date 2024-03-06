<template>
  <div>
    <ClientOnly>
      <div class="main-loader-overlay" v-if="data.show">
        <div id="preloader">
          <div id="preloaders" class="preloader">
            <img
              id="logoLoader"
              class="logoLoader"
              src="/logo.png"
              alt=""
            />
            <img class="Loader" src="/loading/loading1.svg" alt="" />
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps({
  throttle: {
    type: Number,
    default: 200,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  height: {
    type: Number,
    default: 3,
  },
});
// Options & Data
const data = reactive({
  percent: 0,
  show: false,
  canSucceed: true,
});
// Local variables
let _timer = null;
let _throttle = null;
let _cut;

// Functions
const clear = () => {
  _timer && clearInterval(_timer);
  _throttle && clearTimeout(_throttle);
  _timer = null;
};
const start = () => {
  clear();
  data.percent = 0;
  data.canSucceed = true;

  if (props.throttle) {
    _throttle = setTimeout(startTimer, props.throttle);
  } else {
    startTimer();
  }
};
const set = (num) => {
  data.show = true;
  data.canSucceed = true;
  data.percent = Math.min(100, Math.max(0, Math.floor(num)));
};
const increase = (num) => {
  data.percent = Math.min(100, Math.floor(data.percent + num));
};
const decrease = (num) => {
  data.percent = Math.max(0, Math.floor(data.percent - num));
};
const pause = () => clearInterval(_timer);
const resume = () => startTimer();
const finish = () => {
  // isLoaded.value = useImageLouded().value.loaded
  data.percent = 100;
  hide();
};
const hide = () => {
  clear();
  setTimeout(() => {
    data.show = false;
    // isLoaded.value = useImageLouded().value.loaded = false;
    setTimeout(() => {
      data.percent = 0;
    }, 400);
  }, 500);
};
const startTimer = () => {
  data.show = true;
  _cut = 10000 / Math.floor(props.duration);
  _timer = setInterval(() => {
    increase(_cut);
  }, 100);
};

// Hooks
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", start);
nuxtApp.hook("page:finish", finish);

// watchEffect(() => {
//   isLoaded.value = useImageLouded().value.loaded
//   console.log('loader check 1', isLoaded.value);
// })
onBeforeUnmount(() => clear);
</script>
<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: white;
}

#preloaders {
  width: 100%;
  height: 100%;
  position: relative;
}
img.logoLoader {
  height: auto;
  width: auto;
  top: 25%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
img.Loader {
  top: 65%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

@-webkit-keyframes animate-preloader {
  0% {
    width: 200px;
  }
  25% {
    width: 250px;
  }
  50% {
    width: 300px;
  }
  75% {
    width: 250px;
  }
  100% {
    width: 200px;
  }
}

@keyframes animate-preloader {
  0% {
    width: 200px;
  }
  25% {
    width: 250px;
  }
  50% {
    width: 300px;
  }
  75% {
    width: 250px;
  }
  100% {
    width: 200px;
  }
}
</style>
