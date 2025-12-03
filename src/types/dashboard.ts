export interface SummaryStat {
  title: string;
  value: number | string;
  change: number | string;
  progress?: number;
}

export interface ActivityItem {
  id?: string;
  user: string;
  commit: string;
  date: string;
  purchases: number;
  imageUrl: string;
}

export interface ChartDefinition {
  title: string;
  values: number[];
}

export interface DashboardState {
  summary: SummaryStat[];
  activity: ActivityItem[];
  charts: ChartDefinition[];
  loading: boolean;
  error: string | null;
}
