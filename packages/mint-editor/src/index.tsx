import * as React from 'react';
import { useLayoutEffect } from 'react';
import { MintEditor } from '@mint-editor/core';
import '@mint-editor/core/src/index.less';
import './index.less';

export const App = () => {
  useLayoutEffect(() => {
    window.editor = new MintEditor({
      container: document.getElementById('mint-editor'),
    });
  }, []);

  return (
    <div className='mint-editor-showcase'>
      <h1>Hello, MintEditor!</h1>
      <div id="mint-editor"></div>
    </div>
  )
}
