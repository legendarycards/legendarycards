import Container from "./Container";

type Props = {
  copyright?: string,
}

const Footer: React.FC<Props> = ({copyright}: Props) => {
  if (copyright == null) {
    copyright = 'lengendary.cards';
  }

  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
      Copyright © {new Date().getFullYear()} {copyright}. All
        rights reserved.
      </div>
    </Container>
  )
}

export default Footer;
