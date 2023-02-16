import Header from "../components/Header";
import { MainContainer } from "../style";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const params = useParams()

  console.log(params.name)

  return (
    <MainContainer>
      <Header />
      <h1>Página acerca do usuário</h1>
    </MainContainer>
  );
}

export default ProfilePage;
