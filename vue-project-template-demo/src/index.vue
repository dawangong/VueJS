<template>
  <div id="app">
    <!--<img src="./assets/images/logo.png">-->
    <!--<header>-->
    <!--<ul class="header-nav">-->
    <!--<li>-->
    <!--<router-link to="/">主视图</router-link>-->
    <!--</li>-->
    <!--<li>-->
    <!--<router-link to="/one">分区一</router-link>-->
    <!--</li>-->
    <!--<li>-->
    <!--<router-link to="/two">分区一</router-link>-->
    <!--</li>-->
    <!--<li>-->
    <!--<router-link to="/three">分区三</router-link>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</header>-->
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
                 text-color="#fff" active-text-color="#ffd04b">
          <h1 class="top-bar-heading">运营管理系统 - DEMO</h1>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="2">我的工作台</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组1</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                <el-menu-item index="1-4-2">选项2</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // import Vue from 'vue';
  // import Component from 'vue-class-component';

  // @Component({
  //   name: 'index',
  //   data() {
  //     return {
  //       activeIndex: '1'
  //     }
  //   }
  // })
  // export default class index extends Vue {
  //
  // };
  export default {
    name: 'index',
    data () {
      return {
        activeIndex: '1'
      }
    }
  }
</script>
<style>
  #app {
    position: relative;
  }

  .el-header {
    padding: 0;
  }

  .top-bar-heading {
    color: #fff;
    float: left;
    font-size: 20px;
    padding-left: 32px;
    padding-right: 33px;
    font-weight: normal;
    line-height: 60px;
  }
</style>
