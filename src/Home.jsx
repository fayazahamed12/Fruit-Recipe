import { useContext } from "react";
import { GlobalContext } from "./Context";
import RecipeItem from "./RecipeItem";

function Home(){
    const {recipe, loading} = useContext(GlobalContext);

    if (loading) return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {recipe && recipe.length > 0 ? (
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                        Discover <span className="text-orange-500">Delicious</span> Recipes
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {recipe.map((item) => (
                            <RecipeItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <svg className="mx-auto h-24 w-24 text-slate-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h1 className="text-3xl font-bold text-slate-800 mb-3">Nothing to show right now</h1>
                    <p className="text-slate-500 max-w-md mx-auto text-lg">
                        Please search something else or type a different keyword to find mouth-watering recipes.
                    </p>
                </div>
            )}
        </div>
    )
}

export default Home;