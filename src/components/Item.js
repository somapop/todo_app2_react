import React from "react";
import "./Item.css";

class Item extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="component"></div>

                {/*<div className="col-2">*/}
                <div className="col-2">
                    <p className={this.props.completed ? "completed" : ""}>
                        {this.props.text}
                    </p>


                </div>

                <div className="col-1">
                    {!this.props.completed && (
                        //<button className="btn btn-info" disabled={this.props.completed}>
                        <button type="button" className="btn my-primary my-small-btn btn btn-sm" disabled={this.props.completed}>
                            DONE
            </button>
                    )}

                </div>

                <div className="col-1">
                    <button type="button" className="btn my-primary2 btn-sm my-small-btn">DELETE</button>
                </div>
            </div>
        );
    }
}

export default Item;
