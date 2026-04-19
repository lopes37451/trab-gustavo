import "./App.css";

export default function App() {
  return (
    <div className="main">
      <div className="left"></div>

      <div className="right">
        <div className="container">
          <div className="logo">Instagram</div>
          <p className="subtitle">Entre para continuar</p>

          <form className="form">
            <input type="text" placeholder="Telefone, nome de usuário ou email" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
          </form>

          <div className="divider">OU</div>
          <div className="forgot">Esqueceu a senha?</div>
        </div>
      </div>
    </div>
  );
}
