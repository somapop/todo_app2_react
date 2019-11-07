import React from "react";

const styles = {
    color: "#32350a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    margin: 0

}

class ItemCount extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row ToDoRow top-buffer">
                    <div className="col-lg-8 mb-3 mb-sm-0 ">
                        <div className="input" className="form-control">
                            <div className="col-8 col-sm-12 text-center align-middle">
                               


                               
                                <h5 style={styles}>OUTSTANDING TASQs {this.props.count}
                                    {/*<button type="button" className="btn btn-outline-info btn-md align-centre">3</button>*/}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        );
    }
}

export default ItemCount;



//<h2 style={{ color: "#FFF", backgroundColor: "#E96969", textAlign: "center", padding: 20, borderRadius: 10 }}>Good {timeOfDay}!</h2>


    //return <p>You have {this.props.count} items left on your todo list</p>;
  //}
//}
