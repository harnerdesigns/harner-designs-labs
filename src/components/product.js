import React, { Component } from 'react';
import Fullscreen from './fullscreen';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class Product extends Component {

	constructor(props) {
		super(props);

		this.state = { isOpen: false };
	}

	componentDidMount() {
		// 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav). 
		this.targetElement = document.querySelector('.modal');
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
		if (this.state.isOpen) {
			enableBodyScroll(this.targetElement);
		} else {
			disableBodyScroll(this.targetElement);
		}

	}

	componentWillUnmount() {
		// 5. Useful if we have called disableBodyScroll for multiple target elements,
		// and we just want a kill-switch to undo all that.
		// OR useful for if the `hideTargetElement()` function got circumvented eg. visitor 
		// clicks a link which takes him/her to a different page within the app.
		clearAllBodyScrollLocks();
	}

	render() {




		return (
			<div className={"card open-" + this.state.isOpen}>
				<img src={this.props.image} alt={this.props.name} onClick={this.toggleModal} />
				<h1 className="product-title" onClick={this.toggleModal}>{this.props.name}</h1>


				<Fullscreen Title={this.props.name} show={this.state.isOpen} url={this.props.url} description={this.props.description}
					onClose={this.toggleModal} />
			</div>
		)

	}

}

export default Product;