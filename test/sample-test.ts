import { expect } from "./chai-setup";
import { ethers, deployments, getNamedAccounts } from "hardhat";
import type { Greeter } from "../typechain-types";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    await deployments.fixture(["Greeter"]);
    const {deployer} = await getNamedAccounts();
    console.log(deployer)
    const greeter = await ethers.getContract<Greeter>("Greeter");

    expect(await greeter.greet()).to.equal("hello");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

