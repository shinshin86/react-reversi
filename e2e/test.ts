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

  await t.expect(tdElement.nth(27).getAttribute('class')).eql('black');
  await t.expect(tdElement.nth(36).getAttribute('class')).eql('black');
  await t.expect(tdElement.nth(28).getAttribute('class')).eql('white');
  await t.expect(tdElement.nth(35).getAttribute('class')).eql('white');
});

test('Reverse (Error pattern 1)', async (t: TestController) => {
  const tdElement = Selector('td');

  await t.expect(tdElement.nth(27).getAttribute('class')).eql('black');
  await t.expect(tdElement.nth(36).getAttribute('class')).eql('black');
  await t.expect(tdElement.nth(28).getAttribute('class')).eql('white');
  await t.expect(tdElement.nth(35).getAttribute('class')).eql('white');

  // 1:29
  await t
    .click(tdElement.nth(29))
    .expect(tdElement.nth(29).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(28).getAttribute('class'))
    .eql('black');

  // 2:21
  await t
    .click(tdElement.nth(21))
    .expect(tdElement.nth(21).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(28).getAttribute('class'))
    .eql('white');

  // 3:13
  await t
    .click(tdElement.nth(13))
    .expect(tdElement.nth(13).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(21).getAttribute('class'))
    .eql('black');

  // 4:14
  await t
    .click(tdElement.nth(14))
    .expect(tdElement.nth(14).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(21).getAttribute('class'))
    .eql('white');

  // 5:15
  await t
    .click(tdElement.nth(15))
    .expect(tdElement.nth(15).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(14).getAttribute('class'))
    .eql('black');

  // 6:7
  await t
    .click(tdElement.nth(7))
    .expect(tdElement.nth(7).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(14).getAttribute('class'))
    .eql('white');

  // 7:34
  await t
    .click(tdElement.nth(34))
    .expect(tdElement.nth(34).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(35).getAttribute('class'))
    .eql('black');

  // 8:42
  await t
    .click(tdElement.nth(42))
    .expect(tdElement.nth(42).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(35).getAttribute('class'))
    .eql('white');

  // 9:43
  await t
    .click(tdElement.nth(43))
    .expect(tdElement.nth(43).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(35).getAttribute('class'))
    .eql('black');

  // 10:23
  await t
    .click(tdElement.nth(23))
    .expect(tdElement.nth(23).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(15).getAttribute('class'))
    .eql('white');

  // 11:41
  await t
    .click(tdElement.nth(41))
    .expect(tdElement.nth(41).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(42).getAttribute('class'))
    .eql('black');

  // 12:49
  await t
    .click(tdElement.nth(49))
    .expect(tdElement.nth(49).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(42).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(35).getAttribute('class'))
    .eql('white');

  // 13:50
  await t
    .click(tdElement.nth(50))
    .expect(tdElement.nth(50).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(42).getAttribute('class'))
    .eql('black');

  // 14:51
  await t
    .click(tdElement.nth(51))
    .expect(tdElement.nth(51).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(50).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(43).getAttribute('class'))
    .eql('white');

  // 15:59
  await t
    .click(tdElement.nth(59))
    .expect(tdElement.nth(59).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(35).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(43).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(51).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(50).getAttribute('class'))
    .eql('black');

  // 16:52
  await t
    .click(tdElement.nth(52))
    .expect(tdElement.nth(52).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(51).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(50).getAttribute('class'))
    .eql('white');

  // 17:56
  await t
    .click(tdElement.nth(56))
    .expect(tdElement.nth(56).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(49).getAttribute('class'))
    .eql('black');

  // 18:48
  await t
    .click(tdElement.nth(48))
    .expect(tdElement.nth(48).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(49).getAttribute('class'))
    .eql('white');

  // 19:40
  await t
    .click(tdElement.nth(40))
    .expect(tdElement.nth(40).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(48).getAttribute('class'))
    .eql('black');

  // 20:33
  await t
    .click(tdElement.nth(33))
    .expect(tdElement.nth(33).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(41).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(42).getAttribute('class'))
    .eql('white');

  // 21:32
  await t
    .click(tdElement.nth(32))
    .expect(tdElement.nth(32).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(33).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(41).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(50).getAttribute('class'))
    .eql('black');

  // 22:24
  await t
    .click(tdElement.nth(24))
    .expect(tdElement.nth(24).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(33).getAttribute('class'))
    .eql('white');

  // 23:16
  await t
    .click(tdElement.nth(16))
    .expect(tdElement.nth(16).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(24).getAttribute('class'))
    .eql('black');

  // 24:37
  await t
    .click(tdElement.nth(37))
    .expect(tdElement.nth(37).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(29).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(36).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(35).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(34).getAttribute('class'))
    .eql('white');

  // 25:38
  await t
    .click(tdElement.nth(38))
    .expect(tdElement.nth(38).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(37).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(36).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(35).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(34).getAttribute('class'))
    .eql('black')
    .expect(tdElement.nth(33).getAttribute('class'))
    .eql('black');

  // 26:25
  await t
    .click(tdElement.nth(25))
    .expect(tdElement.nth(34).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(43).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(33).getAttribute('class'))
    .eql('white')
    .expect(tdElement.nth(41).getAttribute('class'))
    .eql('white')
    // invalid square
    .expect(tdElement.nth(16).getAttribute('class'))
    .eql('black');
});
