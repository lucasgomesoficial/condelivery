import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox, Icons, Button, Input, Label } from "../../../components";
import { useForm, Controller } from "react-hook-form";
import { ROUTER_CONFIG } from "../../../config/constants";
import { useNavigate } from "react-router-dom";
import { useCreatedUser } from "../../../hook/use-created-user";

export function RegisterNewAccount() {
  const navigate = useNavigate();
  const { fetchCreatedUser, isLoading } = useCreatedUser();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const newUser = {
      ...data,
      role: data.role ? "Collaborator" : "User",
    };

    fetchCreatedUser(newUser, () =>
      navigate(ROUTER_CONFIG.LOGIN, { replace: true })
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-white text-secondary hover:bg-white border-2 border-secondary">
          Cadastre-se
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cadastre-se</SheetTitle>
          <SheetDescription>
            Preencha informações do seu perfil aqui. Clique em cadastrar quando
            terminar.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-center">
                Nome Completo
              </Label>
              <Input
                id="name"
                disabled={isLoading}
                className="col-span-3"
                {...register("name", { required: true })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-center">
                E-mail
              </Label>
              <Input
                id="email"
                type="e-mail"
                disabled={isLoading}
                placeholder={
                  errors.email
                    ? "Esse campo é obrigatório"
                    : "matilde@org.com.br"
                }
                {...register("email", { required: true })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-center">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                className="col-span-3"
                disabled={isLoading}
                placeholder={
                  errors.password
                    ? "Esse campo é obrigatório"
                    : "Digite sua senha"
                }
                {...register("password", { required: true })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="confirmPassword" className="text-center">
                Confirmar Senha
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                disabled={isLoading}
                className="col-span-3"
                placeholder={
                  errors.confirmPassword
                    ? "Esse campo é obrigatório"
                    : "Digite sua senha"
                }
                {...register("confirmPassword", { required: true })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                name="role"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <div className="flex items-center">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="role"
                    />
                    <label htmlFor="role" className="ml-2">
                      Sou colaborador
                    </label>
                  </div>
                )}
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button disabled={isLoading} type="submit">
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Cadastrar
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
