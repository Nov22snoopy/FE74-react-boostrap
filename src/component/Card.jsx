import React, { Component } from "react";
export default class Card extends Component {
  render() {

    return (
      <div className="my-5 p-4 p-lg-5 bg-light rounded-3 text-center">
        <div className="img-card">
          <img src={this.props.img} alt="" className="img-fluid" />
        </div>
        <div className="card-body">
          <h4 className="card-title my-3">John Doe</h4>
          <p className="card-text my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cum,
            vel dignissimos ea nulla quia aut, nobis odit doloremque earum ullam
            adipisci unde vero quo perspiciatis molestias excepturi.
          </p>
          <button className="btn btn-primary">See Profile</button>
        </div>
      </div>
    );
  }
}
