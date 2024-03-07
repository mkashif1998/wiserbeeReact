import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState({
    user: "Jennifer Markus",
    tag: "Parent",
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    lastMessage:
      "Hey! Did you finish Hi-Fi wireframes for flora app design so it could be us then now and may be this one will fix it",
    timestamp: "30 mints ago",
  });
  const value = { toggleSidebar, setToggleSidebar, user, setUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const Store = () => useContext(AppContext);
