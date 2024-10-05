export type Role = "User" | "Collaborator" | "Admin";
export type Status = "WaitingForCollaborator" | "OnItsWay" | "Delivered";

export type OrderUser = {
  id: string | undefined;
  receivingCode: number | null | undefined;
  status: Status | undefined;
  created_at: Date | null | undefined;
  updated_at: Date | null | undefined;
};

export type OrderCollaborator = OrderUser & {
  resident: string | null | undefined;
  block: string | null | undefined;
  apartment: string | null | undefined;
};

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
