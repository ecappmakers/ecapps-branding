"use strict";
/**
 * @ecappmakers/branding
 * Centralized Design Tokens, Logos, and Product Branding Registry
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_BRANDING = void 0;
exports.getProductBranding = getProductBranding;
exports.PRODUCT_BRANDING = {
    devsuite: {
        id: 'devsuite',
        name: 'DevSuite',
        shortName: 'DevSuite',
        tagline: 'Developer Suite & Cloud Tools',
        description: 'High-velocity developer utilities, system monitors, and cloud infrastructure operations.',
        brandColor: '#3f6ad8',
        accentColor: '#6610f2',
        heroGradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6610f2 100%)',
        iconClass: 'pe-7s-tools',
        portalUrl: 'https://devsuite.dev.ecapps.in',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradDevSuite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3f6ad8"/>
          <stop offset="100%" stop-color="#6610f2"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradDevSuite)"/>
      <path d="M22 28 L34 40 L22 52 M42 52 H54" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`
    },
    pixos: {
        id: 'pixos',
        name: 'Pixos',
        shortName: 'Pixos',
        tagline: 'Digital Asset & Media Operating System',
        description: 'Enterprise image processing, generative media studio, and intelligent CDN delivery.',
        brandColor: '#8854d0',
        accentColor: '#a55eea',
        heroGradient: 'linear-gradient(135deg, #2c1654 0%, #4b238c 50%, #8854d0 100%)',
        iconClass: 'pe-7s-photo',
        portalUrl: 'https://dev.pixos.in',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradPixos" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8854d0"/>
          <stop offset="100%" stop-color="#a55eea"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradPixos)"/>
      <circle cx="35" cy="35" r="16" stroke="#ffffff" stroke-width="5" fill="none"/>
      <circle cx="43" cy="27" r="3" fill="#ffffff"/>
    </svg>`
    },
    inv8: {
        id: 'inv8',
        name: 'Inv8',
        shortName: 'Inv8',
        tagline: 'Smart Event & Guest Invoicing OS',
        description: 'Cryptographic passes, dynamic pricing, seating orchestrations, and guest registration.',
        brandColor: '#e056fd',
        accentColor: '#ff7979',
        heroGradient: 'linear-gradient(135deg, #440a67 0%, #8c1d8c 50%, #e056fd 100%)',
        iconClass: 'pe-7s-ticket',
        portalUrl: 'https://dev.inv8.in',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradInv8" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e056fd"/>
          <stop offset="100%" stop-color="#ff7979"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradInv8)"/>
      <path d="M26 22 H44 M35 22 V48 M24 48 H46" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    </svg>`
    },
    pos: {
        id: 'pos',
        name: 'EC POS',
        shortName: 'POS',
        tagline: 'Point of Sale & Retail Checkout OS',
        description: 'High-speed retail counter billing, barcode scanning, offline sync, and shift closures.',
        brandColor: '#ff9f43',
        accentColor: '#ee5253',
        heroGradient: 'linear-gradient(135deg, #803000 0%, #c44500 50%, #ff9f43 100%)',
        iconClass: 'pe-7s-shopbag',
        portalUrl: 'https://pos.dev.ecapps.in',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradPos" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff9f43"/>
          <stop offset="100%" stop-color="#ee5253"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradPos)"/>
      <rect x="20" y="24" width="30" height="22" rx="4" stroke="#ffffff" stroke-width="4" fill="none"/>
      <path d="M26 46 H44 M35 46 V54" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    </svg>`
    },
    store: {
        id: 'store',
        name: 'EC Store',
        shortName: 'Store',
        tagline: 'Modern Commerce & Digital Storefront',
        description: 'Omnichannel inventory, product catalog, cart checkout, and customer engagement.',
        brandColor: '#10ac84',
        accentColor: '#1dd1a1',
        heroGradient: 'linear-gradient(135deg, #054030 0%, #0a7358 50%, #10ac84 100%)',
        iconClass: 'pe-7s-cart',
        portalUrl: 'https://store.dev.ecapps.in',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradStore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10ac84"/>
          <stop offset="100%" stop-color="#1dd1a1"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradStore)"/>
      <path d="M22 30 H48 L44 50 H26 Z" stroke="#ffffff" stroke-width="4" fill="none" stroke-linejoin="round"/>
      <path d="M29 30 V25 C29 21 32 18 35 18 C38 18 41 21 41 25 V30" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`
    },
    shlk: {
        id: 'shlk',
        name: 'shlk.in',
        shortName: 'ShortLink',
        tagline: 'High-Performance URL Routing & Analytics',
        description: 'Enterprise link shortening, vanity routing, deep linking, and clickstream intelligence.',
        brandColor: '#10ac84',
        accentColor: '#00d2d3',
        heroGradient: 'linear-gradient(135deg, #063d30 0%, #0a6952 50%, #10ac84 100%)',
        iconClass: 'pe-7s-link',
        portalUrl: 'https://dev.shlk.in',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradShlk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10ac84"/>
          <stop offset="100%" stop-color="#00d2d3"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradShlk)"/>
      <path d="M28 35 C28 29 33 24 39 24 H44 C50 24 55 29 55 35 C55 41 50 46 44 46 H41" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M42 35 C42 41 37 46 31 46 H26 C20 46 15 41 15 35 C15 29 20 24 26 24 H29" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/>
    </svg>`
    },
    masterflow: {
        id: 'masterflow',
        name: 'MasterFlow',
        shortName: 'MasterFlow',
        tagline: 'Smart Campus & Workflow OS',
        description: 'Enterprise education administration, student admissions, attendance, and exam management.',
        brandColor: '#2e86de',
        accentColor: '#54a0ff',
        heroGradient: 'linear-gradient(135deg, #103b70 0%, #1e5ba8 50%, #2e86de 100%)',
        iconClass: 'pe-7s-network',
        portalUrl: 'https://dev.masterflow.cloud',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradMf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2e86de"/>
          <stop offset="100%" stop-color="#54a0ff"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradMf)"/>
      <circle cx="25" cy="35" r="7" fill="#ffffff"/>
      <circle cx="45" cy="25" r="7" fill="#ffffff"/>
      <circle cx="45" cy="45" r="7" fill="#ffffff"/>
      <path d="M25 35 L45 25 M25 35 L45 45" stroke="#ffffff" stroke-width="4"/>
    </svg>`
    },
    'friends-electricals': {
        id: 'friends-electricals',
        name: 'Friends Electricals',
        shortName: 'Friends Electricals',
        tagline: 'Electrical Wholesale & Contractor Supply',
        description: 'B2B commercial inventory, industrial cables, power tools, and automated tax invoicing.',
        brandColor: '#f39c12',
        accentColor: '#e67e22',
        heroGradient: 'linear-gradient(135deg, #663e00 0%, #b36b00 50%, #f39c12 100%)',
        iconClass: 'pe-7s-gleam',
        portalUrl: 'https://dev.friendselectricals.store',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradFe" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f39c12"/>
          <stop offset="100%" stop-color="#e67e22"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradFe)"/>
      <path d="M38 18 L24 38 H36 L32 54 L48 32 H36 Z" fill="#ffffff"/>
    </svg>`
    },
    accounts: {
        id: 'accounts',
        name: 'EC APPS Accounts',
        shortName: 'Accounts',
        tagline: 'Centralized Identity & Security Guardian',
        description: 'One unified account for enterprise authentication, cryptographic security, and cloud access.',
        brandColor: '#1e3c72',
        accentColor: '#2a5298',
        heroGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1e3c72 50%, #2a5298 100%)',
        iconClass: 'pe-7s-shield',
        portalUrl: 'https://accounts.dev.ecapps.in',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradAccounts" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e3c72"/>
          <stop offset="100%" stop-color="#2a5298"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradAccounts)"/>
      <path d="M35 18 L48 24 V36 C48 45 35 52 35 52 C35 52 22 45 22 36 V24 Z" stroke="#ffffff" stroke-width="4" fill="none" stroke-linejoin="round"/>
      <circle cx="35" cy="31" r="4" fill="#ffffff"/>
      <path d="M35 35 V41" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    </svg>`
    },
    ecapps: {
        id: 'ecapps',
        name: 'EC APPS',
        shortName: 'EC Apps',
        tagline: 'Centralized Identity & Platform Ecosystem',
        description: 'Unified ecosystem of cloud operating systems, point-of-sale, inventory, and developer tools.',
        brandColor: '#3f6ad8',
        accentColor: '#16aaff',
        heroGradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3f6ad8 100%)',
        iconClass: 'pe-7s-key',
        portalUrl: 'https://dev.ecapps.in',
        logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="48" height="48">
      <defs>
        <linearGradient id="gradEcapps" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3f6ad8"/>
          <stop offset="100%" stop-color="#16aaff"/>
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="16" fill="url(#gradEcapps)"/>
      <path d="M22 28 H48 M22 38 H42 M22 48 H48" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    </svg>`
    }
};
/**
 * Resolves a ProductBranding object by key, fallback to parent branding.
 */
function getProductBranding(appKey) {
    if (!appKey) {
        return exports.PRODUCT_BRANDING['accounts'];
    }
    const normalized = appKey.trim().toLowerCase().replace(/^(ecapps-|app-)/, '');
    return exports.PRODUCT_BRANDING[normalized]
        || exports.PRODUCT_BRANDING[appKey.trim().toLowerCase()]
        || exports.PRODUCT_BRANDING['accounts'];
}
//# sourceMappingURL=index.js.map