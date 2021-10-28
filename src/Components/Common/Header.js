import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRepoData } from "../../Redux/Actions/action";
import Styles from "./Header.module.css";
const Header = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRepoData("gatsbyjs"))
}, [])
const callRepoData = (e) =>{
  e.preventDefault()
  dispatch(getRepoData(user))
}
  return (
    <div className={Styles.container}>
        <div className={Styles.navbarContainer}>
          <div className={Styles.left}>
            <form onSubmit={callRepoData} style={{marginTop: '1rem'}}>
            <input placeholder="Search Repos" className={Styles.searchBar} onChange={(e) => setUser(e.target.value)}/>
           </form> <div className={Styles.searchIcon} onClick={() => callRepoData()}>
                <img src="https://img.icons8.com/ios-filled/20/000000/search--v1.png"/>
                </div>
                
          </div>
                <div className={Styles.center}></div>
          <div className={Styles.right}>
            
          </div>
        </div>
      </div>
  );
};

export default Header;
