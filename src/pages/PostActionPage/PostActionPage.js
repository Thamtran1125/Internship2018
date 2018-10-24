import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddPostRequest, actUpdatePostRequest, actGetPostRequest } from '../../actions/index';
import Files from 'react-files';
// import TabContainer from './../../containers/TabContainer';
import Header from './../../components/Header/Header';
// import TabContainer from './../../containers/TabContainer'
import Footer from './../../components/Footer/Footer';
// 
import Select from 'react-select';
// import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
// import {availableCities} from '../ut╛ils/api.js';
import axios from 'axios'
import _ from 'lodash';
class PostUserActionPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			txtTitle: '',
			txtContent: '',
			txtDescription: '',
			// txtOption: '',
			selectedOption: '',
			clearable: true,
			idCat: null,
			currentOption: '',
			txtUserName: ''
			// categories: []

		};
	}

	componentWillMount() {
		let { match } = this.props;
		if (match) { // update
			let id = match.params.id;
			this.props.onEditPost(id)
		} // else => add
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

	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.itemEditing) {
			let { itemEditing } = nextProps;
			this.setState({
				id: itemEditing.id,
				txtTitle: itemEditing.title,
				txtContent: itemEditing.content,
				currentOption: itemEditing.categoriesId,
				txtDescription: itemEditing.description,
				txtUserName: itemEditing.userName

			})
		}
	}

	handleChange = (selectedOption) => {
		this.setState({
			currentOption: selectedOption,
			idCat: selectedOption.id
		});
	}
	onChange = (e) => {
		let target = e.target;
		let name = target.name;

		let value = target.value;
		this.setState({
			[name]: value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		let loggedInUser = localStorage.getItem('users');
		let logg = JSON.parse(loggedInUser);
		
		let { id, txtTitle, txtContent, txtDescription, txtOption, currentOption } = this.state;
		let post = {
			id: id,
			title: txtTitle,
			content: txtContent,
			description: txtDescription,
			categoriesId: currentOption.id,
			userName: logg.name
		};
		if (id) {
			this.props.onUpdatePost(post, this.state.idCat);
			// console.log('ifd', this.state.idCat )
		} else {
			// console.log('aaaaa', this.state.idCat )
			this.props.onAddPost(post, this.state.idCat);
		}
		this.props.history.goBack();
	}

	onFilesChange = (files) => {
		console.log(files)
	}
	onFilesError(error, file) {
		console.log('error code ' + error.code + ': ' + error.message)
	}
	render() {
		let { txtTitle, txtContent, txtDescription, currentOption, txtUserName } = this.state;
		let loggedInUser = localStorage.getItem('users');
		let logg = JSON.parse(loggedInUser);
	
		// let result= _.find(users, { 'name': logg.name, 'password': logg.password });
		return (
			<div className="container">
				<Header />
				<div className="row" style={{ paddingTop: "100px", marginLeft: "300px", paddingBottom: "100px" }}>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<form onSubmit={this.onSubmit}>
							<legend>* Vui lòng nhập đầy đủ thông tin</legend>
							<div className="form-group">

								<label>Tên Tài Khoản: </label>
								<input value={logg.name} type="text" className="form-control" disabled="false" name="txtUserName" />
							</div>
							<div className="form-group">

								<label>Tiêu Đề Bài Viết: </label>
								<input onChange={this.onChange} value={txtTitle} name="txtTitle" type="text" className="form-control" required="false" />
							</div>
							<div className="form-group">
								<label>Nội Dung Chính: </label>
								<textarea onChange={this.onChange} value={txtContent} name="txtContent" className="form-control" rows="3" required="false">
								</textarea>
							</div>
							<div className="form-group">
								<label>Thêm Mô Tả: </label>
								<input onChange={this.onChange} value={txtDescription} name="txtDescription" type="text" className="form-control" required="false" />
							</div>
							<div className="form-group">
								<label>Chọn Danh Mục bài Viết: </label>

								{/* <TabContainer /> */}
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

							{/* <div className="files">
								<Files
									className='files-dropzone'
									onChange={this.onFilesChange}
									onError={this.onFilesError}
									accepts={['image/png', '.pdf', 'audio/*']}
									multiple
									maxFiles={3}
									maxFileSize={10000000}
									minFileSize={0}
									clickable
								>
									Drop files here or click to upload
                              </Files>
							</div> */}

							<Link to="/account" className="btn btn-danger mr-5">
								<i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
                            </Link>
							<button type="submit" className="btn btn-primary">
								<i className="glyphicon glyphicon-save"></i> Lưu Lại
                            </button>
						</form>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		itemEditing: state.itemEditing
	}
}

const mapDispatchToProps = (dispatch, props, id) => {
	return {
		onAddPost: (post, id) => {
			dispatch(actAddPostRequest(post, id));
		},
		onUpdatePost: (post, id) => {
			dispatch(actUpdatePostRequest(post, id));
		},
		onEditPost: (id) => {
			dispatch(actGetPostRequest(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostUserActionPage);
