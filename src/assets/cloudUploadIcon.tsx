import { SVGProps } from "react"
export const CloudUploadIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M11.167 10.667 8.5 8l-2.667 2.667M8.5 8v6" />
      <path d="M14.093 12.26A3.333 3.333 0 0 0 12.5 6h-.84a5.333 5.333 0 1 0-9.16 4.867" />
      <path d="M11.167 10.667 8.5 8l-2.667 2.667" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h16v16H.5z" />
      </clipPath>
    </defs>
  </svg>
);