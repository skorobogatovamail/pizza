import { cn } from '@/lib/utils';
import React from 'react'
import { Title } from './Title';
import { FiltersCheckbox } from './FiltersCheckbox';

interface Props {
    className? : string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return <div className={cn(className)}>
        <Title text='Фильтрация' className='font-bold mb-5'></Title>
        <div className='flex flex-col gap-4'>
        <FiltersCheckbox text='Можно собирать' value='1'/>
        <FiltersCheckbox text='Новинки' value='2'/>
        </div>
       

    </div>
}