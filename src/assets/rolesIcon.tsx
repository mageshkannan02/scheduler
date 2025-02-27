import { SVGProps } from "react"
export const RolesIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M20.375 12.5a3.994 3.994 0 0 0-3.172 1.566l-.07-.03a5 5 0 0 0-6.01-6.377l-.09-.172a3.995 3.995 0 1 0-1.78.913l.074.137a4.992 4.992 0 0 0-1.134 6.7L6.308 17a4 4 0 1 0 1.455 1.377L9.6 16.659a4.993 4.993 0 0 0 6.539-.871l.279.119a4 4 0 1 0 3.956-3.407Zm-14-8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-2 18a2 2 0 1 1 0-4.001 2 2 0 0 1 0 4Zm8-7a3 3 0 0 1-1.6-5.534l.407-.217a3 3 0 1 1 1.193 5.75Zm8 3a2 2 0 1 1 0-4.001 2 2 0 0 1 0 4Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M.375.5h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);