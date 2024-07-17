import { defineStore } from "pinia";

import apiMain from "@/app/api/apiMain";

import Position from "@/app/models/position/Position";
import { useRepo } from "pinia-orm";
const positionRepo = useRepo(Position); // Если будет глючить - сделать его computed/getter. В примерах оно было computed/getter.

import type { IPosition } from "@/app/types/apiEntities";

export const usePositionsStore = defineStore("positionsStore", {
  getters: {
    allPositions: () => () => {
      const positions = positionRepo.get();
      return positions;
    },
  },
  actions: {
    async fetchAllPositions() {
      const dataFromServer = await apiMain.fetch({
        method: "get",
        url: "positions",
      });
      const positions = (dataFromServer as { data: IPosition[] }).data;
      positionRepo.save(positions);
    },
  },
});
