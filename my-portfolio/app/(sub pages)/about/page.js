import Image from "next/image";
import bg from "../../../public/images/about.png";
import RenderModel from "../../components/RenderModel";
import HelmetModel from "@/app/components/models/helmet";
import AboutDetails from "@/app/components/about";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Background Image"
        quality={100} // Optional: ensures high-quality rendering
        style={{ filter: "brightness(70%)" }} // Darkens the image
        className="-z-10 h-full w-full fixed object-cover object-center top-0 left-0" // Places the image behind other content
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 ">
        <RenderModel>
          <HelmetModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-4xl xs:text-5xl  lg:text-6xl text-accent">Aziz A. Kabia</h1>
          <p className="font-light text-foreground text-base ">
            Meet the space traveler behind this portfolio{" "}
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}

//  Above is the about page that renders a 3d model, a introduction of our name and AboutDetails component
