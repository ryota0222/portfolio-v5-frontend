import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { memo, useEffect, useMemo, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import dayjs from '@/lib/dayjs';

import { getChartData, getFileData } from './functions';

import type { ReportData } from './types';

ChartJS.register(ArcElement, Legend);

export const PerformanceReport = memo(() => {
  const [fileData, setFileData] = useState<ReportData | null>(null);
  useEffect(() => {
    const f = async (): Promise<void> => {
      setFileData(await getFileData());
    };
    void f();
  }, []);
  const accessibilityData = useMemo(() => {
    return fileData?.lighthouseResult.accessibility;
  }, [fileData]);
  const performanceData = useMemo(() => {
    return fileData?.lighthouseResult.performance;
  }, [fileData]);
  const seoData = useMemo(() => {
    return fileData?.lighthouseResult.seo;
  }, [fileData]);
  return (
    <div style={{ minHeight: fileData === null ? 0 : '240px' }} className="w-full max-w-2xl mx-auto">
      {fileData !== null && (
        <>
          <span
            className={`block mt-8 mb-2 font-bold text-black dark:text-white before:content-['#'] before:pr-1 before:text-[#FF7575]`}
          >
            パフォーマンス
          </span>
          <p className="mb-8 text-black dark:text-white">
            PageSpeed Insightsを用いて計測しました（計測時刻：
            {dayjs(fileData.lighthouseResult.fetchTime).format('YYYY/MM/DD HH:mm')}）
          </p>
          <div className="block md:flex w-full justify-between">
            <div className="max-w-[200px] md:max-w-[140px] mx-auto mb-8 md:mb-0">
              <p className="font-bold mt-2 text-center text-black dark:text-white">Accessibility</p>
              <Doughnut data={getChartData(accessibilityData?.score ?? 0)} />
              {Boolean(accessibilityData?.score) && (
                <span className="font-bold mt-2 text-center text-black dark:text-white block text-2xl">
                  {(accessibilityData?.score ?? 0) * 100}
                </span>
              )}
            </div>
            <div className="max-w-[200px] md:max-w-[140px] mx-auto mb-8 md:mb-0">
              <p className="font-bold mt-2 text-center text-black dark:text-white">Performance</p>
              <Doughnut data={getChartData(performanceData?.score ?? 0)} />
              {Boolean(performanceData?.score) && (
                <span className="font-bold mt-2 text-center text-black dark:text-white block text-2xl">
                  {(performanceData?.score ?? 0) * 100}
                </span>
              )}
            </div>
            <div className="max-w-[200px] md:max-w-[140px] mx-auto">
              <p className="font-bold mt-2 text-center text-black dark:text-white">SEO</p>
              <Doughnut data={getChartData(seoData?.score ?? 0)} />
              {Boolean(seoData?.score) && (
                <span className="font-bold mt-2 text-center text-black dark:text-white block text-2xl">
                  {(seoData?.score ?? 0) * 100}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
});
