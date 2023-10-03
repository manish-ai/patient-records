import React, { useEffect, useState } from 'react'
import Styles from "./Table.module.css";
import PatientTableRow from './TableRow';
import useFetch from '../../Utils/useFetch';
import { BASE_URL } from '../../Utils/Constants';
import styled from 'styled-components';
import ReactSlider from 'react-slider'

const StyledSlider = styled(ReactSlider)`
    width: 60%;
    height: 10px;
    margin-top: 14px;
    margin-left:4%;`;

const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    font-size:12px;
    width: 25px;
    text-align: center;
    background-color: #0076cd;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    margin-top:-8px;
`;
const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => (props.index === 2 ? '#e9f6ff' : props.index === 1 ? '#0093ff' : '#e9f6ff')};
    border-radius: 999px;
`;

const PatientTable = () => {
    const [patients, setPatients] = useState([]);
    const [sliderValue, setSliderValue] = useState([50, 75]);
    let {data, loading, error} = useFetch( BASE_URL +"/baseR4/Patient?_pretty=true&_format=json", {})

    const[direction, setDirection] = useState({ price: 'asc' });

   
    useEffect(() => {
        if(data && ( data.entry && data.entry.length)){
            setPatients(data.entry);
        }
    }, [data])

    useEffect(() => {
        if(data && ( data.entry && data.entry.length)){
            let Newpatients = data.entry.filter( item => calculate_age(item.resource.birthDate) >sliderValue [0] && calculate_age(item.resource.birthDate) < sliderValue[1])
            setPatients(Newpatients);
        }
    }, [sliderValue])

    function calculate_age(dob) { 
        if(dob &&new Date(dob)){
        var diff_ms = Date.now() - new Date(dob).getTime();
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
        }
        return 0;
    }

    const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;
    const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

    const sortBy = (key) => {
        console.log(key, direction)
        if( key == "name"){
            direction[key] === "asc" ?   setPatients(patients.sort((a, b) => a.resource.name[0]?.given[0] > b.resource.name[0]?.given[0] && 1 || -1)) : setPatients(patients.sort((a, b) => a.resource.name[0]?.given[0] > b.resource.name[0]?.given[0] &&  -1 || 1));
        }
        else if( key == "age"){
            direction[key] === "asc" ?   setPatients(patients.sort((a, b) => calculate_age(a.resource.birthDate) >calculate_age(b.resource.birthDate) && 1 || -1)) : setPatients(patients.sort((a, b) => calculate_age(a.resource.birthDate) >calculate_age(b.resource.birthDate) &&  -1 || 1));
        }
    setDirection( {[key] : direction[key] == "asc" ? "desc" : "asc"});
    }

 

    return (
       <div>
            <div  className={Styles.sliders}>
            <h3>Filter By Age</h3>
            <StyledSlider defaultValue={[50, 75]} renderTrack={Track} renderThumb={Thumb}  onChange={(value, index) =>setSliderValue(value)}/>;</div>
 <div className={Styles.container}>
            <table className={Styles.tableWrap}>
            <thead className={Styles.tableHead}>            
            <tr className={Styles.tableHeadRow}>
                
                <th className={Styles.tableCellHeadName} >
                Id 
                </th>
                <th className={Styles.tableCellHeadName}  onClick={() => sortBy("name")}>
                Name &nbsp;<img src="https://img.icons8.com/ios-glyphs/14/000000/sort.png"/>
                </th>
                <th className={Styles.tableCellHeadName}  >
                Gender &nbsp;
                </th>
                <th className={Styles.tableCellHead}   onClick={() => sortBy("age")}>
                BirthDate &nbsp;<img src="https://img.icons8.com/ios-glyphs/14/000000/sort.png"/>
                </th>
                <th className={Styles.tableCellHead} >
                Address &nbsp;
                </th>
                <th className={Styles.tableCellHead} >
                Phone &nbsp;
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
               {console.log("patients",patients)}
                {patients && patients.map((rowData, index) => (
                      <PatientTableRow key={rowData.resource.id} data={rowData} index = {index}/>
          ))}
          </>
             }
            </tbody>    
            </table>
            { !patients?.length &&  <div className={Styles.noData}> No patients Found !!</div> }
           
        </div>
        </div>
    )
}

export default PatientTable
