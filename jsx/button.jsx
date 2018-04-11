import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Button extends Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }
    handleSave(event){
        console.log(this,event);
    }
   render() {
      return (
         <div>
            <button onClick={this.handleSave}> Save </button>
         </div>
      );
   }
};

export default Button;