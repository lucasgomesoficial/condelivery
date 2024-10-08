export function formattedRole(role) {
  const formatRole = {
    User: "Morador(a)",
    Collaborator: "Colaborador(a)",
    Admin: "Administrador(a)",
  };

  return formatRole[role];
}
