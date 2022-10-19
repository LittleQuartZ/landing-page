type Props = {
  title:
    | {
        type: "image" | "text";
        text?: string;
        image?: string;
      }
    | {
        type: string;
        text?: string;
        image?: string;
      };
};

const Heading = ({ title }: Props) => {
  if (title.type === "image") {
    return (
      <h1 className="text-xl font-bold px-4">
        <a href="/">
          <img src={title.image} alt="logo" className="max-h-[5rem]" />
        </a>
      </h1>
    );
  }

  return <h1 className="text-xl font-bold">{title.text}</h1>;
};

export default Heading;
