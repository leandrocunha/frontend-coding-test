import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
    it('should render the header with title', () => {
        render(<Header />);

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Task Manager Dashboard' })).toBeInTheDocument();
    });
});
