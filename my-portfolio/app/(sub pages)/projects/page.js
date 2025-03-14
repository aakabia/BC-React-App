import Image from "next/image";
import bg from "../../../public/images/projectsbg.png";
import ProjectList from "../../components/projects ";
import { projectsData } from "../../data";
//import CrystalModel from "../../components/models/crystal";
import RenderModel from "../../components/RenderModel";
import dynamic from "next/dynamic";

const CrystalModel = dynamic(() => import("../../components/models/crystal"), {
  ssr: false,
});

// dynamic import of our model
// ssr: false sets server side rendering to false

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="Background Image"
        quality={100} // Optional: ensures high-quality rendering
        style={{ filter: "brightness(70%)" }} // Darkens the image
        className="-z-10 h-full w-full fixed object-cover object-center top-0 left-0" // Places the image behind other content
      />

      <ProjectList projects={projectsData} />

      <div className=" flex items-center justify-center fixed top-16 lg:top-20 left-1/2 lg:left-20 -translate-x-1/2 lg:-translate-x-0 -z-10 h-screen ">
        <RenderModel>
          <CrystalModel />
        </RenderModel>
      </div>
    </>
  );
}

// projects route within our (sub pages) folder
// page.js (only one per route) lets the app know this is the main page for this route.
