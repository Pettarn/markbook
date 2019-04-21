<template>
  <div>
    <index-header></index-header>
    <router-view></router-view>
  </div>
</template>

<script>
import IndexHeader from './components/header.vue'

export default {
  name: 'App',
  components: {
    IndexHeader
  },
  data () {
    return {

    }
  },

  // Call method to init a structure on localStorage
  updated () {
    const notes = localStorage.getItem('markbook')
    if( notes == null || !Object.keys(notes) > 0 ) {
      this.start()
    }
  },
  methods: {
    start () {
      localStorage.setItem('markbook', JSON.stringify({
        version: '1.0.0',
        notes: []
      }))
    }
  }
}
</script>

<style>

</style>
