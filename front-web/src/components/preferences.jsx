import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Settings } from "lucide-react";

export function Preferences() {
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
          <DialogDescription>
            Permitir aplicativos
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
            <Switch id="ifood"/>
            <Label htmlFor="ifood" className="text-right">
              Ifood
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="rappi" />
            <Label htmlFor="rappi" className="text-right">
              Rappi
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="zedelivery" />
            <Label htmlFor="zedelivery" className="text-right">
              Zé Delivery
            </Label>
          </div><div className="flex items-center space-x-2">
            <Switch id="foodtosave" />
            <Label htmlFor="foodtosave" className="text-right">
              Food to Save
            </Label>
          </div>
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

