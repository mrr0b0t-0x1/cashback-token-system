import * as rulesetService from "../services/ruleset.service";
import * as rulesetInterface from "../../interfaces/ruleset.interface";
import * as userInterface from "../../interfaces/user.interface";

export const createRuleset = async (
  ruleset: rulesetInterface.RuleSet,

) => {
  console.log(`RulesetController : createRuleset :: User ${ruleset}`);

  const userRegister = await rulesetService.createRuleset(ruleset);

  console.log(`RulesetController : createRuleset :: Ack ${ruleset}`);

  return userRegister;
};

export const claimRuleset = async (clameRequest: any) => {
  console.log(`Controller claimRuleset :: User ${clameRequest.username}`);

  const userRegister = await rulesetService.clameRuleSet(clameRequest);

  return userRegister
};

export const queryRuleset = async (clameRequest: any) => {
  console.log(`Controller queryRuleset :: User ${clameRequest.username}`);

  const userRegister = await rulesetService.clameRuleSet(clameRequest);

  return userRegister
};