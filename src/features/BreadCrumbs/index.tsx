import { memo, useMemo } from 'react';

interface Props {
  /**
   * トップページ配下のパス
   */
  list: Array<{
    label: string;
    path: string;
  }>;
}

export const BreadCrumbs: React.FC<Props> = memo(({ list }) => {
  const displayList = useMemo(() => {
    return [
      {
        label: 'TOP',
        path: '/',
      },
      ...list,
    ];
  }, [list]);
  return (
    <ol className="flex overflow-x-auto whitespace-nowrap" aria-label="breadcrumb">
      {displayList.map(({ label, path }, index) => (
        <li className="flex items-center text-zinc-700 dark:text-zinc-200" key={index}>
          {displayList.length - 1 !== index ? (
            <>
              <a className="text-sm underline" href={path}>
                {label}
              </a>
              <span className="px-2 text-sm">＞</span>
            </>
          ) : (
            <span className="text-sm" aria-current="page">
              {label}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
});
