import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { useState,useEffect } from 'react'
import DataContext from "./data/DataContect";
import ReportComponent from "./components/ReportComponent";
import './components/Apps.css'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() { 
  const design = {color:"red",textAlign: "Center", fontsize:"1.5rem"}
  const Description =()=> <h1 style={design}> Salary Planner</h1>
  const [items,setItems] = useState([])
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }

  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1 
  
    setReportIncome(income).toFixed(2)
    setReportExpense(expense).toFixed(2)
  },[items,reportIncome,reportExpense])

  // reducer state
  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state,action)=>{
  //   switch(action.type){
  //     case "ADD" :
  //       return setShowReport(true)
  //     case "SUB":
  //       return setShowReport(false)
  //     case "CLEAR":
  //       return 0
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,setShowReport)

  return (
    <DataContext.Provider value={{income: reportIncome, expense: reportExpense}}>
      <div className="container">
        <Description/>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Data</Link>
              </li>
              <li>
                <Link to="/insert">Save Data</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <ReportComponent/>
              </Route>
              <Route path="/insert">
                <FormComponent onAddItem={onAddNewItem}/>
                <Transaction items={items}/>
              </Route>
            </Switch>
          </div>
        </Router>
       </div>
    </DataContext.Provider>
  );
}

export default App;
