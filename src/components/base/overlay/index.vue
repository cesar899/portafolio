<template>
	<div>
    <b-spinner label="Spinning" v-if="overlay"></b-spinner>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'Overlay',

  data () {
    return {
    }
  },
    computed: {
      ...mapGetters({
        overlay: 'overlay',
      }),
    },
}
</script>

<style lang="css" scoped>
</style>