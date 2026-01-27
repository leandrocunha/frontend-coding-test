import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

vi.mock('./components/Header/Header.tsx', () => ({
    Header: () => <header data-testid="header">Header Mock</header>
}));

vi.mock('./components/Filter/Filter.tsx', () => ({
    Filter: () => <div data-testid="filter">Filter Mock</div>
}));

vi.mock('./components/Table/Table.tsx', () => ({
    Table: () => <div data-testid="table">Table Mock</div>
}));

vi.mock('./components/Form/Form.tsx', () => ({
    Form: () => <form data-testid="form">Form Mock</form>
}));

describe('App', () => {
    it('should render the app', () => {
        render(<App />);

        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('table')).toBeInTheDocument();
        expect(screen.getByTestId('form')).toBeInTheDocument();
    });
});
