import { Line, LineChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function CardGraphInfo({ title, description, dataGraph, dataFeelings }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {dataGraph && (
          <LineChart width={400} height={270} data={dataGraph} className="mt-4">
            <Line type="monotone" dataKey="uv" stroke="hsl(24.6 95% 53.1%)" />
          </LineChart>
        )}
        {dataFeelings &&
          dataFeelings.map(({ title, value }) => {
            return (
              <div className="flex items-center gap-2" key={title}>
                <div className="w-24">
                  <p>{title}</p>
                </div>
                <Progress value={value} className="w-[65%]" />
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
}
