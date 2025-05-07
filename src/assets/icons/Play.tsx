interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
  rotation?: number;
}

const Play = ({
  color = "#EAF0FF",
  height = "24",
  width = "25",
  rotation = 0,
}: SvgProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="-60 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64 96L328 256 64 416 64 96Z" />
    </svg>
  );
};

export default Play;
