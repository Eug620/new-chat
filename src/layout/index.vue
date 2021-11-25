<template >
  <div class="chat-container">
    <div class="chat-container-header" :class="{'is-show': useIsShow}">
      <div class="chat-container-header-navigation">
        <Navigation />
      </div>
      <div class="chat-container-header-classification">
        <div class="chat-container-header-classification-layout">
          <Classification />
        </div>
      </div>
    </div>
    <div class="chat-container-section">
      <div class="chat-container-section-layout">
        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade" mode="out-in">
            <template v-if="route.meta.keepAlive">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </template>
            <template v-else>
              <component :is="Component" />
            </template>
          </transition>
        </router-view>
      </div>
    </div>
    <el-backtop />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, computed, watch, provide } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "/@/store/Home";
const HomeStore = useHomeStore();

const {
  getNavigationHeight,
  getClassificationHeight,
  getTopHeightSum,
  getTopHeight,
  getTransformNavigationHeight,
  getLayoutWidth
} = storeToRefs(HomeStore);

const overScroll = ref(false);
const useIsShow = computed(() => {
  return TopOrBootom.value === "top" && cacheTop.value > getTopHeightSum.value
    ? false
    : overScroll.value;
});
provide('useIsShow', useIsShow)

const cacheTop = ref(0);
const TopOrBootom = ref("bootom");
const tops = ref(0);

// scroll event
const useScrollChange = () => {
  const windowsScrollTop = window.pageYOffset;
  const scrollHeight = document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  tops.value = parseInt(
    (windowsScrollTop / (scrollHeight - clientHeight)) * 100
  );
  if (windowsScrollTop > getTopHeightSum.value) {
    overScroll.value = true;
  } else {
    overScroll.value = false;
  }
  // 上次 > 本次 ==> 上滑
  if (cacheTop.value > windowsScrollTop) {
    TopOrBootom.value = "top";
  } else {
    TopOrBootom.value = "bootom";
  }
  cacheTop.value = windowsScrollTop;
};

// add scroll event
onMounted(() => {
  window.addEventListener("scroll", useScrollChange);
});

// remove event
onBeforeMount(() => {
  window.removeEventListener("scroll", useScrollChange);
});


</script>

<style lang="scss">
.chat-container {
  padding-top: v-bind(getTopHeight);
  background-color: #f4f5f5;

  .is-show {
    transform: translate(0, v-bind(getTransformNavigationHeight));
  }

  &-header {
    position: fixed;
    z-index: 9;
    top: 0;
    width: 100%;
    height: v-bind(getTopHeight);
    background-color: #fff;
    transition: 0.3s all linear;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

    &-navigation {
      height: v-bind(getNavigationHeight);
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;
    }

    &-classification {
      height: v-bind(getClassificationHeight);
      box-sizing: border-box;

      &-layout {
        width: v-bind(getLayoutWidth);
        margin: 0 auto;
      }
    }
  }

  &-section {
    padding: 10px;
    box-sizing: border-box;
    min-height: calc(100vh - v-bind(getNavigationHeight) - v-bind(getClassificationHeight));

    &-layout {
      width: v-bind(getLayoutWidth);
      margin: 0 auto;
    }
  }
}
</style>
