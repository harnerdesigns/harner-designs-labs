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
            <h1 className='heading'>Experiments</h1>
            <section className="grid">
        {arr.map(item => <Product name={item.title}  sku={item.key}  url={item.URL} image={item.image}/>)}
        </section>
      </main>
        )


    }

}



export default Main;