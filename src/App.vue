<template>

  <div id="app">
    <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#" v-b-toggle.sidebar-right>  <b-icon-arrow-up></b-icon-arrow-up>
</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
   
<b-nav-form>
  <b-form-input size="sm" @keyup="buscar" v-model="$store.state.search" class="mr-sm-2" placeholder="Search"></b-form-input>


</b-nav-form>
<b-nav-item>
<b-icon-search></b-icon-search>

</b-nav-item>
      <!-- Navbar dropdowns -->
     
      <b-nav-item-dropdown text="session" right>
        <b-dropdown-item href="#">cuenta</b-dropdown-item>
        <b-dropdown-item href="#">configuracion</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
   <div>
    
    <b-sidebar id="sidebar-right"  left shadow backdrop>
     <b-img center v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>

    </b-sidebar>
  </div>
</div>
{{search}}
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' },
    }
  },
  methods: {
    ...mapMutations(['buscar'])
  },
  computed:{
    ...mapState(['search'])
  }
 
}
</script>
