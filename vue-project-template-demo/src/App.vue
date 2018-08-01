<template>
  <div id="app">
    <!--<img src="./assets/images/logo.png">-->
    <header>
      <ul class="header-nav">
        <li>
          <router-link to="/">主视图</router-link>
        </li>
        <li>
          <router-link to="/one">分区一</router-link>
        </li>
        <li>
          <router-link to="/two">分区一</router-link>
        </li>
        <li>
          <router-link to="/three">分区三</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style>
  body, ol, ul, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, form, fieldset, legend, input, textarea, select {
    margin: 0;
    padding: 0
  }

  body {
    font: 14px "宋体", "Arial Narrow", HELVETICA;
    background: #fff;
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: #2d374b;
    text-decoration: none
  }

  a:hover {
    color: #2d374b;
    text-decoration: none
  }

  em {
    font-style: normal
  }

  li {
    list-style: none
  }

  img {
    border: 0;
    vertical-align: middle
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  p {
    word-wrap: break-word
  }

  #app {
    position: relative;
  }

  header {
    width: 100%;
    min-width: 1366px;
    height: 50px;
    position: relative;
    background: deepskyblue;
  }

  .header-nav {
    width: 100%;
    height: 100%;
  }

  .header-nav > li {
    line-height: 50px;
    float: left;
    cursor: pointer;
  }

  .header-nav > li:hover {
    background: #42b983;
  }

  .header-nav > li > a {
    padding: 0 30px;
    cursor: pointer;
    line-height: 50px;
    display: block;
  }
</style>
