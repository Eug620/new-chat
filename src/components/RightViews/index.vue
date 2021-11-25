<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:22:48
 * @LastEditTime : 2021-11-25 19:36:08
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/components/RightViews/index.vue
-->
<template>
  <el-affix class="chat-home-right-views" :offset="useOffset">
    <!-- 项目信息 -->
    <ProjectInformation/>
    <!-- 系统信息 -->
    <SystemInformation/>
  </el-affix>
</template>

<script setup>
import { inject, computed, nextTick } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "/@/store/Home";
import ProjectInformation from './ProjectInformation.vue'
import SystemInformation from './SystemInformation.vue'

const HomeStore = useHomeStore();
const {
  classificationHeight,
  getTopHeightSum
} = storeToRefs(HomeStore);
const useIsShow = inject('useIsShow')

const useOffset = computed(() => {
  return useIsShow.value ? classificationHeight.value + 10 : getTopHeightSum.value + 10
})


</script>

<style lang="scss">
.chat-home-right-views{
  .el-affix--fixed{
    transition:  0.3s all linear;
  }

  &-search{
    .el-input__inner {
      border: none;
      background-color: #f4f5f5;
    }
  }

  .el-collapse {
    border-top: none;
  }
  .el-collapse-item__wrap,
  .el-collapse-item__header {
    border-bottom: none;
  }
}
</style>
