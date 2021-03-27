<template>
  <nav
    class="navbar is-spaced container is-max-widescreen"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <g-link
        to="/"
        class="navbar-item">
       <span style="color:blue;letter-spacing:1px;font-size:23px;font-weight:bold">puppy<span style="color:red">ous</span></span>
      </g-link>

      <button
        class="navbar-burger burger"
        :aria-label="isMenuActive ? 'Close nav menu' : 'Open nav menu'"
        :class="{'is-active': isMenuActive}"
        @click="isMenuActive = !isMenuActive"
        @keyup="isMenuActive = !isMenuActive">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>

    <div
      class="navbar-menu"
      :class="{'is-active': isMenuActive}">
      <div class="navbar-start">
        
       
        <g-link
          to="/Products"
          class="navbar-item">
          Shop
        </g-link>
    
        <g-link
          to="/Blog"
          class="navbar-item">
          Blog
        </g-link>
        <g-link
          to="/about"
          class="navbar-item">
          About
        </g-link>
        
      </div>

      <div class="navbar-end">
        <!--    
        <div
          class="navbar-item has-dropdown"
          :class="{'is-active': searchResults.length}">
          <div class="control navbar-item">
            <label for="search">
              <input
                id="search"
                v-model="searchTerm"
                aria-label="Search"
                class="input is-small"
                type="text"
                placeholder="Search">
            </label>
          </div>
          <div class="navbar-dropdown">
            <g-link
              v-for="({ node: result, path }) in searchResults"
              :key="result.id"
              :to="path"
              class="navbar-item">
              {{ result.title }}
            </g-link>
            <hr class="navbar-divider">
            <div class="navbar-item">
              View more results
            </div>
          </div>
        </div>  -->
     
        <g-link
         
          to="/"
          class="navbar-item">
          Login
        </g-link>
        <g-link
          to="/"
          class="navbar-item">
          Cart
        </g-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isMenuActive: false,
   
  }),
  computed: {
    
    cart () { return this.$store.state.cart },
   
  },
  watch: {
    $route (to, from) {
      this.searchTerm = ''
    }
  },
  

}
</script>

<style lang="scss" scoped>
.navbar-burger {
  background-color: transparent;
  border: none;
}
</style>
