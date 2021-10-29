import React, { useEffect, useState } from 'react'
import Styles from "./Table.module.css";
import { useDispatch, useSelector } from 'react-redux';
import RepoTableRow from './TableRow';

const RepoTable = () => {
    const [repos, setRepo] = useState([])
     const repo = useSelector((state) => state.repo)
    let {loading, repoData} = repo;

    const[direction, setDirection] = useState({ price: 'asc' });
    const[arrow, setArrow] = useState({ fa: 'fa-arrow-up' });

   
    useEffect(() => {
        setRepo(repoData);
    }, [repoData])
    
    const sortBy = (key) => {
        console.log(key, direction)
        if( key == "name"){
            direction[key] === "asc" ?   setRepo(repos.sort((a, b) => a.name > b.name && 1 || -1)) : setRepo(repos.sort((a, b) => a.name > b.name &&  -1 || 1));
        }
        else if( key == "description"){
            setRepo(repos.sort((a, b) => a[key] > b[key] && 1 || -1));
        }
        else{
        setRepo(repos.sort((a,b) => direction[key] === "asc" ?  parseFloat(a[key]) - parseFloat(b[key])  : parseFloat(b[key]) - parseFloat(a[key])));
       }
    setDirection( {[key] : direction[key] == "asc" ? "desc" : "asc"});
    }

 

    return (
        <div className={Styles.container}>
            <table className={Styles.tableWrap}>
            <thead className={Styles.tableHead}>            
            <tr className={Styles.tableHeadRow}>
                <th className={Styles.tableCellHead} >
                   Sl No
                </th>
                <th className={Styles.tableCellHeadName} >
                Owner 
                </th>
                <th className={Styles.tableCellHeadName}  onClick={() => sortBy("name")}>
                Name &nbsp;<img src="https://img.icons8.com/ios-glyphs/14/000000/sort.png"/>
                </th>
                <th className={Styles.tableCellHeadName}  onClick={() => sortBy("description")}>
                Description &nbsp;<img src="https://img.icons8.com/ios-glyphs/14/000000/sort.png"/>
                </th>
                <th className={Styles.tableCellHead} onClick={() => sortBy("stargazers_count")}>
                Stars &nbsp;<img src="https://img.icons8.com/ios-glyphs/14/000000/sort.png"/>
                </th>
                <th className={Styles.tableCellHead} onClick={() => sortBy("open_issues_count")}>
                Open issue count &nbsp;<img src="https://img.icons8.com/ios-glyphs/14/000000/sort.png"/>
                </th>
                <th className={Styles.tableCellHead} onClick={() => sortBy("watchers_count")}>
                Watchers &nbsp;<img src="https://img.icons8.com/ios-glyphs/14/000000/sort.png"/>
                </th>
                
            </tr>
            </thead>
            
            <div></div>:   
            <tbody className={Styles.tableBody}>
                {
                loading ?
                 <div className="loader"></div>
                 :
               <>
                {repos && repos.map((rowData, index) => (
            <RepoTableRow key={rowData.symbol} data={rowData} index = {index}/>
          ))}
          </>
             }
            </tbody>    
            </table>
            { !repos?.length &&  <div className={Styles.noData}> No Repositories Found !! <br/>Please search for a valid Repository. </div> }
           
        </div>
    )
}

export default RepoTable
