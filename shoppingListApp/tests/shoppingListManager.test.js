const { addItem, removeItem, getItems, clearList } = require('../src/shoppingListManager');

beforeEach(() => {
    clearList();
});

test('addItem should add a valid item to the list', () => {
    expect(addItem('Apples')).toBe(true);
    expect(getItems()).toContain('Apples');
});

test('addItem should reject invalid items', () => {
    expect(addItem('')).toBe(false);
    expect(addItem(123)).toBe(false);
    expect(addItem({})).toBe(false);
    expect(getItems()).toEqual([]);
});

test('addItem should trim whitespace from item', () => {
    addItem(' Bananas ');
    expect(getItems()).toContain('Bananas');
});

test('removeItem should remove an item by index', () => {
    addItem('Eggs');
    expect(removeItem(0)).toBe(true);
    expect(getItems()).not.toContain('Eggs');
});

test('removeItem should not remove an item with an invalid index', () => {
    addItem('Milk');
    expect(removeItem(-1)).toBe(false);
    expect(removeItem(5)).toBe(false);
    expect(getItems()).toContain('Milk');
});

test('getItems should return the correct list of items', () => {
    addItem('Bread');
    addItem('Butter');
    expect(getItems()).toEqual(['Bread', 'Butter']);
});

test('clearList should empty the list', () => {
    addItem('Juice');
    clearList();
    expect(getItems()).toEqual([]);
});