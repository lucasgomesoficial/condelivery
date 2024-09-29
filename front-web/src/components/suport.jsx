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
import { HeadphonesIcon } from "lucide-react";
import { Chatbot } from "./chatbot";

export function Suport() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-initial bg-transparent hover:bg-transparent px-2">
          <HeadphonesIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
            <DialogTitle>Suporte</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Chatbot />
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}