import andriod from "../../assets/googlestore.svg";
import ios from "../../assets/appstore.svg";
import brand from "../../assets/zojapay.png";
import iphone1 from "../../assets/iphone-front.png";
import iphone3 from "../../assets/iphone-right.svg";
import iphone2 from "../../assets/iphoneleft.png";

const Footer = () => {
  return (
    <footer>
      <div className="image">
        <div className="download">
          <h3>download zojapay now!</h3>
          <div className="btn">
            <a href="">
              <img src={andriod}></img>
            </a>
            <a href="">
              <img src={ios}></img>
            </a>
          </div>
        </div>
        <div className="iphones">
          <img src={iphone2} className="i2" />
          <img src={iphone1} className="i1" />
          <img src={iphone3} className="i3" />
        </div>
      </div>

      <div className="text">
        <div className="left">
          <img src={brand} />
          <p>
            zoja is a peer-2-peer financial inclusion pplication that simplifies
            payment by making access to cash easy or retail market
          </p>
        </div>

        <div className="lists">
          <div className="product">
            <h3>Product feature</h3>
            <ul>
              <li>Cash request</li>
              <li>Transfer cash</li>
              <li>Utility payment</li>
            </ul>
          </div>

          <div className="product">
            <h3>comapny</h3>
            <ul>
              <li>Terms and condition</li>
              <li>Privacy policy</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="product">
            <h3>Support</h3>
            <ul>
              <li>Gbagada lagos</li>
              <li>help@zojaypay.com</li>
              <li>
                follows us
                <a href>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href>
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href>
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
