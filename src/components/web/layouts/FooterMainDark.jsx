import React from 'react'
import logoWhite from '../../assets/svg/logos/logo-white.svg'
import 'flag-icons'

function FooterMainDark() {
  return (
    <footer className="bg-dark">
      <div className="container pb-1 pb-lg-5">
        <div className="row content-space-t-2">
          <div className="col-lg-3 mb-7 mb-lg-0">
            {/* <!-- Logo --> */}
            <div className="mb-5">
              <a className="navbar-brand" href="index.html" aria-label="Space">
                <img className="navbar-brand-logo" src={logoWhite} alt="Description"/>
              </a>
            </div>
            {/* <!-- End Logo --> */}

            {/* <!-- List --> */}
            <ul className="list-unstyled list-py-1">
              <li><a className="link-sm link-light" href="#"><i className="bi-geo-alt-fill me-1"></i> 153 Williamson Plaza, Maggieberg</a></li>
              <li><a className="link-sm link-light" href="tel:1-062-109-9222"><i className="bi-telephone-inbound-fill me-1"></i> +1 (062) 109-9222</a></li>
            </ul>
            {/* <!-- End List --> */}

          </div>
          {/* <!-- End Col --> */}

          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="text-white mb-3">Company</h5>

            {/* <!-- List --> */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">About</a></li>
              <li><a className="link-sm link-light" href="#">Careers <span className="badge bg-warning text-dark rounded-pill ms-1">We&apos;re hiring</span></a></li>
              <li><a className="link-sm link-light" href="#">Blog</a></li>
              <li><a className="link-sm link-light" href="#">Customers <i className="bi-box-arrow-up-right small ms-1"></i></a></li>
              <li><a className="link-sm link-light" href="#">Hire us</a></li>
            </ul>
            {/* <!-- End List --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="text-white mb-3">Features</h5>

            {/* <!-- List --> */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">Press <i className="bi-box-arrow-up-right small ms-1"></i></a></li>
              <li><a className="link-sm link-light" href="#">Release Notes</a></li>
              <li><a className="link-sm link-light" href="#">Integrations</a></li>
              <li><a className="link-sm link-light" href="#">Pricing</a></li>
            </ul>
            {/* <!-- End List --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="col-sm">
            <h5 className="text-white mb-3">Documentation</h5>

            {/* <!-- List --> */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">Support</a></li>
              <li><a className="link-sm link-light" href="#">Docs</a></li>
              <li><a className="link-sm link-light" href="#">Status</a></li>
              <li><a className="link-sm link-light" href="#">API Reference</a></li>
              <li><a className="link-sm link-light" href="#">Tech Requirements</a></li>
            </ul>
            {/* <!-- End List --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="col-sm">
            <h5 className="text-white mb-3">Resources</h5>

            {/* <!-- List --> */}
            <ul className="list-unstyled list-py-1 mb-5">
              <li><a className="link-sm link-light" href="#"><i className="bi-question-circle-fill me-1"></i> Help</a></li>
              <li><a className="link-sm link-light" href="#"><i className="bi-person-circle me-1"></i> Your Account</a></li>
            </ul>
            {/* <!-- End List --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Row --> */}

        <div className="border-top border-white-10 my-7"></div>

        <div className="row mb-7">
          <div className="col-sm mb-3 mb-sm-0">
            {/* <!-- Socials --> */}
            <ul className="list-inline list-separator list-separator-light mb-0">
              <li className="list-inline-item">
                <a className="link-sm link-light" href="#">Privacy &amp; Policy</a>
              </li>
              <li className="list-inline-item">
                <a className="link-sm link-light" href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a className="link-sm link-light" href="#">Site Map</a>
              </li>
            </ul>
            {/* <!-- End Socials --> */}
          </div>

          <div className="col-sm-auto">
            {/* <!-- Socials --> */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-facebook"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-google"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-twitter"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-github"></i>
                </a>
              </li>

              <li className="list-inline-item">
                {/* <!-- Button Group --> */}
                <div className="btn-group">
                  <button type="button" className="btn btn-soft-light btn-xs dropdown-toggle" id="footerSelectLanguage" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                    <span className="d-flex align-items-center">
                      <span className="avatar avatar-xss avatar-circle me-2 fi fi-us" />
                      <span>English (US)</span>
                    </span>
                  </button>

                  <div className="dropdown-menu" aria-labelledby="footerSelectLanguage">
                    <a className="dropdown-item d-flex align-items-center active" href="#">
                      <span className="avatar avatar-xss avatar-circle me-2 fi fi-us" />
                      <span>English (US)</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <span className="avatar avatar-xss avatar-circle me-2 fi fi-de" />
                      <span>Deutsch</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <span className="avatar avatar-xss avatar-circle me-2 fi fi-es" />
                      <span>Español</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <span className="avatar avatar-xss avatar-circle me-2 fi fi-cn" />
                      <span>中文 (繁體)</span>
                    </a>
                  </div>
                </div>
                {/* <!-- End Button Group --> */}
              </li>
            </ul>
            {/* <!-- End Socials --> */}
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="w-md-85 text-lg-center mx-lg-auto">
          <p className="text-white-50 small">&copy; Front. 2021 Htmlstream. All rights reserved.</p>
          <p className="text-white-50 small">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
        </div>
        {/* <!-- End Copyright --> */}
      </div>
    </footer>

  )
}

export default FooterMainDark