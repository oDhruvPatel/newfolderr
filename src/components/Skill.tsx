import { ReactElement, useState } from "react";

const Skill = (props: {
  list: { icon: ReactElement; name: string }[];
  title: string;
  bg: string;
  icon?: ReactElement;
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className={`${props.bg}  flex flex-col my-4 md:my-4 md:m-0 md:w-[33.3%] w-[90%] m-auto text-black shadow-md rounded-xl`}>
      <div className="m-auto md:text-2xl text-xl pt-2 md:pt-2 text-[#adb4c3]">{props.icon}</div>
      <h2 className="primary text-xl font-bold m-auto h-[20%] text-[#adb4c3] text-center my-2 capitalize">{props.title}</h2>
      <div className="w-full flex flex-row h-[80%]">
        <ul className="flex flex-row justify-center w-full flex-wrap">
          {props.list.map((item, idx) => (
            <li
              key={idx}
              className="view relative md:text-xs text-xs my-2 mx-2 primary  hover:text-black hover:cursor-pointer hover:scale-110 transition-all rounded-full"
              onMouseEnter={() => setHoveredSkill(item.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                position: "relative",
              }}
            >
              {item.icon}
              {hoveredSkill === item.name && (
                <div
                  style={{
                    position: "absolute",
                    marginLeft:"-8px",
                    top: "-2em",
                    backgroundColor: "white",
                    paddingLeft: "4px",
                    paddingRight:"4px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight: "medium",
                    color: "slate-800",
                    zIndex: 10,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skill;
