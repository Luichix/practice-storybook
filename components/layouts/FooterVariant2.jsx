import React from 'react'

const FooterVariant2 = () => {
  return (
    <footer className="position-absolute start-0 end-0 bottom-0">
      <div className="container pb-5 content-space-b-sm-1">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm mb-3 mb-sm-0">
            <p className="small mb-0">&copy; Front. 2021 Htmlstream.</p>
          </div>

          <div className="col-sm-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="index">
                  <i className="bi-facebook"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="index">
                  <i className="bi-google"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="index">
                  <i className="bi-twitter"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="index">
                  <i className="bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterVariant2