export declare const useSelect: <Identifier>(values: Identifier[], initial?: Identifier[], handleSelect?: ((identifiers: Identifier[]) => void) | undefined) => {
    selected: Identifier[];
    isSelected: (identifier: Identifier) => any;
    isSelectedAll: boolean;
    isSelectedAny: boolean;
    select: (identifier: Identifier) => void;
    selectAll: () => void;
    deselectAll: () => void;
};
