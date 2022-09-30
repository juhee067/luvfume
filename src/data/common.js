const top_banner = [
  {
    id: 1,
    content: "2만원 이상 구매시, 미니어쳐 2종 증정",
  },
  {
    id: 2,
    content: "케어세트 구매시, 핸드 크림 본품 1개 증정",
  },
  {
    id: 3,
    content: "전 제품 무료 배송(ACC 구매시, 제외)",
  },
  {
    id: 4,
    content: "회원가입시, 3,000 point 적립 / 카플친 추가 5% 할인",
  },
];

const NAVLINKL = [
  {
    id: 1,
    menu: "SHOP",
    link: "/",
    submenu: [
      {
        id: 1,
        menu: "ALL",
        link: "/recommand/cake",
      },
      {
        id: 2,
        menu: "HAND CARE ",
        link: "/recommand/gift",
      },
      {
        id: 3,
        menu: "BODY CARE",
        link: "/recommand/gift",
      },
      {
        id: 4,
        menu: "GIFT SET ",
        link: "/recommand/gift",
      },
      {
        id: 5,
        menu: "ACC",
        link: "/recommand/gift",
      },
    ],
  },
  {
    id: 2,
    menu: "BRAND",
    link: "/",
    submenu: [
      {
        id: 1,
        menu: "BRAND STORY",
        link: "/recommand/cake",
      },
      {
        id: 2,
        menu: "CONTACT",
        link: "/recommand/gift",
      },
    ],
  },
  { id: 3, menu: "CAMPAIGN", link: "/" },
];
const NAVLINKR = [
  { id: 1, menu: "LOGIN", link: "/" },
  { id: 2, menu: "ACCOUNT", link: "/" },
];

export { top_banner, NAVLINKL, NAVLINKR };
