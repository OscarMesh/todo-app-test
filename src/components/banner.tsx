import { Card, CardContent } from "@/components/ui/card";

const Banner = () => (
  <Card className="bg-[#c3e92b] rounded-none">
    <CardContent className="flex items-center justify-between p-8 relative">
      <div className="flex items-center gap-2">
        <img src="/public/trophy.svg" />
        <span className="font-semibold">Go Pro Upgrade Now</span>
      </div>
      <span className="font-bold p-3 bg-black text-white absolute right-2 -top-1">
        $1
      </span>
    </CardContent>
  </Card>
);

export default Banner;
