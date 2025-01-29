import Link from "next/link"
import Image from "next/image"; 
import { ThumbsUp } from "lucide-react"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

export default async function Footer({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const footerLinks = {
    [dict.footer.product]: [
    ],
    [dict.footer.product]: [
      { name: dict.footer.links.game1, href: `` },
      { name: dict.footer.links.game2, href: `` },
      { name: dict.footer.links.game3, href: `` }
    ],
    [dict.footer.social]: [
      { name: dict.footer.links.google, href: `` },
      { name: dict.footer.links.wechat, href: `` },
      { name: dict.footer.links.xhs, href: `` },
    ],
    [dict.footer.support]: [
      // { name: dict.footer.links.help, href: `/${lang}/footer/help` },
      { name: dict.footer.links.contact, href: `/${lang}/footer/contact` },
      // { name: dict.footer.links.feedback, href: `/${lang}/footer/feedback` },
      // { name: dict.footer.links.status, href: `/${lang}/footer/status` },
    ],
    [dict.footer.information]: [
      // <Footer lang={lang} />
      { name: dict.footer.links.about, href: `/${lang}/footer/about` },
      // { name: dict.footer.links.terms, href: `/${lang}/footer/terms` },
      { name: dict.footer.links.privacy, href: `/${lang}/footer/privacy` },
      // { name: dict.footer.links.jobs, href: `/${lang}/footer/jobs` },
    ],
  }

  return (
    <footer className="relative w-full bg-background/40 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background/5 to-transparent pointer-events-none" />
      <div className="container relative px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="flex flex-col items-center space-y-3">
  <Image src="/images/logo.png" alt="Company Logo" width={100} height={100} />
  <h4 className="text-base font-semibold">{dict.common.brand}</h4>
</div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3 text-center">
              <h4 className="text-base font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(category === dict.footer.product || category === dict.footer.social
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {}
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center mt-12 pt-8 border-t space-y-4">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="h-6 w-6" />
            <span className="font-semibold">{dict.common.brand}</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>{dict.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
