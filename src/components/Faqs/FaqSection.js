import React from 'react'
import './faqs.css'
import Faq from 'react-faq-component';

const data = {
  title: "Home Visit",
  rows: [
    {
      title: "How can I make the most of my time when visiting homes?",
      content: "Get an accurate idea of your price range, an estimate of your monthly payments and a pre-approval letter, so sellers will take you seriously when you make an offer. Work with your MB agent to hone your “wants” and “needs” list. Think about what’s most important to you: the location or the house itself. Plan an itinerary with your Metropolitan Brokers agent."
    },
    {
      title: "What should I expect when visiting homes?",
      content: "You and your MB agent typically visit homes together. Homeowners usually are not home, so you’re free to spend as little or as much time as you want. Buyers often have a gut reaction to a home. First impressions count, but you can also consult your agent to learn more about home values and possibly to reevaluate your priorities in the context of what’s available in your price range."
    },
    {
      title: "How many homes should I visit?",
      content: "Sometimes buyers find their future home the first time out and others look at 50 homes before they see one that checks all their boxes. It’s a good idea to see at least a few alternatives so you have some points of comparison, but sometimes you just know a place is where you want to live."
    },
    {
      title: "What should I look for when visiting homes?",
      content: "Look beyond the staging and decorative items to see the features and fixtures that convey with the house. Check the condition of the home. Keep track with photos and notes. Consider possible home improvements you might want to make so you can research costs later. Don’t forget to check out the outside of the property and the neighborhood. Your MB agent has access to neighborhood insights and data to help inform your decision. If the property is a condo or located in a homeowners association, find out the fees and rules to see if you can live with them."
    }]
}
const data2 = {
  title: "Making an Offer",
  rows: [
    {
      title: "What should I include with my offer?",
      content: "The price,  Terms – such as a request for closing cost help or that the offer is subject to your obtaining financing and a home inspection, Target date for closing, Earnest money deposit – your MB agent can advise you about how big your deposit should be based on local customs and current conditions, Request for final walk-through, and Time limit for the offer."
    },
    {
      title: "What are the most common contingencies?",
      content: "1. Financing. Unless you’re paying cash, it’s typical to write your offer with a contingency clause that lets you off the hook if you can’t finalize your mortgage within a certain number of days. Even though you have a pre-approval for a loan, it’s smart to protect yourself. 2. Home inspection. Your offer can be made dependent on a satisfactory home inspection report within a certain number of days. This protects you if the inspection uncovers expensive necessary repairs."
    },
    {
      title: "What is a counteroffer?",
      content: "Sellers can accept your offer as is or they can make a counteroffer with an adjustment to some or all of your terms. You can accept or reject the counteroffer and make your own counteroffer. The contract is final once you and the sellers have agreed to all the terms."
    }]
}
const data3 = {
  title: "Schedule Home Inspection",
  rows: [
    {
      title: "What is a home inspection?",
      content: "Your home inspector will check a massive list (more than 1,000 items) of systems, appliances and structures in your home to evaluate its condition. You’ll get a written report that identifies potential problems and future maintenance issues. It’s up to you to decide whether the report means you want to walk away from a house or ask the sellers to make repairs. You can also have an “information only” inspection, which means you’re buying the house as is, but want to know its condition."
    },
    {
      title: "What’s included on a home inspection?",
      content: "The inspector will check: Structural conditions such as the foundation, beams and floors, Roof condition, Mechanical systems such as heat and air conditioning, Appliances – to make sure they’re working, Plumbing – for leaks, rust and water pressure, Electrical systems such as grounded outlets and code violations, and Safety issues such as stairs, handrails, mold or chimney maintenance."
    },
    {
      title: "What should I watch for during the home inspection?",
      content: "You and your MB agent should attend the home inspection to learn about home maintenance and so you can see any potential problems yourself. The inspector can answer questions as you go, so if there’s anything you don’t understand or are worried could be a problem, just ask."
    }]
}
const data4 = {
  title: "Get a Home Warranty",
  rows: [
    {
      title: "What is a home warranty?",
      content: "A home warranty policy, which typically lasts for one year and is renewable, provides coverage for some of your home’s systems and appliances. In return for the annual fee, the company will cover repair costs and arrange for contractors. You’ll pay a deductible fee and possibly service fees if you need to use the warranty."
    },
    {
      title: "Do I need a home warranty?",
      content: "If you’re buying an existing home, especially one with appliances that are more than four years old, a home warranty can give you peace of mind about paying for unexpected repairs and finding a reliable contractor. If you’re a first-time buyer, especially if you have limited savings, this can be particularly important. If you have plenty of emergency savings, you’re handy or know good contractors, you may not need a warranty. Your real estate agent can also be a good source of recommendations for contractors. If you’re buying a newly built home, structural defects are usually under warranty by the builder for 10 years and other items are typically covered for six months to two years, so you don’t usually need a home warranty."
    },
    {
      title: "What should I look for in a home warranty?",
      content: "The home warranty company’s license with your state’s real estate commission, The fine print – that’s where you’ll find exclusions and limitations, What’s covered and what’s not, The coverage limits – your repairs will only be paid for up to a specific level, Service fees and deductibles, How quickly service and claims are handled, How contractors are vetted and what happens if you use your own, Coverage differences between a basic warranty and enhanced warranty, and Online reviews."
    }]
}

const data5 = {
  title: "Close",
  rows: [
    {
      title: "What should I do before the closing?",
      content: "Stay in close touch with your Metropolitan Brokers agent, lender and title company. Avoid lowering your credit score with a new credit application or late payments. Confirm that your contract contingencies are resolved, including the home inspection, an appraisal and your financing. Finalize your homeowner’s insurance policy. Gather your down payment and closing cost funds in an accessible account. Review your Closing Disclosure form, which you’ll receive three days before your settlement, and ask questions if you don’t understand something. Arrange a wire transfer or get a cashier’s check for the funds you need for the settlement. Schedule a walk-through of your new home within 24 hours before your closing to check its condition."
    },
    {
      title: "What can I expect at the closing?",
      content: "Paperwork! Allot a few hours for your closing. Bring to the closing: A government-issued photo ID, Proof of homeowner’s insurance, Your copy of the contract, All paperwork associated with your loan and the home purchase, Your cashier’s check or wire transfer confirmation, and Your checkbook for miscellaneous funds that weren’t included on your closing estimate."
    },
    {
      title: "What paperwork is required to close?",
      content: "You’ll be signing numerous documents, including a repeat of the documents you signed when you applied for your loan. The most important documents you’ll sign are: Promissory Note to repay the mortgage, Deed of Trust, which gives the lender the right to foreclose if you don’t repay the loan, What’s covered and what’s not, Initial Escrow Disclosure, which outlines the funds on deposit for your property taxes and homeowner’s insurance bills, Right to Cancel form, which states that you have three business days to cancel the transaction."
    },
    {
      title: "What’s next?",
      content: "After your closing: Keep all your signed documents in a safe place. Avoid lowering your credit score with a new credit application or late payments. Change your address. Change the locks and security codes on your home. Review your due dates and new budget. Congratulations! You’ve got the keys to your new home! Stay in touch with your Metropolitan Brokers agent for future recommendations and service."
    }]
}

const FaqSection = () => {
    return (
        
        <div className="container mar-top">
            <h2 className="text-center m-2 mb-5">Faqs</h2>
            <Faq  className="faq"
            data={data}
                styles={{
                bgColor: "white",
                titleTextColor: "#48482a",
                rowTitleColor: "#78789a",
                rowTitleTextSize: 'large',
                rowContentColor: "#48484a",
                rowContentTextSize: '16px',
                rowContentPaddingTop: '10px',
                rowContentPaddingBottom: '10px',
                rowContentPaddingLeft: '50px',
                rowContentPaddingRight: '50px',
                arrowColor: "black",
                transitionDuration: ".5s",
                timingFunc: "linear"
                }} 
            />
            <br/>
            <br/>
            <Faq 
            data={data2}
                styles={{
                bgColor: "white",
                titleTextColor: "#48482a",
                rowTitleColor: "#78789a",
                rowTitleTextSize: 'large',
                rowContentColor: "#48484a",
                rowContentTextSize: '16px',
                rowContentPaddingTop: '10px',
                rowContentPaddingBottom: '10px',
                rowContentPaddingLeft: '50px',
                rowContentPaddingRight: '50px',
                arrowColor: "black",
                transitionDuration: ".5s",
                timingFunc: "linear"
                }} 
            />
            <br/>
            <br/>
            <Faq 
            data={data3}
                styles={{
                bgColor: "white",
                titleTextColor: "#48482a",
                rowTitleColor: "#78789a",
                rowTitleTextSize: 'large',
                rowContentColor: "#48484a",
                rowContentTextSize: '16px',
                rowContentPaddingTop: '10px',
                rowContentPaddingBottom: '10px',
                rowContentPaddingLeft: '50px',
                rowContentPaddingRight: '50px',
                arrowColor: "black",
                transitionDuration: ".5s",
                timingFunc: "linear"
                }} 
            />
            <br/>
            <br/>
            <Faq 
            data={data4}
                styles={{
                bgColor: "white",
                titleTextColor: "#48482a",
                rowTitleColor: "#78789a",
                rowTitleTextSize: 'large',
                rowContentColor: "#48484a",
                rowContentTextSize: '16px',
                rowContentPaddingTop: '10px',
                rowContentPaddingBottom: '10px',
                rowContentPaddingLeft: '50px',
                rowContentPaddingRight: '50px',
                arrowColor: "black",
                transitionDuration: ".5s",
                timingFunc: "linear"
                }} 
            />
            <br/>
            <br/>
            <Faq 
            data={data5}
                styles={{
                bgColor: "white",
                titleTextColor: "#48482a",
                rowTitleColor: "#78789a",
                rowTitleTextSize: 'large',
                rowContentColor: "#48484a",
                rowContentTextSize: '16px',
                rowContentPaddingTop: '10px',
                rowContentPaddingBottom: '10px',
                rowContentPaddingLeft: '50px',
                rowContentPaddingRight: '50px',
                arrowColor: "black",
                transitionDuration: ".5s",
                timingFunc: "linear"
                }} 
            />
        </div>
    )
}

export default FaqSection
