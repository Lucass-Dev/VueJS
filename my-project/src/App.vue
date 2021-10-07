<template>
  <div id="app" class="d-flex flex-column align-items-center">
    <div id="nav">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About Us</router-link> |
      <router-link to="/Admin">Admin</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: 30px !important;
  width: 100% !important;
  height: 200px  !important;
  background: linear-gradient(#3ABA83 -10%, #364a5f 75%);
  opacity: 0.8 !important;

}


#nav img{

  width: 8% !important;
}

#nav a {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.733);
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}






</style>


