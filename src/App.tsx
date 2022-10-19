import Navbar from "./components/Navbar";

import contentDataJSON from "./assets/content.json";
import Content from "./components/Content";

export type ContentsData = typeof contentDataJSON.data.contents[0];

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
    </div>
  );
};

export default App;
