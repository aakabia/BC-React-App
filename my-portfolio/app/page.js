import Image from "next/image";
import bg from "../public/images/bgInspo.png";
import RenderModel from "./components/RenderModel";
//import SpaceModel from "./components/models/space";
import Navigation from "./components/navigation";
import dynamic from "next/dynamic";

const SpaceModel = dynamic(() => import("./components/models/space"), {
  ssr: false,
});

// dynamic import of our model
// ssr: false sets server side rendering to false

export default function Home() {
  return (
    <main className="relative h-screen w-screen ">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="Background Image"
        fill // Makes the Image span the entire parent
        quality={100} // Optional: ensures high-quality rendering
        style={{ filter: "brightness(70%)" }} // Darkens the image
        className="-z-10 " // Places the image behind other content
      />

      {/* use Render model and pass in space model as a child */}

      <Navigation />
      <RenderModel>
        <SpaceModel />
      </RenderModel>
    </main>
  );
}
