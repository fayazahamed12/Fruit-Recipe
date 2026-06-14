import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./Context";

function Detail() {
  const { id } = useParams();
  const { recepidetail, setrecipedetail, favorite, handleAddtoFav } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getRecioedetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setrecipedetail(data?.data);
      }
    }
    getRecioedetails();
  }, [id, setrecipedetail]);

  const isFavorite = favorite && favorite.length > 0 && favorite.findIndex((item) => item.id === recepidetail?.recipe?.id) !== -1;

  if (!recepidetail) {
      return (
          <div className="flex justify-center items-center min-h-[60vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
          </div>
      )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-100">
            <img 
              src={recepidetail?.recipe?.image_url} 
              alt={recepidetail?.recipe?.title}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out aspect-square md:aspect-[4/3] lg:aspect-square"
            />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2">
            {recepidetail?.recipe?.publisher}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            {recepidetail?.recipe?.title}
          </h1>
          
          <div className="mb-8">
            <button
              className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 ${isFavorite ? 'bg-rose-500 text-white hover:bg-rose-600' : 'bg-slate-900 text-white hover:bg-orange-500'}`}
              onClick={() => handleAddtoFav(recepidetail?.recipe)}
            >
              <svg className={`w-6 h-6 ${isFavorite ? 'fill-current' : 'fill-none stroke-current stroke-2'}`} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>

          <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Ingredients
            </h2>
            <ul className="space-y-4">
              {recepidetail?.recipe?.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-400"></div>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    <span className="font-bold text-slate-900">
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                    {ingredient.quantity || ingredient.unit ? ' ' : ''}
                    {ingredient.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
