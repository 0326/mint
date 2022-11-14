export class Selection {
  private range;
  constructor(props) {
    this.range = null;
    document.addEventListener('selectionchange', this.handleSelectionChange);
  }

  private handleSelectionChange(e) {
    console.log('handleSelectionChange', e);
  }

  public setSelection() {

  }

  destroy() {
    document.removeEventListener('selectionchange', this.handleSelectionChange);
  }
}
