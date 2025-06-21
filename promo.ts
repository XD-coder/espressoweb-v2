export interface PromoCode {
  code: string;
  discount: number;
  min: number;
  max: number;
  hasDiscord: boolean;
  redirect: string | null;
}

export const promocodes: PromoCode[] = [
  {
  code: 'free',
  discount: 100,
  min: 0,
  max: 299,
  hasDiscord : true,
  redirect: 'https://discord.gg/espressohost'
  },
  {
    code: 'espresso20',
    discount: 20,
    min: 300,
    max: 1000,
    hasDiscord : false,
    redirect: null
  },
  {
    code: 'SAVE10',
    discount: 10,
    min: 0,
    max: 9999,
    hasDiscord: false,
    redirect: null
  },
  {
    code: 'SUMMERDEAL',
    discount: 15,
    min: 0,
    max: 9999,
    hasDiscord: false,
    redirect: 'https://espressohost.xyz/summer-sale'
  }
]