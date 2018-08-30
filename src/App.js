import React, { Component } from 'react';
import ProductItem from './components/ProductItem';
import AddProduct from './components/AddProduct';
//import './App.css';
const products = [
	{
		name: 'iPad',
		price: 200
	},
	{
		name: 'iPhone',
		price: 650
	}
];
localStorage.setItem('products', JSON.stringify(products));
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: JSON.parse(localStorage.getItem('products'))
		};
		this.onAdd = this.onAdd.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onEditSubmit = this.onEditSubmit.bind(this);
	}
	componentWillMount() {
		const products = this.getProducts();
		this.setState({ products });
	}
	getProducts() {
		return this.state.products;
	}

	// Delete Product
	onDelete(name) {
		const products = this.getProducts();
		const filteredProducts = products.filter((products) => {
			return products.name !== name;
		});
		this.setState({ products: filteredProducts });
	}
	// Add Product
	onAdd(name, price) {
		if (name !== '' && price !== '') {
			const products = this.getProducts();
			products.push({
				name,
				price
			});
			this.setState({ products });
		}
	}

	// ----------------------------

	// Edit Product

	onEditSubmit(name, price, originalName) {
		let products = this.getProducts();

		products = products.map((product) => {
			if (product.name === originalName) {
				product.name = name;
				product.price = price;
			}
			return product;
		});
		this.setState({ products });
	}
	//-----------------------------
	render() {
		return (
			<div className="container">
				<h2 className="page-header page-header">Products Manager</h2>
				<AddProduct onAdd={this.onAdd} />
				{this.state.products.map((product) => {
					return (
						<ProductItem
							key={product.name}
							{...product}
							onDelete={this.onDelete}
							onEditSubmit={this.onEditSubmit}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
