import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [balance,setBalance ] = useState(0)
  const [expenses,setExpenses ] = useState([
    
  ])

  function addNewExpenses(amount,description){
    //
    let newID 
    if( expenses.length > 0){
     newID = expenses[expenses.length -1].id + 1
    }else{
      newID = 1
    }
   
    const updatedExpenses = expenses.concat({id : newID,amount:amount,description:description})
    setExpenses(updatedExpenses)
    setBalance(balance + Number(amount))
    

  }

  
  function deleteExpense(id) {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);

    // 
    const deletedExpense = expenses.find((expense) => expense.id === id);
    if (deletedExpense) {
      setBalance(balance - Number(deletedExpense.amount));
    }
  }
  return (
    <div className="App">
    <Header />
    <div className="container">
      <div>
        <Balance total={balance} />
        <Add handleonclick={addNewExpenses} />
        {expenses.map((expense) => (
          <Expenses key={expense.id} data={expense} onDelete={deleteExpense} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
