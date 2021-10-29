import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRepoData } from "../../Redux/Actions/action";
import Styles from "./Header.module.css";
const Header = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRepoData("sindresorhus"))
}, [])
const callRepoData = (e) =>{
  e.preventDefault()
  dispatch(getRepoData(user))
}
const callRepoData2 = () =>{
  dispatch(getRepoData(user))
}
  return (
    <div className={Styles.container}>
        <div className={Styles.navbarContainer}>
          <div className={Styles.left}>
            <form onSubmit={callRepoData} style={{marginTop: '1rem', height:'4.5em', width:'55%'}}>
            <input placeholder="Search Github Repositories" className={Styles.searchBar} onChange={(e) => setUser(e.target.value)}/>
           </form> <div className={Styles.searchIcon} onClick={() => callRepoData2()}>
           <img src="https://img.icons8.com/ios-filled/20/ffffff/search--v1.png"/>
                {/* <img src="https://img.icons8.com/ios-filled/20/000000/search--v1.png"/> */}
                </div>
                
          </div>
             
        </div>
      </div>
  );
};

export default Header;
