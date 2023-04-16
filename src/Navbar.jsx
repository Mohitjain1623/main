import React from "react";
import style from "./style.module.css";

const Navbar = ()=>{
    return(
        <>
            <div>
            <div className={style.nav}>
                {/* <a href="#"> */}
                    <div style={{height:"auto", width: "auto", verticalAlign:"middle", display:"inline-block"}}>
                        <span style={{lineHeight: "40px", fontSize: "1em", fontWeight:"400",color:"white"}}>
                            <h1 style={{verticalAlign:"middle",backgroundColor:"#366ad0"}}>LegalInfo<sup style={{backgroundColor:"#366ad0"}}></sup></h1>
                        </span>
                    </div>
                {/* </a> */}
            </div>
            </div>
        </>
    )
}

export default Navbar;