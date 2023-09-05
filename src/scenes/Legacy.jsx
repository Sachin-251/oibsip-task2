import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';


export default function Legacy({setSelectedPage}) {
    return (
        <section className="pt-32 pb-16 bg-white" id="legacy">
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity: 0, y: -50}, visible:{opacity: 1, y: 0}}} className="md:w-2/5 mx-auto text-center">
            <div>
                <p className="font-playfair font-semibold text-4xl text-tomato">
                    LEGACY
                </p>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                </div>
            </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay: 0.2, duration:0.5}} variants={{hidden:{opacity: 0, y: -50}, visible:{opacity: 1, y: 0}}} >
            <div className="md:flex md:justify-between md:m-20 my-10 p-6 md:items-center">
                <p className="md:text-6xl text-3xl text-center font-playfair font-bold md:w-1/2 mb-5">Inspiration to Millions</p>
                <p className="md:text-2xl text-xl text-justify font-playfair font-semibold md:w-1/2">Dr. Kalam's life story, rising from humble beginnings to becoming one of the most respected scientists and leaders in the world, continues to inspire millions, especially the youth. His journey is a testament to the power of hard work, determination, and perseverance.</p>
            </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay: 0.4, duration:0.5}} variants={{hidden:{opacity: 0, y: -50}, visible:{opacity: 1, y: 0}}} >
            <div className="md:flex md:justify-between md:m-20 my-10 p-4 md:items-center">
                <p className="order-last md:text-6xl text-3xl text-center font-playfair font-bold md:w-1/2 mb-5">Education and Mentorship</p>
                <p className="md:text-2xl text-xl text-justify font-playfair font-semibold md:w-1/2">He had an unwavering commitment to education and spent a significant part of his post-presidential life interacting with students and young minds. He encouraged them to dream big and work diligently to achieve their goals. His mentorship programs and interactions with students fostered a culture of innovation and learning.</p>
            </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay: 0.6, duration:0.5}} variants={{hidden:{opacity: 0, y: -50}, visible:{opacity: 1, y: 0}}} >
            <div className="md:flex md:justify-between md:m-20 my-10 p-4 md:items-center">
                <p className="md:text-6xl text-3xl text-center font-playfair font-bold md:w-1/2 mb-5">Scientific Advancements</p>
                <p className="md:text-2xl text-xl text-justify font-playfair font-semibold md:w-1/2">As a scientist, Dr. Kalam made significant contributions to India's space and missile programs. His leadership and expertise were instrumental in the successful development and testing of missiles like Agni and Prithvi, as well as India's entry into the elite group of nations with nuclear capabilities.</p>
            </div>
            </motion.div>
        </section>
    )
}
