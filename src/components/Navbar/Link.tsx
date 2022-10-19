type Props = {
  nav: {
    link: string;
    text: string;
  };
};

const Link = ({ nav }: Props) => {
  return (
    <a
      href={nav.link}
      className="first:border-t-2 hover:font-bold outline-none focus:font-bold focus:underline transition-all hover:underline hover:scale-105 active:scale-90 py-4 w-full text-center border-b-2 border-gray-100"
    >
      {nav.text}
    </a>
  );
};

export default Link;
