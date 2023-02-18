import dayjs from '@/lib/dayjs';

import type { ReportData } from '../types';
import type { Chart as ChartJS, ChartTypeRegistry, Point, BubbleDataPoint, ChartData } from 'chart.js';

const colors = [
  '#fb7185',
  '#f472b6',
  '#e879f9',
  '#c084fc',
  '#a78bfa',
  '#818cf8',
  '#60a5fa',
  '#38bdf8',
  '#22d3ee',
  '#2dd4bf',
  '#34d399',
  '#4ade80',
  '#a3e635',
  '#facc15',
  '#fbbf24',
  '#fb923c',
  '#f87171',
];

export const getGradient = (
  chart: ChartJS<keyof ChartTypeRegistry, Array<number | [number, number] | Point | BubbleDataPoint | null>, unknown>
): CanvasGradient => {
  const { ctx, chartArea } = chart;
  const gradientSegment = ctx.createConicGradient(-90, chartArea.width / 2, chartArea.height / 2);
  for (let i = 0; i < colors.length; i++) {
    if (i === 0) gradientSegment.addColorStop(0, colors[i]);
    else if (i === colors.length - 1) gradientSegment.addColorStop(1, colors[i]);
    else gradientSegment.addColorStop((1 / colors.length) * i, colors[i]);
  }
  return gradientSegment;
};

export const getFileData = async (): Promise<ReportData | null> => {
  let data: ReportData | null = null;
  try {
    data = await import(`../../../data/psi/${dayjs().format('YYYY-MM-DD')}.json`);
  } catch (err) {
    console.log(err);
    data = await import(`../../../data/psi/${dayjs().add(-1, 'day').format('YYYY-MM-DD')}.json`);
  }
  return data;
};

export const getChartData = (score: number): ChartData<'doughnut', number[], string> => {
  const data: ChartData<'doughnut', number[], string> = {
    datasets: [
      {
        data: [score, 1 - score],
        backgroundColor: (context) => {
          const chart = context.chart;
          if (context.dataIndex === 0 && typeof chart.chartArea?.left === 'number') return getGradient(chart);
          else return 'transparent';
        },
        borderWidth: 0,
      },
    ],
  };
  return data;
};
