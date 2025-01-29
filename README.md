公司官网


[English Documentation](README.md) | [中文文档](README_CN.md)


# nextjs-saas-template

A simple and user-friendly, SEO-friendly Next.js template designed for quick setup of landing pages, SaaS websites, and more, without complex configurations.

The template is continuously updated…

## Preview

- `template-custom Black-and-white minimalist theme`


- `template-gradient Colorful gradient theme`


## Tech Stack

- next.js 14
- shadcn/ui
- radix-ui
- tailwindcss
- lucide   
- i18next
- supabase
- google oauth
- github oauth

## Features

- Dark mode
- SEO-friendly
- Multi-language support
- Blog
- Pricing
- Login/Registration(Email, Github, Google)
- User dashboard

## Usage

- Clone the repository
  ```bash
  git clone git@github.com:jiweiyeah/nextjs-saas-template.git
  ```
- Install dependencies
  ```bash
  cd nextjs-saas-template/template-custom
  npm install

  cd nextjs-saas-template/template-gradient
  npm install
  ```
- Configure environment variables
  ```bash
  NEXT_PUBLIC_SUPABASE_URL=xxxxx
  NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
  NEXT_PUBLIC_APP_URL=xxxxx

  # Github OAuth
  GITHUB_CLIENT_ID=xxxxx
  GITHUB_CLIENT_SECRET=xxxxx 
  GITHUB_CALLBACK_URL=xxxxx/api/auth/github/callback

  # Google OAuth
  GOOGLE_CLIENT_ID=xxxxx
  GOOGLE_CLIENT_SECRET=xxxxx
  ```
- Run the project
  ```bash
  cd nextjs-saas-template/template-custom
  npm run dev

  cd nextjs-saas-template/template-gradient
  npm run dev
  ```

## Deployment
- [Vercel](https://vercel.com/docs)
- [Netlify](https://docs.netlify.com/frameworks/next-js/overview/)

## Contact

Feel free to reach out and share your valuable feedback!

Email: freeourdays@gmail.com

Twitter: https://x.com/freeourdays

WeChat: yeheboo

<table>
  <tr>
    <td><img src="./images/WechatIMG248.jpg" alt="Image 1" width="200"></td>
    <td><img src="./images/WechatIMG276.jpg" alt="Image 2" width="200"></td>
  </tr>
</table>
