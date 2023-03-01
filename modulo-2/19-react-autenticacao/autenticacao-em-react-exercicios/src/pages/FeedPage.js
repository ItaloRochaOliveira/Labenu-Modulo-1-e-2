import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectPage } from "../hook/useProtectPage";
import { goToLogin } from "../routes/coordinator";

function FeedPage() {
  useProtectPage()
  return (
    <main>
      <h1>Página de Feed</h1>
    </main>
  );
}

export default FeedPage;