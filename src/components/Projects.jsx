import React from "react";

function Projects() {

  const projects = [
    {
      img: "/images/project1.jpg",
      title: "Luxury Villa Construction"
    },
    {
      img: "/images/project2.jpg",
      title: "Modern Duplex House"
    },
    {
      img: "/images/project3.jpg",
      title: "Independent House Project"
    },
    {
      img: "/images/project4.jpg",
      title: "Commercial Building"
    },
    {
      img: "/images/project5.jpg",
      title: "Apartment Construction"
    },
    {
      img: "/images/project6.jpg",
      title: "Premium Villa Project"
    }
  ];

  return (
    <section className="projects-section">

      <div className="container">

        <div className="section-header">

          <h2>CONSTRUCTION</h2>

          <h3>Our Construction Projects in Bangalore</h3>

          <p>
            Explore some of our recent construction projects across Bangalore.
            From luxury villas and independent homes to commercial buildings,
            we deliver high-quality structures with modern design and
            exceptional craftsmanship.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <img src={project.img} alt={project.title} />

              <div className="project-overlay">
                <h4>{project.title}</h4>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;