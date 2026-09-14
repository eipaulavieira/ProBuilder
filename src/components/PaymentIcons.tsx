import Image from "next/image";

export default function PaymentIcons() {
  return (
    <Image
      src="/images/payment.png"
      alt="Visa, MasterCard, Discover, American Express, Bitcoin"
      width={342}
      height={56}
      className="h-7 w-auto"
    />
  );
}
