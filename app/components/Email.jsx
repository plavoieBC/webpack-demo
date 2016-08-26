import React, {Component, PropTypes} from 'react';

class Email extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    style={{ width: 200 }}
                    onChange={this.props.handleEmailChange}
                />
                <button
                    className="btn-success btn"
                    onClick={this.props.fetchGravatar}
                >
                    Fectch
                </button>
            </div>
        );
    }
}

Email.propTypes = {
    handleEmailChange: PropTypes.func,
    fetchGravatar: PropTypes.func,
};

export default Email;