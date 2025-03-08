import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  color?: string;
  position?: string;
  show?: boolean;
  size?: string;
  bg?: boolean;
}

const Glowcard: React.FC<Props> = ({
  children,
  color = "bg-white border-white",
  position = "0% 100%",
  show = true,
  size = "2rem",
  bg = true,
}) => {
  const opacity = show ? "opacity-100" : "opacity-0";
  return (
    <div className="relative">
      <div
        className={
          bg ? `border ${color} border-opacity-10 bg-opacity-10 rounded-lg` : ""
        }
      >
        <div className="relative z-10">{children}</div>
      </div>
      <div
        className={`absolute inset-0 border ${color} bg-opacity-50  rounded-lg ${opacity}`}
        style={{
          mask: `radial-gradient(${size} ${size} at ${position}, #000 1%, transparent 100%)`,
          WebkitMask: `radial-gradient(${size} ${size} at ${position}, #000 1%, transparent 100%)`,
        }}
      />
    </div>
  );
};

export default Glowcard;
