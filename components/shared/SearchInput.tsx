'use client';

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {

    const [focused, setFocused] = useState(false)
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const ref = useRef(null)

    useEffect(() => { Api.products.search(searchQuery) }, [searchQuery])

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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className={cn("absolute w-full bg-white rounded-2xl top-14 py-2 z-30 shadow-md transition-all duration-200 invisible opacity-0",
                    focused && "visible opacity-100 top-12"
                )}>
                    <Link href='/product/1' className="px-3 py-2 hover:bg-primary/10 cursor-pointer flex items-center gap-3">
                        <img src='/assets/pizza1.png' alt='pizza1' className="h-8 w-8"></img>
                        <div >
                            Пицца 1
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}