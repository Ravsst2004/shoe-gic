import Layouts from "../components/layouts/Layouts";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import countries from "../../data/countries.json";
import Textarea from "../components/ui/Textarea";
import { CartContext } from "../store/cartContext";
import { useContext, useState } from "react";
import bankData from "../../data/bankData.json";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Checkout() {
  const { items } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("");

  const subTotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const shippingFee = Number((subTotal / items.length - 50).toFixed(2));
  const total = Number(shippingFee + subTotal).toFixed(2);

  return (
    <Layouts>
      <section>
        <div className="flex flex-col lg:flex-row gap-4 mx-auto max-w-sm md:max-w-xl lg:max-w-7xl my-10 px-4">
          <form className="flex flex-col gap-4 border-2 p-4 rounded-lg lg:w-[65%]">
            <h1 className="text-xl font-semibold">Billing details</h1>
            <Input
              label="First name"
              placeholder="John"
              type="text"
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-slate-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            <Input
              label="Last name"
              placeholder="Doe"
              type="text"
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-slate-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />

            <Select
              label="Country"
              placeholder="Select country"
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-slate-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
            <Textarea
              label="Address"
              type="text"
              placeholder="123 Main Street"
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="appearance-none block w-full px-3 py-2 h-36 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            ></Textarea>
            <Input
              label="Address Detail"
              type="text"
              placeholder="Apartment, studio, or floor"
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-slate-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            <Input
              label="Postcode"
              type="number"
              placeholder="12345"
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-slate-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            <Input
              label="Phone"
              type="text"
              placeholder="123-456-7890"
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-slate-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            <Input
              label="Email"
              type="text"
              placeholder="bqyqz@example.com"
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-slate-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            <Textarea
              label="Order notes (optional)"
              placeholder="Notes about your order, e.g. special notes for delivery."
              labelClassName={"block font-medium leading-5 text-gray-700"}
              className="appearance-none placeholder:text-sm block w-full px-3 py-2 h-20 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            ></Textarea>
          </form>

          <div className="flex flex-col gap-4 mt-10 lg:mt-0 border-2 p-4 rounded-lg lg:w-[35%] lg:h-fit">
            {items && items.length > 0 ? (
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Your order</h1>
                <div className="flex justify-between items-center">
                  <span>Product</span>
                  <span>Price</span>
                </div>
                <hr className="border-[1px] border-slate-400/25" />
                <div>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <span>{item.title}</span>
                      <span>${item.price}</span>
                    </div>
                  ))}
                </div>
                <hr className="border-[1px] border-slate-400/25" />
                <div className="flex justify-between items-center">
                  <span>Subtotoal</span>
                  <span>${subTotal}</span>
                </div>
                <hr className="border-[1px] border-slate-400/25" />
                <div className="flex justify-between items-center">
                  <span>Shipping</span>
                  <span>${shippingFee}</span>
                </div>
                <hr className="border-[1px] border-slate-400/25" />
                <div className="flex justify-between items-center">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <hr className="border-[1px] border-slate-400/25" />

                <div className="flex flex-col gap-4 my-4">
                  <div>
                    <div
                      onClick={() => setPaymentMethod("bankTransfer")}
                      className="flex items-center gap-2"
                    >
                      <Input
                        type="radio"
                        id="bankTransfer"
                        name="paymentMethod"
                        required
                      />
                      <label htmlFor="bankTransfer" className="uppercase">
                        Bank Transfer
                      </label>
                    </div>
                    {paymentMethod === "bankTransfer" && (
                      <Select
                        label="Bank"
                        labelClassName={"hidden"}
                        className={`block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-slate-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5`}
                      >
                        {bankData.map((bank) => (
                          <option key={bank.code} value={bank.name}>
                            {bank.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </div>

                  <div>
                    <div
                      onClick={() => setPaymentMethod("cashOnDelivery")}
                      className="flex items-center gap-2"
                    >
                      <Input
                        type="radio"
                        id="cashOnDelivery"
                        name="paymentMethod"
                        required
                      />
                      <label htmlFor="cashOnDelivery" className="uppercase">
                        Cash On Delivery
                      </label>
                    </div>
                    {paymentMethod === "cashOnDelivery" && (
                      <p>Pay with cash upon delivery.</p>
                    )}
                  </div>

                  <div>
                    <div
                      onClick={() => setPaymentMethod("payPal")}
                      className="flex items-center gap-2"
                    >
                      <Input
                        type="radio"
                        id="payPal"
                        name="paymentMethod"
                        required
                      />
                      <label htmlFor="payPal" className="uppercase">
                        Paypal
                      </label>
                    </div>
                    {paymentMethod === "payPal" && (
                      <p>
                        Pay via Paypal you can pay with your credit card if you
                        don’t have a PayPal account.
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-sm text-justify">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <Link className="text-red-600 hover:text-red-400">
                    privacy policy
                  </Link>
                  .
                </p>

                <Button className="text-center bg-slate-950 border-slate-950 text-white mt-4 rounded">
                  Place order
                </Button>
              </div>
            ) : (
              <>
                <p>Your cart is empty</p>{" "}
                <Link
                  to="/shop"
                  className="text-center border-2 cursor-pointer p-2 bg-slate-950 border-slate-950 text-white rounded"
                >
                  Find something to buy
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </Layouts>
  );
}
