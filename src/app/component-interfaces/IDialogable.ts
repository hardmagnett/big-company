/**
 * Применяется для всех декораторов для компонента ADialog.
 */

export interface IDialogableProps {
  isOpen: boolean;
  delmeString?: string;
}

// todo:: после добавления в гисты удалить этот shit и всё что с ним связано
export const iDialogablePropDefaults = {
  delmeString: "shit",
};

export const iDialogableEmits = ["needToClose", "apply"];
