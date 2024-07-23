import { useState } from "react";
import Accordion from "./Accordion";
import Starter from "./Starter";
import CustomerSurvey from "./CustomerSurvey";

const Faq = () => {
  let faqs = [
    {
      id: 1,
      show: false,
      outerText: "How do I activate my SIM?",
      innerText: () => (
        <ul className="list-disc ms">
          <li>
            Make sure you have a SIM card and a phone with a SIM card slot.
          </li>
          <li>Insert the SIM card into your phone and wait for it to load.</li>
          <li>
            Go to Settings &gt; Cellular &gt; SIM card &gt; Switch SIM card &gt;
            Select your 9Mobile SIM card.
          </li>
          <li>
            If prompted, enter your 9Mobile PIN and click 'Switch SIM card'.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      show: false,
      outerText: "How can I get a special phone number?",
      innerText: () => (
        <p>
          For special numbers (lines), please visit any of our experience
          centers. <br />
          <br /> <span className="text-[#d5c634]">Find a center near you </span>
        </p>
      ),
    },
    {
      id: 3,
      show: false,
      outerText: "Where do I register my line?",
      innerText: () => (
        <p>
          Visit any 9Mobile Experience Center. <br />
          <br /> <span className="text-[#d5c634]">
            Find a center near you
          </span>{" "}
        </p>
      ),
    },
    {
      id: 4,
      show: false,
      outerText: "How do I switch (port in) to 9mobile network?",
      innerText: () => (
        <ul className="list-disc ms-2">
          Visit any 9Mobile experience center with the following:{" "}
          <li>
            One passport photograph and a valid form of ID, e.g., a Nigerian
            national identity card, passport, or driver’s license{" "}
          </li>
          <li>
            Certificate of Incorporation or Certificate of Registration (for
            corporate accounts)
          </li>
          <li>Fill out a port-in request form.</li>
          <li>Text “PORT” to 3232.</li>
        </ul>
      ),
    },
    {
      id: 5,
      show: false,
      outerText: "What do I need for a sim replacement/swap?",
      innerText: () => (
        <p>
          If you are thinking about getting a replacement for your SIM card in
          Nigeria, here is what you need to do: <br /> <br />
          First things first, make sure your SIM card is registered—that's a
          must! <br /> <br />
          <span className="font-semibold">
            In addition, provide a valid means of identification, such as
          </span>{" "}
          the SIM pack or other evidence of direct purchase or ownership of the
          SIM. Where this is unavailable,
          <span className="font-semibold">an affidavit</span> attesting to the
          ownership and loss of the SIM must be provided. <br /> <br />
          <ul className="list-disc">
            Please note that any of the identification methods listed below
            continue to be an obligatory prerequisite for SIM replacemen <br />{" "}
            <br />
            <li>Nigerian National ID Card/NIMC Slip</li>
            <li> Nigerian Driver’s license</li>
            <li> Permanent Voter’s Card (PVC)</li>
            <li>International passport </li>{" "}
            <li>
              {" "}
              A letter of Authentication by a Traditional ruler or community
              leader affixed with your passport photograph
            </li>{" "}
            <li>
              Affidavit and declaration sworn under oath stating that the
              declarant does not have an identity card
            </li>{" "}
            <br />
            <br />A few details you should know: <br /> <br />
            <li>
              The photo image is your means of identification and must be easily
              recognizable when compared to your appearance
            </li>{" "}
            <li>
              {" "}
              If you are a foreigner, please note that only your international
              passport will be needed for this procedure.
            </li>
          </ul>
        </p>
      ),
    },
    {
      id: 6,
      show: false,
      outerText: "How can I secure my SIM card?",
      innerText: () => (
        <p>
          All 9Mobile SIM cards come with default PIN <br /> <br /> To change
          the default PIN: <br />
          <br />
          <br />
          <br />
          <br />
          <ul className="list-disc mb-3">
            <li>Dial: *247*0000*new PIN# or</li>
            <li>
              {" "}
              <span className="text-[#d5c634]">
                Visit any 9Mobile experience center
              </span>
            </li>
            <br />
            <br />
            Tochange an old PIN:
            <br />
            <br />
            <li>Dial: *247*old PIN*new PIN#</li>
            <br />
            <br /> reset your PIN:
            <br />
            <br />
            <br />
            <li>
              Call <span className="text-[#d5c634]">300 </span> or
            </li>
            <li className="text-[#d5c634]">
              Visit any 9Mobile experience center{" "}
            </li>
          </ul>{" "}
        </p>
      ),
    },
    {
      id: 7,
      show: false,
      outerText: "How do I locate the nearest experience center to me?",
      innerText: () => (
        <p>
          Click <span className="text-[#d5c634]"> here </span> to find a centre
          near you
        </p>
      ),
    },
    {
      id: 8,
      show: false,
      outerText: "How can I get self-service on 9mobile?",
      innerText: () => (
        <ul className="list-disc">
          {" "}
          <p className="mb-3">
            We have various self-service platforms. You can use any you are
            comfortable with:
          </p>
          <li>*301# (USSD for all phone types)</li>
          <li>
            {" "}
            <span className="font-semibold">Ig9ite App</span> for smartphones
            (android & apple devices)
          </li>
          <br /> <br />
          Download it from{" "}
          <span className="text-[#d5c634]">
            {" "}
            App Store <br />
          </span>{" "}
          Get it on <span className="text-[#d5c634]"> Google Play </span>
        </ul>
      ),
    },
    {
      id: 9,
      show: false,
      outerText: "How do I buy data or airtime?",
      innerText: () => (
        <ul>
          You can buy directly from our <br />
          <br />
          <li>
            <span className="text-[#d5c634]">Website & EShop</span>
          </li>
          <br /> <br />
          Or
          <br />
          <br /> <br />
          <li>The Ig9ite app:</li>
          <li>Download from</li>{" "}
          <span className="text-[#d5c634]">App store </span>
          <li>
            Download from <span className="text-[#d5c634]">Google play\ </span>
          </li>
          <br />
          <br />
          Or visit any of our experience centers <br /> <br />{" "}
          <span className="text-[#d5c634]">Find a center near you</span>
        </ul>
      ),
    },
    {
      id: 10,
      show: false,
      outerText: "How do I borrow airtime or data?",
      innerText: () => (
        <p>
          Dial *303# to borrow airtime or data. <br />
          You can borrow more even with existing credit. <br />
          <br />
          Click for here for<span className="text-[#d5c634]">
            More info
          </span>{" "}
        </p>
      ),
    },
    {
      id: 11,
      show: false,
      outerText: "How do I check my airtime balance?",
      innerText: () => (
        <p>
          Dial <span className="font-semibold">*310# </span>to check your
          airtime balance.
        </p>
      ),
    },
    {
      id: 12,
      show: false,
      outerText: "How do I check my data balance?",
      innerText: () => (
        <p>
          Dial <span className="font-semibold">*323# </span>to check the data
          balance. <br />
          <span className="text-[#d5c634]">More info</span>{" "}
        </p>
      ),
    },
    {
      id: 13,
      show: false,
      outerText: "Where can I buy devices, e.g smartphones, routers & modems?",
      innerText: () => (
        <p>
          Buy devices{" "}
          <span className="text-[#d5c634]">
            conveniently online from the 9mobile eshop
          </span>{" "}
          and get them delivered to your preferred location anywhere in Nigeria.{" "}
          <br /> <br /> Or <br /> <br />{" "}
          <span className="text-[#d5c634]">
            Visit any of our experience centers
          </span>
        </p>
      ),
    },
    {
      id: 14,
      show: false,
      outerText: "How do I migrate from one package to another?",
      innerText: () => (
        <ul className="list-disc">
          You can migrate from one prepaid package to another by dialing any of
          the applicable codes. Kindly note that some packages attract a
          migration fee. <br />  <br />To migrate, <br />
          <br />{" "}
          <li>
            To <span className="text-[#d5c634]">morecliq</span> dial *244*1#{" "}
            <span className="text-[#d5c634]">more info </span>
          </li>{" "}
          <li>
            To <span className="text-[#d5c634]">9konfam</span> dial *1400#{" "}
          </li>{" "}
          <li>
            {" "}
            To <span className="text-[#d5c634]">moreflexplus</span> dial *320#
          </li>{" "}
          <li>
            To <span className="text-[#d5c634]">morelife complete</span> dial
            *620*1#{" "}
          </li>{" "}
          <li>
            To <span className="text-[#d5c634]">Morebusiness 2.0</span>{" "}
          </li>{" "}
          <li>
            To <span className="text-[#d5c634]">Morebusiness combopak</span>
          </li>
        </ul>
      ),
    },
    {
      id: 15,
      show: false,
      outerText: "How do I make a request for postpaid & business solutions?",
      innerText: () => (
        <p>
          To request postpaid and business solutions, email us at:
          <span className="text-[#d5c634] ms-2">
            enterprisebusiness@9mobile.com.ng
          </span>{" "}
          <br /> <br />
          <span className="text-[#d5c634]">Get more info</span>
        </p>
      ),
    },
    {
      id: 16,
      show: false,
      outerText: "Can a Postpaid subscriber use self-service?",
      innerText: () => (
        <p>
          Yes. On our self-service platforms, you can view and download postpaid
          bills, account details, contract details, and much more. <br />
          <br />{" "}
          <span className="text-[#d5c634]">
            GTake me to postpaid self-service
          </span>
        </p>
      ),
    },
    {
      id: 17,
      show: false,
      outerText: "How do I get my postpaid bill?",
      innerText: () => (
        <p>
          You can access your postpaid bill via email at care@9mobile.com.ng OR
          contact your 9mobile Account Manager for Corporate customers.
        </p>
      ),
    },
    {
      id: 18,
      show: false,
      outerText: "How do I speak to a customer care agent?",
      innerText: () => (
        <ul className="list-disc">
          You can speak to any of our customer care agents by: <br />
          <br />
          <li>
            <span className="text-[#d5c634]">Dialing 300</span>{" "}
          </li>
          <li>
            Using our <span className="text-[#d5c634]">live chat </span>
          </li>
          <li>
            or contact us via mail at{" "}
            <span className="text-[#d5c634]">care@9mobile.com.ng</span>
          </li>
        </ul>
      ),
    },
  ];

  const [toggle, setToggle] = useState(0);
  const [open, setOpen] = useState(false);

  function handleToggle(id) {
    let handler = faqs
      .filter((faq) => faq.id === id)
      .map((faq) => (faq.show === open ? true : false));
    setOpen(handler[0]);
    setToggle(id);
  }

  return (
    <div className="bg-[#f9fafb] w-full min-h-screen pb-10 px-5 my-10 sm:px-20">
      <Starter header={"Frequently Asked Questions"} btnText={"See more"} />
      <div className="space-y-3 px-7">
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            onClick={() => handleToggle(faq.id)}
            {...faq}
            compare={toggle !== faq.id}
            open={open}
          />
        ))}
      </div>
      <CustomerSurvey />
    </div>
  );
};

export default Faq;
