import {
  RiBarChartFill,
  RiCurrencyFill,
  RiLoader3Fill,
  RiUserFill,
  RiUserFollowFill,
} from "react-icons/ri";

const StatItem = ({
  stat,
}: {
  stat: {
    icon: string;
    title: string;
    amount: number;
  };
}) => {
  let Icon = RiLoader3Fill;
  let amount: number | string = stat.amount;

  if (stat.icon === "chart") {
    Icon = RiBarChartFill;
    amount = `${amount * 100}%`;
  }
  if (stat.icon === "currency") {
    Icon = RiCurrencyFill;
    amount = `Rp. ${amount.toLocaleString("id-EN")}`;
  }
  if (stat.icon === "user") Icon = RiUserFill;
  if (stat.icon === "user_active") Icon = RiUserFollowFill;

  return (
    <div className="py-4 gap-2 flex flex-col items-center justify-start text-center">
      <span className="flex text-indigo-500 font-bold items-center gap-2 text-xl">
        <Icon />
        <h2>{amount}</h2>
      </span>
      <p className="text-lg">{stat.title}</p>
    </div>
  );
};

export default StatItem;
