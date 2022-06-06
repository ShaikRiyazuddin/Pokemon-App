import {createContext,useState} from 'react'; 

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [userDetails, setUserDetails] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleItems = (v) => {
    setItemsQuantity([...itemsQuantity,v]);

  }

  const handleCompleteDetails = (v) => {
    setUserDetails(v);
  }
  const handleCost = (v) => {
    setTotalCost(totalCost + v)
  }
 

  return (
    <div>
      <UserContext.Provider value={{itemsQuantity,totalCost, handleItems, handleCost,userDetails,handleCompleteDetails}}>{children}</UserContext.Provider>
    </div>
  )
}
