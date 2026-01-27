export type FilterStatus = 'all' | 'completed' | 'incomplete';

export interface FilterProps {
    filter: FilterStatus;
    setFilter: React.Dispatch<React.SetStateAction<FilterStatus>>;
}
