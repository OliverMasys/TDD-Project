const shoppingList = [];

function addItem(item) {
    if (typeof item === 'string' && item.trim()) {
        shoppingList.push(item.trim());
        return true;
    }
    return false;
}

function removeItem(index) {
    if (index >= 0 && index < shoppingList.length) {
        shoppingList.splice(index,1);
        return true;
    }
    return false;
}

function getItems() {
    return shoppingList;
}

function clearList() {
    shoppingList.length = 0;
    return true;
}

module.exports = { addItem, removeItem, getItems, clearList };