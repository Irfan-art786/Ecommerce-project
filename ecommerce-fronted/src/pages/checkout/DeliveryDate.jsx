import dayjs from "dayjs";

export function DeliveryDate({ deliveryOptions, cartItem }) {
  const seletedDeliveryOption = deliveryOptions.find((deliveryOption) => {
    return deliveryOption.id === cartItem.deliveryOptionId;
  });

  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(seletedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM, D",
      )}
    </div>
  );
}
