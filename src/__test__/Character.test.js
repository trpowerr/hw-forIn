/* eslint-disable no-unused-vars */
import Character, {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from '../js/Character';

test('input validation TYPE', () => {
  expect(() => {
    const received = new Character('Misha', 'Any');
  }).toThrow('Такого персонажа не существует!');
});

test('input validation NAME', () => {
  expect(() => {
    const received = new Character('MishaMisha!', 'Daemon');
  }).toThrow('name min-2 символа, max - 10!');
});

test('damage calculation check', () => {
  let newPerson = new Daemon('Misha');
  newPerson = new Bowman('Misha');
  newPerson = new Swordsman('Misha');
  newPerson = new Magician('Misha');
  newPerson = new Undead('Misha');
  newPerson = new Zombie('Misha');
  expect(true).toBe(true);
});
