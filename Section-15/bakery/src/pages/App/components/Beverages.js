import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Banner from './componentsChild/Banner';
import { get } from '../../../services/http'

export default class Beverages extends React.Component {
    state = {
        beverages: []
    }

    async componentDidMount() {
        const beverageResponse = await get('/beverages?limit=6');
        this.setState({
            beverages: beverageResponse.data
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
