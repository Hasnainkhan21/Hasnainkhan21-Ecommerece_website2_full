import React from "react"
import { FaHeadset, FaShippingFast, FaMoneyBillWave, FaLock,FaTag  } from "react-icons/fa"


export default function InfoSection() {

    const infoItems = [
        {
            icon: <FaShippingFast color="red" />,
            title: 'Free Shipping',
            description: 'Free shipping on all orders'
        },
        {
            icon: <FaHeadset color="red"  />,
            title: 'Support 24/7',
            description: 'We are here to help you 24/7'
        },
        {
            icon: <FaMoneyBillWave color="red"  />,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied'
        },
        {
            icon: <FaLock color="red"  />,
            title: 'Payment Secure',
            description: 'Your payement information is safe with us'
        },
        {
            icon: <FaTag color="red"  />,
            title: 'Discount',
            description: 'Enjoy the best prices on our products'
        }

    ]

    return(
        <div className="bg-white pb-8 pt-12">
            <div className="container mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {infoItems.map((Item, index) =>(
               <div key={index} className="flex flex-col bg-blue-200 items-center text-center p-4 border rounded-lg shadow-md
               transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                {Item.icon}
              <h3 className="mt-4 text-xl font-semibold">{Item.title}</h3>  
              <p className="mt-2 text-grey-600">{Item.description}</p>  
               </div> 
            ))}
            </div>

        </div>
    )
}