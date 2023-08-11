import { Allergies } from './allergies';
describe('Allergies', () => {
  describe('testing for eggs allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.isAllergicTo('eggs')).toEqual(false);
    });
    test('allergic only to eggs', () => {
      const allergies = new Allergies(1);
      expect(allergies.isAllergicTo('eggs')).toEqual(true);
    });
    test('allergic to eggs and something else', () => {
      const allergies = new Allergies(3);
      expect(allergies.isAllergicTo('eggs')).toEqual(true);
    });
    test('allergic to something, but not eggs', () => {
      const allergies = new Allergies(2);
      expect(allergies.isAllergicTo('eggs')).toEqual(false);
    });
    test('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.isAllergicTo('eggs')).toEqual(true);
    });
  });
  describe('testing for peanuts allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.isAllergicTo('peanuts')).toEqual(false);
    });
    test('allergic only to peanuts', () => {
      const allergies = new Allergies(2);
      expect(allergies.isAllergicTo('peanuts')).toEqual(true);
    });
    test('allergic to peanuts and something else', () => {
      const allergies = new Allergies(7);
      expect(allergies.isAllergicTo('peanuts')).toEqual(true);
    });
    test('allergic to something, but not peanuts', () => {
      const allergies = new Allergies(5);
      expect(allergies.isAllergicTo('peanuts')).toEqual(false);
    });
    test('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.isAllergicTo('peanuts')).toEqual(true);
    });
  });
  describe('testing for shellfish allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.isAllergicTo('shellfish')).toEqual(false);
    });
    test('allergic only to shellfish', () => {
      const allergies = new Allergies(4);
      expect(allergies.isAllergicTo('shellfish')).toEqual(true);
    });
    test('allergic to shellfish and something else', () => {
      const allergies = new Allergies(14);
      expect(allergies.isAllergicTo('shellfish')).toEqual(true);
    });
    test('allergic to something, but not shellfish', () => {
      const allergies = new Allergies(10);
      expect(allergies.isAllergicTo('shellfish')).toEqual(false);
    });
    test('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.isAllergicTo('shellfish')).toEqual(true);
    });
  });
  describe('testing for strawberries allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.isAllergicTo('strawberries')).toEqual(false);
    });
    test('allergic only to strawberries', () => {
      const allergies = new Allergies(8);
      expect(allergies.isAllergicTo('strawberries')).toEqual(true);
    });
    test('allergic to strawberries and something else', () => {
      const allergies = new Allergies(28);
      expect(allergies.isAllergicTo('strawberries')).toEqual(true);
    });
    test('allergic to something, but not strawberries', () => {
      const allergies = new Allergies(20);
      expect(allergies.isAllergicTo('strawberries')).toEqual(false);
    });
    test('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.isAllergicTo('strawberries')).toEqual(true);
    });
  });
  describe('testing for tomatoes allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.isAllergicTo('tomatoes')).toEqual(false);
    });
    test('allergic only to tomatoes', () => {
      const allergies = new Allergies(16);
      expect(allergies.isAllergicTo('tomatoes')).toEqual(true);
    });
    test('allergic to tomatoes and something else', () => {
      const allergies = new Allergies(56);
      expect(allergies.isAllergicTo('tomatoes')).toEqual(true);
    });
    test('allergic to something, but not tomatoes', () => {
      const allergies = new Allergies(40);
      expect(allergies.isAllergicTo('tomatoes')).toEqual(false);
    });
    test('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.isAllergicTo('tomatoes')).toEqual(true);
    });
  });
  describe('testing for chocolate allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.isAllergicTo('chocolate')).toEqual(false);
    });
    test('allergic only to chocolate', () => {
      const allergies = new Allergies(32);
      expect(allergies.isAllergicTo('chocolate')).toEqual(true);
    });
    test('allergic to chocolate and something else', () => {
      const allergies = new Allergies(112);
      expect(allergies.isAllergicTo('chocolate')).toEqual(true);
    });
    test('allergic to something, but not chocolate', () => {
      const allergies = new Allergies(80);
      expect(allergies.isAllergicTo('chocolate')).toEqual(false);
    });
    test('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.isAllergicTo('chocolate')).toEqual(true);
    });
  });
  describe('testing for pollen allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.isAllergicTo('pollen')).toEqual(false);
    });
    test('allergic only to pollen', () => {
      const allergies = new Allergies(64);
      expect(allergies.isAllergicTo('pollen')).toEqual(true);
    });
    test('allergic to pollen and something else', () => {
      const allergies = new Allergies(224);
      expect(allergies.isAllergicTo('pollen')).toEqual(true);
    });
    test('allergic to something, but not pollen', () => {
      const allergies = new Allergies(160);
      expect(allergies.isAllergicTo('pollen')).toEqual(false);
    });
    test('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.isAllergicTo('pollen')).toEqual(true);
    });
  });
  describe('testing for cats allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.isAllergicTo('cats')).toEqual(false);
    });
    test('allergic only to cats', () => {
      const allergies = new Allergies(128);
      expect(allergies.isAllergicTo('cats')).toEqual(true);
    });
    test('allergic to cats and something else', () => {
      const allergies = new Allergies(192);
      expect(allergies.isAllergicTo('cats')).toEqual(true);
    });
    test('allergic to something, but not cats', () => {
      const allergies = new Allergies(64);
      expect(allergies.isAllergicTo('cats')).toEqual(false);
    });
    test('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.isAllergicTo('cats')).toEqual(true);
    });
  });
  describe('getAllergies when:', () => {
    test('no allergies', () => {
      const allergies = new Allergies(0);
      expect(allergies.getAllergies()).toEqual([]);
    });
    test('just eggs', () => {
      const allergies = new Allergies(1);
      expect(allergies.getAllergies()).toEqual(['eggs']);
    });
    test('just peanuts', () => {
      const allergies = new Allergies(2);
      expect(allergies.getAllergies()).toEqual(['peanuts']);
    });
    test('just strawberries', () => {
      const allergies = new Allergies(8);
      expect(allergies.getAllergies()).toEqual(['strawberries']);
    });
    test('eggs and peanuts', () => {
      const allergies = new Allergies(3);
      expect(allergies.getAllergies()).toEqual(['eggs', 'peanuts']);
    });
    test('more than eggs but not peanuts', () => {
      const allergies = new Allergies(5);
      expect(allergies.getAllergies()).toEqual(['eggs', 'shellfish']);
    });
    test('lots of stuff', () => {
      const allergies = new Allergies(248);
      expect(allergies.getAllergies()).toEqual([
        'strawberries',
        'tomatoes',
        'chocolate',
        'pollen',
        'cats',
      ]);
    });
    test('everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.getAllergies()).toEqual([
        'eggs',
        'peanuts',
        'shellfish',
        'strawberries',
        'tomatoes',
        'chocolate',
        'pollen',
        'cats',
      ]);
    });
    test('no allergen score parts', () => {
      const allergies = new Allergies(509);
      expect(allergies.getAllergies()).toEqual([
        'eggs',
        'shellfish',
        'strawberries',
        'tomatoes',
        'chocolate',
        'pollen',
        'cats',
      ]);
    });
  });
});
