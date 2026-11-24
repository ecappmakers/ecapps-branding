/**
 * @ecappmakers/branding
 * Centralized Design Tokens, Logos, and Product Branding Registry
 */
export interface ProductBranding {
    id: string;
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    brandColor: string;
    accentColor: string;
    heroGradient: string;
    iconClass: string;
    logoSvg: string;
    portalUrl?: string;
}
export declare const PRODUCT_BRANDING: Record<string, ProductBranding>;
/**
 * Resolves a ProductBranding object by key, fallback to parent branding.
 */
export declare function getProductBranding(appKey?: string | null): ProductBranding;
//# sourceMappingURL=index.d.ts.map