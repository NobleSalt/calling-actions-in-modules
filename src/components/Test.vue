<template>
  <div>
    {{ work }}
    <button @click="again">Check Again</button>
    <button
      @click="$store.dispatch('test/check', 'Store Check', { root: true })"
    >
      Store Check
    </button>
    <button
      ref="handleChe"
      @click="$store.commit('test/handleCheck', 'handleCheck', { root: true })"
    >
      Store handleCheck
    </button>
    <button @click="$refs.handleChe.click()">Click Me</button>
    {{ main }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Test',
  props: ['main'],
  data () {
    return {
      choice: ''
    }
  },
  computed: {
    ...mapState({
      work: (state) => state.test.work
    })
  },
  methods: {
    again () {
      // this.check('Again')
      this.$store.dispatch('test/check', 'Again', { root: true })
      console.log(this.work)
    }
  }
}
</script>

<style>
</style>
