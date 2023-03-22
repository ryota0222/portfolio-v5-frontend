import { Menu, Transition } from '@headlessui/react';
import { memo, Fragment, useMemo } from 'react';

import { ExternalLink } from '@/components/ui/icons/ExternalLink';

import { useReleaseData } from '@/features/Changelogs/hooks/useReleaseData';

export const GitReleaseMenu = memo(() => {
  const releaseData = useReleaseData();
  const latestTagName = useMemo(() => {
    if (releaseData.length > 0) return releaseData[0].tag_name;
    return null;
  }, [releaseData]);
  // 最新のタグ情報がない場合は何も表示しない
  if (latestTagName === null) return <></>;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-200 dark:bg-black bg-opacity-20 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium text-black dark:text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {latestTagName}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-36 origin-top-left divide-y divide-gray-100 dark:divide-gray-800 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black dark:ring-gray-400 ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {releaseData.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-dark text-white dark:bg-white dark:text-dark' : 'text-gray-900 dark:text-gray-100'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm align-middle justify-between`}
                    href={item.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.tag_name}
                    <ExternalLink color="#888" />
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              <a
                className="block rounded-full text-center bg-dark text-white dark:bg-white dark:text-dark p-2 mb-2 mx-1 text-sm"
                href="/changelog"
              >
                詳しく見る
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
});
