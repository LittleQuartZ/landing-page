import { createElement, useState } from "react";
import {
  RiCoinsFill,
  RiCoinsLine,
  RiEarthFill,
  RiEarthLine,
  RiLoader3Line,
  RiMailSendFill,
  RiMailSendLine,
} from "react-icons/ri";

type Props = {
  listItem: {
    icon: string;
    title: string;
    text: string;
  };
};

const ListItem = ({ listItem }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  let icon = { line: RiLoader3Line, fill: RiLoader3Line };

  if (listItem.icon === "mail_send")
    icon = { line: RiMailSendLine, fill: RiMailSendFill };
  if (listItem.icon === "coins")
    icon = { line: RiCoinsLine, fill: RiCoinsFill };
  if (listItem.icon === "global")
    icon = { line: RiEarthLine, fill: RiEarthFill };

  return (
    <div
      className="flex flex-col items-center justify-center py-8 px-6 mx-2 bg-white gap-4 rounded-md shadow-md transition hover:ring-2 hover:ring-blue-300 first:mt-0 mt-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-6 bg-blue-300 rounded-full">
        {hovered
          ? createElement(icon.fill, { className: "text-5xl text-white" })
          : createElement(icon.line, { className: "text-5xl text-white" })}
      </div>
      <h2 className="text-lg font-bold text-center">{listItem.title}</h2>
      <p className="text-center">{listItem.text}</p>
    </div>
  );
};

export default ListItem;
