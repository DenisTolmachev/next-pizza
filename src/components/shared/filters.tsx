import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можна збирати" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ціна от і до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        defaultValue={0}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={1000}
                        placeholder="1000"
                    />
                </div>
            </div>

            <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />

            <CheckboxFiltersGroup
                title="Інгредієнти"
                className="mt-14"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солоний огірок',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томат',
                        value: '6',
                    },
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солоний огірок',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томат',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солоний огірок',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томат',
                        value: '6',
                    },
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солоний огірок',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томат',
                        value: '6',
                    },
                ]}
            />
        </div>
    );
};
