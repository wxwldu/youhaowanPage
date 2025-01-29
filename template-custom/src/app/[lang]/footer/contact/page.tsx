
import Head from 'next/head';
import Image from "next/image"; 
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
// import type { Locale } from "@/i18n/config"
// import { getDictionary } from "@/i18n/get-dictionary"



export default async function PrivacyPolicy({
  params
}: {
  // lang: Locale
  params: { slug: string; lang: Locale };
}) {

  const dict = await getDictionary(params.lang)
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>联系我们</title>
      </Head>
        <ul>
          <li>电子邮件：wuxuwen@youhaowankeji.com</li>
          {/* <li>电话：[电话号码]</li> */}
          <li>地址：深圳市宝安区新安街道海裕社区82区华美居A区C座商业楼822</li>
        </ul>
        <div className="h-8" /> {/* 30 */}<div className="h-8" /> {/* 30 */}<div className="h-8" /> {/* 30 */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          {/* 微信打赏 */}
          <a 
            href="/wechat-qrcode" // 替换为实际跳转链接
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 transition-transform hover:scale-105"
          >
            <div className="relative aspect-square bg-white rounded-xl shadow-lg p-2 w-64 h-64">
              <Image
                src="/images/wechat.JPG" // 替换为微信二维码图片URL
                alt="微信打赏二维码"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <h4 className="text-base  items-center  font-semibold">{dict.footer.wexinpay}</h4>
            </div><h4 className="text-base font-semibold">{dict.footer.buyCoffee}</h4>
          </a>

          {/* 支付宝打赏 */}
          <a
            href="/alipay-qrcode" // 替换为实际跳转链接
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 transition-transform hover:scale-105"
          >
            <div className="relative aspect-square bg-white rounded-xl shadow-lg  p-2 w-64 h-64">
              <Image
                src="/images/alipay.JPG" // 替换为支付宝二维码图片URL
                alt="支付宝打赏二维码"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              /><h4 className="text-base font-semibold">{dict.footer.AliPay}</h4>
            </div><h4 className="text-base font-semibold">{dict.footer.buyCoffee}</h4>
          </a>
        </div>
        {/* <p className="mt-8 text-center text-gray-600">
          感谢您信任游好玩！
        </p> */}
      </div>
  );
}
