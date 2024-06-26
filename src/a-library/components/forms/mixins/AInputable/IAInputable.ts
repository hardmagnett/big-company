/**
 * Применяется для всех инпутов.
 */

export interface IAInputableProps {
  label?: string;
  name?: string;  // То, из чего собирается нативный FormData. Так-же используется как идентификатор в валидаторе.
  rules?: string
  hideLabel?: boolean,
  hideHint?:boolean,
  errorMessages?: Array<string>
}

export const iAInputablePropDefaults = {
  label: '',
  rules: '',
  hideLabel: false,
  hideHint: false,
  // Ведь валидация будет происходить в моих инпутах, и снаружи ошибки в них передавать будет не нужно
  // errorMessages: ()=> []
};

// export const iAInputableEmits = ["needToClose", "apply"];
export const iAInputableEmits = [];
