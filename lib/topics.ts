export const TOPIC_LABELS: Record<string, string> = {};

const TOKEN_LABELS: Record<string, string> = {
  ocio: "OCIO",
  ldi: "LDI",
  db: "DB",
  dc: "DC",
  cma: "CMA",
  cfo: "CFO",
  cio: "CIO",
  fx: "FX",
  ips: "IPS",
  rfp: "RFP",
};

export function topicLabel(topic: string): string {
  if (TOPIC_LABELS[topic]) return TOPIC_LABELS[topic];

  return topic
    .split("-")
    .map((part) => {
      const lower = part.toLowerCase();
      return TOKEN_LABELS[lower] ?? `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
    })
    .join(" ");
}
