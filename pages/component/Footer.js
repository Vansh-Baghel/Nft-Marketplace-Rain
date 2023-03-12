import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Books category</h4>
              <ul>
                <li>
                  <a href="#">motivational</a>
                </li>
                <li>
                  <a href="#">thrilling</a>
                </li>
                <li>
                  <a href="#">suspense</a>
                </li>
                <li>
                  <a href="#">educational</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/vansh-baghel-24ab42232/"
                  className="instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://twitter.com/raindropsbooks"
                  className="facebook"
                >
                  <TwitterIcon />
                </a>
                <a href="https://github.com/Vansh-Baghel" className="facebook">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
