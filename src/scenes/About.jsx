import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';



export default function About({setSelectedPage}) {

    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    return (
        <section className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 bg-white" id="about">
            {/* IMAGE SECTION */}
            <div className="flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreen ? (
                    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden:{opacity:0, x:-50}, visible:{opacity:1, x:0}}}>
                        <img src={require('../assets/about.png')} alt="header" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
                    </motion.div>
                ) : (
                    <img src={require('../assets/about.png')} alt="header" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
                )}
            </div>

            {/* MAIN SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32 md:mb-10">
                {/* Headings */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}} className="flex justify-center w-full">
                    <div>
                        <p className="font-playfair font-semibold text-4xl text-tomato">
                            ABOUT
                        </p>
                        <div className="flex md:justify-end my-1">
                        <LineGradient width="w-24" />
                        </div>
                    </div>
                </motion.div>

                {/* ABOUT */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}} className="p-2">
                    <p className="text-md font-opensans text-deep-blue text-justify md:mr-10 mt-6 font-semibold">
                        Dr. Avul Pakir Jainulabdeen Abdul Kalam, affectionately known as the "People's President" and the "Missile Man of India," was a multifaceted luminary whose life's work continues to inspire generations. Born on October 15, 1931, in the modest town of Rameswaram, India, he emerged from humble beginnings to become an iconic figure on the global stage.
                    </p>

                    <p className="text-md font-opensans text-deep-blue text-justify md:mr-10 mt-6 font-semibold">
                        Dr. Kalam's journey began as a scientist at the Indian Space Research Organisation (ISRO) and later at the Defence Research and Development Organisation (DRDO). His relentless pursuit of excellence played a pivotal role in propelling India into the elite league of nations with indigenous satellite and missile technology.
                    </p>

                    <p className="text-md font-opensans text-deep-blue text-justify md:mr-10 mt-6 font-semibold">
                        Dr. Kalam's tenure as the 11th President of India (2002-2007) marked an era of humility, accessibility, and inspiration in the highest office of the land. He tirelessly advocated for education, technological innovation, and the welfare of India's youth, earning the admiration and affection of people from all walks of life.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
