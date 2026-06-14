import { useContext } from "react";
import { Link } from "react-router-dom"
import { GlobalContext } from "./Context";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Navbar(){

  const { searchpar, setsearch, handlesubmit, user, login, logout } = useContext(GlobalContext)

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={"/"} className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent hover:from-orange-600 hover:to-amber-600 transition-colors">
              FruitRecipe
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl px-8 hidden md:block">
            <form onSubmit={handlesubmit} className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                className="block w-full pl-11 pr-4 py-2.5 bg-slate-100/80 border-transparent rounded-full text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 outline-none" 
                name="search" 
                placeholder="Find a delicious recipe..." 
                value={searchpar} 
                onChange={(e)=>setsearch(e.target.value)} 
              />
            </form>
          </div>

          {/* Navigation & Auth */}
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6 items-center m-0 p-0 list-none">
              <li>
                <Link to={"/"} className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Home</Link>
              </li>
              <li>
                <Link to={"/favorite"} className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Favorites</Link>
              </li>
            </ul>

            {/* Google Auth */}
            <div className="border-l border-slate-200 pl-6 flex items-center">
              {user ? (
                <div className="flex items-center space-x-3">
                  <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <div className="hidden lg:block text-sm">
                    <p className="font-semibold text-slate-800 leading-tight">{user.name}</p>
                    <button onClick={logout} className="text-xs text-slate-500 hover:text-red-500 transition-colors focus:outline-none">Sign Out</button>
                  </div>
                </div>
              ) : (
                <div className="scale-90 transform origin-right">
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      const decoded = jwtDecode(credentialResponse.credential);
                      login(decoded);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    theme="outline"
                    shape="pill"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-4">
        <form onSubmit={handlesubmit} className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            className="block w-full pl-11 pr-4 py-2.5 bg-slate-100/80 border-transparent rounded-full text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 outline-none" 
            placeholder="Find a delicious recipe..." 
            value={searchpar} 
            onChange={(e)=>setsearch(e.target.value)} 
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;