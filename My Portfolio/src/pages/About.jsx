export default function About() {
  return (
    <div className="container-fluid black ">
      <section className="row">
        <figure className="ava">
          <img
            className="avatar "
            src="src/assets/Avatar.png"
            alt="astronaut photo"
          />
        </figure>

        <section className="bio">
          <div className="aboutMe" >
            <h3>
              About Me!
            </h3>
          </div>

          <div className="bio2">
            <p>
              Caution! My aspiration to become a software engineer is rooted in
              a profound passion for technology and a deep curiosity about the
              limitless possibilities it offers. From an early age, I have been
              captivated by the transformative power of code, witnessing its
              ability to create innovative solutions and shape the digital
              landscape.
            </p>
            <p>
              Fascination has driven me to pursue a career where I can actively
              contribute to the evolution of technology and play a role in
              solving complex problems. I am inspired by the dynamic nature of
              software engineering, where continuous learning and adaptability
              are not just encouraged but essential.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
