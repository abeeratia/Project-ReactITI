import About from "../component/about";
import Content from "../component/content";
import Footer from "../component/footer";
import Header from "../component/header";
import Testmonial from "../component/testmonial";

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <About />
      <Testmonial/>
    </div>
  );
}

export default Home;
