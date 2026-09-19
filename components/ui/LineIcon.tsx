import type { ReactNode } from 'react';

type IconName =
  | 'beauty'
  | 'skincare'
  | 'hair'
  | 'care'
  | 'food'
  | 'drink'
  | 'pantry'
  | 'fmcg'
  | 'quality'
  | 'global'
  | 'supply'
  | 'range';

export function LineIcon({ name, size = 34 }: { name: IconName; size?: number }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  const paths: Record<IconName, ReactNode> = {
    beauty: <><path {...common} d="M12 3v4M8 5h8M9 7h6l1 14H8L9 7Z"/><path {...common} d="M10.5 11h3"/></>,
    skincare: <><rect {...common} x="8" y="7" width="8" height="14" rx="1.5"/><path {...common} d="M10 7V4h4v3M10 12h4"/></>,
    hair: <><path {...common} d="M5 15c5-1 6-7 7-12 3 4 6 7 7 12"/><path {...common} d="M7 18c3 2 7 2 10 0"/></>,
    care: <><path {...common} d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z"/></>,
    food: <><path {...common} d="M5 4v7a3 3 0 0 0 3 3V4M8 14v7M16 4v17M16 4c3 1 4 4 4 7h-4"/></>,
    drink: <><path {...common} d="M7 4h10l-1 17H8L7 4Z"/><path {...common} d="M8 9h8M14 4l3-2"/></>,
    pantry: <><path {...common} d="M6 7h12v14H6V7ZM8 3h8v4H8V3Z"/><path {...common} d="M9 12h6"/></>,
    fmcg: <><path {...common} d="m4 9 8-5 8 5-8 5-8-5Z"/><path {...common} d="m4 9v7l8 5 8-5V9M12 14v7"/></>,
    quality: <><path {...common} d="m12 3 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.2l5-.7L12 3Z"/></>,
    global: <><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
    supply: <><path {...common} d="M3 7h11v10H3V7ZM14 10h4l3 3v4h-7"/><circle {...common} cx="7" cy="18" r="2"/><circle {...common} cx="18" cy="18" r="2"/></>,
    range: <><rect {...common} x="4" y="4" width="6" height="6"/><rect {...common} x="14" y="4" width="6" height="6"/><rect {...common} x="4" y="14" width="6" height="6"/><rect {...common} x="14" y="14" width="6" height="6"/></>,
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}
