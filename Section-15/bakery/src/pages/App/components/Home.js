import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Banner from './componentsChild/Banner';
import FeatureProduct from '../components/componentsChild/FeatureProduct';
import { get } from '../../../services/http'

export default class Home extends React.Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const productResponse = await get('/products?limit=6');
        this.setState({
            products: productResponse.data
        })
    }

    render () {
        return <div>
            <Header />
            <main className="home-page-content">
                <Banner />
                <FeatureProduct products={this.state.products}/>
            </main>
            <Footer />
        </div>
    }
}