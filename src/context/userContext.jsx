import {createContext,useState} from 'react'; 

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [userDetails, setUserDetails] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const handleItems = (v) => {
    setItemsQuantity(v);
    console.log(v)
  }
  console.log(itemsQuantity)

  const handleCost = (v) => {
    setTotalCost(v)
  }
  console.log(totalCost)


  return (
    <div>
      <UserContext.Provider value={{itemsQuantity,totalCost, handleItems, handleCost}}>{children}</UserContext.Provider>
    </div>
  )
}
