import { StringIterator } from "cypress/types/lodash"

export type NavLinksType = {
  heading1: string
  heading2: string
  navLinks: Array<{
    id: number
    title: string
    url: string
  }>
}

export type BannerPropsType = {
  data: {
    backgroundBannerImage?: string
    heading: string
    description?: string
    actionBtn1?: string
    actionBtn2?: string
  }
}
//---------------------------------------------my data---------------------------------------//
export type BannerPropsType2 = {
  type:string,
  banners: Array<{
    backgroundBannerImage?: string
    heading: string
    description?: string
    actionBtn1?: string
    actionBtn2?: string
  }>
}

export type quotesCardType = {
  data: {
    id: number
    description: string
    name: string
    designation: string
  }
}

export type offerDataType = {
  data:{
    id: number
    title: string
    discount: string
    image: string
  }
  }
}

//--------------------------------------------------end of my data--------------------------------//

export type testimonialCardType = {
  data: {
    id: number
    description: string
    image: string
    name: string
    designation: string
  }
}

// product type start
export type ProductCardType = {
  data: Product
}
type Product = {
  id: string
  title: string
  subtitle: string
  status: string
  external_id: null | string
  description: string
  handle: string
  is_giftcard: boolean
  discountable: boolean
  thumbnail: string
  collection_id: null | string
  type_id: string
  weight: null | number // Change this based on the actual type
  length: null | number // Change this based on the actual type
  height: null | number // Change this based on the actual type
  width: null | number // Change this based on the actual type
  hs_code: null | string
  origin_country: null | string
  mid_code: null | string
  material: null | string
  created_at: string
  updated_at: string
  deleted_at: null | string
  metadata: null | Record<string, any> // Change this based on the actual type
  profile_id: string
  collection: null | Record<string, any> // Change this based on the actual type
  images: Image[]
  options: Option[]
  profiles: Profile[]
  tags: string[]
  type: ProductType
  variants: Variant[]
}
type Image = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: null | string
  url: string
  metadata: null | Record<string, any> // Change this based on the actual type
}
type Option = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: null | string
  title: string
  product_id: string
  metadata: null | Record<string, any> // Change this based on the actual type
  values: OptionValue[]
}
type OptionValue = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: null | string
  value: string
  option_id: string
  variant_id: string
  metadata: null | Record<string, any> // Change this based on the actual type
}
type Profile = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: null | string
  name: string
  type: string
  metadata: null | Record<string, any> // Change this based on the actual type
}
type ProductType = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: null | string
  value: string
  metadata: null | Record<string, any> // Change this based on the actual type
}
type Variant = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: null | string
  title: string
  product_id: string
  sku: string
  barcode: null | string
  ean: null | string
  upc: null | string
  variant_rank: number
  inventory_quantity: number
  allow_backorder: boolean
  manage_inventory: boolean
  hs_code: null | string
  origin_country: string
  mid_code: null | string
  material: null | string
  weight: null | number // Change this based on the actual type
  length: null | number // Change this based on the actual type
  height: null | number // Change this based on the actual type
  width: null | number // Change this based on the actual type
  metadata: null | Record<string, any> // Change this based on the actual type
  options: OptionValue[]
  prices: Price[]
  original_price: null | number // Change this based on the actual type
  calculated_price: null | number // Change this based on the actual type
  original_price_includes_tax: null | number // Change this based on the actual type
  calculated_price_includes_tax: null | number // Change this based on the actual type
  original_price_incl_tax: null | number // Change this based on the actual type
  calculated_price_incl_tax: null | number // Change this based on the actual type
  original_tax: null | number // Change this based on the actual type
  calculated_tax: null | number // Change this based on the actual type
  tax_rates: null | number[] // Change this based on the actual type
  purchasable: boolean
}
type Price = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: null | string
  currency_code: string
  amount: number
  min_quantity: null | number // Change this based on the actual type
}
// product type end

export type ServiceCardType = {
  data: {
    id: number
    icon: string
    heading: string
    serviceDescription: string
  }
}
export type ContactDetailType = {
  data: {
    id: number
    icon: any
    description: string
  }
}
