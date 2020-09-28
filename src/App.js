import React from 'react';
import Radio from './form/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];



function App() {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  })

  const [slide, setSlide] = React.useState(0)

  function handleChange ({target }) {
    setRespostas({...respostas, [target.id]: target.value})
  }

  function handleNext(){
    if(slide < perguntas.length){
      setSlide(slide + 1)
    }
  }

  return (
    <div className="App">
      <form onSubmit={(e)=> e.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio active={slide === index } key={pergunta.id} {...pergunta} onChange={handleChange} value={respostas[pergunta.id]} />
        ))}


      </form>
     <button onClick={handleNext}>Próximo</button>
    </div>
  );
}

export default App;
