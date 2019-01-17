import React, { Component } from 'react';
import Product from './product';
import products from '../products.json';

class Main extends Component {

    render() {



        var arr = [];
        Object.keys(products).forEach(function(key) {
            arr.push(products[key]);
        });
        console.log(arr);

        return (
            <main id="contentArea">
            <section className="intro">
            <h2 className="quote">The Only Difference Between <b>Screwing Around</b> And <b>Science</b> Is <i>Writing It Down</i></h2>
            <h3 className="cite"> - Adam Savage</h3>
            </section>
            <section className="grid">
        {arr.map(item => <Product name={item.title}  sku={item.key}  url={item.URL} image={item.image}/>)}
        </section>
      </main>
        )


    }

}



export default Main;