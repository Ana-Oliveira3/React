import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 10;
  const redTitle = false;

  return (
      <div className="App">

        {/* CSS global fica no index.css */}
        <h1>CSS no React</h1>

      <MyComponent/>
      
      {/* CSS Inline - Na linha */}
      <p style={{ color: 'blue', padding: "25px", borderTop: "2px solid black" }}>Este parágrafo foi estilizado com CSS inline!</p>

      {/* CSS inline dinâmico */}
      {/* Operador Ternário --> condição ? Valor verdadeiro : Valor falso */}
      <h2 style={ n > 10 ? { color: "green" } : { color: "red" }}>Css Dinâmico</h2>
      
      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Usando Classes Dinâmicas no CSS externo</h2>

      <Title/>

      </div>

      
  )
}

export default App
