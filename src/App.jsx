import "./App.css";
import img from "./assets/img/image.png";
import img2 from "./assets/img/image 13.png";
import img3 from "./assets/img/image 21.png";
import img4 from "./assets/img/image 18.png";
import img5 from "./assets/img/image 11.png";
import img6 from "./assets/img/image 10 (1).png";
import img7 from "./assets/img/ian-keefe-OgcJIKRnRC8-unsplash 1.png";
import img8 from "./assets/img/Ellipse 1 (1).png"

export default function app() {
  return (<>
    <div className="main">
      <div className="navbar">
        <h1>Cootels</h1>
        <div className="navP">
          <p>Rooms</p>
          <p>Rooms</p>
          <p>Contacs</p>
        </div>
        <button>Get Started</button>
      </div>
      <div className="block1">
        <div className="left">
          <h1>Nature, Warmth, and Beauty in One Space</h1>
          <p>
            One place to release all the stress, bring back happines, and get
            back to nature. We provide the best room and nature for you. Come
            visit us anytime you want.
          </p>
          <button>Reservation</button>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="block2">
        <div className="left1">
          <img src={img2} alt="" />
        </div>
        <div className="right1">
          <h1>Cozy and Down to Earth Cootage Hotel in Norway.</h1>
          <p>
            Our Cootage Hotel is an intimate hideway concieved for dicerning
            travelers. It faces directly the unique and spectacular panorama of
            the Hallerbos Jungle.
          </p>
          <br />
          <p>
            Cootels extends along a private, quiet, and beautiful nature. Stay
            away from crowd and enjoy the cozy and beauty with us.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="block3">
        <div className="left3">
          <h1>Cabin Activities</h1>
          <p>
            Don’t worry to get bored easily in our cabin. We have so many cabin
            activities for you to do it alone or with group. Maybe this is the
            best chance for you to make new friends or even a lover.
          </p>
        </div>
        <div className="rigth3">
          <img src={img3} alt="" />
        </div>
      </div>

      <div className="block4">
        <div className="rigth4">
          <img src={img4} alt="" />
        </div>
        <div className="left4">
          <h1>Cabin Activities</h1>
          <p>
            Don’t worry to get bored easily in our cabin. We have so many cabin
            activities for you to do it alone or with group. Maybe this is the
            best chance for you to make new friends or even a lover.
          </p>
        </div>
      </div>
      <div className="text">
        <h1>Many Rooms to Choose</h1>
        <p>
          There is a room for every needs. We have room for individuals until{" "}
          <br />
          family size, we also have a cabin for more private experience
        </p>
        <button>Explore more</button>
      </div>
      <div className="blocks">
        <div className="blck">
          <img src={img5} alt="" />
          <h1>Single Room</h1>
          <p>
            Best for a brave lone wolf who need comfort and quiet quality time,
            but you still have a chance to meet others.
          </p>
          <button>Learn more 👉🏻</button>
        </div>
        <div className="blck">
          <img src={img6} alt="" />
          <h1>SDouble Room</h1>
          <p>
            Best for couple, seek happiness in intimacy without worry of being
            disturbed. Feel the whole world just for you two
          </p>
          <button>Learn more 👉🏻</button>
        </div>
        <div className="blck">
          <img src={img7} alt="" />
          <h1>Cootage</h1>
          <p>
            Best for family or group. One cootage can fit up to 5 people. Made
            stronger bond with your family or friends
          </p>
          <button>Learn more 👉🏻</button>
        </div>
      </div>
      <div className="detl">
        <div className="sec1">
          <p>Start your journey!</p>
          <h1>How to Get My Room?</h1>
          <p>
            You can contact us by phone or email us. Easily tap the contact
            button below and it will take you to our contact point
          </p>
          <button>Contact us</button>
          <button id="ex">Explore more room</button>
        </div>
        <div className="sec2">
          <details>
            <summary>1. Choose a room and date</summary>
            <p>
              Contact us via phone or email, ask for availability of you choice
              of room. We might offer you something exciting.
            </p>
          </details>
          <details>
            <summary>2. Check for room availability</summary>
            <p>
              Contact us via phone or email, ask for availability of you choice
              of room. We might offer you something exciting.
            </p>
          </details>
          <details>
            <summary>3. Enjoy your room</summary>
            <p>
              Contact us via phone or email, ask for availability of you choice
              of room. We might offer you something exciting.
            </p>
          </details>
        </div>
      </div>
      <div className="futr">
        <h1>Hear From Our Happy Customers</h1>
        <img src={img8} alt="" />
        <p>
          “Great service, great food, great people. The scenery is also
          beautiful, you can do so much activity even with your famility. Worth
          every penny! you should come and see for your self. 5 out of 5! the
          waffle is great!”
        </p><br />
        <h3>Kirana Dunham</h3>


      </div>
    </div>
        <div className="furter">
        <div className="foo">
          <h4>Rooms</h4>
          <p>Single Room</p>
          <p>Double Room</p>
          <p>Cabin</p>
          <p>Custom Room</p>
        </div>
        <div className="foo">
          <h4>Rooms</h4>
          <p>Single Room</p>
          <p>Double Room</p>
          <p>Cabin</p>
          <p>Custom Room</p>
        </div>
        <div className="foo">
          <h4>Rooms</h4>
          <p>Single Room</p>
          <p>Double Room</p>
          <p>Cabin</p>
          <p>Custom Room</p>
        </div>
        </div>
      <marquee behavior="alternate" direction="">i love Reacct</marquee>
    </>
  );
}
