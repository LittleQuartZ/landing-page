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
    <>
      <nav className={`shadow p-6 flex`}>
        <Heading title={title} />
        <button className="ml-auto" onClick={() => setOpened(!opened)}>
          {opened ? (
            <RiCloseLine className="text-2xl" />
          ) : (
            <RiMenuLine className="text-2xl" />
          )}
        </button>
      </nav>

      {opened && (
        <section className="flex flex-col justify-center items-center shadow-md">
          {navigations.map((nav) => (
            <Link nav={nav} />
          ))}
          <button className="hover:shadow-lg active:scale-95 font-bold text-green-700 transition-all py-4 w-[95%] text-center bg-green-300 my-4 rounded">
            Register Now!
          </button>
        </section>
      )}
    </>
  );
};

export default Navbar;
