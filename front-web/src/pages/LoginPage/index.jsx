import { UserAuthForm } from "./components/user-auth-form";
import logo from "./../../assets/logo.png"

export function Login() {
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo(a)
            </h1>
          </div>
          <UserAuthForm />
        </div>
      </div>
      <div className="container relative hidden h-screen flex-col items-center justify-center p-14 bg-gray-100 dark:border-r lg:flex">
        <div className="flex flex-col items-center ">
          <img src={logo} alt="logo ConDelivery"/>
        </div>
      </div>
    </div>
  );
}
