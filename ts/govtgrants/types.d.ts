// Generated by dedot cli

import type { AccountId32 } from "dedot/codecs";

export type InkStorageLazyMapping = {};

export type InkStorageTraitsImplsResolverKey = {};

export type InkStorageTraitsImplsAutoKey = {};

export type InkStorageTraitsImplsManualKey = {};

export type Govtgrants = {
  owner: AccountId32;
  submitProposalPhaseStarted: boolean;
  bidders: Array<AccountId32>;
  bidderProposals: InkStorageLazyMapping;
};

export type InkPrimitivesLangError = "CouldNotReadInput";

export type GovtgrantsError =
  | "BiddingNotStarted"
  | "CallerNotOwner"
  | "ErrorTransferringAmount"
  | "BidderAlreadySubmittedProposal"
  | "NoEntries";

export type InkEnvNoChainExtension = null;
