import Linkify from 'linkify-react';
import { memo, type PropsWithChildren } from 'react';

interface Props {
  attributes: any;
  content: string;
}

const renderLink: React.FC<Props> = ({ attributes, content }) => {
  const { href, ...props } = attributes;
  return (
    <a
      className="underline dark:text-cyan-400 text-cyan-600"
      href={href}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
};

export const LinkifyComponent: React.FC<PropsWithChildren<unknown>> = memo(({ children }) => {
  return <Linkify options={{ render: renderLink }}>{children}</Linkify>;
});
