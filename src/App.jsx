import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import OverviewPage from './pages/Overview/Overview'
import TicketsPage from './pages/Tickets/Tickets'
import IdeasPage from './pages/Ideas/Ideas'
import ContactsPage from './pages/Contacts/Contacts'
import AgentsPage from './pages/Agents/Agents'
import ArticlesPage from './pages/Articles/Articles'
import SettingsPage from './pages/Settings/Settings'
import SubscriptionPage from './pages/Subscription/Subscription'

function App() {

  return (
    <>
      <div className='flex'>
        <Navbar/>

        <div className='w-full overflow-auto h-[100vh]'>
        <Routes>
          <Route path='/' element={<OverviewPage/>}/>
          <Route path='/tickets' element={<TicketsPage/>}/>
          <Route path='/ideas' element={<IdeasPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='/agents' element={<AgentsPage/>}/>
          <Route path='/articles' element={<ArticlesPage/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
          <Route path='/subscription' element={<SubscriptionPage/>}/>
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App
