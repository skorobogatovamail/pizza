import { cn } from '@/lib/utils';
import React from 'react'
import { Checkbox } from '../ui/checkbox';

interface Props {
    className?: string;
    text: string;
    value: string;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FiltersCheckbox: React.FC<Props> = ({ className, text, value, onCheckedChange, checked }) => {
    return <div className={cn('flex', 'items-center', className)}>
        <Checkbox
            value={value}
            onCheckedChange={onCheckedChange}
            checked={checked}
            id={`checkbox-${String(value)}`}
            className='rounded-[8px] h-6 w-6' />
        <label htmlFor={`checkbox-${String(value)}`} className='ml-2 leading-none cursor-pointer'>{text}</label>
    </div>
}