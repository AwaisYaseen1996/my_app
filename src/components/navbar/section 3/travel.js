import React from "react";
import "./travel.css";

function travel() {
  return (
    <>
      <div className="container">
        <h2 className="travel_head">Latest travel news</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="img_left_div">
              <img
                src="https://andtour-vue.netlify.app/img/news-big.21746da1.png"
                alt="Travel News"
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="right_div_data">
              <h2 className="right_div_title">
                <a href="#!" className="tilte_link">
                  Veniam ex tempor qui ad amet mollit cillum aliqua aliqua.
                  Fugiat tempor eu magna
                </a>
              </h2>
              <p className="right_div_body">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more. Ad minim
                in commodo fugiat adipisicing cupidatat tempor aliqua.
              </p>
              <a href="#!" className="artical_link">
                Read full article{" "}
                <span>
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </a>
              <div className="row news_author_area">
                <div className="col-sm-6">
                  <div className="small_img news_author_img">
                    <img
                      src="data:image/png;base64,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"
                      alt="author"
                    />
                  </div>
                </div>
                <div className="col-sm-6 news_author_area_name">
                  <h4 className="author_title">Melisa campbell</h4>
                  <p className="author_body">
                    <a
                      aria-current="page"
                      href="/news"
                      class="router-link-active router-link-exact-active"
                    >
                      26 Oct 2021
                    </a>
                    <i class="fa-solid fa-circle"></i> 8 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default travel;
