export const Testpage = () => {
  return (
    <>
      <div
        className="owl-carousel owl-theme d-flex justify-content-center"
        data-autoplay="true"
        data-loop="true"
        data-margin="40"
        data-items-xs="4"
        data-items-sm="5"
        data-items-md="5"
        data-items-lg="7"
      >
        {/* <ReactOwlCarousel  className='owl-theme' loop margin={10} nav> */}
        <div className="item">
          <a href="#">
            <img
              className="img-fluid rounded-circle border"
              src="images/brands/operator/operator-1.png"
              alt="operator 1"
            />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img
              className="img-fluid rounded-circle border"
              src="images/brands/operator/operator-2.png"
              alt="operator 2"
            />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img
              className="img-fluid rounded-circle border"
              src="images/brands/operator/operator-3.png"
              alt="operator 3"
            />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img
              className="img-fluid rounded-circle border"
              src="images/brands/operator/operator-4.png"
              alt="operator 4"
            />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img
              className="img-fluid rounded-circle border"
              src="images/brands/operator/operator-5.png"
              alt="operator 5"
            />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img
              className="img-fluid rounded-circle border"
              src="images/brands/operator/operator-6.png"
              alt="operator 6"
            />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img
              className="img-fluid rounded-circle border"
              src="images/brands/operator/operator-7.png"
              alt="operator 7"
            />
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img
              className="img-fluid rounded-circle border"
              src="images/brands/operator/operator-2.png"
              alt="operator 2"
            />
          </a>
        </div>
        {/* </ReactOwlCarousel > */}
      </div>
    </>
  );
};
