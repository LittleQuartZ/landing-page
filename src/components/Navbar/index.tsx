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
      className={`shadow bg-white grid grid-cols-2 items-center z-20 sticky top-0`}
    >
      <Heading title={title} />
      <button className="ml-auto p-6" onClick={() => setOpened(!opened)}>
        {opened ? (
          <RiCloseLine className="text-2xl" />
        ) : (
          <RiMenuLine className="text-2xl" />
        )}
      </button>

      {opened && (
        <section className="flex flex-col col-span-2 justify-center absolute top-full items-center shadow-md w-full z-10 bg-white">
          {navigations.map((nav) => (
            <Link key={nav.id} nav={nav} />
          ))}
          <button className="hover:shadow-lg active:scale-95 font-bold text-green-700 transition-all py-4 w-[95%] text-center bg-green-300 my-4 rounded">
            Register Now!
          </button>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
