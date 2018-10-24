import React, { Component } from 'react';
import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import Value from './../../components/Values/Value';
import CategoriesContainer from './../../containers/CategoriesContainer';
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header namePage='Sign In'/>
                <main id="mainContainer">
                    <div className="container">
                        <CategoriesContainer />
                        <Value />
                    </div>
                </main >
                <Footer />
            </div>
        )
    }
}

