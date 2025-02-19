import Image from "next/image";
import bg from "../../../public/images/contact.png";
import Form from "@/app/components/contact/Form";


export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Background Image"
        quality={100} // Optional: ensures high-quality rendering
        style={{ filter: "brightness(70%)" }} // Darkens the image
        className="-z-10 h-full w-full fixed object-fill object-center top-0 left-0" // Places the image behind other content
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className=" flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize ">
            Contact the Voyager{" "}
          </h1>
          <p className="text-center font-light text-white text-sm xs:text-base">
            Step into the orbit of discovery and send your message across the
            stars. Whether you seek to forge alliances, unlock the secrets of
            distant galaxies, or simply share tales of cosmic wonder, your words
            will become constellations in the great expanse. Use the form to
            transmit your missives through the interstellar network and await
            the transmission of knowledge that only the stars can answer.
          </p>
        </div>
        <Form/>
        
      </article>
    </>
  );
}

//  Above is the contact page that renders a article tag that contains a header, paragraph and form component.
