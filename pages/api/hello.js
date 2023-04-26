// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      nav: [
        {
          name: "Show All Tyres",
          url: "javascript:vodi(0);",
          order: 1,
        },
        {
          name: "Find a Dealer",
          url: "javascript:vodi(0);",
          order: 1,
        },
        {
          name: "Guides & Videos",
          url: "javascript:vodi(0);",
          order: 1,
        },
        {
          name: "Go with",
          url: "javascript:vodi(0);",
          order: 1,
        },
        {
          name: "Service & Help",
          url: "javascript:vodi(0);",
          order: 1,
        }
      ],
    }
  )
}
