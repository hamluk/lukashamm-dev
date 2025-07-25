import React, { Component } from "react";
import hompageText from "../../data/homepage-texts.json";
import type { TravelsInterface } from "../../types/TravelInterface";
import TravelEntry from "./TravelEntry";
import VietnamImage from "../../assets/Vietnam.jpeg";
import SEAImage from "../../assets/SEA.jpeg";

const travels: TravelsInterface = hompageText.Travels;

type Props = {};

type State = {};

class Travels extends Component<Props, State> {
  state = {};

  render() {
    return (
      // <section className="flex justify-center items-center w-full px-5">
      //   <div className="flex flex-row max-w-6xl w-full h-full text-black">
      //     {/* px-7 md:px-15 lg:px-30 */}
      //     <TravelEntry
      //       header={travels["SEA-Travel"].head}
      //       body={travels["SEA-Travel"].body}
      //       image={VietnamImage}
      //     />
      //   </div>
      // </section>
      <section className="flex flex-col justify-center items-center px-5 sm:px-10 lg:px-30 xl:px-60 2xl:px-80">
        {/* px-7 md:px-15 lg:px-30 */}
        <TravelEntry
          header={travels["SEA-Travel"].head}
          body={travels["SEA-Travel"].body}
          image={SEAImage}
        />
        <TravelEntry
          header={travels["Vietnam"].head}
          body={travels["Vietnam"].body}
          image={VietnamImage}
        />
      </section>
    );
  }
}

export default Travels;
