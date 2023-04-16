import React from "react";
import style from "./style.module.css";

const Text = ()=> {
    return (
        <div className={style.text}>
            <h1>The Next Generation of Legal Research</h1>
            <p>
                Optimise your litigation strategies, discover hidden
                trends, reduce costs and find the strongest authorities
                for your case using data-driven insights and
                visualisations.
            </p>
        </div>
    )
}

export default Text;