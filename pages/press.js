export default function Press() {

  return (
    <>
    <div id="main-wrapper" style={{paddingTop: "0px"}}>
      <section className="section-featured-blog" id="featured-blog">
        <div className="container" style={{margin: "25px"}}>
            <h1>Newsroom</h1>
            <h2 className="subtitle">Press Releases</h2>
            <div className="blog-featured-wrapper">
              <figure>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img height="100%" src="https://vintank.com/wp-content/uploads/2022/03/Top-Advantages-Of-Press-Release-Distribution-Services-To-Boost-Your-Business-Brand-696x365.png" alt="Serveroo to Launch Same-day Delivery Across America"/>
                </a>
              </figure> 
              <div className="blog-featured-details"> 
                <div className="top-section">
                  <p className="blog-tag"></p>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                      <h4 className="blog-title">Serveroo to Launch Same-day Delivery Across America</h4>
                    </a>                                
                  <p className="blog-copy">
                            Delivery in as Fast as One Hour is Now Available From More Than 1,200 Restaurants Across North America&nbsp;&nbsp; NEW YORK — January 16, 2022 — Serveroo, the leading online restaurant delivery platform in New York today announced they will launch same-day delivery from more than 1000 restaurants across America. When the…...</p> 
                  <span className="blog-date layout">Jan 16, 2022</span>
                </div>
              </div>  
            </div>
        </div>
      </section>
    </div>
    <section className="section newsroom" id="newsroom-blog">
    <div className="container">
        <div id="response" className="row"><div className="col-md-4 card blog-card">
                <div className="card-body">
                  <p className="blog-tag">Press Release</p>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <h4 className="card-title">Serveroo Announces Partnership with McDondal's, Bubger Kirg, and Other Popular Franchises</h4>
                  </a>
                  <p className="card-text small">Giants among the nation's fast food options are now making their offerings available via a home delivery service known as Serveroo. NEW YORK – December 03, 2022 – Serveroo, a home…...</p>
                  <span className="blog-date layout">Dec 03, 2021</span>
                </div>
            </div><div className="col-md-4 card blog-card">
                <div className="card-body">
                  <p className="blog-tag"></p>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <h4 className="card-title">Serveroo - Not Your Average Deliveroo Clone</h4>
                  </a>
                  <p className="card-text small">Serveroo isn't just a Deliveroo clone created as a project that doubles as a stupid attempt at humor, is it? Actually yes, it is! In fact…...</p>
                  <span className="blog-date layout">Nov 13, 2021</span>
                </div>
            </div><div className="col-md-4 card blog-card">
                <div className="card-body">
                  <p className="blog-tag">Press Release</p>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <h4 className="card-title">Letter to the Editor by Randy Butternubs</h4>
                  </a>
                  <p className="card-text small">"It's really not that funny, I thought I was having a stroke…...</p>
                  <span className="blog-date layout">Dec 15, 2021</span>
                </div>
            </div></div>
        <div id="customPagi"><div id="insta-pagination" className="insta-pagination" style={{width: "100%"}}><div className="wp-pagenavi" role="navigation"><a data-page="1" href="" className="current">1</a><a data-page="2" href="">2</a><a data-page="3" href="">3</a><a data-page="4" href="">4</a><a data-page="5" href="">5</a><a data-page="6" href="">6</a><span className="dotted-txt">...</span><a data-page="9" href="">9</a><a className="nextpostslink" data-page="2" href="">&gt;</a></div></div></div>
            <div id="loader" className="loader text-center" style={{display: "none"}}>
                <img src="https://loading.io/mod/spinner/spinner/sample.gif" alt="loader-gif" />								
            </div> 
             <input type="hidden" value="1" id="docpage" />
             <input type="hidden" value="1" id="pagination" />
             <input type="hidden" value="5524" id="featuredPost" />
    </div>
    </section>
    <section className="section section-cpg-cta news-room text-center">
      <div className="container">
          <div className="row">
              <div className="col">
                  <h3 className="h2 mb-4">Contact Our Press Team</h3>
                  <a href="mailto:rchasequinn@gmail.com" className=" ml-2 mr-2 mb-3">press@serveroo.io</a>
              </div>
          </div>
      </div>
    </section>
    <style jsx>{`
      h1 {
        color: #0e6148;
        margin-bottom: 20px;
        margin-top: 80px;
        font-size: 2.75rem;
        font-weight: 600;
      }
      h2 {
        font-weight: 600;
      }
      .section-featured-blog {
        width: 100vw;
      }
      .blog-featured-wrapper {
        display: flex;
        flex-wrap: nowrap;
      }
      .blog-featured-wrapper figure {
        border-radius: 20px;
        overflow: hidden;
        flex-basis: 63%;
        height: auto;
        max-height: 420px;
      }
      .blog-featured-wrapper .blog-featured-details {
        flex-basis: 37%;
        padding-left: 20px;
      }
      .blog-title {
        color: #333;
        font-size: 1.1rem;
        font-weight: 600;
        padding-bottom: 20px;
        margin-top: -15px;
      }
      .blog-copy {
        font-size: 0.9rem;
        line-height: 1.75rem;
      }
      .card {
        border: none;
        padding: 5px;
      }
      .newsroom .container {
        margin: 20px;
        width: calc(100vw - 40px);
        max-width: calc(100vw - 40px);
      }
      .blog-tag {
        text-transform: uppercase;
        color: red;
        font-size: 0.75rem;
      }
      .card-title {
        color: #333;
        font-size: 1.1rem;
      }
      .wp-pagenavi {
        text-align: center;
      }
      .wp-pagenavi > a {
        display: inline-block;
        color: #333!important;
        width: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 20px;
        margin: 7px;
      }
      .wp-pagenavi > a.current {
        color: #fff!important;
        background-color: #0e6148;
        font-weight: bold;
      }
      .section-cpg-cta {
        border-top: 1px solid #ccc;
        padding: 80px;
        font-weight: bold!important;
      }
      .section-cpg-cta h3 {
        font-weight: bold;
      }
    `}</style>
</>
  )
}