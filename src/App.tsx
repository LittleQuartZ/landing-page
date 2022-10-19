import Navbar from "./components/Navbar";

import contentDataJSON from "./assets/content.json";
import footerDataJSON from "./assets/footer.json";
import Content from "./components/Content";

export type ContentsData = typeof contentDataJSON.data.contents[0];
export type FooterData = typeof footerDataJSON.data;

const App = () => {
  return (
    <div id="App">
      <Navbar />

      <main>
        <section className="">
          {contentDataJSON.data.contents.map((content) => (
            <Content content={content} />
          ))}
        </section>
      </main>

      <footer className="container mx-auto py-8 grid grid-cols-6">
        <section className="col-span-3">
          <img src={footerDataJSON.data.logo} className="w-48" />
          {footerDataJSON.data.address.split("\n").map((line) => (
            <p>{line}</p>
          ))}
        </section>
        {footerDataJSON.data.menu.map((menu) => (
          <section>
            <h3 className="font-bold pt-6 pb-4">{menu.title}</h3>
            <ul>
              {menu.links.map(({ link, text }) => (
                <li className="pb-2 last:pb-0 opacity-75 hover:opacity-100 hover:text-blue-500">
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </footer>
    </div>
  );
};

export default App;
