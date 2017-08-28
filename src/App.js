import React, { Component } from 'react';
import Addtodo from './components/Addtodo';
import View from './components/View';
import Filter from './components/filter';
import List from './components/List';
import Filterlist from './components/Filterlist';
import { v4 } from 'uuid';

class App extends Component{
  constructor(){
    super();
    this.state={
      lists : [],
      todo : [],
      filter: "all",
      list: "",
    }


    this._Submit = this._Submit.bind(this);
    this._Submitlist = this._Submitlist.bind(this);
    this._Status = this._Status.bind(this);
    this._onChangef = this._onChangef.bind(this);
    this._onChangel = this._onChangel.bind(this);

  }

  componentDidUpdate(){
   localStorage.setItem('todo', JSON.stringify(this.state.todo));
   localStorage.setItem('lists', JSON.stringify(this.state.lists));   localStorage.setItem('lists', JSON.stringify(this.state.lists));
   localStorage.setItem('list', JSON.stringify(this.state.list));

 }

 componentDidMount(){
  let check = JSON.parse(localStorage.getItem('todo'));
  if(check !== null){
    this.setState({ todo : check});
  }
  let checklist = JSON.parse(localStorage.getItem('lists'));
  if(checklist !== null){
    this.setState({ lists : checklist});
  }
  let list = JSON.parse(localStorage.getItem('list'));
  if(list !== null){
    this.setState({ list : list});
  }
}

_Submit(task) {
 this.setState({
  todo : [...this.state.todo,
  {content: task, id: v4(), status: false}]
});
}

_Submitlist(list) {
  console.log(list);
  this.setState({
    lists : [...this.state.lists,
    {content: list, id: v4()}]
  });
}

_Status(id) {
  let update = this.state.todo;
  let newstatus = update.map(tache =>{
    if (tache.id === id) {
      return{content:tache.content, status: !tache.status, id: tache.id}
    }
    return tache;
  })
  this.setState({todo: newstatus});
}

_onChangef(filter) {
  this.setState({
    filter : filter
  })
}

_onChangel(content, key) {
  console.log(content, key);
  this.setState({
    list : {content: content, id: key}
  })
}


render(){
  console.log(this.state.list);
  return(

    <div>
    <List addlist={this._Submitlist} />
    <Filterlist list={this.state.list} lists={this.state.lists} onChangel={this._onChangel}/>
    <Addtodo addtodo={this._Submit} />
    <Filter onChangef={this._onChangef} />
    <View todo={this.state.todo} Status={this._Status} filter={this.state.filter}/>
    </div>
    )
}
};
export default App;
