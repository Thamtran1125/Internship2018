import React, { Component } from 'react';
// import {Link } from 'react-router-dom';
class Detail extends Component {

  render() {

    let { post } = this.props;
    
    return (
      <div className="gallery-item" >
     
        <div className="grid-item-holder">
          <div className="listing-item-grid">
         <img src={post.image} style={{ width: 350, height: 250 }}  alt=""/>
         
            <div className="listing-item-cat">
              <h3> 
                {post.title}
             </h3>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
}

export default Detail;

