import { cx } from "../utils/all";

type Props = {
  color: string,
}

const CategoryBadge: React.FC<Props> = (props: Props) => {
  const color = {
    mythical: "text-emerald-700",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600"
  };
  return (
    <span
      className={cx(
        "inline-block mt-5 text-xs font-medium tracking-wider uppercase ",
        color[props.color as keyof typeof color] || color["pink"]
      )}>
      {props.color}
    </span>
  );
}

export default CategoryBadge;
