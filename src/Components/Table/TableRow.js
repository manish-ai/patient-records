import React from 'react'
import { ICONS } from '../../Utils/Constants';
import Styles from "./Table.module.css";

const RepoTableRow = ({data, index}) => {
    return (
        <tr className={Styles.tableRowWrap}>
            <td className={Styles.tableCell}>
                {index +1}
            </td>
            <td className={Styles.tableCellName}>
                <img className={Styles.currencyImg} src={data.owner.avatar_url} alt={data.owner.login}  />
                    
                    <span className={Styles.currencyName}>
           {data.owner.login}
            {/* <span className={Styles.currencyShort}>{data.symbol}</span> */}
          </span>
            </td>
            <td className={Styles.tableCell}>
                {data.name}
            </td>
            <td className={Styles.tableCell}>
           {data.description?.length < 25 ?data.description : "" }
            </td>
            <td className={Styles.tableCell}>
            {data.stargazers_count}
            </td>
            <td className={Styles.tableCell}>
            {data.open_issues_count}
            </td>
            <td className={Styles.tableCell}>
          {data.watchers_count}
            </td>
            
        </tr>
    )
}

export default RepoTableRow
