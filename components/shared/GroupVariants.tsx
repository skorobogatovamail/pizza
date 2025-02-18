'use client';

import { cn } from "@/lib/utils";

interface Variant {
    name: string;
    value: number;
    disabled?: boolean;
}

interface Props {
    items: Variant[];
    onClick?: (value: Variant['value']) => void;
    selectedValue?: Variant['value'];
    className?: string;
}

export const GroupVariants: React.FC<Props> = ({ className, items, onClick, selectedValue }) => {
    return (
        <div className={cn('flex justify-between rounded-3xl p-1 bg-[#F3F3F7] select-none', className)}>
            {items.map(el => (
                <button
                    key={el.name}
                    onClick={() => onClick?.(el.value)}
                    className={cn('flex items-center justify-center h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm ',
                        {
                            'bg-white shadow': el.value === selectedValue,
                            'text-gray-500 opacity-50 pointer-events-none': el.disabled,
                        }
                    )}
                >
                    {el.name}
                </button>
            ))}
        </div>
    )
}