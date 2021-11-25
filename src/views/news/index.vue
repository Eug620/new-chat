<!--
 * @Author       : Eug
 * @Date         : 2021-11-22 11:14:32
 * @LastEditTime : 2021-11-23 11:05:59
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /new-chat/src/views/Home/index.vue
-->
<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-card shadow="never" class="card-list">
        <!-- <template #header>
          <ActiveType />
        </template> -->
        <TitleItem :ArticleList="ArticleList" />
      </el-card>
    </el-col>
    <el-col :span="8">
      <RightViews />
    </el-col>
  </el-row>
</template>

<script setup>
import { article as ArticleList } from "./index";
</script>

<style>
</style>