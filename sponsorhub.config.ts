import { BadgePreset, defineConfig, presets } from 'sponsorhub'

const NYXB_LOGO = (width: number, y: number) => `
<a xlink:href="https://nuxtlabs.com" class="sponsorkit-link" target="_blank" id="NuxtLabs">
<svg x="${(width - 361)/2}" y="${y}" width="361" height="86" viewBox="0 0 361 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="m351,0H10C4.48,0,0,4.48,0,10v66c0,5.52,4.48,10,10,10h341c5.52,0,10-4.48,10-10V10c0-5.52-4.48-10-10-10Z" fill="#fff" stroke-width="0"/><text transform="translate(89.92 66.71)" font-family="Cunia, Cunia" font-size="48"><tspan x="0" y="0">NyxbLabs</tspan></text><g id="b"><path d="m65.48,42.22c-1.25.69-2.55,2.38-2.64,5.62-.53.18-.78.54-2.15-1.12,1.6,2.43,2.66,3.26,3.18,2.48-.32-3.44.21-5.78,1.6-6.98Z" fill="#231f20" stroke-width="0"/><path d="m70.89,45.64l-.34,6.36-1.44-1.61c.66,1.1,1.35,2.39,2.06,3.44l-.29-8.19Z" fill="#231f20" stroke-width="0"/><path d="m66.9,58.91l3.72,9.89c.11-2.05.37-5.09.79-9.11-.38,1.92-.75,3.85-1.13,5.77l-3.38-6.55Z" fill="#231f20" stroke-width="0"/><path d="m61.07,57.89c1.62,5.51,3.22,11.02,4.85,16.52l2.06-3.47c-.27.24-1.78,1.51-1.84,1.57,0,0-1.7-4.11-5.07-14.62Z" fill="#231f20" stroke-width="0"/><path d="m67.33,31.63c-5.65-8.83-12.34-27.65-.25-16.95-1.11-4.09-3.08-5.76-5.21-7.56,1.94,2.09,3.21,3.68,3.7,5.31-1.13-1.09-3-1.99-4.48-1.89.17-.64.79-1.06,1.24-1.22-3.24.15-4.02,3.95-2,9.73-1.47-1.6-2.42-3.73-3.25-5.77.4,4.72,6.78,14.58,10.24,18.34Z" fill="#231f20" stroke-width="0"/><path d="m61.28,32.03c12.76,1.11,22.24,5.01,22.24,8.61,0,4.63-8.31,6.32-11.59,7.62,8.79-1.56,13.71-3.76,13.71-7.52s-10.45-7.87-24.37-8.71Z" fill="#231f20" stroke-width="0"/></g><g id="c"><path d="m39.37,68.8l6.79-17.95-2.83-6.92-.86,6.78-3.89,8.98c.38,3.06.58,6.02.79,9.11h0Z" fill="#231f20" stroke-width="0"/><path d="m56.18,50.71l-1.17-.87-8.07,2.24-4.93,18.86c.69,1.16,1.38,2.32,2.06,3.47l6.15-20.96,4.79-3.62,8.08,2.23-6.91-1.36Z" fill="#231f20" stroke-width="0"/><path d="m54.6,56.11c1.13.26,1.89.08,2.29-.53-.78.43-1.58.38-2.31-.15-.8.62-1.38.48-2.27.15l-.53-.21c-.3-.11-.65-.23-1.03-.35l-4.22,21.81c2.86,1.64,5.57,3.08,8.48,4.58l6.84-3.54c-2.37.88-4.41,1.63-6.83,2.53l-.42-24.29Z" fill="#231f20" stroke-width="0"/><path d="m51.19,41.85c-.54-.06-7.71-.27-6.59.63,2.31,1.83,1.25,6.11,1.54,6.33,1.56,1.18,6.37-6.84,5.04-6.96h0Z" fill="#231f20" stroke-width="0"/><polygon points="38.82 53.83 41.74 48.57 41.62 42.51 39.1 45.64 38.9 51.64 38.89 51.97 38.87 52.33 38.82 53.83" fill="#231f20" stroke-width="0"/><path d="m59.67,28.02c-4.07.48-8.29,1.15-12.24,2.2-1.65.44-3.32.97-4.88,1.62-.13.05-.04.02.04.01,2.76-.4,5.64-.69,8.43-.75,1.2-.03,2.65-.03,3.84.15.1.02.2.03.31.05-9.08.56-46.91,6.5-18.06,16.95-8.79-1.56-13.65-3.76-13.71-7.52-.06-4.97,11.54-7.51,15.62-8.28.46-.09.91-.24,1.37-.36.17-.04.24-.07.4-.14.37-.16.18-.15-.09-.15-.23,0-.69,0-.49-.33.1-.16.23-.35.33-.52,1.24-1.95,2.26-4.01,3.21-6.1.14-.3,3.62-8.9,4.88-11.75.14-.32.29-.66.44-.97.18-.37.89-1.83,1.15-2.3.84-1.53,2.01-3.34,3.5-4.37,2.41-1.67,4.87-.77,7.05.77-1.93-1.03-4.37-1.63-6.06.13-.7.73-1.12,1.73-1.35,2.68-.09.38.14.4-.12.92-.11.23-.1.33-.13.58-.21,2.13.11,4.45.59,6.54-.98-.67-1.56-1.3-1.74-1.9-.32,2.86,1.2,4.57,4.57,5.13-4.65.87-7.79,3.44-9.41,7.69,4.14-.84,8.43-.84,12.57,0h0Z" stroke-width="0"/></g>
</svg>
</a>
`


const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      }
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.xl,
    },
    {
      title: 'Special Sponsor',
      monthlyDollars: Infinity,
      composeAfter(compose,_,config) {
        if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) { 
          compose
            .addSpan(20)
            .addText('Special Sponsor', 'sponsorkit-tier-title')
            .addSpan(10)
            .addRaw(NYXB_LOGO(config.width!, compose.height))
            .addSpan(130)
        }
      }
    },
  ]
})
