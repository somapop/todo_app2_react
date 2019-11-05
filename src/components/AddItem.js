import React from "react";
import moment from "moment";
//controlled Component

class AddItem extends React.Component {

    state = {
        newItemText: "",
        dateSelected: moment().format("YYYY-MM-DD")
    }

    //Functions that update states must always live where the state lives
    updateNewItemText = (event) => {
        //This funciton should update the state when someone types something
        this.setState({
            newItemText: event.target.value
        });
    };

    handleClick = (event) => {
        event.preventDefault();
        this.props.addNewTaskFunc(this.state.newItemText, this.state.dateSelected);
        this.setState({
            newItemText: ""
        });
    };

    handleDateChange = event => {
        console.log(event.target.value);
        this.setState({
            dateSelected: event.target.value
        });
    }



    render() {
        // JSX
        return (
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <div className="component"></div>
                    <input
                        type="text"
                        className="form-control"
                        id="newItem"
                        placeholder="What's today's TASQ?"
                        value={this.state.newItemText}
                        onChange={this.updateNewItemText}
                    ></input>
                </div>

                {/* this is a comment in JSX */}
                <div className="form-group mx-sm-3 mb-2">
                    <input type="date" onChange={this.handleDateChange} value={this.state.dateSelected} />
                </div>
                <button className="btn my-primary btn btn-space btn-sm my-small-btn" onClick={this.handleClick} disabled={this.state.newItemText.length === 0}>
                    Add to List
                 </button>
            </form>
        );
    }
}

export default AddItem;
