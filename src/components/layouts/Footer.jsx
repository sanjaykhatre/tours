import React from "react";
import leftimg from "./left.png";
import rightimg from "./right.png";
import talkimg from "./talk.jpg";
import talk1img from "./talk1.jpg";
import talk2img from "./talk2.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="specialist-crousel">
        <div className="container my-4">
          {/* <!--Carousel Wrapper--> */}
          <div
            id="multi-item-example"
            className="carousel slide carousel-multi-item"
            data-ride="500"
          >
            {/* <!--Controls--> */}
            <div className="controls-top d-flex specialist-crousel-controller">
              <h4>talk to an specialist</h4>

              <a
                className="btn-floating"
                href="#multi-item-example"
                data-slide="prev"
              >
                <img src={leftimg} alt="" />
              </a>
              <a
                className="btn-floating"
                href="#multi-item-example"
                data-slide="next"
              >
                <img src={rightimg} alt="" />
              </a>
            </div>
            {/* <!--/.Controls--> */}
            <div className=" my-3 specialist-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate autem, necessitatibus porro officiis iure earum vel
                similique at expedita pariatur maiores atque suscipit ipsa,
                fugit, incidunt fugiat. Delectus earum similique, vitae
                repellendus aperiam incidunt deleniti voluptas quo
                exercitationem, ipsam asperiores sit dolorem adipisci aspernatur
                dolor molestiae ex quibusdam officia nemo.
              </p>
            </div>

            {/* <!--Indicators-->

          <!--/.Indicators-->
    
          <!--Slides--> */}
            <div className="carousel-inner" role="listbox">
              {/*     
            <!--First slide--> */}
              <div className="carousel-item active">
                <div className="row row-wrapper ">
                  <div className="col-md-4">
                    <div className="card mb-2 position-relative ">
                      <img
                        className=" img-fluid card-img-top"
                        src={talkimg}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Name here</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <div className="card mb-2 position-relative ">
                      <img
                        className="img-fluid card-img-top"
                        src={talk1img}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Carda title</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <div className="card mb-2 position-relative ">
                      <img
                        className="img-fluid card-img-top"
                        src={talk2img}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Name here</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/.First slide-->
    
            <!--Second slide--> */}
              <div className="carousel-item">
                <div className="row row-wrapper">
                  <div className="col-md-4">
                    <div className="card mb-2 position-relative ">
                      <img
                        className="card-img-top"
                        src={talkimg}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Name here</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <div className="card mb-2 position-relative ">
                      <img
                        className="card-img-top"
                        src={talkimg}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Name here</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <div className="card mb-2 position-relative ">
                      <img
                        className="card-img-top"
                        src={talkimg}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Name here</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/.Second slide-->
    
            <!--Third slide--> */}
              <div className="carousel-item">
                <div className="row row-wrapper ">
                  <div className="col-md-4">
                    <div className="card mb-2 position-relative ">
                      <img
                        className="card-img-top"
                        src={talkimg}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Name here</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <div className="card mb-2 position-relative ">
                      <img
                        className="card-img-top"
                        src={talkimg}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Name here</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <div className="card mb-2 position-relative ">
                      <img
                        className="card-img-top"
                        src={talkimg}
                        alt="Card image cap"
                      />
                      <div className="specialist-card-body">
                        <h4 className="card-title">Name here</h4>
                        <p className="card-text">
                          Some quick example text to build on the Name here and
                          make up the bulk of the card's content.
                        </p>
                        <a href="tel:+123456789">+1-234567899</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/.Third slide--> */}
            </div>
            {/* <!--/.Slides--> */}
          </div>
          {/* <!--/.Carousel Wrapper--> */}
        </div>
      </div>
      {/* <!-- bottom-footer --> */}

      <div className="container">
        <div className="mt-5 row">
          <div className="col-md-3 contact-info">
            <h4>contact info</h4>
            <p>P.O.BOX NO:20620, Thamel-Marg,Thamel-29 kathmandu</p>
            <ul>
              <li>
                <a href="tel:123-456-7890">
                  {" "}
                  <i className="fas fa-phone-square-alt"></i> 23-456-7890
                </a>
              </li>
              <li>
                <a href="tel:123-456-7890">
                  {" "}
                  <i className="fas fa-phone-square-alt"></i> 23-456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@frontier.com">
                  {" "}
                  <i className="fas fa-envelope"></i> info@frontier.com
                </a>
              </li>
              <li>
                <a href="mailto:info@frontier.com">
                  {" "}
                  <i className="fas fa-envelope"></i> info@frontier.com
                </a>
              </li>
              <li>
                <a href="tel:123-456-">
                  {" "}
                  <i className="fas fa-phone-square-alt"></i> 23-456-7890
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 nepal-info">
            <h4>nepal information</h4>
            <ul>
              <li>
                <a href="#">genetal info</a>
              </li>
              <li>
                <a href="#">health and vaccines</a>
              </li>
              <li>
                <a href="#">transportation (Road, fight)</a>
              </li>
              <li>
                <a href="#">visa guidelines</a>
              </li>
              <li>
                <a href="#">culture and festivales</a>
              </li>
              <li>
                <a href="#">food and water</a>
              </li>
              <li>
                <a href="#">travel safety</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 quick-links">
            <h4>quick links</h4>
            <ul>
              <li>
                <a href="#">booking links</a>
              </li>
              <li>
                <a href="#">terms and conditions</a>
              </li>
              <li>
                <a href="#">payment procedure</a>
              </li>
              <li>
                <a href="#">cookings and privacy policy</a>
              </li>
              <li>
                <a href="#">our team</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 contact-with-us">
            <h4>contact with us</h4>
            <ul>
              <li>
                <a href="">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <p>Copyright- 2020 Treks frontier pvt.ltd</p>
        </div>
      </div>
    </div>
  );
}
