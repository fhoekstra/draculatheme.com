type ParticlesProps = {
  className?: string;
  ease?: number;
  quantity?: number;
  refresh?: boolean;
  staticity?: number;
};

type Circle = {
  alpha: number;
  dx: number;
  dy: number;
  magnetism: number;
  size: number;
  targetAlpha: number;
  translateX: number;
  translateY: number;
  x: number;
  y: number;
};

type Params = {
  params: {
    icon: string;
    platform: string[];
    repo: string;
    synonyms?: string[];
    theme: string;
    title: string;
    views?: number;
  };
};

type Paths = Params[];
