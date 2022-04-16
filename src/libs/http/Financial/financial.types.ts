export interface getPayments {
  payments_ammountPaid: number;
  payments_status: string;
  invoices_series: string;
  invoices_number: string;
  invoices_date: Date;
  invoices_type: string;
  invoices_currencyType: string;
  courses_name: string;
}

export interface getDiscounts {
  discounts_id: number;
  discounts_date: Date;
  discounts_taxType: string;
  discounts_discountAmmount: number;
  discounts_details: string;
  discounts_status: string;
}
