import React, { Component, type JSX } from "react";
import PrimaryButton from "../form/PrimaryButton";
import SecondaryButton from "../form/SecondaryButton";

type Props = {
  greeting: string;
  headerText: string;
  text: string;
  footerText: string;
  image?: string;
  prm_button?: {
    text: string;
    link: string;
  };
  sec_button?: {
    text: string;
    link: string;
  };
};

type State = {};

export default class Hero extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="flex flex-col lg:flex-row justify-between items-center p-6 gap-4 md:gap-10 text-dark-text  sm:p-10 lg:px-15 xl:px-30 2xl:px-40">
        <div className="flex flex-col gap-6 lg:gap-8 items-center">
          <div className="flex flex-col items-baseline gap-3 max-w-2xl">
            <div className="max-w-md sm:min-w-sm sm:max-w-lg">
              <h2 className="text-xl sm:text-2xl font-semibold font-serif">
                {this.props.greeting}
              </h2>
              <h2 className="text-xl sm:text-2xl font-semibold font-serif">
                {this.props.headerText}
              </h2>
            </div>
            <h4 className="sm:max-w-2xl text-lg sm:text-xl">
              {this.props.text}
            </h4>
            <h3 className="text-l italic">{this.props.footerText}</h3>
          </div>

          <div className="flex gap-6">
            <PrimaryButton title="Lass uns zusammenarbeiten"></PrimaryButton>
            <SecondaryButton title="Meine Projekte"></SecondaryButton>
          </div>
        </div>

        <img
          src={this.props.image}
          alt="Image"
          className="object-cover shadow-md w-110 sm:w-110 lg:w-120 xl:w-130 2xl:w-130 rounded-md"
        ></img>
      </section>
    );
  }
}
