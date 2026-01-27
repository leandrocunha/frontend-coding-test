import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('#root', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
});

globalStyle('body', {
  backgroundColor: '#f9fafb',
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '2rem',
});

globalStyle(`${table} th, ${table} td`, {
  border: '1px solid #d1d5db',
  padding: '0.75rem',
  textAlign: 'left',
});

globalStyle(`${table} th`, {
  backgroundColor: '#f3f4f6',
});

export const taskTitleColumn = style({
  width: '30%',
});

export const completedColumn = style({
  width: '25%',
});

export const priorityHigh = style({
  boxShadow: 'inset 4px 0 0 #dc2626',
});

export const priorityMedium = style({
  boxShadow: 'inset 4px 0 0 #ca8a04',
});

export const priorityLow = style({
  boxShadow: 'inset 4px 0 0 #16a34a',
});

export const taskCompleted = style({
  color: '#6b7280',
  textDecoration: 'line-through',
});

