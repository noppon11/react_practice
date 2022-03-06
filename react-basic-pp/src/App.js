import Transaction from "./components/Transaction";

const Title =()=><h1>Program salary account</h1>
const Description =()=> <p> Note account data per days</p>

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
    <div>
      <Title/>
      <Description/>
      <Transaction/>
    </div>
    // </React.Fragment>
  );
}

export default App;
