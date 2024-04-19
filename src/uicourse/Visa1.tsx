import style from "@uicourse/VisaStyle.module.css";
import hammenu from "@assets/nemu-hamburger.png";
import chip from "@assets/gold-leaf.png";
import symbol from "@assets/symbols.png";
import dolsym from "@assets/dollar-symbol.png";
import downarrow from "@assets/downward-arrow.png";
import rarrow1 from "@assets/right-arrow (1).png";
import rarrow2 from "@assets/right-arrow (2).png";
import calendar from "@assets/icon-calendar.png";
import restuarant from "@assets/restuarant.png" ;
import hand from "@assets/hand-hold-money.png";
import shopbag from "@assets/shop-bag.png";
import coin from "@assets/icon-coins.png";

const Visa1 = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.nemu}>
          <h2 style={{ color: "#10347c" }}>All my accounts</h2>
          <img src={hammenu} alt="nemu" style={{width:20}} />
        </div>
        <p style={{ color: "rgb(122, 119, 119)" }}>Jun 10,2018</p>

        <div className={style.card}>
          <img
            src={symbol}
            alt="visa"
            style={{ marginLeft: 30 , width:50}}
          />
          <p style={{ color: "green", marginTop: -10 ,marginLeft:215,fontSize:12}}>Available Balance</p>
          <div className={style.incard}>
            <img src={chip} alt="chip" style={{ marginLeft: 16,width:40  }} />
            <img
              src={dolsym}
              alt="dollar"
              
              style={{ marginLeft: 110 ,width:25}}
            />
            <a style={{ marginLeft: 5, fontSize: 25 }}>7,392.00</a>
          </div>
          <div
            style={{
              marginLeft: 23,
              marginTop: 20,
              marginRight: 25,
              marginBottom: 15,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <p style={{ fontSize: 20 }}>42012 </p>
            <p style={{ fontSize: 20 }}>3049 </p>
            <p style={{ fontSize: 20 }}>2800 </p>
            <p style={{ fontSize: 20 }}>9815 </p>
          </div>
          <div className={style.belowcard}>
            <a style={{ marginLeft: 35,fontSize:10 }}>EXPIRE</a>
            <img
              style={{ marginLeft: 5,width:10 }}
              src={downarrow}
              alt=""
            />
            <a style={{ marginLeft: 8, fontSize: 16 }}>02/22</a>
            <a style={{ marginLeft: 55 }}>CVC CODE</a>
            <img
              style={{ marginLeft: 5,width:10 }}
              src={downarrow}
              alt=""
            />
            <a style={{ marginLeft: 8, fontSize: 18 }}>230</a>
          </div>
        </div>
        <div style={{fontSize:60,display:"flex",justifyContent:"center",marginTop:"-40px" }}>
          <p style={{color:"#beb4b4"}}>.</p>
          <p style={{color:"#1e3666"}}>.</p>
          <p style={{color:"#beb4b4"}}>.</p>
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
                style={{width:15,marginRight:6,alignSelf:"center",marginBottom:4}}
                src={rarrow1}
                alt=""
              />
              <a style={{ color: "green" }}>$9,302.00</a>
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
                style={{width:15,marginRight:6,alignSelf:"center",marginBottom:4}}
                src={rarrow2}
                alt=""
                
              />
              <a style={{ color: "red" }}>$2790.00</a>
            </div>
          </div>
        </div>

        <div className={style.flexcon}>
          <a style={{ color: "#10347c" }}>Detail of movements</a>
          <img
            src={calendar}
            alt="chip"
            style={{ width:25 }}
          />
        </div>

        <div className={style.list}>
          <img src={restuarant}alt="Restaurant Icon" style={{width:40 }}/>
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Restaurant Manhattan</h6>
            <p style={{fontSize:12}}>June 10,2018</p>
          </div>
          <span style={{ color: "red" }} className={style.amount}>
            $170
          </span>
          <img src={rarrow2} alt="Arrow Down" style={{width:10 ,marginRight:10}}/>
        </div>

        <div className={style.list}>
          <img src={hand} alt="Salary Icon"style={{width:40 }} />
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Salary Deposit</h6>
            <p style={{fontSize:12}}>June 1,2018</p>
          </div>
          <span style={{ color: "green" }} className={style.amount}>
            $1,200
          </span>
          <img src={rarrow1} alt="Arrow Up" style={{width:10 ,marginRight:10 }}/>
        </div>

        <div className={style.list}>
          <img src={shopbag}alt="Shop Icon" width="40" />
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Central Market</h6>
            <p style={{fontSize:12}} >May 28,2018</p>
          </div>
          <span style={{ color: "red" }} className={style.amount}>
            $50
          </span>
          <img src={rarrow2} alt="Arrow Up" style={{width:10 ,marginRight:10}} />
        </div>

        <div className={style.list}>
          <img src={coin} alt="coin Icon" style={{width:40 }}/>
          <div className={style.info}>
            <h6 style={{marginBottom:10,marginTop:-10}}>Salary Deposit</h6>
            <p style={{fontSize:12}} >May 1,2018</p>
          </div>
          <span style={{ color: "green" }} className={style.amount}>
            $1,200
          </span>
          <img src={rarrow1} alt="Arrow Up" style={{width:10,marginRight:10 }} />
        </div>
      </div>
    </>
  );
};
export default Visa1;
