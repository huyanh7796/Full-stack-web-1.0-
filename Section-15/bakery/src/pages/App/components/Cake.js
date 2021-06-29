import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Banner from './componentsChild/Banner';
import { get } from '../../../services/http'

export default class Cake extends React.Component {
    state = {
        cakes: []
    }

    async componentDidMount() {
        const cakeResponse = await get('/cakes?limit=6');
        this.setState({
            cakes: cakeResponse.data
        })
    }

    render () {
        return <div>
            <Header />
            <main className="home-page-content">
                <Banner />
            </main>
            <Footer />
        </div>
    }
}