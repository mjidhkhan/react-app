import React, { Component } from 'react';

class ProductItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEdit: false
		};

		this.onDelete = this.onDelete.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onEditSubmit = this.onEditSubmit.bind(this);
	}
	onDelete() {
		const { onDelete, name } = this.props;
		onDelete(name);
	}
	onEdit() {
		this.setState({ isEdit: true });
	}
	onEditSubmit(event) {
		event.preventDefault();
		this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);
		this.setState({ isEdit: false });
	}
	render() {
		const { name, price } = this.props;
		return (
			<div className="  col-md-6 mt-3">
				{this.state.isEdit ? (
					<div>
						<form onSubmit={this.onEditSubmit}>
							<div class="form-group">
								<h4 className="text-primary">Edit</h4>
								<input
									placeholder="Item name"
									type="text"
									className="form-control mt-2"
									ref={(nameInput) => (this.nameInput = nameInput)}
									defaultValue={name}
								/>
								<input
									placeholder="Item price"
									type="text"
									className="form-control mt-2"
									ref={(priceInput) => (this.priceInput = priceInput)}
									defaultValue={price}
								/>
							</div>
							<button className="btn btn-primary">Save</button>
						</form>
					</div>
				) : (
					<div>
						<table className="table table-bordered">
							<thead className="thead-light">
								<tr>
									<th>Item</th>
									<th>Price</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<td>{name}</td>
								<td>{price}</td>
								<td>
									{' '}
									<button className="btn btn-primary" onClick={this.onEdit}>
										Edit
									</button>{' '}
									<button className="btn btn-danger" onClick={this.onDelete}>
										Delete
									</button>
								</td>
							</tbody>
						</table>
					</div>
				)}
			</div>
		);
	}
}

export default ProductItem;
