
import Image from "next/image";
import bg from"../public/bgInspo.png"

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
    <Image
      src={bg}
      alt="Background Image"
      fill// Makes the Image span the entire parent
      quality={100} // Optional: ensures high-quality rendering
      style={{ filter: 'brightness(70%)' }} // Darkens the image
      className="-z-10 " // Places the image behind other content
    />

  </main>
  );
}