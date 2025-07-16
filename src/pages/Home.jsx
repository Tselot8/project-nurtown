import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <div id="home" className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="projectName display-3">
              <span className="grey">PROJECT</span> NURTOWN
            </h1>
          </div>
          <div className="col-md-6">
            <img src="/assets/landing-image (2).png" alt="Landing" className="landing-image" />
          </div>
        </div>
      </div>

      <div id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="d-flex flex-column gap-3">
                <img src="/assets/about-image-1.png" alt="About 1" className="about-image1" />
                <img src="/assets/about-image-2.png" alt="About 2" className="about-image2" />
              </div>
            </div>
            <div className="col-md-4">
              <img src="/assets/about-image-3.png" alt="About 3" className="about-image" />
            </div>
            <div className="col-md-4">
              <h1 className="h2">About us</h1>
              <p>
                Project Nurtown is a premier architectural firm based in Karaganda, 
                Kazakhstan, dedicated to transforming visions into reality through innovative 
                design and meticulous craftsmanship. Specializing in residential, commercial, 
                and interior projects, we blend aesthetic excellence with practical functionality 
                to create spaces that inspire. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="objective" className="objective container my-5">
        <h1 className="objectives-title h2">Main Objective</h1>
        <div className="row">
          <div className="col-md-6 d-flex align-items-start">
            <div className="number me-3">1</div>
            <p>
              Our foremost priority is to ensure a pleasant and comfortable 
              experience for every client. We aim to build a welcoming 
              atmosphere that encourages trust and satisfaction. By 
              streamlining our processes and focusing on customer 
              needs, we enhance service efficiency and responsiveness. 
              Every interaction is treated with care, professionalism, 
              and attention to detail.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-start">
            <div className="number me-3">2</div>
            <p>
              We are dedicated to the continuous development of our services.
              Our team regularly undergoes training to stay updated with 
              the latest standards and practices. We invest in modern 
              equipment to improve both the quality and speed of our work.
              At the same time, we actively promote our services to reach 
              a broader audience through targeted marketing strategies.
            </p>
          </div>
        </div>
      </div>

      <div id="projects" className="our-projects container my-5">
        <h1 className="objectives-title h2">Our Projects</h1>
        <div className="row mb-4">
          <div className="col-md-6">
            <img src="/assets/project1.png" alt="Project 1" className="project-image" />
          </div>
          <div className="col-md-6">
            <img src="/assets/project2.png" alt="Project 2" className="project-image" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="/assets/project3.png" alt="Project 3" className="project-image" />
          </div>
          <div className="col-md-4">
            <img src="/assets/project4.png" alt="Project 4" className="project-image" />
          </div>
          <div className="col-md-4">
            <img src="/assets/project5.png" alt="Project 5" className="project-image" />
          </div>
        </div>
      </div>

      <div id="contact" className="contact container my-5">
        <h1 className="objectives-title h2">Contact us</h1>
        <form className="contact-form">
          <div className="mb-3">
            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className="mb-3">
            <select className="form-select" id="projectType" name="projectType" required>
              <option value="">Select Project Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Interior Design">Interior Design</option>
              <option value="Renovation">Renovation</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="message" name="message" placeholder="Write your message here..." rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
}