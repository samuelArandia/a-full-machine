/**
 * ATM Rent - Ecommerce Components
 *
 * Componentes de UI para el ecommerce de arriendo de equipos de construcción
 * Diseño basado en skyworksllc.com
 *
 * Componentes disponibles:
 *
 * Layout & Navigation:
 * - TopBar: Barra superior con teléfono y portal de clientes
 * - MarqueeBanner: Banner con texto animado tipo marquee
 * - NavbarEcommerce: Navegación principal con dropdowns y sidebar de cotización
 *
 * Hero & Landing:
 * - HeroSlider: Slider de hero con imágenes de fondo y CTAs
 * - TrustSection: Sección de confianza con iconos y descripción
 * - CategoryGrid: Grid de categorías de equipos con overlay
 *
 * Products:
 * - ProductCard: Tarjeta de producto con botón de cotización
 * - CollectionHeader: Header de colección con breadcrumbs
 * - ProductDetailSkyworks: Detalle de producto estilo Skyworks con especificaciones
 *
 * Quote:
 * - La funcionalidad de cotización se maneja en /es/shop/quote
 * - Los productos se guardan en localStorage bajo 'rentalQuote'
 *
 * Uso:
 *
 * ```astro
 * ---
 * import EcommerceLayout from "@/layouts/EcommerceLayout.astro";
 * import HeroSlider from "@components/ecommerce/HeroSlider.astro";
 * import CategoryGrid from "@components/ecommerce/CategoryGrid.astro";
 * ---
 *
 * <EcommerceLayout title="Mi Página">
 *   <HeroSlider slides={[...]} />
 *   <CategoryGrid categories={[...]} />
 * </EcommerceLayout>
 * ```
 */

export {};
