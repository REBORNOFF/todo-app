import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

	// constructor() {
	// 	super();
		
	// 	this.onLabelClick = () => {
	// 		console.log(`Done: ${this.props.label}`);
	// 	}
	// };

	state = {
		done: false,
		important: false
	};

	onLabelClick = () => {
		this.setState ((state) => {
			return {
				done: !state.done
			}
		});
	};

	onMarkimportant = () => {
		this.setState ((state) => {
			return {
				important: !state.important
			}
		});
	};

	render() {

		const {label, onDeleted} = this.props;
		const {done, important} = this.state; //достаем данные из state
		let classNames = 'todo-list-item';

		if (done) {
			classNames += ' done';
		}

		if(important) {
			classNames += ' important'
		};
			
		return (
			<span className={classNames}>
				<span
					className="todo-list-item-label"
					onClick = {this.onLabelClick}>
					{label}
				</span>
	
				<button type="button"
								className="btn btn-outline-success btn-sm float-right"
								onClick = {this.onMarkimportant}>
					<i className="fa fa-exclamation" />
				</button>
	
				<button type="button"
								className="btn btn-outline-danger btn-sm float-right"
								onClick = {onDeleted}>
					<i className="fa fa-trash-o" />
				</button>
			</span>
		);
	}
};

