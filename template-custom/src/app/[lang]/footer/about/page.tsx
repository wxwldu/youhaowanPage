
import Head from 'next/head';
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";



export default  async function PrivacyPolicy({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>隐私政策 - [游好玩]</title>
        <meta name="description" content="公司隐私政策，解释了如何收集、使用和保护您的个人信息。" />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-6">隐私政策</h1>

      <p className="text-sm text-gray-600 text-center mb-8">
        生效日期：[2025-01-01] | 最后更新日期：[2025-01-29]
      </p>

      <div className="prose max-w-2xl mx-auto">
        <h2>1. 我们收集的信息</h2>
        <p>
          [{dict.common.name}]（以下简称“我们”或“公司”）致力于保护您的隐私。我们可能会收集以下类型的个人信息：
        </p>
        <ul>
          <li>
            <strong>您提供的信息：</strong>
            当您注册账户、填写表单、联系我们或使用我们的服务时，我们可能会收集您的姓名、电子邮件地址、电话号码、地址、支付信息等。
          </li>
          <li>
            <strong>自动收集的信息：</strong>
            当您访问我们的网站或使用我们的服务时，我们可能会自动收集您的IP地址、设备信息、浏览器类型、操作系统、访问时间、页面浏览记录等信息。
          </li>
          <li>
            <strong>来自第三方的信息：</strong>
            我们可能会从第三方服务提供商、合作伙伴或公开来源获取您的信息，例如社交媒体平台或广告网络。
          </li>
        </ul>

        <h2>2. 我们如何使用您的信息</h2>
        <p>我们可能会将您的个人信息用于以下目的：</p>
        <ul>
          <li>提供、维护和改进我们的服务；</li>
          <li>处理您的交易和订单；</li>
          <li>与您沟通，包括发送通知、更新和支持消息；</li>
          <li>个性化您的体验，例如推荐内容或产品；</li>
          <li>进行市场调研、数据分析和服务优化；</li>
          <li>遵守法律法规和执行我们的政策。</li>
        </ul>

        <h2>3. 我们如何共享您的信息</h2>
        <p>我们不会将您的个人信息出售给第三方。但在以下情况下，我们可能会共享您的信息：</p>
        <ul>
          <li>
            <strong>服务提供商：</strong>
            我们可能会与第三方服务提供商共享信息，以帮助我们运营业务和提供服务，例如支付处理、数据分析、客户支持等。
          </li>
          <li>
            <strong>法律要求：</strong>
            如果法律要求或为了保护我们的合法权益，我们可能会披露您的信息。
          </li>
          <li>
            <strong>业务转让：</strong>
            如果公司发生合并、收购或资产出售，您的信息可能会作为交易的一部分被转移。
          </li>
        </ul>

        <h2>4. 您的权利</h2>
        <p>根据适用法律，您可能享有以下权利：</p>
        <ul>
          <li>访问、更正或删除您的个人信息；</li>
          <li>限制或反对我们处理您的个人信息；</li>
          <li>撤回您对某些数据处理的同意；</li>
          <li>获取您的个人信息副本。</li>
        </ul>
        <p>如您希望行使上述权利，请联系我们：[联系方式]。</p>

        <h2>5. 数据安全</h2>
        <p>
          我们采取合理的技术和组织措施来保护您的个人信息，防止未经授权的访问、使用或披露。然而，请注意，没有任何互联网传输或存储方法是完全安全的。
        </p>

        <h2>6. 儿童隐私</h2>
        <p>
          我们的服务不面向未满[年龄]岁的儿童。如果我们发现无意中收集了儿童的个人信息，我们将尽快删除。
        </p>

        <h2>7. 隐私政策的变更</h2>
        <p>
          我们可能会不时更新本隐私政策。任何更改将在更新后的隐私政策发布后生效。我们建议您定期查看本政策以了解最新内容。
        </p>
      </div>
    </div>
  );
}
