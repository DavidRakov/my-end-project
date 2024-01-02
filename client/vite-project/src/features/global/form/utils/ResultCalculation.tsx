import { NotInStock, NotInStockApterSub } from "../../../order/types/types";
import { setAfterCheck } from "../../cart/cartSlice";

export const ResultCalculation = (notInStock: NotInStock[]) => {
  const toReturn: NotInStockApterSub[] = [];
  notInStock.forEach((product) => {
    const references = product.requiredQuantity - product.product.quantity;
    const exist = product.requiredQuantity - references;
    setAfterCheck({ id: product.product.id, toRemove: references });
    toReturn.push({
      product: product.product,
      requiredQuantity: product.requiredQuantity,
      exist,
      missing: references,
    });
  });
  return toReturn;
};
