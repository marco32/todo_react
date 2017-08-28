import React, {Component} from 'react';

const getFilter = (filter, todo) => {
	if(filter === 'true'){
		return todo.filter(tache => tache.status);
	}
	if(filter === 'false'){
		return todo.filter(tache => !tache.status);
	}
	return todo;
}

class View extends Component{

	render(){

		let liste = getFilter(this.props.filter, this.props.todo).map(tache =>(
			<li 
			key={tache.id} 
			className={tache.status ? 'done':'' }
			>{tache.content}
			<form onSubmit={ (e) => {
				e.preventDefault();
				this.props.Status(tache.id);
			}}>
			
			<button type="submit">Ok</button>
			
			</form>
			</li>));

			return(
			
			<ul>
			{liste}
			</ul>

			)
		}
	}

	export default View;