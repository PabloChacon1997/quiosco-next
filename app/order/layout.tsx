import OderSummary from "@/components/order/OderSummary";
import OrderSidebar from "@/components/order/OrderSidebar";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar />
        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
          {children}
        </main>
        <OderSummary />
      </div>
      <ToastNotification />
    </>
  )
}