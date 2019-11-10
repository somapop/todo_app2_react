import React from "react";

const styles = {
    color: "#32350a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    margin: -3,


}

class ItemCount extends React.Component {
    render() {
        return (
            <div className="container">
                {/* I added this new classes from bootstrap d-flex justify-content-center in the next DIV. You can find this in Boostrap documentation serching FLEX */}
                <div className="row ToDoRow top-buffer d-flex justify-content-center">
                    <div className="col-lg-8 mb-3 mb-sm-0 ">

                        {/* I added form-control class in the next div */}
                        <div className=" col-8 col-sm-12 form-control">
                            <h5 style={styles}>OUTSTANDING TASQs {this.props.count}
                                {/*<button type="button" className="btn btn-outline-info btn-md align-centre">3</button>*/}
                            </h5>
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
