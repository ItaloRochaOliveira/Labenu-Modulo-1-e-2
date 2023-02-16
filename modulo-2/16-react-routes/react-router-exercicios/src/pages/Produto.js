import HomePage from "./HomePage";
import { useParams } from "react-router-dom";

function ProdutoPage() {
    const params = useParams()
  return (
    <section>
      <h1>Produto... {params.id}</h1>
      <HomePage />
    </section>
  );
}

export default ProdutoPage;
