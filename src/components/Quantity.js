import React from "react";

const styles = {
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25px",
    marginRight: "25px"
  
}

class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div className="row">
            <div className="container">
                <div className="row ToDoRow top-buffer d-flex justify-content-center">
                       
                        <button type="button" className="btn my-primary my-small-btn btn btn-sm" style={styles} onClick={this.IncrementItem}>ADD</button>
                      
                        <button type="button" className="btn my-primary my-small-btn btn btn-sm" style={styles} onClick={this.DecreaseItem}>REMOVE</button>
                            
                        <button type="button" className="btn my-primary my-small-btn btn btn-sm" style={styles} onClick={this.ToggleClick}>
                        {this.state.show ? 'Hide' : 'Show'}
                        </button>
                {this.state.show ? <h4>{this.state.clicks}</h4> : ''}
            </div>
            </div>
            </div>
            
            
        );
    }
}

export default Quantity;    
