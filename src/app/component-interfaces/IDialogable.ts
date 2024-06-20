/**
 * Применяется для всех декораторов для компонента ADialog.
 */

export interface IDialogableProps {
  isOpen: boolean;
  delmeString?: string;
}

export const iDialogablePropDefaults = {};

export const iDialogableEmits = ["needToClose", "apply"];
