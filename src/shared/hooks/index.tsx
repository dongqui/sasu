import { useRef, useEffect } from "react";

export function useOutsideClick<T extends HTMLElement>(
  onOutsideClick: () => void
) {
  const wrapperRef = useRef<T>(null);
  const callbackRef = useRef<() => void>();

  callbackRef.current = onOutsideClick;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        event.target &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return wrapperRef;
}
