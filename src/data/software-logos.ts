import type { StaticImageData } from "next/image";

import quickbooks from "@/assets/software/accounting/quickbooks.png";
import xero from "@/assets/software/accounting/xero.png";
import zoho from "@/assets/software/accounting/zoho.png";
import wave from "@/assets/software/accounting/wave.png";
import freshbooks from "@/assets/software/accounting/freshbooks.png";

import shopify from "@/assets/software/ecom/shopify.png";
import amazon from "@/assets/software/ecom/amazon.png";
import bigcommerce from "@/assets/software/ecom/bigcommerce.png";
import ebay from "@/assets/software/ecom/ebay.png";
import etsy from "@/assets/software/ecom/etsy.png";
import woocommerce from "@/assets/software/ecom/woocommerce.png";

import gusto from "@/assets/software/payroll/gusto.png";
import adp from "@/assets/software/payroll/adp.png";
import paychex from "@/assets/software/payroll/paychex.png";

import billCom from "@/assets/software/payments/bill-com.png";
import dext from "@/assets/software/payments/dext.png";
import clio from "@/assets/software/payments/clio.svg";
import expensify from "@/assets/software/payments/expensify.png";

import appfolio from "@/assets/software/property/appfolio.png";
import buildium from "@/assets/software/property/buildium.png";
import yardi from "@/assets/software/property/yardi.png";
import airbnb from "@/assets/software/property/airbnb.png";
import buildertrend from "@/assets/software/property/buildertrend.png";
import resman from "@/assets/software/property/resman.png";

export type SoftwareCategory =
  | "all"
  | "accounting"
  | "property"
  | "ecom"
  | "payroll"
  | "payments";

export type SoftwareLogo = {
  name: string;
  category: Exclude<SoftwareCategory, "all">;
  src: StaticImageData;
  darkBackground?: boolean;
};

export const SOFTWARE_CATEGORIES: {
  id: SoftwareCategory;
  label: string;
}[] = [
  { id: "all", label: "All Software" },
  { id: "accounting", label: "Accounting" },
  { id: "property", label: "Property Management" },
  { id: "ecom", label: "E-commerce" },
  { id: "payroll", label: "Payroll" },
  { id: "payments", label: "Payments" },
];

export const SOFTWARE_LOGOS: SoftwareLogo[] = [
  { name: "QuickBooks", category: "accounting", src: quickbooks },
  { name: "Xero", category: "accounting", src: xero },
  { name: "Zoho Books", category: "accounting", src: zoho },
  { name: "Wave", category: "accounting", src: wave },
  { name: "FreshBooks", category: "accounting", src: freshbooks },

  { name: "AppFolio", category: "property", src: appfolio },
  { name: "Buildium", category: "property", src: buildium },
  { name: "Yardi", category: "property", src: yardi },
  { name: "Airbnb", category: "property", src: airbnb },
  { name: "Buildertrend", category: "property", src: buildertrend },
  { name: "ResMan", category: "property", src: resman },

  { name: "Shopify", category: "ecom", src: shopify, darkBackground: true },
  { name: "Amazon", category: "ecom", src: amazon },
  { name: "BigCommerce", category: "ecom", src: bigcommerce },
  { name: "eBay", category: "ecom", src: ebay },
  { name: "Etsy", category: "ecom", src: etsy },
  { name: "WooCommerce", category: "ecom", src: woocommerce },

  { name: "Gusto", category: "payroll", src: gusto },
  { name: "ADP", category: "payroll", src: adp },
  { name: "Paychex", category: "payroll", src: paychex },

  { name: "Bill.com", category: "payments", src: billCom },
  { name: "Dext", category: "payments", src: dext },
  { name: "Clio", category: "payments", src: clio },
  { name: "Expensify", category: "payments", src: expensify },
];
