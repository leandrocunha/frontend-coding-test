import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Filter } from './Filter';

describe('Filter', () => {
    it('should render the filter with all options', () => {
        const mockSetFilter = vi.fn();
        
        render(<Filter filter="all" setFilter={mockSetFilter} />);

        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'All' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Completed' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Incomplete' })).toBeInTheDocument();
    });
});
