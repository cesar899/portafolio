<template>
	<div>
		<p>Home</p>
		<b-button variant="danger">Button</b-button>
		<button @click="fetchUser">refresh</button>
		<button @click="logout">logout</button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Home',
	middleware: ["auth"],
	data () {
		return {

		}
	},
	computed: {
		...mapGetters({
		token: 'token',
		user: 'user',
		check: 'check',
		role: 'role',
		}),
	},
	methods: {
		async logout () {
			const resp = await this.$store.dispatch('logout')
			console.log(resp)
			this.$router.push({ name: 'auth-login' })
		},
		async fetchUser () {
			try {
				await this.$store.dispatch('fetchUser')
			} catch (error) {
				console.log(error)
			}
		}
	}
}
</script>

<style lang="css" scoped>
</style>