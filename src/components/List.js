import React, { Component } from 'react';

class List extends Component {
	constructor(){
		super();
		this.state={
			value : "",
			isToggleOn: true,
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.setState(preState =>({
			isToggleOn: !preState.isToggleOn
		})); 
	}

	render(){
		return(

			<div>
			<span onClick={ this.handleClick}>Liste</span>
			{this.state.isToggleOn ? "": <form			
			onSubmit={ (e) => {
				e.preventDefault();
				this.props.addlist(this.state.value);
				this.setState({value : ""});
				this.setState({isToggleOn: true});
			}}>
			<label htmlFor="list" >Nom de votre liste: </label>
			<input 
			onChange={(e) => { this.setState({value: e.target.value})}}
			type="text" 
			id="list" 
			name="list" 
			value={this.state.value}
			placeholder="ex: liste de course"/>
			<button type="submit" >Ajouter</button>
			</form> 
		}

		</div>
		);
	}

}


export default List;