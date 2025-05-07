interface SvgProps {
  color?: string;
  height?: string;
  width?: string;
  rotation?: number;
}

const MediaPrevious = ({
  color = "#EAF0FF",
  height = "22",
  width = "22",
  rotation = 0,
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M2.72651 18.6712V3.41886M19.4151 17.9779V4.11215L9.68008 11.045L19.4151 17.9779Z"
        stroke={color}
        strokeWidth="2.00263"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MediaPrevious;
