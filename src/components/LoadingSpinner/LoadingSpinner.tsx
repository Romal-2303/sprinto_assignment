import classes from "./LoadingSpinner.module.scss";

interface spinnerProps {
  height?: number;
  width?: number;
  weight?: number;
  color?: string;
}

const LoadingSpinner = ({
  height = 48,
  width = 48,
  color = "#eaf0ff",
  weight = 4,
}: spinnerProps) => {
  return (
    <div className={classes["loading-spinner-container"]}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: `${weight}px solid ${color}`,
          borderTop: `${weight}px solid transparent`,
        }}
        className={classes["spinner"]}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
