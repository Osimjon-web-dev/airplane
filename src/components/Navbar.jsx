export default function Navbar() {
  return (
    <div className="navbar d-flex align-items-start pt-4">
      <div className="container d-flex justify-content-around">
        <img className="img-fluid" src="./img/Air.png" alt="" />
        <ul className="navbar-nav d-flex flex-row gap-3 flex-wrap">
          <li>
            <a href="#!" className="nav-link text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link text-black">
              Booking
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link text-black">
              Private Jet
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link text-black">
              Specification
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link text-black">
              Luxury Charters
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link text-black">
              membership
            </a>
          </li>
        </ul>
        <div className="buttons d-flex align-items-center gap-3">
          <button className="border-0 bg-transparent">Register</button>
          <button className="px-2 rounded-3 bg-secondary text-light py-1 align-items-center border-0">
            Sign In
          </button>
        </div>
      </div>
      <div className="container enjoy flex-column align-items-start">
        <h1 className="text-lg-start text-center ">
          Enjoy <strong className="text-secondary">Reserved</strong> <br />
          Overhead bin space
        </h1>
        <div className="d-flex gap-3 flex-row align-items-start mt-5 justify-content-lg-start justify-content-center">
          <p className="d-flex justify-content-lg-start justify-content-center fw-bold p-0">
            Explore Now
          </p>
          <img className="mt-1" src="./img/right.png" alt="" />
        </div>
      </div>
    </div>
  );
}
