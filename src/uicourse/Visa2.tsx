import menu from "@assets/menu.png";
import calendar from "@assets/calendar.png";
import style from "@uicourse/VisaStyle2.module.css";
import dolsym from "@assets/dollar-symbol.png";
import downarrow from "@assets/downward-arrow.png";
import rarrow1 from "@assets/right-arrow (1).png";
import rarrow2 from "@assets/right-arrow (2).png";
import restuarant from "@assets/restuarant.png";
import hand from "@assets/hand-hold-money.png";
import shopbag from "@assets/shop-bag.png";
import coin from "@assets/icon-coins.png";
import downarr from "@assets/down-arrow.png";

const Visa2 = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.bar}>
          <img style={{ marginLeft: 10, width: 20 ,justifyContent:"space-between",textAlign:"center"}} src={menu} alt="menu" />
          <img
            style={{ marginLeft: 300 ,width:20}}
            src={calendar}
            alt="icon"
          />
          <br />
        </div>

        <a
          style={{
            color: " rgb(26, 191, 26)",
            display: "flex",
            justifyContent: "center",
            fontSize: 10,
          }}
        >
          Available Balance
        </a>
        <br />
        <div className={style.avai}>
          <img
            src={dolsym}
            alt="dollar"
            style={{ width: 20}}
          />
          <h2 style={{ marginLeft: 5,fontSize:30 }}>7,392.00</h2>
        </div>
        <div
          style={{
            color: "rgb(152, 149, 149)",
            display: "flex",
            justifyContent: "center",
            marginBottom: 30,
            fontSize:12
          }}
        >
          <a>June 9,2018</a>
        </div>
        <div className={style.card}>
          <div
            style={{
              marginLeft: 20,
              // marginTop:50,
              marginRight: 25,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 20 ,marginTop:15 }}>42012 </p>
            <p style={{ fontSize: 20,marginTop:15 }}>3049 </p>
            <p style={{ fontSize: 20,marginTop:15 }}>2800 </p>
            <p style={{ fontSize: 20,marginTop:15 }}>9815 </p>
          </div>

          <div className={style.incard}>
            <a style={{ marginLeft: 20,fontSize:10 }}>EXPIRE</a>
            <img
              style={{ marginLeft: 5,width:10 }}
              src={downarrow}
              alt=""
            />
            <a style={{ marginLeft: 8, fontSize: 16 }}>02/22</a>
            <a style={{ marginLeft: 100, fontSize:10  }}>CVC CODE</a>
            <img
              style={{ marginLeft: 5,width:10 }}
              src={downarrow}
              alt=""
            />
            <a style={{ marginLeft: 8, fontSize: 18 }}>230</a>
          </div>
        </div>
        <div className={style.card2}>
          <div className={style.income}>
            <a
              style={{
                fontSize: 10,
                border: "1px solid rgb(199, 193, 193)",
                padding: "5px 15px",
                borderRadius: 25,
              }}
            >
              Income
            </a>
            <br />
            <div style={{ marginTop: 20,display:"flex",marginBottom:20 }}>
              <img
                style={{width:15,marginRight:6,alignSelf:"center",marginTop:-10}}
                src={rarrow1}
                alt=""
              />
              <a style={{ color: "green",marginTop:-10 }}>$9,302.00</a>
            </div>
          </div>
          <view className={style.verticleLine}></view>
          <div className={style.expense}>
            <a
              style={{
                fontSize: 10,
                border: "1px solid rgb(199, 193, 193)",
                padding: "5px 15px",
                borderRadius: 25,
                marginLeft: 20,
              }}
            >
              Expense
            </a>
            <br />
            <div style={{ marginTop: 20,display:"flex",marginBottom:20  }}>
              <img
                style={{width:15,marginRight:6,alignSelf:"center",marginTop:-10}}
                src={rarrow2}
                alt=""
                
              />
              <a style={{ color: "red",marginTop:-10  }}>$2790.00</a>
            </div>
          </div>
        </div>

        <div className={style.flexcon}>
          <a style={{ color: " #10347c" }}>Detail of movements</a>
          <a style={{ fontSize: 15, marginLeft: 80, color: " #5f6165" }}>
            Weekly
          </a>
          <img
            src={downarr}
            alt="down arr"
            width="25"
            style={{ marginLeft: 5 }}
          />
        </div>
        <div className={style.list}>
          <img src={restuarant} alt="Restaurant Icon" style={{ width: 40 }} />
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Restaurant Manhattan</h6>
            <p>June 10,2018</p>
          </div>
          <span style={{ color: "red" }} className={style.amount}>
            $170
          </span>
          <img
            src={rarrow2}
            alt="Arrow Down"
            style={{ width: 10 }}
          />
        </div>

        <div className={style.list}>
          <img
            src={hand}
            alt="Salary Icon"
            style={{ width: 40 }}
          />
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Deposit Freelance</h6>
            <p>June 10,2018</p>
          </div>
          <span style={{ color: "green" }} className={style.amount}>
            $800
          </span>
          <img
            src={rarrow1}
            alt="Arrow Up"
            style={{ width: 10 }}
          />
        </div>

        <div className={style.list}>
          <img
            src={shopbag}
            alt="Shop Icon"
            style={{ width: 40 }}
          />
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Central Market</h6>
            <p>June 6,2018</p>
          </div>
          <span style={{ color: "red" }} className={style.amount}>
            $50
          </span>
          <img
            src={rarrow2}
            alt="Arrow Up"
            style={{ width: 10 }}
          />
        </div>

        <div className={style.list}>
          <img
            src={coin}
            alt="coin Icon"
            style={{ width: 40 }}
          />
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Salary Deposit</h6>
            <p>June 1,2018</p>
          </div>
          <span style={{ color: "green" }} className={style.amount}>
            $4,200
          </span>
          <img
            src={rarrow1}
            alt="Arrow Up"
            style={{ width: 10 }}
          />
        </div>
        <div className={style.list}>
          <img
            src={shopbag}
            alt="shopbag Icon"
            style={{ width: 40 }}
          />
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Central Market</h6>
            <p>June 1,2018</p>
          </div>
          <span style={{ color: "red" }} className={style.amount}>
            $37
          </span>
          <img
            src={rarrow2}
            alt="Arrow Up"
            style={{ width: 10 }}
          />
        </div>
      </div>
    </>
  );
};
export default Visa2;
