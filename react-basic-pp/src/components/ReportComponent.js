import { useContext } from "react"
import DataContext from "../data/DataContect"

const ReportComponent=()=>{
    const {income, expense} = useContext(DataContext)
    return(
        <div>
        <p>Income: {income} </p>
        <p>Expense: {expense} </p>
        </div>
    )

}
export default ReportComponent