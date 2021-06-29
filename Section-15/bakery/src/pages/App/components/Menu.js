import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Banner from './componentsChild/Banner';
import { get } from '../../../services/http'

export default class Menu extends React.Component {
    state = {
        menu: []
    }

    async componentDidMount() {
        const menuResponse = await get('/menu?limit=6');
        this.setState({
            menu: menuResponse.data
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