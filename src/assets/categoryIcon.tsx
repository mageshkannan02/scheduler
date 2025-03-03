export const CategorySelectedIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#00825F" rx={12} />
    <path
      fill="#fff"
      d="M32.075 18h3.386A2.549 2.549 0 0 1 38 20.56v3.415a2.549 2.549 0 0 1-2.538 2.56h-3.387a2.549 2.549 0 0 1-2.538-2.56V20.56A2.549 2.549 0 0 1 32.075 18Z"
      opacity={0.4}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20.538 18h3.386a2.549 2.549 0 0 1 2.539 2.56v3.415a2.549 2.549 0 0 1-2.539 2.56h-3.386A2.549 2.549 0 0 1 18 23.975V20.56A2.549 2.549 0 0 1 20.538 18Zm0 11.465h3.386a2.549 2.549 0 0 1 2.539 2.56v3.415A2.55 2.55 0 0 1 23.924 38h-3.386A2.55 2.55 0 0 1 18 35.44v-3.414a2.549 2.549 0 0 1 2.538-2.56Zm14.924 0h-3.387a2.549 2.549 0 0 0-2.538 2.56v3.415A2.55 2.55 0 0 0 32.075 38h3.386A2.55 2.55 0 0 0 38 35.44v-3.414a2.549 2.549 0 0 0-2.538-2.56Z"
      clipRule="evenodd"
    />
  </svg>
);
export const CategoryUnSelectedIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <path
      stroke="#53545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 22.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5ZM30 22.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5ZM19 33.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5ZM30 33.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5Z"
      clipRule="evenodd"
    />
  </svg>
);