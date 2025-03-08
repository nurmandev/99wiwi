import React from "react";
interface Props {
  odd: number;
}

const OddBox: React.FC<Props> = ({ odd }) => {
  return (
    <div className="col-span-1 bg-primary text-primary dark:bg-opacity-20 hover:bg-opacity-0 cursor-pointer font-medium bg-opacity-10 flex justify-center h-full items-center  ">
      {odd}
    </div>
  );
};

export default OddBox;
