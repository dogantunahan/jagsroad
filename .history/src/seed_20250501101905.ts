import { getPayload } from 'payload'
import config from '@payload-config'

const categories = [
  {
    name: 'All',
    slug: 'all',
  },
  {
    name: 'Advertising',
    slug: 'advertising',
    color: '#f3b5c9',
    subcategories: [
      { name: 'Google Ads Account', slug: 'google-ads-account' },
      { name: 'Meta Ads Account', slug: 'meta-ads-account' },
      { name: 'TikTok Ads Account', slug: 'tiktok-ads-account' },
      { name: 'Agency Setup Services', slug: 'agency-setup-services' },
      { name: 'Pre-Loaded Ad Accounts', slug: 'preloaded-ad-accounts' },
      { name: 'Warm-Up Services', slug: 'warmup-services' },
      { name: 'Cloaking Tools', slug: 'cloaking-tools' },
    ],
  },
  {
    name: 'Software',
    slug: 'software',
    color: '#6897bb',
    subcategories: [
      { name: 'Scripts', slug: 'scripts' },
      { name: 'Automation Bots', slug: 'automation-bots' },
      { name: 'Web Scrapers', slug: 'web-scrapers' },
      { name: 'Malware', slug: 'malware' },
      { name: 'Spy Tools', slug: 'spy-tools' },
      { name: 'Cracking Tools', slug: 'cracking-tools' },
      { name: 'SEO Tools', slug: 'seo-tools' },
      { name: 'Social Media Tools', slug: 'social-media-tools' },
      { name: 'Browser Profiles', slug: 'browser-profiles' },
    ],
  },
  {
    name: 'Accounts',
    slug: 'accounts',
    color: '#e6e6fa',
    subcategories: [
      { name: 'Social Media Accounts', slug: 'social-media-accounts' },
      { name: 'Cloud Storage Accounts', slug: 'cloud-storage-accounts' },
      { name: 'Streaming Accounts', slug: 'streaming-accounts' },
      { name: 'Gaming Accounts', slug: 'gaming-accounts' },
      { name: 'Email Accounts', slug: 'email-accounts' },
      { name: 'Domain Registrar Accounts', slug: 'domain-registrar-accounts' },
      { name: 'Marketplace Accounts', slug: 'marketplace-accounts' },
      { name: 'Bulk Account Packages', slug: 'bulk-account-packages' },
    ],
  },
  {
    name: 'Digital Documents',
    slug: 'digital-documents',
    color: '#ffc3a0',
    subcategories: [
      { name: 'ID Archives', slug: 'id-archives' },
      { name: 'Driver Licenses', slug: 'driver-licenses' },
      { name: 'Passport Templates', slug: 'passport-templates' },
      { name: 'Utility Bills', slug: 'utility-bills' },
      { name: 'Bank Statements', slug: 'bank-statements' },
      { name: 'Tax Certificates', slug: 'tax-certificates' },
      { name: 'Company Documents', slug: 'company-documents' },
      { name: 'Proof of Address', slug: 'proof-of-address' },
    ],
  },
  {
    name: 'Dev Resources',
    slug: 'dev-resources',
    color: '#c6e2ff',
    subcategories: [
      { name: 'SQL Queries & Snippets', slug: 'sql-snippets' },
      { name: 'API Templates', slug: 'api-templates' },
      { name: 'Database Dumps', slug: 'database-dumps' },
      { name: 'Code Snippets', slug: 'code-snippets' },
      { name: 'Full Projects', slug: 'full-projects' },
      { name: 'Script Packs', slug: 'script-packs' },
      { name: 'Exploits', slug: 'exploits' },
    ],
  },
  {
    name: 'Courses & Ebooks',
    slug: 'courses-ebooks',
    color: '#e5bb5c',
    subcategories: [
      { name: 'Marketing Courses', slug: 'marketing-courses' },
      { name: 'Coding Bootcamps', slug: 'coding-bootcamps' },
      { name: 'Cybersecurity Ebooks', slug: 'cybersecurity-ebooks' },
      { name: 'Freelancing Guides', slug: 'freelancing-guides' },
      { name: 'Hacking Tutorials', slug: 'hacking-tutorials' },
      { name: 'Dropshipping Guides', slug: 'dropshipping-guides' },
    ],
  },
  {
    name: 'Design Assets',
    slug: 'design-assets',
    color: '#a0c515',
    subcategories: [
      { name: 'UI Kits', slug: 'ui-kits' },
      { name: 'Figma Templates', slug: 'figma-templates' },
      { name: 'Ad Creatives', slug: 'ad-creatives' },
      { name: 'Logo Templates', slug: 'logo-templates' },
      { name: 'Mockups', slug: 'mockups' },
      { name: '3D Models', slug: '3d-models' },
    ],
  },
  {
    name: 'Proxies & VPN',
    slug: 'proxies-vpn',
    color: '#8ee7e7',
    subcategories: [
      { name: 'Residential Proxies', slug: 'residential-proxies' },
      { name: 'Mobile Proxies', slug: 'mobile-proxies' },
      { name: 'Datacenter Proxies', slug: 'datacenter-proxies' },
      { name: 'VPN Subscriptions', slug: 'vpn-subscriptions' },
      { name: 'Rotating Proxies', slug: 'rotating-proxies' },
    ],
  },
  {
    name: 'Email Services',
    slug: 'email-services',
    color: '#e0e34b',
    subcategories: [
      { name: 'SMTP Servers', slug: 'smtp-servers' },
      { name: 'Email Lists', slug: 'email-lists' },
      { name: 'Bulk Email Tools', slug: 'bulk-email-tools' },
      {
        name: 'Disposable Email Generators',
        slug: 'disposable-email-generators',
      },
      { name: 'Email Verification Tools', slug: 'email-verification-tools' },
    ],
  },
]

const seed = async () => {
  const payload = await getPayload({ config })

  for (const category of categories) {
    const parentCategory = await payload.create({
      collection: 'categories',
      data: {
        name: category.name,
        slug: category.slug,
        color: category.color,
        parent: null,
      },
    })

    for (const subcategory of category.subcategories || []) {
      await payload.create({
        collection: 'categories',
        data: {
          name: subcategory.name,
          slug: subcategory.slug,
          color: category.color,
          parent: parentCategory.id,
        },
      })
    }
  }
}

try {
  await seed()
  console.log('Seeded categories successfully')
  process.exit(0)
} catch (error) {
  console.error('Error seeding categories:', error)
  process.exit(1)
}
