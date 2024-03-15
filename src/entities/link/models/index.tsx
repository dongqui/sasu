import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { produce } from "immer";

import { getViewCounts, updateAndGetViewCount } from "@/entities/link/api";
import type { ViewCount } from "@/shared/config/types";

export function useViewCountMutation() {
  const queryClient = useQueryClient();

  return useMutation<ViewCount, Error, number>({
    mutationFn: (linkId) => updateAndGetViewCount(linkId),
    onSuccess(data) {
      return produce(
        queryClient.getQueryData<ViewCount[]>(["viewCounts"]),
        (draft) => {
          if (!draft) return [];

          const index = draft?.findIndex(
            (viewCount) => viewCount.linkId === data.linkId
          );

          if (index > -1) {
            draft?.splice(index, 1, data);
          }
        }
      );
    },
  });
}

export function useViewCountQuery(id: number) {
  return useQuery<ViewCount[], Error, ViewCount | undefined>({
    queryKey: ["viewCounts"],
    queryFn: getViewCounts,
    select: (data) => {
      return data?.find((viewCount) => viewCount.linkId === id);
    },
  });
}
