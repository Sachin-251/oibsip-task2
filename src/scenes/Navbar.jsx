import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import React from 'react';

const Link =({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();

    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-tomato" : ""} hover:text-tomato transition duration-500`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
}

export default function Navbar({isTopOfPage, selectedPage, setSelectedPage}) {

    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-black";
    const navbarText = isTopOfPage ? "text-deep-blue" : "text-white";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className={`font-playfair text-3xl font-bold ${navbarText}`}>PEOPLE'S PRESIDENT</h4>

                {/* DESKTOP MENU */}
                {isAboveSmallScreens ? (
                    <div className={`flex justify-between gap-16 font-opensans text-sm font-semibold ${navbarText}`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Accomplishments" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Legacy" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                ) : (
                    <button className="rounded-full bg-black p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img src={require('../assets/menu-icon2.png')} alt="menu-icon" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 top-0 h-full bg-black w-[300px]">

                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)} >
                                <img src={require('../assets/close-icon2.png')} alt="close-icon" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[27%] text-2xl font-bold opacity-90 text-white">
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Accomplishments" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Legacy" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

