import React, { useContext, useState} from "react";
import { Button } from "./components/Button";
import { Game } from "./components/Game";
import "./App.less";
import { NumerosContext } from "./Context/pontContext";




export const App = () => {
  const {pontuacao, movimentos} = useContext(NumerosContext);
  const [date, setDate] = useState<Date>(new Date());
  const handleRestart = () => {
    setDate(new Date());
  };
  
  
  
  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>2048</h1>
          <div>
            
          </div>
        </div>
        <div>
          <Button onClick={handleRestart}>Novo Jogo</Button>
        </div>
      </div>
      <Game key={date.toISOString()} />
      <div className="footer">
      <div className="score">Pontuação atual:</div>
      
      
      
      
      <div className="moves">Movimentos:</div><br></br>
      <div className="moves">{movimentos}</div>
      <div className='score'>{pontuacao}</div>
      <br></br>

      <div className="bestscore">Melhor Pontuação:</div>
      <div className="bestscore">00</div>
      <div>
      <p>
          <h2><b>Como jogar:</b></h2>
          Use as <b>setas do teclado</b> para mover os blocos.  Quando dois blocos do mesmo número encostam, eles se somam!
        </p>
      </div>

      
    </div>
    </div>
  );
  
};
/* eslint-enable react/jsx-no-target-blank */
