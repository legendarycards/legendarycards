import { cx } from "../utils/all";
import { Category } from "../types/card";

type Props = {
  color: string,
}

let ColorMap = new Map<Category, string>([
  [Category.Mythical, "text-pink-600"],
  [Category.Legendary, "text-orange-700"],
  [Category.Epic, "text-purple-600"],
  [Category.Rare, "text-blue-600"],
  [Category.Uncommon, "text-emerald-700"],
]);

const CategoryBadge: React.FC<Props> = (props: Props) => {
  const color = ColorMap.get(props.color as Category);

  return (
    <span className={cx("inline-block text-xs font-medium tracking-wider uppercase ", color)}>
      {props.color}
    </span>
  );
}

export default CategoryBadge;
