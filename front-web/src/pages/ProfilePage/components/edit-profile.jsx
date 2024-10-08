import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Icons, Input } from "../../../components";
import { useEditUser } from "../../../hook/use-edit-user";
import { useAuth } from "../../../hook/use-auth";

const resetForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  idDocument: "",
  phoneNumber: "",
  apartment: "",
  block: "",
};

export function EditProfile({ children }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { userData } = useAuth();
  const { fetchEditUser, isLoading } = useEditUser();

  function onSubmit(data) {
    const newUser = {
      ...data,
      role: userData.current.role,
    };

    fetchEditUser(newUser, () => {
      reset(resetForm);
      alert("Informações atualizadas !!!!");
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-initial bg-transparent hover:bg-transparent px-2">
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Atualize suas informações</DialogTitle>
          <DialogDescription>Edite o(a) usuário(a)</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div className="grid gap-1">
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              {...register("name")}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="email"
              placeholder={
                errors.email ? "Esse campo é obrigatório" : "matilde@org.com.br"
              }
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="password"
              placeholder={
                errors.password
                  ? "Esse campo é obrigatório"
                  : "Digite sua senha"
              }
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="confirmPassword"
              placeholder={
                errors.confirmPassword
                  ? "Esse campo é obrigatório"
                  : "Confirme sua senha"
              }
              type="password"
              disabled={isLoading}
              {...register("confirmPassword", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="cpf"
              placeholder="123.456.789-00"
              type="text"
              disabled={isLoading}
              {...register("idDocument")}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="phone"
              placeholder="(00) 12345-6789"
              type="text"
              disabled={isLoading}
              {...register("phoneNumber")}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="apartment"
              placeholder="A1"
              type="text"
              disabled={isLoading}
              {...register("apartment")}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="block"
              placeholder="94"
              type="text"
              disabled={isLoading}
              {...register("block")}
            />
          </div>
          <DialogFooter>
            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Editar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
