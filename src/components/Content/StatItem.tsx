import {
  RiBarChartFill,
  RiCurrencyFill,
  RiLoader3Fill,
  RiUserFill,
  RiUserFollowFill,
} from "react-icons/ri";
import CountUp from "react-countup";

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
  let amount = stat.amount;

  if (stat.icon === "chart") {
    Icon = RiBarChartFill;
    amount *= 100;
  }
  if (stat.icon === "currency") {
    Icon = RiCurrencyFill;
  }
  if (stat.icon === "user") Icon = RiUserFill;
  if (stat.icon === "user_active") Icon = RiUserFollowFill;

  return (
    <div className="py-4 gap-2 flex flex-col items-center justify-start text-center">
      <span className="flex text-indigo-500 font-bold items-center gap-2 text-xl">
        <Icon />
        <CountUp
          start={0}
          duration={0.5}
          end={amount}
          {...(stat.icon === "currency" && { prefix: "Rp. " })}
          {...(stat.icon === "chart" && { suffix: "%" })}
          enableScrollSpy
          separator=","
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
      </span>
      <p className="text-lg">{stat.title}</p>
    </div>
  );
};

export default StatItem;
