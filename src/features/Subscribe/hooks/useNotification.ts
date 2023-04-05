import { useCallback, useState } from 'react';

import { requestNotificationPermission } from '@/functions/firebase';

import { useEffectOnce } from '@/hooks/useEffectOnce';

type NotificationPermission = 'default' | 'denied' | 'granted';

type UseNotification = () => {
  permission: NotificationPermission | 'not-supported';
  requestPermission: () => void;
  isRequesting: boolean;
};

export const useNotification: UseNotification = () => {
  const [permission, setPermission] = useState<NotificationPermission | 'not-supported'>('default');
  const revalidate = useCallback(() => {
    if ('Notification' in window) {
      console.log(`permission: ${Notification.permission}`);
      setPermission(Notification.permission);
    } else {
      setPermission('not-supported');
    }
  }, []);

  const [isRequesting, setIsRequesting] = useState(false);

  useEffectOnce(() => revalidate());

  const requestPermission = useCallback(() => {
    setIsRequesting(true);
    requestNotificationPermission()
      .then(() => revalidate())
      .finally(() => setIsRequesting(false));
  }, [revalidate]);

  return { permission, requestPermission, isRequesting };
};
