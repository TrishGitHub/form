import React, { Component, Fragment } from 'react';

import Modal from '../Login/Modal';

class Private extends Component {
    state = {
      isModalShow: true,
    };

    hideModal = () => {
        this.setState({ isModalShow: false });
    };

    render() {
        const { isModalShow } = this.state;
        const name = "User";

        return (
            <Fragment> 
            <p>Private page</p>;
            <Modal show={ isModalShow }>
                <article>
                    <p>Добро пожаловать, { name }!</p>
                    <button onClick={this.hideModal}>
                        Close
                    </button>
                </article>
            </Modal>      
            </Fragment> 
          )
    }

};

export default Private;



