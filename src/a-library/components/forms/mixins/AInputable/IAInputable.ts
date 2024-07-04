/**
 * Применяется для всех инпутов.
 */

export interface IAInputableProps {
  autofocus?: boolean;
  label?: string;
  name?: string; // То, из чего собирается нативный FormData. Так-же используется как идентификатор в валидаторе.
  rules?: string;
  hideLabel?: boolean;
  hideHint?: boolean;
  errorMessages?: Array<string>;
}

export const iAInputablePropDefaults = {
  autofocus: false,
  label: "",
  rules: "",
  hideLabel: false,
  hideHint: false,
  errorMessages: () => [],
};

export const iAInputableEmits = ["blur"];
