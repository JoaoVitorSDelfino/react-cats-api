import { useNavigate } from "react-router-dom"

function MainMenu() {
    const navigate = useNavigate()

    const redirect = (route) => {
        if (route === 0) {
            navigate("/createCat")
        } else if (route === 1) {
            navigate("/findCat")
        }
    }

    return (
      <div className="background" style={{ textAlign: "center", marginTop: "50px" }}>
        <h2> Cats </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(0)} style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Criar novo gato
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(1)} style={{ padding: "10px 15px", backgroundColor: "#17A2B8", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Buscar gatos
            </button>
          </li>
        </ul>
      </div>
    );
}

export default MainMenu