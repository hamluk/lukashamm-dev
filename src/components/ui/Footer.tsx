import React, { Component } from "react";

class Footer extends Component<{}> {
  state = {};

  render() {
    return (
      <footer className="flex justify-between px-6 py-3 bg-light-green text-olive-green text-sm text-center">
        <div className="flex flex-col items-baseline justify-center">
          <p>Lukas Hamm</p>
          <p>Einzelunternehmen</p>
          <p>Prof.-Rainer-Straße 19</p>
          <p>7062 Sankt Margarethen, Österreich</p>
        </div>
        <div>Terms & Conditions</div>
        <p>&copy; 2025 Lukas Hamm. All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;
