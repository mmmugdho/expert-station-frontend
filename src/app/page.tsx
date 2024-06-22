import Experts from "@/components/organisms/experts";
import FreeServices from "@/components/organisms/freeServices";
import Hero from "@/components/organisms/hero";
import Services from "@/components/organisms/services";
import Work from "@/components/organisms/work";

const Home = () => {
  return (
    <main>
      <div>
        <Hero />
        <Work />
        <Experts />
        <Services />
        <FreeServices />
        <br />
        <br />
      </div>
    </main>
  );
};

export default Home;
