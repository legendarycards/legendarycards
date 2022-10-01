import { cx } from "../utils/all";

type Props = {
  children: React.ReactNode,
  className?: string,
}

const Container: React.FC<Props> = ({children, className}: Props) => {
  return (
    <div
      className={cx(
        "container mx-auto mb-4",
        className
      )}>
      {children}
    </div>
  )
}

export default Container;
