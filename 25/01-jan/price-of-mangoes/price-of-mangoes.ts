/*
Description:
Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
But! Every third mango is free!
*/
export function mango(quantity: number, price: number): number {
  const quantityPaid = Math.ceil((quantity * 2) / 3);
  return price * quantityPaid;
}
