import { ViewCount } from "@/shared/config/types";

export const getViewCounts = async () => {
  const res = await fetch("/api/viewCounts", {
    method: "GET",
  });

  const data: { viewCounts: ViewCount[] } = await res.json();
  return data.viewCounts;
};

export const getViewCount = async (linkId: number) => {
  const res = await fetch(`/api/viewCounts/${linkId}`, {
    method: "GET",
  });

  const data: ViewCount = await res.json();
  return data;
};

export const updateAndGetViewCount = async (linkId: number) => {
  const res = await fetch(`/api/viewCounts/${linkId}`, {
    method: "PUT",
  });

  const data: { viewCount: ViewCount } = await res.json();
  return data.viewCount;
};
