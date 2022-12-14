export declare const useSelect: <Identifier>(values: Identifier[], initial?: Identifier[], handleSelect?: ((identifiers: Identifier[]) => void) | undefined) => {
    selected: Identifier[];
    isSelected: (identifier: Identifier) => boolean;
    isSelectedAll: boolean;
    isSelectedAny: boolean;
    select: (identifier: Identifier) => void;
    selectAll: () => void;
};
