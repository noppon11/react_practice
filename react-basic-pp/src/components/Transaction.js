
import Item from"./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';

const Transaction =(PropsType)=> {
    const data = [
      {title:"heath price" , amount:2_500 },
      {title:"salary", amount: 40_000 },
      {title:"daily price", amount: 1_500},
      {title:"water monthly", amount: 300},
      {title:"insurance", amount: 300},
    ]
    return (<ul className= "item-list">
      {data.map(element=>{
        return <Item {...element} key={uuidv4()} />
      })}
    </ul>
  );
}
export default Transaction;