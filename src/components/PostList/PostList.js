import React, { Component } from 'react';

class PostList extends Component {

    render() {
        return (
            <div className="all" >
            <div className="panel panel-success"  > 
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Bài Viết</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr >
                                <th>STT</th>
                                <th >Tiêu Đề</th>
                                <th>Nội Dung</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }

}

export default PostList;
