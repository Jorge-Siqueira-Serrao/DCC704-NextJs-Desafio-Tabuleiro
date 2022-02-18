import CasaTabuleiro from "../CasaTabuleiro/CasaTabuleiro";

export default function LinhaTabuleiro({lineValue}){

    const colorSet1 = ["#fff", "#000", "#fff", "#000", "#fff", "#000", "#fff", "#000"];
    const colorSet2 = ["#000", "#fff", "#000", "#fff", "#000", "#fff", "#000", "#fff"];

    let keyValue = lineValue*8;

    function renderLine(Color, index){
        index += keyValue;

        return(
            <CasaTabuleiro key={index} color={Color}/>
        )
    }

    return(
        <div style={{display: "flex"}}>
            {lineValue%2===0?
                colorSet1.map(renderLine)
                :
                colorSet2.map(renderLine)
            }
        </div>
    );
}