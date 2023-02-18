export interface ReportData {
  kind: string;
  id: string;
  lighthouseResult: {
    lighthouseVersion: string;
    userAgent: string;
    fetchTime: string;
    environment: {
      networkUserAgent: string;
      hostUserAgent: string;
      benchmarkIndex: number;
    };
    performance: {
      id: string;
      title: string;
      score: number;
      auditRefs: Array<{
        id: string;
        weight: number;
        group: string;
        acronym: string;
        relevantAudits?: string[];
      }>;
    };
    accessibility: {
      id: string;
      title: string;
      description: string;
      manualDescription: string;
      score: number;
      auditRefs: Array<{
        id: string;
        weight: number;
        group: string;
      }>;
    };
    seo: {
      id: string;
      title: string;
      description: string;
      manualDescription: string;
      score: 1;
      auditRefs: Array<{
        id: string;
        weight: number;
        group: string;
      }>;
    };
  };
}
