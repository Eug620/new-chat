<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:22:48
 * @LastEditTime : 2021-11-29 18:30:03
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/TitleItem/index.vue
-->
<template >
  <div class="Title-container">
    <div class="Title-Item" v-for="Article in ArticleList" :key="Article.article_id">
      <p>
        {{ Article.author }}
        <el-divider direction="vertical"></el-divider>
        {{ FormatTimerSecond(Article.create_time) }}
        <!-- <el-divider direction="vertical"></el-divider> -->
        <!-- {{ Article.tag_list.join(' · ') }} -->
      </p>
      <div class="Title-Item-title">{{ Article.article_title }}</div>
      <div class="Title-Item-description">{{ Article.article_describe }}</div>
      <div class="Title-Item-icons">
        <el-button type="text" size="mini">
          <el-icon style="vertical-align: middle;">
            <View />
          </el-icon>
          <span style="vertical-align: middle;"> {{Article.page_views}} </span>
        </el-button>
        <el-button type="text" size="mini">
          <el-icon style="vertical-align: middle;">
            <chat-round />
          </el-icon>
          <span style="vertical-align: middle;"> 0 </span>
        </el-button>
        
        <!-- <el-icon>
          <chat-round />
        </el-icon> -->
      </div>
    </div>
    <template v-if="!isEnd">
      <div class="loader-container">
        <div class="loader-child"></div>
        <div class="loader-child"></div>
        <div class="loader-child"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'
import utils from "/@/utils/index.js";
const { FormatTimerSecond } = utils;
const props = defineProps({
  ArticleList: {
    type: Array,
    default: []
  },
  isEnd: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss">
.Title-Item {
  padding: 20px;
  border-bottom: 1px solid #e5e6eb;
  cursor: pointer;
  
  &-title {
    margin: 10px 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  &-description {
    margin: 10px 0;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: #86909c;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  &-icons {
    // vertical-align:middle;
    line-height: 100%;

    .el-icon {
      margin-left: 20px;
      &:first-child {
        margin-left: 0px;
      }
    }
  }

  &:hover {
    background-color: #fafafa;
  }
}
// loadings
.loader-container {
  margin: 10vh auto;
  width: 100px;
  height: 100px;
  perspective: 780px;
  position: relative;
}

.loader-child {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;

  &:nth-of-type(1) {
    left: 0%;
    top: 0%;
    animation: rotate-one 1.15s linear infinite;
    border-bottom: 3px solid #5c5edc;
  }
  &:nth-of-type(2) {
    right: 0%;
    top: 0%;
    animation: rotate-two 1.15s linear infinite;
    border-right: 3px solid #9e85c3;
  }
  &:nth-of-type(3) {
    right: 0%;
    bottom: 0%;
    animation: rotate-three 1.15s linear infinite;
    border-top: 3px solid #e9908a;
  }
}
@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
