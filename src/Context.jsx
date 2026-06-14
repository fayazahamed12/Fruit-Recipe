import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null)

function GlobalState({children}){

    const [searchpar,setsearch]=useState('');
    const [loading,setloading]=useState(false);
    const [recipe,setresipe]=useState([]);
    const [recepidetail,setrecipedetail]=useState(null)
    const [favorite,setfavorite]=useState([])
    const [user, setUser] = useState(null) // Google User State

    // Load user from local storage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('foodRecipeUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('foodRecipeUser', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('foodRecipeUser');
    };

    async function handlesubmit(event) {
        if(event) event.preventDefault()
        setloading(true);
        try{
            const res =
              await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchpar}`);
            const data = await res.json()
            if(data?.data?.recipes){
                setresipe(data?.data?.recipes)
                setloading(false)
                setsearch('')
            }
        }catch(e){
            console.log(e)
            setloading(false);
            setsearch("");
        }
    }

    function handleAddtoFav(getitem){
        console.log(getitem)
        let copyfavorite=[...favorite]
        const index=copyfavorite.findIndex(item => item.id === getitem.id)

        if (index === -1){
            copyfavorite.push(getitem)
        }else{
            copyfavorite.splice(index, 1)
        }
        setfavorite(copyfavorite)
    }

    return (
      <GlobalContext.Provider
        value={{
          searchpar,
          loading,
          recipe,
          setsearch,
          handlesubmit,
          recepidetail,
          setrecipedetail,
          handleAddtoFav,
          favorite,
          user,
          login,
          logout,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );

}
export default GlobalState