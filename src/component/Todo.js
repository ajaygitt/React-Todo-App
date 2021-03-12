import React, { Component } from 'react';


class Todo extends Component {
constructor(props){
    super(props);
    this.state={
        items:[],
        txt:"",
        List:""
    };
}

txtChange=(e)=>{
this.setState({txt:e.target.value}) 
}
addToList=(txt)=>{
    console.log(txt);
if(txt==null)
{
alert("enter a txt")
}

    let currentText=this.state.txt;
   let CurrentItems=this.state.items;
   CurrentItems.push(currentText)
   this.setState({items:CurrentItems})
}
deleteItem=(e)=>{
    if(!window.confirm("the item cannot be retrieved if you delete it")){
        return ;
    }
console.log(e);
 
    let CurrentItems=this.state.items
   CurrentItems.splice(e,1)
   this.setState({items:CurrentItems})
}


    render() {
        return (
          
            <div className="">
                  <div className="todo">
                <h1>This is a TODO App Using React.Js </h1>
                </div>
                <div className="inputField">
                <input type="text"  onChange={this.txtChange}></input>
                <button className="button" onClick={this.addToList}>add item</button>
                </div>
                <div className="items">
            <ul className="list">
            
                     {this.state.items.map((item,key)=>{
                         return (
                             <li >{item }<button className="button1" onClick={()=>{this.deleteItem(key)}}>delete</button> </li>
                         
                             )
                     })}
            </ul>

            


            </div>
            </div>
           
        );
    }
}

export default Todo;