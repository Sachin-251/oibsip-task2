import React from 'react';
import LineGradient from '../components/LineGradient';
import {motion} from 'framer-motion';

export default function Accomplishments({setSelectedPage}) {
    const accomplishmentStyle = `md:mx-auto m-1 relative max-w-[400px] h-[500px] flex flex-col justify-end p-6 mt-20 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 rounded-md hover:bg-grey hover:transition hover:duration-1000 border-2 border-dark-grey`;
    return (
        <section className="pt-32 p-16 bg-white" id="accomplishments">
            {/* HEADING */}
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}} className="md:w-1/3 text-center md:text-left">
                <p className="font-playfair font-semibold text-2xl md:text-4xl mb-5 text-red">
                    ACCOMPLISHMENTS
                </p>
                <LineGradient width="mx-auto w-2/4" />
            </motion.div>

            {/* ACCOMPLISHMENTS */}
            <div className="md:flex md:justify-between gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay: 0.2, duration:0.5}} variants={{hidden:{opacity: 0, scale: 0.8}, visible:{opacity: 1, scale: 1}}} className={`bg-white ${accomplishmentStyle}`}>
                
                <img src={require('../assets/accomp3.png')} alt="accomplishment-1" className="w-full h-2/3" />
                
                <p className="text-xl text-center font-bold font-playfair">Pioneer of India's Space and Missile Programs</p>
                <p className="text-justify text-md mt-4">Dr. Kalam played a pivotal role in India's space and missile development programs. He was a key figure in the development of the Satellite Launch Vehicle (SLV), which successfully launched India's first satellite, Rohini, in 1980. He also contributed significantly to the development of the Agni and Prithvi missiles.</p>

            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay: 0.4, duration:0.5}} variants={{hidden:{opacity: 0, scale: 0.8}, visible:{opacity: 1, scale: 1}}} className={`bg-white ${accomplishmentStyle}`}>
                
                <img src={require('../assets/accomp1.png')} alt="accomplishment-1" className="w-full h-2/3" />
                
                <p className="text-xl text-center font-bold font-playfair">Presidency of India</p>
                <p className="text-justify text-md mt-4">In 2002, Dr. Kalam was elected as the 11th President of India, becoming the first scientist to hold this prestigious office. His presidency was marked by his commitment to education, youth development, and his role as the "People's President."</p>

            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay: 0.6, duration:0.5}} variants={{hidden:{opacity: 0, scale: 0.8}, visible:{opacity: 1, scale: 1}}} className={`bg-white ${accomplishmentStyle}`}>
                
                <img src={require('../assets/accomp2.png')} alt="accomplishment-1" className="w-full h-2/3" />
                
                <p className="text-xl text-center font-bold font-playfair">Vision for India's Future</p>
                <p className="text-justify text-md mt-4">Dr. Kalam was a visionary leader who had a deep passion for the youth of India. He often spoke about his vision for a prosperous and developed India by 2020, emphasizing the importance of technology, education, and innovation in achieving this goal.</p>

            </motion.div>
            </div>
        </section>
    )
}
