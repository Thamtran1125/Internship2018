import React, { Component } from 'react';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import DetailContainer from './../../containers/DetailContainer';
class DetailPost extends Component {
    
    render() {
        return (
            <div>
                <Header namePage='Sign Out'/>
                <main id="mainContainer">
                    <div className="container">
                        <DetailContainer match={this.props.match}/>
                        {/* <Value /> */}
                    </div>
                </main >
                <Footer />
            </div>
        )
    }
}

export default DetailPost;
