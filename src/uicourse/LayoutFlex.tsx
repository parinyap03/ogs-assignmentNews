import styles from "@uicourse/Flex.module.css";
import menu from "@assets/menu_bar.png";
import airport from "@assets/airport_icon.png";
import booking from "@assets/easy_booking_icon.png";
import group from "@assets/group_icon.png";
import rarrow from "@assets/arrow_right_icon.png";
import larrow from "@assets/arrow_left_icon.png";
import star from "@assets/star_icon.png";
const LayoutFlex = () => {
  return (
    <>
      <div className={styles.container}>
        <nav>
          <ul className={styles.ul}>
            <li
              style={{ marginLeft: -30, fontWeight: "bold" }}
              className={styles.group}
            >
              IsLand
            </li>

            <div className={styles.group}>
              <li>Our tous</li>
              <li>About us</li>
              <li>Booking</li>
              <li>FAQ</li>
            </div>

            <li>
              <img
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 20,
                  marginRight: -20,
                }}
                src={menu}
                alt="menu"
              />
            </li>
          </ul>
        </nav>

        <div className={styles.bg}>
          <div className={styles.inbg}>
            <div className={styles.txt}>
              Explore the sights<br></br>of the Azores
            </div>
            <div className={styles.txt2}>
              A place where noture and adventure unite
            </div>
            <button className={styles.btn}>Book now</button>
            <div style={{ display: "flex", marginTop: 94 }}>
              <img className={styles.larrow} src={larrow} alt="larrow"></img>
              <img
                style={{ marginLeft: 20 }}
                className={styles.rarrow}
                src={rarrow}
                alt="rarrow"
              ></img>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 48,
              marginTop: 120,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Top values for you
          </div>
          <div
            style={{
              fontSize: 18,
              marginTop: 32,
              fontWeight: 500,
              color: "gray",
              marginBottom: 70,
              textAlign: "center",
            }}
          >
            Try variety of benefirts when using our services
          </div>
          <div className={styles.group}>
            <div>
              <div className={styles.icon}>
                <img src={airport} alt="airport"></img>
              </div>
              <p style={{ fontSize: 24, marginTop: 24, fontWeight: 500 }}>
                Airport pickup
              </p>
              <p
                style={{
                  marginTop: 7,
                  color: "gray",
                  flexWrap: "wrap",
                  fontSize: 18,
                }}
              >
                xxxxxxxxxxxxxxx<br></br>xxxxxxxxxx
              </p>
            </div>
            <div>
              <div className={styles.icon}>
                <img src={booking} alt="booking"></img>
              </div>
              <p style={{ fontSize: 24, marginTop: 24, fontWeight: 500 }}>
                Easy booking
              </p>
              <p
                style={{
                  marginTop: 7,
                  color: "gray",
                  flexWrap: "wrap",
                  fontSize: 18,
                }}
              >
                xxxxxxxxxxxxxxx<br></br>xxxxxxxxxx
              </p>
            </div>
            <div>
              <div className={styles.icon}>
                <img src={group} alt="booking"></img>
              </div>
              <p style={{ fontSize: 24, marginTop: 24, fontWeight: 500 }}>
                Best tour guide
              </p>
              <p
                style={{
                  marginTop: 7,
                  color: "gray",
                  flexWrap: "wrap",
                  fontSize: 18,
                }}
              >
                xxxxxxxxxxxxxxx<br></br>xxxxxxxxxx
              </p>
            </div>
            <div>
              <div className={styles.icon}>
                <img src={group} alt="booking"></img>
              </div>
              <p style={{ fontSize: 24, marginTop: 20, fontWeight: 500 }}>
                Lots of promos
              </p>
              <p style={{ color: "gray", flexWrap: "wrap", fontSize: 18 }}>
                xxxxxxxxxxxxxxx<br></br>xxxxxxxxxx
              </p>
            </div>
          </div>
         
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              fontWeight: 700,
              fontSize: 48,
              marginTop: 120,
              marginLeft: 30,
            }}
          >
            Choose your tour
          </div>
          <div className={styles.cardgroup}>
            <div className={styles.card}>
              <div className={styles.image1}>
                <div className={styles.rating}>
                  <p style={{ marginLeft: 5, marginTop: -1 }}>5.0</p>
                  <img
                    style={{
                      width: 13,
                      height: 12,
                      marginLeft: 7,
                      marginTop: 3,
                    }}
                    src={star}
                    alt="star"
                  ></img>
                </div>
                <div className={styles.cardtxt}>
                  <div className={styles.txt3}>
                    <p>Alone with nature</p>
                    <p>$ 100</p>
                    <img
                      className={styles.cardarrow}
                      src={rarrow}
                      alt="rarrow"
                    ></img>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.image2}>
                <div className={styles.rating}>
                  <p style={{ marginLeft: 5, marginTop: -1 }}>4.9</p>
                  <img
                    style={{
                      width: 13,
                      height: 12,
                      marginLeft: 7,
                      marginTop: 3,
                    }}
                    src={star}
                    alt="star"
                  ></img>
                </div>
                <div className={styles.cardtxt}>
                  <div className={styles.txt3}>
                    <p>The beach</p>
                    <p>$ 200</p>
                    <img
                      className={styles.cardarrow}
                      src={rarrow}
                      alt="rarrow"
                    ></img>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.image3}>
                <div className={styles.rating}>
                  <p style={{ marginLeft: 5, marginTop: -1 }}>5.0</p>
                  <img
                    style={{
                      width: 13,
                      height: 12,
                      marginLeft: 7,
                      marginTop: 3,
                    }}
                    src={star}
                    alt="star"
                  ></img>
                </div>
                <div className={styles.cardtxt}>
                  <div className={styles.txt3}>
                    <p>Mountain nature</p>
                    <p>$ 150</p>
                    <img
                      className={styles.cardarrow}
                      src={rarrow}
                      alt="rarrow"
                    ></img>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.image4}>
                <div className={styles.rating}>
                  <p style={{ marginLeft: 5, marginTop: -1 }}>4.8</p>
                  <img
                    style={{
                      width: 13,
                      height: 12,
                      marginLeft: 7,
                      marginTop: 3,
                    }}
                    src={star}
                    alt="star"
                  ></img>
                </div>
                <div className={styles.cardtxt}>
                  <div className={styles.txt3}>
                    <p>Airport thailand</p>
                    <p>$ 80</p>
                    <img
                      className={styles.cardarrow}
                      src={rarrow}
                      alt="rarrow"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
       
        <div className={styles.divbtn}>
          <button className={styles.btnseeall}>See all</button>
        </div>
      </div>
    </>
  );
};

export default LayoutFlex;
