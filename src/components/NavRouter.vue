<template>
  <div>
    <nav id="nav" class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand">Movieflix</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/search" class="nav-link">Search</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/highlight" class="nav-link">Test</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
#nav {
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 99;
  background-color: black;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.router-link-exact-active {
  color: white !important;
}
</style>
