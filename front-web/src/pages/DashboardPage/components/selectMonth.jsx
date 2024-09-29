import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export function SelectMonth({months}) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione o mês" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Meses</SelectLabel>
          {months.map(({ value, text }) => {
            return <SelectItem className="cursor-pointer" key={value} value={value}>{text}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
