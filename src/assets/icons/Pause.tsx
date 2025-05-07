interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
  rotation?: number;
}

const Pause = ({
  color = "#EAF0FF",
  height = "24",
  width = "25",
  rotation = 0,
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.98599 4.86957V19.2206M15.3833 4.86957V19.2206"
        stroke={color}
        strokeWidth="2.00263"
      />
    </svg>
  );
};

export default Pause;
