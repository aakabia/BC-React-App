
import Image from "next/image";
import bg from"../public/images/bgInspo.png"
import RenderModel from "./components/RenderModel";
import SpaceModel from "./components/models/space";



export default function Home() {
  return (
    <main className="relative h-screen w-screen ">
    <Image
      src={bg}
      alt="Background Image"
      fill// Makes the Image span the entire parent
      quality={100} // Optional: ensures high-quality rendering
      style={{ filter: 'brightness(70%)' }} // Darkens the image
      className="-z-10 " // Places the image behind other content
    />

    {/* use Render model and pass in space model as a child */}

    <RenderModel>
      <SpaceModel/>
    </RenderModel>




  </main>
  );
}
