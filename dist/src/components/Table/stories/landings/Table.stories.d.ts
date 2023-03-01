/// <reference types="react" />
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UseTableProps } from '../../types';
import { Item } from './Item';
declare const _default: ComponentMeta<(props: UseTableProps<Item>) => JSX.Element>;
export default _default;
export declare const LandingsDefault: ComponentStory<(props: UseTableProps<Item>) => JSX.Element>;
export declare const LandingsLoading: ComponentStory<(props: UseTableProps<Item>) => JSX.Element>;
export declare const LandingsEmpty: ComponentStory<(props: UseTableProps<Item>) => JSX.Element>;
