import React, { Component } from 'react';

class Product extends Component {

	render(){




		return(
			<div className="card">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer"><img src={this.props.image} alt={this.props.name} /></a>

				<h1 className="product-title"><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.name}</a></h1>
			</div>
			)

	}

}

export default Product;