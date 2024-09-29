import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ImageUpload } from "./imageUpLoad"

const SHEET_SIDES = ["left"]

export function RegisterNewAccount() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="bg-white text-secondary hover:bg-white border-2 border-secondary">
              Cadastre-se
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Cadastre-se</SheetTitle>
              <SheetDescription>
                Preencha informações do seu perfil aqui. Clique em cadastrar quando terminar.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-center">
                  Nome Completo
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-2 items-center text-center">
                <Label className="text-start p-4">
                  Imagem de Perfil
                </Label>
                <ImageUpload />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-center">
                  E-mail
                </Label>
                <Input id="email" type="e-mail" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-center">
                  Senha
                </Label>
                <Input id="password" type="password" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confimerdPassword" className="text-center">
                  Confirmar Senha
                </Label>
                <Input id="confimerdPassword" type="password" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Cadastrar</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}