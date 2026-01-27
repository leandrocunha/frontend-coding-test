import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Form } from './Form';

describe('Form', () => {
    it('should render the form with all elements', () => {
        const mockHandleOnSubmit = vi.fn();
        const mockSetTaskTitle = vi.fn();

        render(
            <Form
                handleOnSubmit={mockHandleOnSubmit}
                taskTitle=""
                setTaskTitle={mockSetTaskTitle}
            />
        );

        expect(screen.getByPlaceholderText('Task Title')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'High' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Medium' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Low' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add Task' })).toBeInTheDocument();
    });
});
