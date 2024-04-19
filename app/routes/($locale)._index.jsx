import { defer, json } from '@shopify/remix-oxygen'
import { Await, useLoaderData, Link } from '@remix-run/react'
import { Suspense } from 'react'
import { Image, Money, Pagination, getPaginationVariables } from '@shopify/hydrogen'
import { useVariantUrl } from '~/lib/variants'
import img1 from "../assets/tiktok-img-1.jpg"
import img2 from "../assets/tiktok-img-2.jpg"
import img3 from "../assets/tiktok-img-3.jpg"

/** @type {MetaFunction} */
export const meta = () => {
  return [{ title: 'Cupcake | Home' }]
};

/** @param {LoaderFunctionArgs} */
export async function loader({ request, context }) {
  const { storefront } = context
  const paginationVariables = getPaginationVariables(request, { pageBy: 8, })
  const { collections } = await storefront.query(FEATURED_COLLECTION_QUERY)
  const featuredCollection = collections.nodes[0]
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY)
  const men = await storefront.query(COLLECTION_QUERY, { variables: { handle: "men", ...paginationVariables }, })

  return defer({ featuredCollection, recommendedProducts, men })
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData()
  const { men } = useLoaderData()

  return (
    <>
      <div className="home">
        <FeaturedCollection collection={data.featuredCollection} />
        <section className="home__ctaContainer">
          <h2 className="home__ctaContainer_title">Id luctus libero</h2>
          <p className="home__ctaContainer_subTitle">Sit egestas proin sed placerat mattis mauris.</p>
          <a className="home__ctaContainer_btn">Id elementum</a>
        </section>
        <section className="tiktokSection">
          <div className="tiktokSection__container">
            <h2>Cursus amet enim vestibulum tellus cras tellus.</h2>
            <div className="tiktokSection__imgBox">
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
            </div>
          </div>
        </section>
        <RecommendedProducts products={data.recommendedProducts} />
      </div>
      <div className="homeSection">
        <h2>Men</h2>
        <div>
          <Pagination connection={men.collection.products}>
            {({ nodes }) => (<ProductsGrid products={nodes} />)}
          </Pagination>
        </div>
      </div>
    </>
  )
}

/** @param {{products: ProductItemFragment[]}} */
function ProductsGrid({ products }) {
  return (
    <div className="products-grid">
      {products.map((product, index) => { return (<ProductItem key={product.id} product={product} loading={index < 8 ? 'eager' : undefined} />) })}
    </div>
  )
}

/** @param {{ product: ProductItemFragment; loading?: 'eager' | 'lazy'; }} */
function ProductItem({ product, loading }) {
  const variant = product.variants.nodes[0]
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions)
  return (
    <Link className="product-item" key={product.id} prefetch="intent" to={variantUrl} >
      {product.featuredImage && (
        <Image alt={product.featuredImage.altText || product.title} aspectRatio="1/1" data={product.featuredImage} loading={loading} sizes="(min-width: 45em) 400px, 100vw" />
      )}
      <h4>{product.title}</h4>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
    </Link>
  )
}

/** @param {{ collection: FeaturedCollectionFragment }} */
function FeaturedCollection({ collection }) {
  if (!collection) return null
  const image = collection?.image
  return (
    <Link className="featured-collection" to={`/collections/${collection.handle}`}>
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
      <div className="hero__squareThing">
        <p>Shopify + Hydrogen</p>
      </div>
    </Link>
  )
}

/** @param {{ products: Promise<RecommendedProductsQuery> }} */
function RecommendedProducts({ products }) {
  return (
    <div className="recommended-products section">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({ products }) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link key={product.id} className="recommended-product" to={`/products/${product.handle}`} >
                  <Image data={product.images.nodes[0]} aspectRatio="1/1" sizes="(min-width: 45em) 20vw, 50vw" />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
      }
    }
  }
`

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

/** @typedef {import('storefrontapi.generated').ProductItemFragment} ProductItemFragment */