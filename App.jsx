// Saudacao.js ou no mesmo arquivo
function Saudacao() {
  return <p>Bem-vindo!</p>;
}

// App.js
function App() {
  let nomeUsuario = "Joseph Joestar";

  return (
    <div className="container">
      <h1>My first React App</h1>
      <p>Meu primeiro componente React.</p>
      <p>Usuário: {nomeUsuario}</p>
      <h2>Yes I like JS</h2>

      <ul>
        <li>Is that a jojo reference???!!!</li>
        <li>Teste1</li>
        <li>Lady Gaga</li>
      </ul>
      
      <Saudacao />
      <div className="container"></div>
    </div>
  );
}
