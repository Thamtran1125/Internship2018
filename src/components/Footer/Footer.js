import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
           <footer className="main-footer dark-footer  ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-widget fl-wrap">
                      <h3>Về Chúng Tôi</h3>
                      <div className="footer-contacts-widget fl-wrap">
                        <p>Chúng tôi luôn cố gắng hỗ trợ mọi người tìm lại những thứ đã mất và kết nối sựu quan tâm của moi người với nhau</p>
                      
                        <ul className="footer-contacts fl-wrap">
                          <li><span><i className="fa fa-envelope-o" /> Mail :</span><a >yourmail@domain.com</a></li>
                          <li> <span><i className="fa fa-map-marker" /> Adress :</span><a >101 Lê Hữu Trác-Đà Nẵng </a></li>
                          <li><span><i className="fa fa-phone" /> Phone :</span><a>+7(111)123456789</a></li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-widget fl-wrap">
                      {/* <h3></h3> */}
                      <div className="widget-posts fl-wrap">
                        <ul>
                          <li className="clearfix">
                            <a  className="widget-posts-img"><img src="images/1.jpg" alt="" className="respimg"  /></a>
                            <div className="widget-posts-descr">
                              <a  >Vivamus dapibus rutrum</a>
                              <span className="widget-posts-date"> 21 Mar 09.05 </span>
                            </div>
                          </li>
                          <li className="clearfix">
                            <a  className="widget-posts-img"><img src="images/2.jpg" alt="" className="respimg"  /></a>
                            <div className="widget-posts-descr">
                              <a > In hac habitasse platea</a>
                              <span className="widget-posts-date"> 7 Mar 18.21 </span>
                            </div>
                          </li>
                          <li className="clearfix">
                            <a className="widget-posts-img"><img src="images/3.jpg" alt="" className="respimg"  /></a>
                            <div className="widget-posts-descr">
                              <a >Tortor tempor in porta</a>
                              <span className="widget-posts-date"> 7 Mar 16.42 </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sub-footer fl-wrap">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="about-widget">
                          <img src="./Lose/images/logo.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="copyright"> © CityBook 2018 .  All rights reserved.</div>
                      </div>
                      <div className="col-md-4">
                        <div className="footer-social">
                          <ul>
                            <li><a ><i className="fa fa-facebook-official" /></a></li>
                            <li><a><i className="fa fa-twitter" /></a></li>
                            <li><a ><i className="fa fa-chrome" /></a></li>
                            <li><a><i className="fa fa-vk" /></a></li>
                            <li><a><i className="fa fa-whatsapp" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></footer>
            {/*footer end  */}
            {/*register form */}
      </div>
    )
  }
}
