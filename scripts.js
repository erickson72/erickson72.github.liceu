function abrirPortal(portal) {
  switch (portal) {
    case "aluno":
      alert("Redirecionando para o Portal do Aluno...");

      document
        .getElementById("login-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const matricula = document.getElementById("matricula").value;
          const senha = document.getElementById("senha").value;

          if (matricula === "12345" && senha === "senha123") {
            alert("Login bem-sucedido!");
            window.location.href = "dashboard-aluno.html"; // Redireciona para o dashboard
          } else {
            alert("Matrícula ou senha incorreta!");
          }
        });
      window.location.href = "portal-aluno.html";
      break;
    case "professor":
      alert("Redirecionando para o Portal do Professor...");
      window.location.href = "portal-professor.html";
      break;
    case "admin":
      alert("Redirecionando para o Portal Administrativo...");
      window.location.href = "portal-admin.html";
      break;
    default:
      alert("Portal não encontrado.");
  }
}
