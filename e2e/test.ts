import 'testcafe';
import { Selector } from 'testcafe';

fixture('Getting Started').page('http://localhost:3000');

test('Display title', async (t: TestController) => {
  await t
    .expect(Selector('#root > div > header > p').innerText)
    .eql('React Reversi');
});

test('Display squares', async (t: TestController) => {
  const tbodyElement = Selector('tbody');
  await t.expect(tbodyElement.childElementCount).eql(8);

  const trElement = Selector('tr');
  await t.expect(trElement.childElementCount).eql(8);

  const tdElement = Selector('td');
  await t.expect(tdElement.nth(0).getAttribute('data-location')).eql('0');
  await t.expect(tdElement.nth(63).getAttribute('data-location')).eql('63');
});
