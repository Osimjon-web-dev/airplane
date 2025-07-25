import Jetcard from "./Jetcard";

export default function Header() {
  return (
    <div className="header">
        <h1 className="fs-1 fw-bold text-center mt-3 mb-5">
          Private Jet for Business & Leisure Purposes
        </h1>
        <div className="container d-flex flex-column text-lg-start text-center" >
          <Jetcard
            imgName="./img/plane.png"
            title="Private Jet Charter"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors"
            className="flex-row"
          />
          <Jetcard
            imgName="./img/sidena.png"
            title="Business Jet Charter"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors"
            className="flex-row-reverse"
          />
        </div>
      </div>
  )
}
