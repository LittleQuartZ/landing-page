import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

// dummy data
import navDataJSON from "../../assets/navbar.json";

import Heading from "./Heading";
import Link from "./Link";

const Navbar = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const { title, navigations } = navDataJSON.data;

  return (
    <nav
      className={`shadow bg-white grid grid-cols-2 items-center z-20 sticky top-0 md:container md:mx-auto`}
    >
      <Heading title={title} />
      <button
        className="ml-auto p-6 md:hidden"
        onClick={() => setOpened(!opened)}
      >
        {opened ? (
          <RiCloseLine className="text-2xl" />
        ) : (
          <RiMenuLine className="text-2xl" />
        )}
      </button>

      <section
        className={`md:!inline md:static md:w-max md:ml-auto md:mr-4 flex flex-col justify-center absolute top-full items-center md:shadow-none shadow-md w-full z-10 bg-white ${
          !opened && "!hidden"
        }`}
      >
        {navigations.map((nav) => (
          <Link key={nav.id} nav={nav} />
        ))}
        <button className="hover:shadow-lg active:scale-95 font-bold text-green-700 transition-all md:px-4 py-4 w-[95%] md:w-max text-center bg-green-300 my-4 rounded">
          Register Now!
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
