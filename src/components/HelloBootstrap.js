import React from "react";

const HelloBootstrap = () => (
    <div className="container">
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="#">Navbar</a>
        </nav>
        <div className="jumbotron">
            <h1>Jumbotron!</h1>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Card Text</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HelloBootstrap;
