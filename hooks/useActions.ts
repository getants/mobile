import { useCallback, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import {
  UpdateProfilesByPkDocument,
  UpdateUserDocument,
} from '@getants/graphqls';
import { useLoading } from './useLoading';
import { useAuth } from '../utils/nhost';
import { handleError } from '../utils/tokens';
import type {
  ProfilesEdit,
  UpdateProfilesByPkMutation,
  UpdateProfilesByPkMutationVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UsersEdit,
} from '../utils/types';

export const useActions = () => {
  const { refetchProfile } = useAuth();
  const { setLoading } = useLoading();

  const [updateUser, { loading: updateUserLoading }] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument);

  const [updateProfileMutation, { loading: updateProfileLoading }] =
    useMutation<
      UpdateProfilesByPkMutation,
      UpdateProfilesByPkMutationVariables
    >(UpdateProfilesByPkDocument);

  const hasLoading = updateUserLoading || updateProfileLoading;

  useEffect(() => {
    setLoading(hasLoading);
  }, [hasLoading, setLoading]);

  const handleUpdateUser = useCallback(
    async (id: string, value: Partial<UsersEdit>) => {
      try {
        const response = await updateUser({
          variables: { pk_columns: { id }, _set: value },
        });
        return response;
      } catch (err) {
        return handleError(err);
      }
    },
    [updateUser],
  );

  const handleUpdateProfile = useCallback(
    async (id: string, value: Partial<ProfilesEdit>) => {
      try {
        const response = await updateProfileMutation({
          variables: { pk_columns: { id }, _set: value },
        });
        refetchProfile();

        return response;
      } catch (err) {
        return handleError(err);
      }
    },
    [updateProfileMutation, refetchProfile],
  );

  return {
    handleUpdateProfile,
    handleUpdateUser,
  };
};
