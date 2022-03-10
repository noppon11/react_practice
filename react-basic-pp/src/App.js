import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { useState,useEffect } from 'react'
import './components/Apps.css'
import { v4 as uuidv4 } from 'uuid'
import DataContext from "./data/DataContect";
import ReportComponent from "./components/ReportComponent";

const design = {color:"red",textAlign: "Center", fontsize:"1.5rem"}
const Description =()=> <h1 style={design}> Salary Planner</h1>
function App() { 

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
  
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])
  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div class="container">
        <Description/>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
