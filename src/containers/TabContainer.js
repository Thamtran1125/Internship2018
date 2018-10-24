import Select from 'react-select';
import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
// import {availableCities} from '../utils/api.js';
import axios from 'axios'
// let isLoadingExternally = false;

class TabContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
        selectedOption: '',
        clearable: true,
        categories: []
    } 
}
componentDidMount() {
	// isLoadingExternally = true;
	
	axios({
		method: 'GET',
		url: 'http://5b3c2ed6e7659e00149695f4.mockapi.io/categories',
		data: null
	})
    // availableCities()
        .then(res => {
            this.setState({
				categories: res.data
            }, () => {
                // isLoadingExternally = false;
			})
			
            console.log("hello", this.state.categories)
        })
}

handleChange = (selectedOption) => {
	this.setState({ 
		currentOption: selectedOption
	 });
	}
render(){
return (
    <div>
        <Select
		
				name="form-field-name" class="form-control"
				required="false"
                value={this.state.currentOption}
                onChange={this.handleChange}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                labelKey={'name'}
                valueKey={'id'}
                // isLoading={isLoadingExternally}
				options={this.state.categories}     
				             
            />

		
    </div>
		
)
}
}

export default TabContainer;