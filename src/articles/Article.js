import React from "react";

const Article = () => {
  return (
    <>
      <div className="mt-3 text-left container">
        <div>
          <img
            src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/20-12-2023-UNICEF-COVID-1-UN0588734.jpg/image1170x530cropped.jpg"
            className="card-img-top mt-3"
            alt="..."
          />

          <h3 className="mt-3 fw-bolder">More Articles</h3>
        </div>
      </div>

      <div className="row ms-2 mt-3">
        <div className="container col-lg-3">
          <div class="card main-card">
            <img
              src="https://worldbank.scene7.com/is/image/worldbankprod/PSPR-immersive-story-780x439:780x439"
              class="card-img-top"
              className="card-img-top col-lg-6"
              alt="..."
            />
            <div class="card-body bodyCard">
              <h5 className="fw-semibold">
                COVID-19 Dealt a Historic Blow to Poverty Reduction
              </h5>
              {/* <a href="#" className="link-anchor text-decoration-none text-black">
              <h6 class="card-title">
                World News in Brief: Pandemic treaty in jeopardy, historic IOM
                appeal, 'enormous obstacles' facing Iran's lawyers
              </h6>
            </a> */}
              <p>
                The 2022 Poverty and Prosperity Report provides the first
                comprehensive analysis of the pandemic's toll on poverty in
                developing countries 
              </p>
              {/* <p className="para-card card-text ">shyam</p> */}
            </div>
          </div>
        </div>

        <div className="container col-lg-3">
          <div class="card main-card">
            <img
              src="https://worldbank.scene7.com/is/image/worldbankprod/UFPE-logo-780x439:780x439"
              class="card-img-top"
              className="card-img-top col-lg-6"
              alt="..."
            />
            <div class="card-body bodyCard">
              <h5 className="fw-semibold">
                Umbrella Facility for Poverty and Equity
              </h5>
              {/* <a href="#" className="link-anchor text-decoration-none text-black">
              <h6 class="card-title">
                World News in Brief: Pandemic treaty in jeopardy, historic IOM
                appeal, 'enormous obstacles' facing Iran's lawyers
              </h6>
            </a> */}
              <p>
                The Umbrella Facility for Poverty and Equity (UFPE) is the first
                global trust fund to support the cross-cutting poverty and
                equity agenda in poverty and equity.
              </p>
              {/* <p className="para-card card-text ">shyam</p> */}
            </div>
          </div>
        </div>

        <div className="container col-lg-3">
          <div class="card main-card">
            <img
              src="https://worldbank.scene7.com/is/image/worldbankprod/ida18_3:780x439"
              class="card-img-top"
              className="card-img-top col-lg-6"
              alt="..."
            />
            <div class="card-body bodyCard">
              <h5 className="fw-semibold">IDA: Our Fund for the Poorest</h5>
              {/* <a href="#" className="link-anchor text-decoration-none text-black">
              <h6 class="card-title">
                World News in Brief: Pandemic treaty in jeopardy, historic IOM
                appeal, 'enormous obstacles' facing Iran's lawyers
              </h6>
            </a> */}
              <p>
                The International Development Association (IDA) aims to reduce
                poverty by providing funding for programs that boost economic
                growth for poorest.
              </p>
              {/* <p className="para-card card-text ">shyam</p> */}
            </div>
          </div>
        </div>

        <div className="container container-head h-75 col-lg-3">
          <div class="card main-card">
            <img
              src="https://worldbank.scene7.com/is/image/worldbankprod/eMBeD-780x439:780x439"
              class="card-img-top"
              className="card-img-top col-lg-6"
              alt="..."
            />
            <div class="card-body bodyCard">
              <h5 className="fw-semibold">eMBeD</h5>
              {/* <a href="#" className="link-anchor text-decoration-none text-black">
              <h6 class="card-title">
                World News in Brief: Pandemic treaty in jeopardy, historic IOM
                appeal, 'enormous obstacles' facing Iran's lawyers
              </h6>
            </a> */}
              <p>
                As the World Bank's behavioral sciences team within the Poverty
                and Equity Global Practice, eMBeD uses behavioral sciences to
                fight global poverty and reduce inequality.
              </p>
              {/* <p className="para-card card-text ">shyam</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
