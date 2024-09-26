import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGetDeliveryPackageTypesQuery } from '@api/hooks/useGetDeliveryPackageTypesQuery';
import { useGetDeliveryPointsQuery } from '@api/hooks/useGetDeliveryPointsQuery';
import { usePostDeliveryCalcMutation } from '@api/hooks/usePostDeliveryCalcMutation';
import { getRouteCreateOrder } from '@constants/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCitiesStore } from '@store/hooks/useCitiesStore';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore/useCreateOrderStore';

import type { Package, Point } from '@/shared/types';

import type { CalcDeliverySchema } from '../constants/calcDeliveryShema';
import { calcDeliverySchema } from '../constants/calcDeliveryShema';

export const useMainPage = () => {
  const navigate = useNavigate();

  const getDeliveryPointsQuery = useGetDeliveryPointsQuery();
  const getDeliveryPackageTypesQuery = useGetDeliveryPackageTypesQuery();
  const postDeliveryCalcMutation = usePostDeliveryCalcMutation();

  const { setOptions, setSenderPoint, setReceiverPoint } = useCreateOrderStore();
  const { cities, setCities } = useCitiesStore();

  const [error, setError] = React.useState('');

  const points = getDeliveryPointsQuery.data ? getDeliveryPointsQuery.data.data.points : [];
  const packageTypes = getDeliveryPackageTypesQuery.data
    ? getDeliveryPackageTypesQuery.data.data.packages
    : [];

  const form = useForm<CalcDeliverySchema>({
    resolver: zodResolver(calcDeliverySchema),
    defaultValues: {
      receiverPoint: points[0]?.id || '1',
      senderPoint: points[0]?.id || '1',
      package: packageTypes[0]?.id || '1',
    },
  });

  const onSubmit = form.handleSubmit(async (data: CalcDeliverySchema) => {
    const params = {
      receiverPoint: points.find((p) => p.id === data.receiverPoint) || ({} as Point),
      senderPoint: points.find((p) => p.id === data.senderPoint) || ({} as Point),
      package: packageTypes.find((p) => p.id === data.package) || ({} as Package),
    };

    const calcDeliveryResponse = await postDeliveryCalcMutation.mutateAsync({ params });

    if (!calcDeliveryResponse.data.success && calcDeliveryResponse.data.reason) {
      setError(calcDeliveryResponse.data.reason);
    }

    setOptions(calcDeliveryResponse.data.options);
    setReceiverPoint(params.receiverPoint!);
    setSenderPoint(params.senderPoint!);

    navigate(getRouteCreateOrder());
  });

  React.useEffect(() => {
    if (getDeliveryPointsQuery.data && !cities?.length) {
      setCities(getDeliveryPointsQuery.data.data.points);
    }
  }, [getDeliveryPointsQuery.data]);

  return {
    form,
    state: {
      error,
      points,
      packageTypes,
      loading: {
        getSelectItems: getDeliveryPointsQuery.isPending || getDeliveryPackageTypesQuery.isPending,
        submitForm: form.formState.isSubmitting,
      },
    },
    functions: { onSubmit },
  };
};
