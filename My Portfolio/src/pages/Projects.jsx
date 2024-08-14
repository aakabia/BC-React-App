import Project from "../components/Project";

// Above, we import our project component.


function Projects() {
  const projects = [
    {
      source: "/src/assets/texteditor.png",
      alt: "My Text Editor Project",
      link: "https://challenge14.onrender.com/",
    },
    {
      source: "/src/assets/sportstories.png",
      alt: "My Sport Stories Project",
      link: "https://antoniohockman.github.io/Great-Sports-Movies-of-all-time-/",
    },

    {
      source: "/src/assets/weather.png",
      alt: "My Weather Project",
      link: "https://aakabia.github.io/Challenge6/",
    },

    {
      source: "/src/assets/notetaker.png",
      alt: "My Note Taker Project",
      link: "https://challenge9.onrender.com/",
    },

    {
      source: "/src/assets/kanban.png",
      alt: "My Kanban Project",
      link: "https://aakabia.github.io/Challenge5/",
    },

    {
      source: "/src/assets/monserver.png",
      alt: "My Server Side Mongoose project",
      link: "https://app.screencastify.com/v3/watch/Jq16GsfrAjwY0o5XxpXv",
    },
  ];

  // Above, we create a array for our projects that match the prop arguments for our project component.

  return (
    <section className="container-fluid black">
      <div className="row">
        <div className="projectHeader">
          <h3 className="projectTitle">My Projects</h3>
        </div>

        <div className="projectArea">
          {projects.map((project, index) => (
            <Project
              key={index}
              source={project.source}
              alt={project.alt}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
// Above, we created a project page and map through our project array to render each project. 
// Note, although it was not one of our arguments, adding a key or id is essential in react!

export default Projects;

// Last, we export our Project page. 
