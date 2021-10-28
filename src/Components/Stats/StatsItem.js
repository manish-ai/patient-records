import React from 'react'
import Styles from "./Stats.module.css";
const StatsItem = ({title, value}) => {
    return (
        <div className={Styles.statsItemWrap}>
             <div className={Styles.statsTitle}>{ title }
                </div>
                <div className={Styles.statsValue}>
                { value }
                </div>
            
        </div>
    )
}

export default StatsItem
