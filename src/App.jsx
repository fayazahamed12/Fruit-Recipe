import React from 'react'
import "./App.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from "./Navbar"
import Home from "./Home"
import Favoirte from './Favoirte'
import Detail from './Details'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900 flex flex-col overflow-x-hidden w-full">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favoirte />} />
            <Route path="/recipe-item/:id" element={<Detail />} />
          </Routes>
        </main>
        
        {/* Simple Footer to complete the look */}
        <footer className="mt-auto py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-white">
          <p>© {new Date().getFullYear()} FoodRecipe. Crafted with ❤️ for food lovers.</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App