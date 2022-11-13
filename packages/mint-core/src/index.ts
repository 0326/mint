export interface IMintEditorProps {
  container: HTMLElement;
  disabled?: boolean;
}

export class MintEditor {
  public container: HTMLElement;
  public disabled: boolean;
  constructor(props: IMintEditorProps) {
    this.container = props.container;
    this.disabled = props.disabled === true;
    this.initContainer();
  }

  private initContainer() {
    if (!this.container) {
      throw new Error('ParamsError: missing container');
    }
    this.container.classList.add('mint-editor-container');
    this.container.setAttribute('contenteditable', !this.disabled);
  }

  public getContent() {
    return this.container.innerHTML;
  }

  public setContent(html: string) {
    this.container.innerHTML = html;
  }
}
