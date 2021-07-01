import React, {ReactElement} from "react";
import UnderConstructionImg from "../source/img/UnderConstruction.png"
import {PHONE_NUMBER, PHONE_URL} from "../constants/commonConstants";

const UnderConstruction = (): ReactElement => <div style={{width: '100%', textAlign:'center', backgroundColor:'antiquewhite', minHeight:'80%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <img src={UnderConstructionImg} style={{width:'30%', minWidth:"250px"}}/><br/>
     По всем вопросам вы можете связаться по номеру <br/>
    <a href={PHONE_URL} style={{color: 'black'}}>{PHONE_NUMBER}</a>
</div>


export default UnderConstruction