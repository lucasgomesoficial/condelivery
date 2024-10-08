import { AdminTemplate } from "../../../templates/admin";
import { DeliveryCollaborator } from "../../../templates/delevery-collaborator";
import { Delivery } from "../../../templates/delevery-user";

export function renderWithRole(role) {
  const components = {
    User: <Delivery />,
    Collaborator: <DeliveryCollaborator />,
    Admin: <AdminTemplate />,
  };

  return components[role];
}
