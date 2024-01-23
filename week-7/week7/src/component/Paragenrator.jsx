import { useState } from "react"
export default function Paragenrator (){
    const [input, setInput] = useState()
    const [para, setPara] = useState(ALL_WORDS)
    return <div>
        <Generator input={input} setInput={setInput} setPara={setPara}></Generator>
        <Paragraph para={para}/>
    </div>
}

const ALL_WORDS = [];
const Para = ({ input, setPara }) => {
    const words = ['hello', 'how', 'are', 'you'];

    const generateParagraph = () => {
        const TOTAL_LINES = input;
        const newPara = [];

        for (let i = 0; i < TOTAL_LINES; i++) {
            let sentence = "";
            for (let j = 0; j < words.length; j++) {
                sentence += words[Math.floor(words.length * Math.random())];
                sentence += " ";
            }
            newPara.push(sentence);
        }

        setPara(newPara);
    };

    // Call the function to generate the initial paragraph
    generateParagraph();
};

const Paragraph = ({para})=>{
    return <div>
        {para}
        </div>
}
const Generator = ({input, setInput, setPara})=>{
    const handleParaGeneration = () => {
        // Call Para function with the desired parameters
        Para({ input, setPara });
    };

    return <div>
        <h3>Para Generator</h3>
        <input placeholder="Enter Number of Words"
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}>
        </input>
        <button onClick={handleParaGeneration}>Generate</button>
    </div>
}