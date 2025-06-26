import React, { Component } from "react";

type Props = {
  title: string;
  route?: string;
};

type State = {};

class PrimaryButton extends Component<Props, State> {
  state = {};

  render() {
    return (
      <button className="bg-olive-green font-semibold text-white hover:bg-(image:--gradient-primary-button) hover:cursor-pointer px-3 py-1.5 rounded-lg hover:">
        {this.props.title}
      </button>
    );
  }
}

export default PrimaryButton;
