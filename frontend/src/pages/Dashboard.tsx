import React from 'react'
import Sidebar from '../components/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Analytics from './Analytics'
import Budgets from './Budgets'
import Expenses from './Expenses'
import Income from './Income'
import SavingGoals from './SavingGoals'

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="analytics" element={<Analytics />} />
        <Route path='budgets' element={<Budgets />}/>
        <Route path='expenses' element={<Expenses />}/>
        <Route path='income' element={<Income />}/>
        <Route path='saving-goals' element={<SavingGoals />}/>
        <Route path='*' element={<Navigate to={'/dashboard'}/>} />
      </Routes>
    </div>
  )
}

export default Dashboard