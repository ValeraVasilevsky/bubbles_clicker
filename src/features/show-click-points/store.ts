import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { type PointType } from "./types";

export const useShowPointsStore = defineStore("show-points", () => {
  const pointsList = ref<PointType[]>([]);

  // computed
  const points = computed(() => pointsList.value);

  // methods
  const create = (point: PointType) => {
    pointsList.value.push(point);
  };

  const ridoff = (id: string) => {
    const list: PointType[] = JSON.parse(JSON.stringify(pointsList.value));
    const idx = list.findIndex((el) => el.id === id);

    pointsList.value = [...list.slice(0, idx), ...list.slice(idx + 1)];
  };

  const createTemp = (
    point: Omit<PointType, "id">
  ): Promise<{ id: string; t: NodeJS.Timeout }> => {
    const id = Date.now().toString();

    create({
      ...point,
      id,
    });

    return new Promise((resolve) => {
      const t = setTimeout(() => {
        resolve({ id, t });
      }, 1000);
    });
  };

  const msgTemp = async (point: Omit<PointType, "id">) => {
    const { t, id } = await createTemp(point);

    clearTimeout(t);
    ridoff(id);
  };

  return {
    points,
    msgTemp,
  };
});
