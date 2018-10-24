import React, { Component } from 'react';

class Categories extends Component {
	render() {
		return (
			<div>
				<section id="sec2">
					<div className="container">
						<div className="section-title">
							<h2>Những thứ phổ biến nhất</h2>
							<div className="section-subtitle">Catalog of Categories</div>
							<span className="section-separator" />
							<p>Một vài thứ mọi người thường bị mất.</p>
						</div>
						<div className="fl-wrap mr-bot spad item-card">
							{this.props.children}
						</div>
					</div>
				</section>
			</div>
		);
	}

}

export default Categories;
