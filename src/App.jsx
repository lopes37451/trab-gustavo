import './App.css'

export default function App() {
  return (
    <div className="main">

      {/* Lado esquerdo (imagem estilo Instagram) */}
      <div className="left">
        
      </div>

      {/* Lado direito (login) */}
      <div className="right">
        <div className="container">

          <div className="logo">Instagram</div>

          <input type="text" placeholder="Telefone, nome de usuário ou email" />
          <input type="password" placeholder="Senha" />

          <button>Entrar</button>

          <div className="divider">OU</div>

          <div className="forgot">Esqueceu a senha?</div>

        </div>
      </div>

    </div>
  )
}