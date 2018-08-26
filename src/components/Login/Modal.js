import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
	render() {
		const { show, children } = this.props;

		return show ? ReactDOM.createPortal (
				children,
				document.getElementById('root') )
			: null;
	}
}

export default Modal;