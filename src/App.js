import "./App.scss";
import image1 from "./images/imge1.svg";
import image2 from "./images/image4.svg";

import image3 from "./images/image2.svg";
import image4 from "./images/image3.svg";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="inner-container">
          <div className="main-content main-content1">
            <div className="image">
              <img src={image1} alt="png" />
            </div>
            <div className="message">
              <p className="highlight">LOOKING FOR A HOUSE?</p>
              <p className="tet">
                Just get one of our Assisted Plans and make your lives simpler.
              </p>
            </div>
          </div>
          <div className="main-content main-content2">
            <div className="image">
              <img src={image2} alt="png" />
            </div>
            <div className="message">
              {/* <p className="highlight">Contanct Owners,</p>
              <p className="highlight">Schedule property visits,</p>
              <p className="highlight"> and Negotiates Rent*</p> */}
              <p className="tet">Say HELLO to your</p>
              <p className="highlight">HOUSINGMAGIC ASSISTANT</p>
            </div>
          </div>
          <div className="main-content main-content3">
            <div className="image">
              <img src={image3} alt="png" />
            </div>
            <div className="message">
              <p className="highlight">Contanct Owners,</p>
              <p className="highlight">Schedule property visits,</p>
              <p className="highlight"> and Negotiates Rent*</p>
            </div>
          </div>
          <div className="main-content main-content4">
            <div className="image">
              <img src={image4} alt="png" />
            </div>
            <div className="message">
              <p className="tet">Helping you find best</p>
              <p className="highlight">HOUSE FOR YOUR NEEDS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
