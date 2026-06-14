import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-slate-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item?.image_url} 
          alt={item?.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-orange-500 tracking-wider uppercase mb-2">
          {item?.publisher}
        </span>
        <h3 className="text-lg font-bold text-slate-800 mb-4 line-clamp-2 leading-tight">
          {item?.title}
        </h3>
        <div className="mt-auto pt-4 border-t border-slate-100">
          <Link 
            to={`/recipe-item/${item?.id}`} 
            className="block text-center bg-slate-900 hover:bg-orange-500 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-300 shadow-sm"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
export default RecipeItem;
