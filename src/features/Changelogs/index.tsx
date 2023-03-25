import { memo, Fragment } from 'react';

import { ChangelogItem } from '../ChangelogItem';

import { useReleaseData } from './hooks/useReleaseData';

export const Changelogs = memo(() => {
  const releaseData = useReleaseData();
  return (
    <ul>
      {releaseData.map((item) => (
        <Fragment key={item.id}>
          <ChangelogItem
            title={`${item.tag_name} ${item.name}`}
            createdAt={item.created_at}
            detail={item.body}
            url={item.html_url}
          />
        </Fragment>
      ))}
    </ul>
  );
});
