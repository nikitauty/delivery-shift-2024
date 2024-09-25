import { getUsersSession } from '@api/requests/users/session';
import { useQuery } from '@tanstack/react-query';

export const useGetUsersSessionQuery = (settings?: QuerySettings<typeof getUsersSession>) =>
  useQuery({
    queryKey: ['getSession', settings?.config],
    queryFn: () => {
      const token = localStorage.getItem('AUTH_TOKEN');

      if (!token) {
        throw new Error('No token');
      }

      return getUsersSession({ config: settings?.config });
    },
    ...settings?.options,
  });
