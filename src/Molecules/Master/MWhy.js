import React, { useContext, useState } from "react";
import { Context } from "../../Api";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Why from "../../Atoms/Why";

const MWhy = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
             <Why data={props.title} id="why"/>
        </>
    )
}
export default MWhy;

