import React, { Component } from "react";

type Props = {
  title: string;
  route?: string;
  handleClick?: () => void;
};

function SecondaryButton({ title, route, handleClick }: Props) {
  return (
    <button
      onClick={handleClick}
      className=" font-semibold hover:cursor-pointer text-sm sm:text-base px-3 py-1 rounded-lg hover:"
    >
      <p className="inline-block text-transparent bg-clip-text bg-olive-green hover:bg-(image:--gradient-primary-button)">
        {title}
      </p>
    </button>
  );
}

export default SecondaryButton;
