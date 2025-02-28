/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Vault,
  VaultsListBySubscriptionIdOptionalParams,
  VaultsListByResourceGroupOptionalParams,
  VaultsGetOptionalParams,
  VaultsGetResponse,
  VaultsCreateOrUpdateOptionalParams,
  VaultsCreateOrUpdateResponse,
  VaultsDeleteOptionalParams,
  PatchVault,
  VaultsUpdateOptionalParams,
  VaultsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Vaults. */
export interface Vaults {
  /**
   * Fetches all the resources of the specified type in the subscription.
   * @param options The options parameters.
   */
  listBySubscriptionId(
    options?: VaultsListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<Vault>;
  /**
   * Retrieve a list of Vaults.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Vault>;
  /**
   * Get the Vault details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    options?: VaultsGetOptionalParams
  ): Promise<VaultsGetResponse>;
  /**
   * Creates or updates a Recovery Services vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param vault Recovery Services Vault to be created.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    vault: Vault,
    options?: VaultsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VaultsCreateOrUpdateResponse>,
      VaultsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a Recovery Services vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param vault Recovery Services Vault to be created.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    vault: Vault,
    options?: VaultsCreateOrUpdateOptionalParams
  ): Promise<VaultsCreateOrUpdateResponse>;
  /**
   * Deletes a vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vaultName: string,
    options?: VaultsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates the vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param vault Recovery Services Vault to be created.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vaultName: string,
    vault: PatchVault,
    options?: VaultsUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<VaultsUpdateResponse>, VaultsUpdateResponse>
  >;
  /**
   * Updates the vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param vault Recovery Services Vault to be created.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    vault: PatchVault,
    options?: VaultsUpdateOptionalParams
  ): Promise<VaultsUpdateResponse>;
}
