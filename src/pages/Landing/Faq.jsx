import { useState } from "react";
import Accordion from "./Accordion";
import Starter from "./Starter"
import CustomerSurvey from "./CustomerSurvey";


const Faq = () => {
    let faqs = [
      {
        id: 1,
        show: false,
        outerText: "How do I activate my SIM?",
        innerText:
          "<ul><li>First things first. Make sure you have registered your line or SIM card number. No shortcuts here!</li><li>Once you have registered, insert that SIM into your phone.</li><li className='font-bold'>Get It Going: To kickstart things, dial a number, send out SMS, or try browsing.</li><li><span className='font-bold'>Top It Up:</span> After activation, do not forget to top up your line. You can use a regular recharge voucher or go for the E-top-up, whichever floats your boat.</li><li><span className='font-bold'>Stay Active:</span> Keep the action going by doing something chargeable within 48 hours. Make a call, send an SMS, or go on a browsing adventure; do not stay silent for too long, or your line might get barred!</li></ul>",
      },
      {
        id: 2,
        show: false,
        outerText: "How can I get a special phone number?",
        innerText:
          "For special numbers (lines), please visit any of our experience centers. <br/><br/> <span className='text-[#d5c634]'>Find a center near you </span>",
      },
      {
        id: 3,
        show: false,
        outerText: "Where do I register my line?",
        innerText:
          "Visit any 9Mobile Experience Center. <br/><br/> <span className='text-[#d5c634]'>Find a center near you",
      },
      {
        id: 4,
        show: false,
        outerText: "How do I switch (port in) to 9mobile network?",
        innerText:
          "Visit any 9Mobile experience center with the following:One passport photograph and a valid form of ID, e.g., a Nigerian national identity card, passport, or driver’s license Certificate of Incorporation or Certificate of Registration (for corporate accounts)Fill out a port-in request form.Text “PORT” to 3232.",
      },
      {
        id: 5,
        show: false,
        outerText: "What do I need for a sim replacement/swap?",
        innerText:
          "If you are thinking about getting a replacement for your SIM card in Nigeria, here is what you need to do:First things first, make sure your SIM card is registered—that's a must!In addition, provide a valid means of identification, such as the SIM pack or other evidence of direct purchase or ownership of the SIM. Where this is unavailable, an affidavit attesting to the ownership and loss of the SIM must be provided.Please note that any of the identification methods listed below continue to be an obligatory prerequisite for SIM replacemen Nigerian National ID Card/NIMC Slip Nigerian Driver’s license Permanent Voter’s Card (PVC)International passport A letter of Authentication by a Traditional ruler or community leader affixed with your passport photograph Affidavit and declaration sworn under oath stating that the declarant does not have an identity card A few details you should knoThe photo image is your means of identification and must be easily recognizable when compared to your appearance If you are a foreigner, please note that only your international passport will be needed for this procedure.",
      },
      {
        id: 6,
        show: false,
        outerText: "How can I secure my SIM card?",
        innerText:
          "All 9Mobile SIM cards come with default PIN To change the default PIN: Dial: *247*0000*new PIN# or Visit any 9Mobile experience center To change an old PIN: Dial: *247*old PIN*new PIN# To reset your PIN: Call 300 or Visit any 9Mobile experience center",
      },
      {
        id: 7,
        show: false,
        outerText: "How do I locate the nearest experience center to me?",
        innerText: "Click here to find a centre near you",
      },
      {
        id: 8,
        show: false,
        outerText: "How can I get self-service on 9mobile?",
        innerText:
          "We have various self-service platforms. You can use any you are comfortable with: *301# (USSD for all phone types) Ig9ite App for smartphones (android & apple devices) Download it from App Store Get it on Google Play",
      },
      {
        id: 9,
        show: false,
        outerText: "How do I buy data or airtime?",
        innerText:
          "You can buy directly from our Website & EShop Or The Ig9ite app: Download from App store Download from Google play Or visit any of our experience centers Find a center near you",
      },
      {
        id: 10,
        show: false,
        outerText: "How do I borrow airtime or data?",
        innerText:
          "Dial *303# to borrow airtime or data. You can borrow more even with existing credit. Click for here for More info",
      },
      {
        id: 11,
        show: false,
        outerText: "How do I check my airtime balance?",
        innerText: "Dial *310# to check your airtime balance.",
      },
      {
        id: 12,
        show: false,
        outerText: "How do I check my data balance?",
        innerText: "Dial *323# to check the data balance. More info",
      },
      {
        id: 3,
        outerText:
          "Where can I buy devices, e.g smartphones, routers & modems?",
        innerText:
          "Buy devices conveniently online from the 9mobile eshop and get them delivered to your preferred location anywhere in Nigeria. Or Visit any of our experience centers",
      },
      {
        id: 14,
        show: false,
        outerText: "How do I migrate from one package to another?",
        innerText:
          "You can migrate from one prepaid package to another by dialing any of the applicable codes. Kindly note that some packages attract a migration fee. To migrate, To morecliq dial *244*1# more info To 9konfam dial *1400# To moreflexplus dial *320# To morelife complete dial *620*1# To Morebusiness 2.0 To Morebusiness combopak",
      },
      {
        id: 15,
        show: false,
        outerText: "How do I make a request for postpaid & business solutions?",
        innerText:
          "To request postpaid and business solutions, email us at: enterprisebusiness@9mobile.com.ng Get more info",
      },
      {
        id: 16,
        show: false,
        outerText: "Can a Postpaid subscriber use self-service?",
        innerText:
          "Yes. On our self-service platforms, you can view and download postpaid bills, account details, contract details, and much more. Take me to postpaid self-service",
      },
      {
        id: 17,
        show: false,
        outerText: "How do I get my postpaid bill?",
        innerText:
          "You can access your postpaid bill via email at care@9mobile.com.ng OR contact your 9mobile Account Manager for Corporate customers.",
      },
      {
        id: 18,
        show: false,
        outerText: "How do I speak to a customer care agent?",
        innerText: "You can speak to any of our customer care agents by: Dialing 300 Using our live chat or contact us via mail at care@9mobile.com.ng",
      },
    ];

    const [toggle, setToggle] = useState(0)
    const[open, setOpen] = useState(false)
    
    function handleToggle(id){
        let handler = faqs
        .filter((faq) => faq.id === id)
        .map((faq) => faq.show === open ? true : false);
        console.log(handler[0])
        setOpen(handler[0])
        setToggle(id)
    }
    console.log(open)
    
  return (
    <div className="bg-[#f9fafb] w-full min-h-screen pb-10 px-5 my-10 sm:px-20">
      <Starter header={"Frequently Asked Questions"} btnText={"See more"} />
      <div className="space-y-3 px-7">
      {faqs.map((faq) => (
        <Accordion key={faq.id} onClick={()=>handleToggle(faq.id)} innerHTML  {...faq} compare={toggle !== faq.id} open={open} />
      ))}

      </div>
      <CustomerSurvey/>
    </div>
  );
}

export default Faq
