'use client';

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {

    const [focused, setFocused] = useState(false)
    const ref = useRef(null)

    useClickAway(ref, () => {
        setFocused(false)
    })

    return (
        <>
            {focused && <div className="fixed top-0 left-0  bottom-0 right-0 bg-black/50 z-30 "></div>}
            <div ref={ref} className="flex rounded-2xl justify-between flex-1 relative h-11">
                <Search className="text-gray-400 absolute left-3 top-1/2 translate-y-[-50%] h-5" />
                <input className="rounded-2xl outline-none w-full bg-gray-100 pl-11 z-30"
                    type="text"
                    placeholder="Найди свою пиццу"
                    onFocus={() => setFocused(true)}
                />
            </div>

            <div className="">
                <Link>
                    <span></span>
                </Link>
            </div>
        </>
    )
}