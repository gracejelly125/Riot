export type Item = {
  name: string;
  rune: {
    isrune: boolean;
    tier: number;
    type: string;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: false;
  };
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stacks: number;
  depth: number;
  consumeOnFull: boolean;
  from: string[];
  into: string[];
  specialRecipe: number;
  inStore: true;
  hideFromAll: false;
  requiredChampion: string;
  requiredAlly: string;
  stats: {
    [statName: string]: number;
  };
  tags: string[];
  maps: {
    [mapNumber: number]: boolean;
  };
};
