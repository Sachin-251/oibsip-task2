import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import React from 'react'

export default function LandingPage({setSelectedPage}) {

    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <section className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10" id="home">
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreen ? (
                    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden:{opacity:0, x:-50}, visible:{opacity:1, x:0}}}>
                        <img src={require('../assets/header.png')} alt="header" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
                    </motion.div>
                ) : (
                    <img src={require('../assets/header.png')} alt="header" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
                )}
            </div>

            {/* MAIN SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden:{opacity:0, x:-50}, visible:{opacity:1, x:0}}} className="md:ml-32">
                <p className="text-4xl font-playfair md:text-start text-start text-deep-blue font-bold">
                    &#8220;
                </p>
                <p className="text-4xl font-playfair md:text-center text-center text-deep-blue font-bold">
                    <i>Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.</i>
                </p>
                <p className="text-4xl font-playfair md:text-right text-right text-deep-blue font-bold">
                    &#8221;
                </p>
            </motion.div>
            </div>
        </section>
    )
}
