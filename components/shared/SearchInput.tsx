import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    return <div className={cn('', className)}>
        <div className="flex rounded-2xl justify-between flex-1 relative h-11">
            <Search className="text-gray-400" />
        </div>
    </div>
}