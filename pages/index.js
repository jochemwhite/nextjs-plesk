import Header from "../components/header/header";
import USP from "../components/slider/swiper";
import Domain from "../components/domain/domain";
import Why from "../components/why/why";
import Drag_And_Drop from "../components/drag_and_drop/drag_and_drop";
import Features_1 from "../components/start/features_1";
import Popular_Packages from "../components/Popular_Packages/Popular_Packages";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <USP />
      <Domain />
      <Why />
      <Features_1 />
      <Drag_And_Drop />
      <Popular_Packages />
      <Footer />
    </>
  );
}
