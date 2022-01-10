<template>
<div>
	{{getTodo}} <br>
		<input type="text" v-model="inputValue" >
		<button @click="pushtodo(inputValue)">OK</button>
		{{inputValue}}
</div>	
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
	data(){
		return {
			inputValue: ''
		}
	},
	computed : {
		...mapGetters(['getTodo'])
	},
	methods: {
		...mapMutations(['pushtodo'])
	}
}
</script>
<style scoped>

</style>