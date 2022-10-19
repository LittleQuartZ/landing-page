import { type ContentsData } from "../../App";
import ListItem from "./ListItem";
import StatItem from "./StatItem";

type Props = {
  content: ContentsData;
};

const Content = ({ content }: Props) => {
  return (
    <div className="even:bg-slate-100 py-4">
      <article key={content.title} className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">{content.title}</h1>

        {content.text &&
          content.text.split("\n").map((text, index) => (
            <p key={index} className="px-4 first:mt-6 mt-6">
              {text}
            </p>
          ))}

        {content.lists &&
          content.lists.map((listItem) => <ListItem listItem={listItem} />)}

        {content.stats && (
          <div className="grid-cols-2 grid gap-y-2">
            {content.stats.map((stat) => (
              <StatItem stat={stat} />
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default Content;
