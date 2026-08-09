import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSummary from "@/components/Cart/CartSummary";
export default function CartPage(){
 return <><Header/><main className="container py-12"><h1>سلة المشتريات</h1><CartSummary/></main><Footer/></>;
}
