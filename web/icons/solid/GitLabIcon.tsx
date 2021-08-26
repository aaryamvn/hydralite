import React from "react";

const SvgComponent: React.FC<React.HTMLAttributes<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3398 12.9656L18.7852 4.27499C18.6258 3.79686 18.2438 3.47577 17.7328 3.47577C17.2219 3.47577 16.807 3.76405 16.6477 4.24218L14.9555 9.29061H9.05157L7.35938 4.24452C7.20001 3.76639 6.78516 3.47811 6.27423 3.47811C5.76329 3.47811 5.34844 3.79686 5.22188 4.27733L2.66954 12.9656C2.57344 13.2844 2.70235 13.6359 2.95782 13.8281L11.9906 20.6016L21.0539 13.8281C21.307 13.6383 21.4359 13.2867 21.3398 12.9656Z"
      fill="white"
    />
  </svg>
);

export default SvgComponent;
