export type Role = "User" | "Collaborator" | "Admin";
export type Status = "WaitingForCollaborator" | "OnItsWay" | "Delivered";

export interface IUser {
  email: string;
  password: string;
  name?: string;
  idDocument?: string;
  phoneNumber?: string;
  idCondominium?: string;
  block?: string;
  apartment?: string;
  role: Role;
}

export interface IOrder {
  receivingCode: number;
  status: Status;
}

export interface IUpdateOrder {
  orderId: string;
  roleUser: Status;
}
