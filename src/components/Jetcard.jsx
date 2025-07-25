export default function Jetcard({ imgName, title, text, className }) {
  return (
    <div className={`row d-flex justify-content-around align-items-center `}>
      <div className="col-lg-4 col-12 text-lg-start text-center mt-4">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="col-lg-5 col-12 mt-4">
        <img className="img img-fluid" src={imgName} alt="" />
      </div>
    </div>
  );
}
