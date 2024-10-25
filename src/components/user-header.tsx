import { Card, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  username?: string;
}

const UserHeader = ({ username = "John" }: Props) => (
  <Card className="bg-blue-600 text-white rounded-none h-[123px]">
    <CardHeader className="flex flex-row items-center gap-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src="/api/placeholder/40/40" alt="User" />
        <AvatarFallback>{username.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start">
        <h2 className="text-xl text-left font-semibold">Hello, {username}</h2>
        <p className="text-blue-100 text-left italic">
          What are your plans for today?
        </p>
      </div>
    </CardHeader>
  </Card>
);

export default UserHeader;
