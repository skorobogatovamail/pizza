import { cn } from '@/lib/utils';
import React from 'react'
import { Title } from './Title';
import { FiltersCheckbox } from './FiltersCheckbox';
import { Input } from '../ui/input';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(className)}>
            <Title text='Фильтрация' className='font-bold mb-5'></Title>
            <div className='flex flex-col gap-4'>
                <FiltersCheckbox text='Можно собирать' value='1' />
                <FiltersCheckbox text='Новинки' value='2' />
            </div>

            <div >
                <p className='font-bold mb-3'>'Цена от и до'</p>
                <div className='flex gap-4 mt-5'>
                    <Input type='number' placeholder='0' min={0} max={30000} defaultValue={0}></Input>
                    <Input type='number' placeholder="30000" min={100} max={30000} ></Input>
                </div>
            </div>

        </div>
    )
}