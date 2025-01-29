import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    return <div className={cn('', className)}>
        <div className="flex rounded-2xl justify-between flex-1 relative h-11">
            <Search className="text-gray-400 absolute left-3 top-1/2 translate-y-[-50%] h-5" />
            <input className="rounded-2xl outline-none w-full bg-gray-100 pl-11" type="text" placeholder="Найди свою пиццу" />
        </div>
    </div>
}