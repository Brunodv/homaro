import Sec1 from "../components/Sec1";
import Propuesta from "../components/Propuesta";
import Vision from "../components/Vision";
import Sec3 from "../components/Sec3";
import Sec4 from "../components/Sec4";
import Sec5 from "../components/Sec5";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative w-full flex flex-col gap-20 text-white">
      <Sec1 />
      <Vision />
      <Propuesta />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Footer />
    </div>
  );
}


export default Home;
