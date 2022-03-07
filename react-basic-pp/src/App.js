import Transaction from "./components/Transaction";
import './components/Apps.css'

const design = {color:"red",textAlign: "Center", fontsize:"1.5rem"}
const Description =()=> <h1 style={design}> Note account data per days</h1>
function App() {
  return (
    // <div>
    //   <h1> Program salary account </h1>
    //   <p> Note account data per days </p>
    //   <ul>
    //       <li> ค่าเดินทาง <span>-200</span></li>
    //       <li> เงินเดือน <span>40000</span></li>
    //       <li> ค่าอาหาร <span>-1200</span></li>
    //   </ul>
    // </div>

    // <React.Fragment>
    <div class="container">
      <Description/>
      <Transaction/>
    </div>
    // </React.Fragment>
  );
}

export default App;
