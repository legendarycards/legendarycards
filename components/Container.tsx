import { cx } from "../utils/all";

type Props = {
  children: React.ReactNode,
  className?: string,
}

const Container: React.FC<Props> = ({children, className}: Props) => {
  return (
    <div
      className={cx(
        "container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg",
        className
      )}>
      {children}
    </div>
  )
}

export default Container;
