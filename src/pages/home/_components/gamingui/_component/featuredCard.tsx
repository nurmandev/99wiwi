import { FaArrowRight } from "react-icons/fa";
import Glowcard from "../../../../_components/glowcard";

interface Props {
  name: string;
  img: string;
  color?: string;
}
const FeaturedCard: React.FC<Props> = ({
  img,
  color = "bg-primary border-primary",
  name,
}) => {
  return (
    <Glowcard color={color} size="8rem" position="100% 100%">
      <div
        className={`flex flex-col items-start p-4 rounded-lg relative overflow-hidden`}
      >
        <img src={img} className="absolute -right-10 -bottom-5" />
        <div className="uppercase font-medium mb-6 relative bg-black/30 rounded-lg ">
          {name}
        </div>
        <button className={`${color} rounded-lg p-2 relative`}>
          <FaArrowRight className="" />
        </button>
      </div>
    </Glowcard>
  );
};

export default FeaturedCard;
