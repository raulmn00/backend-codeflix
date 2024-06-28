import { Category } from '../category.entity';

describe('Category Entity Unit Tests', () => {
  test('contructor', () => {
    const category = new Category({ name: 'movie' });
    expect(category.category_id).toBeUndefined();
    expect(category.description).toBeNull();
    expect(category.is_active).toBeTruthy();
    expect(category.name).toBe('movie');
    expect(category.created_at).toBeInstanceOf(Date);
    expect(category).toBeDefined();
  });
});
