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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings } from "lucide-react";
import { useData } from "../hook/use-data";
import { useState } from "react";

export function Preferences() {
  const { services } = useData();

  const [ifood, setIfood] = useState(services.current.ifood);
  const [rappi, setRappi] = useState(services.current.rappi);
  const [ze, setZe] = useState(services.current.zeDelivery);
  const [food, setFood] = useState(services.current.foodToSave);

  function changeIfood() {
    setIfood(!ifood);
    services.current.ifood = !ifood;
  }
  function changeRappi() {
    setRappi(!rappi);
    services.current.rappi = !rappi;
  }
  function changeZe() {
    setZe(!ze);
    services.current.zeDelivery = !ze;
  }
  function changeFood() {
    setFood(!food);
    services.current.foodToSave = !food;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-initial bg-transparent hover:bg-transparent px-2">
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Gerenciar preferências</DialogTitle>
          <DialogDescription>Permitir aplicativos</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
            <Switch checked={ifood} onCheckedChange={changeIfood} id="ifood" />
            <Label htmlFor="ifood" className="text-right">
              Ifood
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch checked={rappi} onCheckedChange={changeRappi} id="rappi" />
            <Label htmlFor="rappi" className="text-right">
              Rappi
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch checked={ze} onCheckedChange={changeZe} id="zedelivery" />
            <Label htmlFor="zedelivery" className="text-right">
              Zé Delivery
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={food}
              onCheckedChange={changeFood}
              id="foodtosave"
            />
            <Label htmlFor="foodtosave" className="text-right">
              Food to Save
            </Label>
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
