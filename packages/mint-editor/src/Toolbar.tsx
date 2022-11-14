import * as React from 'react';
import { useState } from 'react';

export enum ToolEnum {
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
}

export interface ToolbarProps {
  onClick?: (type: ToolEnum, tools) => void;
}

export const Toolbar = (props: ToolbarProps) => {
  const [activeTools, setActiveTools] = useState({});
  const onClick = (type: ToolEnum) => {
    const newActiveTools = { ...activeTools };
    newActiveTools[type] = newActiveTools[type] === true ? false : true;
    setActiveTools(newActiveTools);
    props.onClick?.(type, newActiveTools);
  };

  console.log('activeTools', activeTools);

  return (
    <div className="mint-editor-toolbar">
      <span onClick={() => { onClick(ToolEnum.BOLD); }} className={`minticon icon-bold ${activeTools[ToolEnum.BOLD] ? 'active' : ''}`} />
      <span onClick={() => { onClick(ToolEnum.ITALIC); }} className={`minticon icon-italic ${activeTools[ToolEnum.ITALIC] ? 'active' : ''}`} />
      <span onClick={() => { onClick(ToolEnum.UNDERLINE); }} className={`minticon icon-underline ${activeTools[ToolEnum.UNDERLINE] ? 'active' : ''}`} />
    </div>
  );
}
