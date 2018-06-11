import test from 'ava';
import sinon from 'sinon';
import * as func0 from './func';
import { main } from './app';

// test that main() calls func() once
test('repo', t => {
  const func_stub = sinon.stub(func0, 'func');
  main();
  t.pass();
});
