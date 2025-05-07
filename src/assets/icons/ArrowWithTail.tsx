interface ArrowProps {
  color?: string;
  height?: string;
  width?: string;
  rotation?: number;
}

const ArrowWithTail = ({
  color = "#EAF0FF",
  height = "24",
  width = "24",
  rotation = 0,
}: ArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.29077 12.3893L9.69077 5.98935M3.29077 12.3893L9.69077 18.7893M3.29077 12.3893H23.2908"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ArrowWithTail;
