import React, { Component } from 'react';

class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(event) {
		event.preventDefault();
		this.props.onAdd(this.nameInput.value, this.priceInput.value);
		this.nameInput.value = '';
		this.priceInput.value = '';
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-4 ">
					<div className="card ">
						<div className="card-header">Add Product</div>
						<div className="card-body ">
							<form onSubmit={this.onSubmit}>
								<div class="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Item name"
										ref={(nameInput) => (this.nameInput = nameInput)}
									/>
								</div>
								<div class="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Item price"
										ref={(priceInput) => (this.priceInput = priceInput)}
									/>
								</div>
								<button className="btn btn-primary">Add</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddProduct;
