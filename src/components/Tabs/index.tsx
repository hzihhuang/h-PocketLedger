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
  return (
    <ul className={clsx(css.tabs, className)}>
      {items?.map((item) => (
        <li
          className={clsx("tabs-item", {
            active: item.value === active,
            shadow: item.value === active,
          })}
          onClick={() => {
            document.startViewTransition(() => {
              onChange?.(item.value);
            });
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
