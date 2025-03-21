import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import Image from "next/image";
import {
  Bookmark,
  // Share2,
  // Shield
} from "lucide-react"
import Link from "next/link";
// import { url } from "inspector";

export default async function Features({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const features = [
    // {
    //   icon: <BookOpen className="h-6 w-6" />,
    //   title: dict.features.tabs.title,
    //   description: dict.features.tabs.description
    // },
    {
      icon: <Bookmark className="h-6 w-6" />,
      title: dict.features.bookmarks[0].title,
      description: dict.features.bookmarks[0].description,
      url:dict.features.bookmarks[0].url
    },{
      icon: <Bookmark className="h-6 w-6" />,
      title: dict.features.bookmarks[1].title,
      description: dict.features.bookmarks[1].description,
      url:dict.features.bookmarks[0].url
    },{
      icon: <Bookmark className="h-6 w-6" />,
      title: dict.features.bookmarks[2].title,
      description: dict.features.bookmarks[2].description,
      url:dict.features.bookmarks[0].url
    },{
      icon: <Bookmark className="h-6 w-6" />,
      title: dict.features.bookmarks[3].title,
      description: dict.features.bookmarks[3].description,
      url:dict.features.bookmarks[0].url
    }
    // {
    //   icon: <Share2 className="h-6 w-6" />,
    //   title: dict.features.share.title,
    //   description: dict.features.share.description
    // },
    // {
    //   icon: <Shield className="h-6 w-6" />,
    //   title: dict.features.security.title,
    //   description: dict.features.security.description
    // }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {dict.home.title}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.home.description}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
        
  {/* <a target="_blank">Click this link</a> */}
  {features.map((feature, index) => (
            <Card key={index} className="aspect-square  flex flex-col">
              <CardHeader>
                {/* <div className="mb-2">{feature.icon}</div> */}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              {/* <CardContent className="flex-1">
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </CardContent> */}
              {/* feature.icon */}
              <Link href={feature.url}>
              <Image src="/images/wechat.JPG" alt="games"
                width={300}
                height={300} className="w-full h-full object-contain" />
                </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
