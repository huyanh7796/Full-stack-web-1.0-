import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Banner from './componentsChild/Banner';
import { get } from '../../../services/http'

export default class Bread extends React.Component {
    state = {
        bread: []
    }

    async componentDidMount() {
        const breadResponse = await get('/bread?limit=6');
        this.setState({
            breads: breadResponse.data
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