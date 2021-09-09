import 'testcafe';
import { Selector } from 'testcafe';

fixture('Getting Started').page('http://localhost:3000');

test('Display squares', async(t: TestController) => {
    await t.expect(Selector('#root > div > header > p').innerText).eql('React Reversi');
})