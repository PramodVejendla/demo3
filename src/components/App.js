import React from 'react';
import Card from './Card';
import expenses from './expenses';
import './App.css'

function infoCard(expenses) {
  return (
    <Card 
    id ={expenses.id}
    key={expenses.id}
    title={expenses.title}
    price={expenses.amount}
  />
  );

}

function App(props) {
  return (
    <div>
      <h1 className='heading1'>Expenses Tracker</h1>
      {expenses.map(infoCard)}
    </div>
  )
}

export default App;