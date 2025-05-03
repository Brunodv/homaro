import Sec1 from "../components/Sec1";
import Propuesta from "../components/Propuesta";
import Vision from "../components/Vision";
import Sec4 from "../components/Sec4";
import Sec5 from "../components/Sec5";
import Footer from "../components/Footer";
import BouncingCircle from "../components/BouncingCircle";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Experiencia from "../components/Experiencia";

function Home() {
  return (
    <Layout>
    <div className="relative w-full flex flex-col text-white overflow-hidden">
      <Sec1 />
      <Vision />
      <Propuesta />
      <Experiencia />
      <Sec4 />
      <Footer />
    </div>
    </Layout>
  );
}


export default Home;
