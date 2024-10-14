// Import dependencies
const aOtcMarket = artifacts.require("OtcMarket");

contract("OtcMarket", (accounts) => {
  let otcMarketInstance;

  before(async () => {
    // Deploy the OTC Market contract instance
    otcMarketInstance = await aOtcMarket.deployed()
  });

  it("should set enforced options correctly", async () => {
    // Prepare the EnforcedOptionParam data
    const enforcedOptionsArray = [

      [40245,0,"0x00"]
    ];

    // Call the function to set enforced options
    await otcMarketInstance.setEnforcedOptions(enforcedOptionsArray, {
      from: accounts[0],
    });

    // // Retrieve the stored enforced options and assert to check the values
    // const storedOptions = await otcMarketInstance.getEnforcedOptions(0); // Replace '0' with appropriate index or id
    // assert.equal(storedOptions.bEid, bEid, "bEid does not match");
    // assert.equal(storedOptions.messageType, 1, "Message type does not match");
    // assert.equal(
    //   storedOptions.options.executorLzReceiveOption.gasLimit,
    //   GAS_CREATE_OFFER,
    //   "Gas limit does not match"
    // );
    // assert.equal(
    //   storedOptions.options.executorOrderedExecutionOption,
    //   true,
    //   "Ordered execution option not set correctly"
    // );
  });
});