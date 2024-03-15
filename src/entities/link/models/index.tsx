import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  getViewCounts,
  updateAndGetViewCount,
} from "@/entities/link/api/viewCounts";
import type { ViewCount } from "@/shared/config/types";

export function useViewCountMutation() {
  const queryClient = useQueryClient();

  return useMutation<ViewCount, Error, number>({
    mutationFn: (linkId) => updateAndGetViewCount(linkId),
    onSuccess(data) {
      const oldViewCounts = queryClient.getQueryData<ViewCount[]>([
        "viewCounts",
      ]);
      if (oldViewCounts) {
        const index = oldViewCounts?.findIndex(
          (viewCount) => viewCount.linkId === data.linkId
        );
        oldViewCounts.splice(index, 1, data);
        queryClient.setQueryData(["viewCounts"], [...oldViewCounts]);
      }
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
    refetchOnWindowFocus: false,
  });
}
