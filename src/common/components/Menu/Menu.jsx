import React, { useEffect, ReactDOM } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import MenuFull from "./Components/MenuFull/MenuFull";
import Hamburger from "./Components/Hamburger/Hamnburger"

import isPhone from "../../scripts/checkIsPhone";


const Menu = () => {

    const tt = true

    console.log(isPhone());
    return (
        isPhone()
            // tt
            ? < Hamburger />
            : <MenuFull />
    )
}

export default Menu;