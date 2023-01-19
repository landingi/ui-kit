export default useIsOpen;
declare function useIsOpen(initial: any): {
    set: Function;
    setValue: import("react").Dispatch<any>;
    toggle: Function;
    toggleOneElement: () => void;
    value: any;
};
