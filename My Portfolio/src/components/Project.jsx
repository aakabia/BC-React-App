function Project({ source, alt, link }) {
  return (
    <section className="container-fluid projectSpace ">
      <div className="row projects ">
        <a href={link} className="red col-12  ">
          <img className="projectPic  col-12  " src={source} alt={alt} />
        </a>
      </div>
    </section>
  );
}
// Above, we create our Project component that takes arguments as props that we can use in any other page.

export default Project;
