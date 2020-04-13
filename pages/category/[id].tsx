import Head from 'next/head';
import { Nav } from '../../components/nav';
import { Footer } from '../../components/footer';

const Category = () => (
  <>
    <Head>
      <title>Next.js Medium Style Blog</title>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Source+Sans+Pro:400,600,700" rel="stylesheet"></link>
    </Head>

    <Nav />

    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-8">
          <h5 className="font-weight-bold spanborder"><span>Featured in Science</span></h5>
          <div className="card border-0 mb-5 box-shadow">
            <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586765677067-f8030bd8e303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)', backgroundSize: 'cover', height: '350px' }}>
            </div>
            <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
              <h2 className="h2 font-weight-bold">
                <a className="text-dark" href="./article.html">Brain Stimulation Relieves Depression Symptoms</a>
              </h2>
              <p className="card-text">
                Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.
              </p>
              <div>
                <small className="d-block"><a className="text-muted" href="./author.html">Favid Rick</a></small>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
          </div>
          <h5 className="font-weight-bold spanborder"><span>Latest</span></h5>
          <div className="mb-3 d-flex justify-content-between">
            <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
                <a className="text-dark" href="./article.html">Nearly 200 Great Barrier Reef coral species also live in the deep sea</a>
              </h2>
              <p>
                There are more coral species lurking in the deep ocean that previously thought.
              </p>
              <div className="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small className="text-muted">Dec 12 · 5 min read</small>
            </div>
            <img height="120" src="https://images.unsplash.com/photo-1586712447133-1d8836ca525c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
                <a className="text-dark" href="./article.html">East Antarctica's glaciers are stirring</a>
              </h2>
              <p>
                Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East Antarctica.
              </p>
              <div className="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small className="text-muted">Dec 12 · 5 min read</small>
            </div>
            <img height="120" src="https://images.unsplash.com/photo-1586712447133-1d8836ca525c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
                <a className="text-dark" href="./article.html">50 years ago, armadillos hinted that DNA wasn’t destiny</a>
              </h2>
              <p>
                Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East Antarctica.
              </p>
              <div className="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small className="text-muted">Dec 12 · 5 min read</small>
            </div>
            <img height="120" src="https://images.unsplash.com/photo-1586712447133-1d8836ca525c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </div>
        </div>
        <div className="col-md-4 pl-4">
          <div className="sticky-top">
            <h5 className="font-weight-bold spanborder"><span>Popular in Science</span></h5>
            <ol className="list-featured">
              <li>
                <span>
                  <h6 className="font-weight-bold">
                    <a href="./article.html" className="text-dark">Did Supernovae Kill Off Large Ocean Animals?</a>
                  </h6>
                  <p className="text-muted">
                    Jake Bittle in SCIENCE
              </p>
                </span>
              </li>
              <li>
                <span>
                  <h6 className="font-weight-bold">
                    <a href="./article.html" className="text-dark">Humans Reversing Climate Clock: 50 Million Years</a>
                  </h6>
                  <p className="text-muted">
                    Jake Bittle in SCIENCE
              </p>
                </span>
              </li>
              <li>
                <span>
                  <h6 className="font-weight-bold">
                    <a href="./article.html" className="text-dark">Unprecedented Views of the Birth of Planets</a>
                  </h6>
                  <p className="text-muted">
                    Jake Bittle in SCIENCE
              </p>
                </span>
              </li>
              <li>
                <span>
                  <h6 className="font-weight-bold">
                    <a href="./article.html" className="text-dark">Effective New Target for Mood-Boosting Brain Stimulation Found</a>
                  </h6>
                  <p className="text-muted">
                    Jake Bittle in SCIENCE
              </p>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div className="container pt-4 pb-4">
      <div className="border p-5 bg-lightblue">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <h5 className="font-weight-bold secondfont">Become a member</h5>
            Get the latest news right in your inbox. It's free and you can unsubscribe at any time. We hate spam as much as we do, so we never spam!
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
              <div className="col-md-12 mt-3">
                <button type="submit" className="btn btn-success btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default Category;
