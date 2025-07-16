export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h3>Contact</h3>
            <p>Address:</p>
            <p>100000, Republic of Kazakhstan</p>
            <p>Karaganda, Televizionnaya Street 10</p>
            <p>Phone:</p>
            <p>+7 (701) 77 76 811</p>
            <p>Working Hours:</p>
            <p>Mon–Fri, 10:00 AM – 7:00 PM</p>
            <p>Email:</p>
            <p>Galym.sultanov@mail.ru</p>
          </div>
          <div className="col-md-4">
            <p>
              Our company is a modern architectural firm based in 
              Karaganda, Kazakhstan, dedicated to creating innovative 
              and functional design solutions. We specialize in 
              residential, commercial, and interior projects, combining 
              creativity with technical precision. With a strong focus 
              on client satisfaction, we strive to deliver high-quality 
              results through continuous improvement, professional 
              development, and attention to detail. Our team is committed 
              to shaping spaces that inspire and endure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}