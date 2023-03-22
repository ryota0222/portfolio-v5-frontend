import { memo } from 'react';

import { ChangelogItem } from '../ChangelogItem';

import { useReleaseData } from './hooks/useReleaseData';

export const Changelogs = memo(() => {
  const releaseData = useReleaseData();
  return (
    <ul>
      {releaseData.map((item) => (
        <ChangelogItem
          title={`${item.tag_name} ${item.name}`}
          createdAt={item.created_at}
          detail={item.body}
          url={item.html_url}
        />
      ))}
    </ul>
  );
});
