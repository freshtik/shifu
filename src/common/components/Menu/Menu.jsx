import React, { useEffect, ReactDOM } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import MenuFull from "./Components/MenuFull/MenuFull";
import Hamburger from "./Components/Hamburger/Hamnburger"

import isPhone from "../../scripts/checkIsPhone";


const Menu = () => {

    console.log(isPhone());
    return (
        isPhone()
            ? < Hamburger />
            : <MenuFull />
    )
}

export default Menu;