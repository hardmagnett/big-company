/**
 * Применяется для всех инпутов.
 */

export interface IAInputableProps {
  autofocus?: boolean;
  label?: string;
  name?: string;      // Кажется не применялся
  rules?: string;     // Кажется не применялся. Мои инпуты ведь валидируются снаружи.
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
