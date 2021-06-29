import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default class Story extends React.Component {
    render () {
        return <div>
            <Header />
            <main className="home-page-content">
            <h3>Hi, We’re BREAD BAKERY</h3>
            <p>Since its launch in the Vietnam in 2444, Bread Bakery has developed into a reputable bakery & café franchise, specializing in French-Asian inspired baked goods, passionately made from the finest ingredients. At Bread Bakery, we offer more than 300 different kinds of bakery goods, including bread, pastries, cakes, desserts, and beverages. We bake each day to provide fresh products for our guests and take pride in sourcing and using carefully selected fine ingredients. Bread Bakery continues to expand and embrace innovation in all markets.
            Currently, there are more than 100 stores in the universe. and more than 1,650 stores worldwide.</p>
            </main>
            <Footer />
        </div>
    }
}