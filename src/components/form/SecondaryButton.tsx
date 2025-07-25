import React, { Component } from "react";

type Props = {
  title: string;
  route?: string;
};

type State = {};

class SecondaryButton extends Component<Props, State> {
  state = {};

  render() {
    return (
      <button className="bg-white font-semibold hover:cursor-pointer text-sm sm:text-base px-3 py-1 rounded-lg hover:">
        <p className="inline-block text-transparent bg-clip-text bg-olive-green hover:bg-(image:--gradient-primary-button)">
          {this.props.title}
        </p>
      </button>
    );
  }
}

export default SecondaryButton;
