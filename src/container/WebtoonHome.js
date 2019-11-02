import React, { Component } from 'react';
import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";

class WebtoonHome extends Component {
    render(){
        return (
            <div>
                <div>
                    <Header />
                    <Gnb />
                    WebtoonHome
                    <Footer />
                </div>
            </div>
        )
    }
}

export default WebtoonHome;