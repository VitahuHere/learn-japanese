interface CardForm extends HTMLFormControlsCollection {
  answer: HTMLInputElement;
}

export interface CardFormElement extends HTMLFormElement {
  readonly elements: CardForm;
}