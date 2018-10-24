import React, { Component } from 'react';
// import TaskSearchControl from './TaskSearchControl';
// import TaskSortControl from './TaskSortControl';

class Search extends Component {

constructor(props) {
  super(props);
  this.state={
    keyword:''
  }
}
onChange = (e) => {
    let target = e.target;
    let name = target.name;

    let value = target.value;
    this.setState({
        [name]: value
    });
}
onSearch =()=>{
  console.log(this.state);
  
}
    render() {
      let {keyword} = this.state;
      return (
        <div className="row mt-15">
               
           <input type="search" 
           name="keyword" class="form-control"
            value="" required="
            required" title=""
            value={keyword}
            onChange={this.onChange}
            />
               
               <button onClick={this.onSearch} type="button" class="btn btn-default">search</button>
               
       </div>
        );
    }
}

export default Search;
