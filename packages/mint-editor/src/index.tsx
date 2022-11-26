import * as React from 'react';
import { useState, useLayoutEffect } from 'react';
import { MintEditor } from '@mint-editor/core';
import { Toolbar } from './Toolbar';
import '@mint-editor/core/src/index.less';
import './index.less';

export const MintEditorComponent = () => {
  const [content, setContent] = useState();
  const [editor, setEditor] = useState<MintEditor>();

  useLayoutEffect(() => {
    const editor = new MintEditor({
      container: document.getElementById('mint-editor'),
    });
    setEditor(editor);
    window.editor = editor;
  }, []);

  const onToolbarClick = (type, activeTools) => {
    console.log('onToolbarClick', type);
  }

  return (
    <div className='mint-editor-showcase'>
      <h1>Hello, MintEditor!</h1>
      <Toolbar onClick={onToolbarClick} />
      <div id="mint-editor"></div>
      <br/>
      <div>
        <button onClick={() => {
          const data = editor?.getContent();
          console.log('innerHTML:', JSON.stringify(data));
          document.getElementById('logger').innerText = data;
        }}>获取编辑器内容</button>
      </div>
      <div>
        <p>控制台打印信息</p>
        <div id="logger"></div>
      </div>
    </div>
  )
}
