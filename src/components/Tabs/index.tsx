import { useEffect, useRef } from "react";
import css from "./index.module.scss";
import clsx from "clsx";

interface Props<T = string> {
  className?: string;
  items: {
    label: string;
    value: T;
  }[];
  active: T;
  onChange?: (value: T) => void;
}

function Tabs<T>({ className, items, active, onChange }: Props<T>) {
  const boxRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (!boxRef.current) return;
    const activeItem = boxRef.current.querySelector(".active") as HTMLElement;
    const { left } = boxRef.current.getBoundingClientRect();
    const { width: activeWidth, left: activeLeft } =
      activeItem.getBoundingClientRect();

    console.log(left, activeWidth);
    // 设置自定义css变量
    boxRef.current.style.setProperty("--tabs-active-width", `${activeWidth}px`);
    boxRef.current.style.setProperty(
      "--tabs-active-left",
      `${activeLeft - left}px`
    );
  }, [active]);
  return (
    <ul className={clsx(css.tabs, className)} ref={boxRef}>
      {items?.map((item) => (
        <li
          className={clsx("tabs-item", `tabs-item-${item.value}`, {
            active: item.value === active,
          })}
          onClick={() => {
            onChange?.(item.value);
          }}
          key={item.value as string}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
export default Tabs;
