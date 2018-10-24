import React, { Component } from 'react';

export default class Values extends Component {
	render() {
		return (
			<div>
				{/*section */}
				<section className="color-bg">
					<div className="shapes-bg-big" />
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="images-collage fl-wrap">
									<div className="images-collage-title">Tìm <span>Kiếm </span></div>
									<div className="images-collage-main images-collage-item"><img src="images/1.jpg"alt="" /></div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="color-bg-text">
									<h3>Sứ mệnh</h3>
									<p>Chúng tôi đồng cảm với bạn khi bị mất đồ, vì vậy trang web giúp bạn tìm đồ thất lạc nahnh hơn, kết nối bạn với mọi người xung quanh</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*section   end */}

			</div>
		)
	}
}

