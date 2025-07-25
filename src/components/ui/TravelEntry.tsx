import React, { Component } from "react";

type Props = {
  header: string;
  body: string;
  image?: string;
};

type State = {};

class TravelEntry extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="grid grid-cols-3 grid-row-3 gap-4 justify-center text-black">
        <h2 className="row-span-1 col-span-2 text-2xl">{this.props.header}</h2>
        <p className="row-span-2 col-span-2">{this.props.body}</p>
        <img
          src={this.props.image}
          alt="Travel Image Vietnam"
          className="col-start-3 row-start-1 row-end-3 justify-self-end aspect-2/3 object-cover min-h-70 max-h-100 rounded-xl"
        ></img>
      </section>
    );
  }
}

export default TravelEntry;
