import ChibiGoku from "../assets/chibigok.webp";

export default function Introduction(){
    return(
        <div className="introduction">
            <img className="chibiGoku" src={ChibiGoku} alt="Chibi Goku Dancing"/>
            <h2 className="title" >Welcome to Gercel's Portfolio</h2>
            <p className="desc" >A Computer Science student who's willing to expand his potential (if he has any.)</p>

        </div>
    );
}