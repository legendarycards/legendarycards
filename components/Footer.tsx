import Container from "./Container";

type Props = {
  copyright?: string,
}

const Footer: React.FC<Props> = ({copyright}: Props) => {
  if (copyright == null) {
    copyright = 'legendary.cards';
  }

  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800 p-2">
      <div className="text-sm text-center">
      {copyright} claims no copyright, all content is provided for archive and reference.
      </div>
    </Container>
  )
}

export default Footer;
