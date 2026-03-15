import FirstAnimation from "@/components/Day-01/FirstAnimation";
import SecondAnimation from "@/components/Day-02/SecondAnimation";
import CardAnimation from "@/components/Day-03/CardAnimation";

export default function Playground(){
    return <div className="min-w-full min-h-full  flex flex-col gap-10 items-center flex-wrap">
        <FirstAnimation/>
        <br />
        <SecondAnimation/>
        <br />
        <CardAnimation/>
    </div>
}