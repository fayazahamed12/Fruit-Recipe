import { useContext } from "react";
import { GlobalContext } from "./Context";
import RecipeItem from "./RecipeItem";

function Favoirte(){

    const {favorite} = useContext(GlobalContext);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {favorite && favorite.length > 0 ? (
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                        Your <span className="text-orange-500">Favorite</span> Recipes
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {favorite.map((item) => (
                            <RecipeItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-slate-100 max-w-3xl mx-auto">
                    <svg className="mx-auto h-24 w-24 text-red-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h1 className="text-3xl font-bold text-slate-800 mb-3">No favorites yet!</h1>
                    <p className="text-slate-500 max-w-md mx-auto text-lg mb-8">
                        You haven't saved any recipes yet. Browse around and click the heart icon to add them here.
                    </p>
                    <a href="/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg shadow-orange-500/30">
                        Explore Recipes
                    </a>
                </div>
            )}
        </div>
    )

}
export default Favoirte