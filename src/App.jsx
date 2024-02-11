import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="Services">Services</section>
    <section id="Portfolio">Portfolio</section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>
  </div>;
};

export default App;
