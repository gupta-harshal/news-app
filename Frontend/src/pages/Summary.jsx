import { useRecoilValue } from "recoil";
import { summaryState } from "../atoms/summaryAtom";
import { Navbar } from "../components/navbar";

export default function Summary() {
    const summary = useRecoilValue(summaryState);

    return (
        <div>
            <Navbar />
            <div className="flex w-full h-[10%] shadow-md text-2xl justify-center items-center">
                Summary
            </div>
            <div className="flex flex-col space-y-4 px-4 py-6">
                <p className="text-lg text-gray-800">{summary}</p>
            </div>
        </div>
    );
}
