import React from 'react';
import Modal from '../components/modal';

export default class SignUp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false
    };
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { showModal } = this.state;
    return (
      <div>
        {showModal ? (
          <Modal>
            <h1>Sign up</h1>
            <div className="modalButtons">
              <button onClick={this.toggleModal}>Facebook</button>
              <button onClick={this.toggleModal}>Google</button>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}
