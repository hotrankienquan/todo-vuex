const selectTodo = (state, index) => {
	state.todos[index].isSelected = !state.todos[index].isSelected 
}
export default selectTodo