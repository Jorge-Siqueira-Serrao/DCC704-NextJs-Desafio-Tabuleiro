import LinhaTabuleiro from "../components/LinhaTabuleiro/LinhaTabuleiro";

export default function Home() {

  const linesArray = [0, 1, 2, 3, 4, 5, 6, 7];

  function renderTable(index){
    return(
      <LinhaTabuleiro key={index} lineValue={index}/>
    )
  }

  return (
    <div className="board">
      {linesArray.map(renderTable)}
    </div>
  )
}
