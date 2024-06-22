/**
 * Применяется для всех инпутов.
 */

export interface IAInputableProps {
  label?: string;
  hideLabel?: boolean,
  hideHint?:boolean,
  errorMessages?: Array<string>
}

export const iAInputablePropDefaults = {
  label: '',
  hideLabel: false,
  hideHint: false,
  // todo:: это похоже будет не нужно.
  // Ведь валидация будет происходить в моих инпутах, и снаружи ошибки в них передавать будет не нужно
  errorMessages: ()=> []
};

// export const iAInputableEmits = ["needToClose", "apply"];
export const iAInputableEmits = [];
