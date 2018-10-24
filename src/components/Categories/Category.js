import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Category extends Component {



 
 
  render() {

    let { category } = this.props;
    return (
      <div className="gallery-item1" >
        <div className="grid-item-holder">
          <div className="listing-item-grid">
         <img src={category.image} alt="" style={{ width: 350, height: 250 }} />
            <div className="listing-counter"><span>10 </span> Bài viết</div>
            <div className="listing-item-cat">
              <h3> <Link to={`/categories/${category.id}/posts`}
              >
                {category.name}
                </Link>
             </h3>
              <p>{category.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Category;

