# Kickstarter
Basic Kickstarter app on Ethereum Platform (Metamask required)

Definition of Kickstarter on Wikipedia: Kickstarter is an American public-benefit corporation based in Brooklyn, New York, that maintains a global crowdfunding platform focused on creativity. The company's stated mission is to "help bring creative projects to life".

This Kickstarter app provides the below functionalities:
1. Users(Campaign manager) can create a campaign by mentioning a minimum amount that other users need to contribute to invest in that campaign.
2. Users(Investors) can invest in any campaign listed on the home page by contributing the minimum amount required for the campaign.
3. All users can view each campaign and details specific to the campaign.
4. Campaign manager can add a request to spend the money raised (or pay to a vendor) by mentioning the reason for the same.
5. Investors of a specific campaign can approve or disapprove the requests (of that particular campaign) by viewing all the requests.
6. Campaign manager can finalize the request and get the authority to spend the money raised only after the number of approvers(investors) are more than 50% of the number of contributors.
7. Once the manager finalizes the request, the money is automatically sent to the vendor's account.
8. Some color coding used for the requests:
  a. The request that is finalized/completed is greyed out.
  b. The request which has the required number of approvals from investors turns green.
  c. Active requests follow the normal color code. 

Note:
1. Metamask is required to do transactions / interact with the app.
2. Wherever money is mentioned it is either in wei or ether, which is mentioned wherever a transaction needs to be done.
3. The manager cannot run away with the investors' money as the entire process is done via a smart contract.
4. The smart contract for this application is deployed on the address: 0x26576ea0a832FF86124ce0f10aC64aC89d0A5cBf
