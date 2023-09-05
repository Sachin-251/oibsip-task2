import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({selectedPage, setSelectedPage}) => {

    const selectedStyles = `relative bg-tomato before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`} href="#home" 
                onClick={() => setSelectedPage('home')} 
            />
             <AnchorLink className={`${selectedPage === 'about' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`} href="#about" 
                onClick={() => setSelectedPage('about')} 
            />
             <AnchorLink className={`${selectedPage === 'accomplishments' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`} href="#accomplishments" 
                onClick={() => setSelectedPage('accomplishments')} 
            />
             <AnchorLink className={`${selectedPage === 'legacy' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`} href="#legacy" 
                onClick={() => setSelectedPage('legacy')} 
            />
        </div>
    )
}

export default DotGroup;