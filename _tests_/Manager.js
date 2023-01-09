const Manager = require('../lib/Manager.js');

const testObject = {name: 'Jeffrey', id: 1, email: "123@co.com", officeNumber: "123"}

test('Checks for inherited Employee properties', () => {
    const manager = new Manager(testObject);
    expect(manager.name).toEqual(expect.any(String));
    console.log(`Manager name: ${manager.name}`)
    expect(manager.id).toEqual(expect.any(Number));
    console.log(`Manager id: ${manager.id}`)
    expect(manager.email).toEqual(expect.any(String));
    console.log(`Manager email: ${manager.email}`)
});

test('Checks for office number', () => {
    const manager = new Manager(testObject);
    expect(manager.officeNumber).toEqual(expect.any(String));
    console.log(`Manager office number: ${manager.officeNumber}`)
});

test('Gets Manager role', () => {
    const manager = new Manager(testObject);
    expect(manager.getRole()).toBe('Manager');
    console.log(`Manager getRole(): ${manager.getRole()}`)
});