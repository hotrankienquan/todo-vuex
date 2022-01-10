<template>
<div>
		<div v-for="(todo , index) in getTodo" :key="index">
			<span @click="selectTodo(index)"
			:class="{selected: getTodo[index].isSelected == true}"
			>{{todo.name}}</span>
			<button @click="deletetodo(index)">xoá</button>
		</div>
</div>	
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
	data(){
		return {
			
		}
	},
	computed :{
		...mapGetters(['getTodo'])
	},
	methods: {
		...mapMutations(['deletetodo', 'selectTodo'])
	}
}
</script>
<style scoped>
.selected {
	color: red;
}
</style>