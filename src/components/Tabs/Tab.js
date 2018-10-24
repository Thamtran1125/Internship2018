import React, { Component } from 'react';
import './css.css';
import {Link} from 'react-router-dom';
class Tab extends Component {
   
    render() {
        // handleTabs = () =>{
        //   this.state=id;
        // }
        let { category } = this.props;
        return (
          <div>
        
        <select name=""  class="form-control" required="required">
            <option value="">{category.name}</option>
        </select>
        
    
        </div>
        
        );
      
    }

}



export default Tab;

