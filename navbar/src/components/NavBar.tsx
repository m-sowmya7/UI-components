import { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

export const NavBarComponent = () => {
  return (
    <div className="py-20">
      <NavBar />
    </div>
  );
};

const NavBar = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="fixed top-0 left-0 w-full mx-auto flex items-center justify-between border-2 border-black bg-white p-1"
      >
        <div className="h-15 w-40">
        {/* <img src="#" alt="Logo" /> */}
        <h4>Logo</h4>
      </div>
      <div className="flex justify-end font-mono space-x-4">
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Events</Tab>
      <Tab setPosition={setPosition}>Articles</Tab>
      <Tab setPosition={setPosition}>Team</Tab>
      <Tab setPosition={setPosition}>Suggest Us</Tab>
      </div>

      <Cursor position={position} />
    </ul>
  );
};
      
const Tab = ({
  children,
  setPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: position.opacity === 1 ? getRandomColor() : "#000" }} 
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

const getRandomColor = () => {
  const colors = ["rgb(80, 106, 8)","#9aba41"];
  return colors[Math.floor(Math.random() * colors.length)];
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
