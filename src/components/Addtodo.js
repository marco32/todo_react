import React, {Component} from 'react';

class Addtodo extends Component{
	constructor(){
		super();
   this.state = {
    value:"",
  }
}

render() {
  return (

    <form onSubmit={ (e) => {
      e.preventDefault();
      this.props.addtodo(this.state.value);
      this.setState({value : ""});
    }}>
    <div>
    <label htmlFor="add">Nouvelle tâche: </label>
    <input 
    onChange={(e) => { this.setState({value: e.target.value})}}
    type="text" 
    id="add" 
    name="add" 
    value={this.state.value}
    />
    <button type="submit">Ajouter</button>
    </div>
    </form>
    );
  }


};
export default Addtodo;