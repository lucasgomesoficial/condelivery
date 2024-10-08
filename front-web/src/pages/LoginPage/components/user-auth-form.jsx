import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Icons, Input, Label } from "../../../components/index";
import { useAuth } from "../../../hook/use-auth";
import { RegisterNewAccount } from "./registerNewAccount";
import { ROUTER_CONFIG } from "../../../config/constants";

export function UserAuthForm({ className, ...props }) {
  const { signin, isLoading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ email, password }) {
    signin({ email, password }, () => {
      navigate(ROUTER_CONFIG.DASHBOARD, { replace: true });
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
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
            <Label className="sr-only" htmlFor="password">
              password
            </Label>
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
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Entrar
          </Button>
          <h2 className="text-center mt-4 mb-4">Não possui uma conta?</h2>
          <RegisterNewAccount />
        </div>
      </form>
    </div>
  );
}
