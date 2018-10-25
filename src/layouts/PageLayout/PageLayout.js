import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbarcomp';


export const PageLayout = ({ children }) => {

  // const handleClick = () => {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }



  return (
    <div>

      <NavbarComp />



      <div className="container">
        {/* <img src="oyapeyzajlogo.png" className="logo" alt="logo" /> */}

        <div  className="">
          {children}
        </div>

        <div className="footer">
          <footer className="footer-distributed">

            <div className="container footer-left">

              <h3>OYA<span>Peyzaj</span></h3>

              <p className="footer-links">
                <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Ana Sayfa</IndexLink><br />
                <Link to='/about' activeClassName='page-layout__nav-item--active'>Hakkımızda</Link><br />
                <Link to='/project' activeClassName='page-layout__nav-item--active'>Projelerimiz</Link><br />
                <Link to='/reference' activeClassName='page-layout__nav-item--active'>Referanslarımız</Link><br />
                <Link to='/contact' activeClassName='page-layout__nav-item--active'>İletişim</Link><br />
              </p>
              <p className="footer-company-name">Oya Peyzaj &copy; 2018</p>
            </div>

            <div className="footer-center">

              <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Selami Ali Mh. Babacan Sok. Emir Apt. No:17/9</span> Üsküdar, İstanbul</p>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <p>+90 531 382 01 99</p>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:oyapeyzaj2011@gmail.com">oyapeyzaj2011@gmail.com</a></p>
              </div>

            </div>

            <div className="footer-right">

              <p className="footer-company-about">
                <span>Oya Peyzaj Hakkında</span>
                2010 yılında 2 ortak tarafından Ümraniye de kuruldu
  </p>

              <div className="footer-icons">

                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-github"></i></a>

              </div>

            </div>

          </footer>
        </div>
      </div>
    </div>

  )
}



PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
