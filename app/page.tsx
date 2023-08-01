import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat Do Amadeu</CardTitle>
          <CardDescription>
            Using vercel ai sdk to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>LA</AvatarFallback>
              <AvatarImage src="https://github.com/Amad3eu.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Humano: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              dolore voluptates ipsam delectus enim, perspiciatis eligendi fuga
              ipsum asperiores exercitationem nemo aspernatur quidem inventore!
              Ea ex dolores eos officiis dicta!
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src="https://github.com/aupigit.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">IA: </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              dolore voluptates ipsam delectus enim, perspiciatis eligendi fuga
              ipsum asperiores exercitationem nemo aspernatur quidem inventore!
              Ea ex dolores eos officiis dicta!
            </p>
          </div>{" "}
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
