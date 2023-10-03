import React from 'react'
import { ICONS } from '../../Utils/Constants';
import Styles from "./Table.module.css";

const PatientTableRow = ({data, index}) => {
    let getAddress = () => {
         if(data?.resource?.address && data?.resource?.address[0]){
            let address = data?.resource?.address[0];
            let state = address?.state ? address?.state : "";
           return address?.line?.join(" ") + " "+ address?.city + " "+ state; 
         }
         return "-"
    }
    function calculate_age(dob) { 
        if(dob &&new Date(dob)){
        var diff_ms = Date.now() - new Date(dob).getTime();
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
        }
        return 0
    }
    return (
        <tr className={Styles.tableRowWrap}>
            <td className={Styles.tableCell}>
                {data.resource.id || ""}
            </td>
            <td className={Styles.tableCellName}>
                <img className={Styles.currencyImg} src={`https://ui-avatars.com/api/?background=random&name=${data.resource.name[0]?.given[0]}+${data.resource.name[0]?.family}`} alt=""  />
                    
                    <span className={Styles.currencyName}>
                        {data.resource.name[0]?.given[0]}  {data.resource.name[0]?.family}
                    </span>
            </td>
            <td className={Styles.tableCellName}>
                {data.resource.gender}
            </td>
            <td className={Styles.tableCellNameDesc}>
           {data.resource.birthDate} 
           {/* - {calculate_age(data.resource.birthDate)} */}
            </td>
            <td className={Styles.tableCell}>
            {getAddress()}
           
            </td>
            <td className={Styles.tableCell}>
            {data.resource?.telecom?.find(item => item.system == "phone")?.value || "-"}

            </td>
          
            
        </tr>
    )
}

export default PatientTableRow
