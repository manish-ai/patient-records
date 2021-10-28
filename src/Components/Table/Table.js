import React, { useEffect, useState } from 'react'
import Styles from "./Table.module.css";
import { useDispatch, useSelector } from 'react-redux';
import RepoTableRow from './TableRow';

const LIMIT = "50"
const RepoTable = () => {
     const repo = useSelector((state) => state.repo)
    let {loading, repoData} = repo;


    return (
        <div className={Styles.container}>
            <table className={Styles.tableWrap}>
            <thead className={Styles.tableHead}>            
            <tr className={Styles.tableHeadRow}>
                <th className={Styles.tableCellHead}>
                   Sl No
                </th>
                <th className={Styles.tableCellHeadName}>
                Owner 
                </th>
                <th className={Styles.tableCellHead}>
                Name
                </th>
                <th className={Styles.tableCellHead}>
                Description
                </th>
                <th className={Styles.tableCellHead}>
                Stars
                </th>
                <th className={Styles.tableCellHead}>
                Open issue count
                </th>
                <th className={Styles.tableCellHead}>
                Watchers
                </th>
                
            </tr>
            </thead>
            
            <div></div>:
            <tbody className={Styles.tableBody}>
                {repoData && repoData.map((rowData, index) => (
            <RepoTableRow key={rowData.symbol} data={rowData} index = {index}/>
          ))}
            </tbody>    
            </table>
        </div>
    )
}

export default RepoTable
