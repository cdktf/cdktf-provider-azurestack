/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzurestackProviderConfig {
  /**
  * The Hostname which should be used for the Azure Metadata Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#arm_endpoint AzurestackProvider#arm_endpoint}
  */
  readonly armEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}
  */
  readonly auxiliaryTenantIds?: string[];
  /**
  * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_certificate_password AzurestackProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_certificate_path AzurestackProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_id AzurestackProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_secret AzurestackProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * This will disable the x-ms-correlation-request-id header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#disable_correlation_request_id AzurestackProvider#disable_correlation_request_id}
  */
  readonly disableCorrelationRequestId?: boolean | cdktf.IResolvable;
  /**
  * The Cloud Environment which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#environment AzurestackProvider#environment}
  */
  readonly environment?: string;
  /**
  * The Hostname which should be used for the Azure Metadata Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#metadata_host AzurestackProvider#metadata_host}
  */
  readonly metadataHost?: string;
  /**
  * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#msi_endpoint AzurestackProvider#msi_endpoint}
  */
  readonly msiEndpoint?: string;
  /**
  * Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#skip_provider_registration AzurestackProvider#skip_provider_registration}
  */
  readonly skipProviderRegistration?: boolean | cdktf.IResolvable;
  /**
  * The Subscription ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#subscription_id AzurestackProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The Tenant ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#tenant_id AzurestackProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Allowed Managed Service Identity be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#use_msi AzurestackProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#alias AzurestackProvider#alias}
  */
  readonly alias?: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#features AzurestackProvider#features}
  */
  readonly features: AzurestackProviderFeatures;
}
export interface AzurestackProviderFeaturesResourceGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}
  */
  readonly preventDeletionIfContainsResources?: boolean | cdktf.IResolvable;
}

export function azurestackProviderFeaturesResourceGroupToTerraform(struct?: AzurestackProviderFeaturesResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prevent_deletion_if_contains_resources: cdktf.booleanToTerraform(struct!.preventDeletionIfContainsResources),
  }
}

export interface AzurestackProviderFeaturesVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}
  */
  readonly deleteOsDiskOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#graceful_shutdown AzurestackProvider#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}
  */
  readonly skipShutdownAndForceDelete?: boolean | cdktf.IResolvable;
}

export function azurestackProviderFeaturesVirtualMachineToTerraform(struct?: AzurestackProviderFeaturesVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_os_disk_on_deletion: cdktf.booleanToTerraform(struct!.deleteOsDiskOnDeletion),
    graceful_shutdown: cdktf.booleanToTerraform(struct!.gracefulShutdown),
    skip_shutdown_and_force_delete: cdktf.booleanToTerraform(struct!.skipShutdownAndForceDelete),
  }
}

export interface AzurestackProviderFeaturesVirtualMachineScaleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#force_delete AzurestackProvider#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#roll_instances_when_required AzurestackProvider#roll_instances_when_required}
  */
  readonly rollInstancesWhenRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}
  */
  readonly scaleToZeroBeforeDeletion?: boolean | cdktf.IResolvable;
}

export function azurestackProviderFeaturesVirtualMachineScaleSetToTerraform(struct?: AzurestackProviderFeaturesVirtualMachineScaleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_delete: cdktf.booleanToTerraform(struct!.forceDelete),
    roll_instances_when_required: cdktf.booleanToTerraform(struct!.rollInstancesWhenRequired),
    scale_to_zero_before_deletion: cdktf.booleanToTerraform(struct!.scaleToZeroBeforeDeletion),
  }
}

export interface AzurestackProviderFeatures {
  /**
  * resource_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#resource_group AzurestackProvider#resource_group}
  */
  readonly resourceGroup?: AzurestackProviderFeaturesResourceGroup;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#virtual_machine AzurestackProvider#virtual_machine}
  */
  readonly virtualMachine?: AzurestackProviderFeaturesVirtualMachine;
  /**
  * virtual_machine_scale_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#virtual_machine_scale_set AzurestackProvider#virtual_machine_scale_set}
  */
  readonly virtualMachineScaleSet?: AzurestackProviderFeaturesVirtualMachineScaleSet;
}

export function azurestackProviderFeaturesToTerraform(struct?: AzurestackProviderFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: azurestackProviderFeaturesResourceGroupToTerraform(struct!.resourceGroup),
    virtual_machine: azurestackProviderFeaturesVirtualMachineToTerraform(struct!.virtualMachine),
    virtual_machine_scale_set: azurestackProviderFeaturesVirtualMachineScaleSetToTerraform(struct!.virtualMachineScaleSet),
  }
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs azurestack}
*/
export class AzurestackProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurestack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzurestackProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzurestackProvider to import
  * @param importFromId The id of the existing AzurestackProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzurestackProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurestack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs azurestack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzurestackProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AzurestackProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurestack',
      terraformGeneratorMetadata: {
        providerName: 'azurestack',
        providerVersion: '1.0.0',
        providerVersionConstraint: '~> 1.0'
      },
      terraformProviderSource: 'azurestack'
    });
    this._armEndpoint = config.armEndpoint;
    this._auxiliaryTenantIds = config.auxiliaryTenantIds;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._disableCorrelationRequestId = config.disableCorrelationRequestId;
    this._environment = config.environment;
    this._metadataHost = config.metadataHost;
    this._msiEndpoint = config.msiEndpoint;
    this._skipProviderRegistration = config.skipProviderRegistration;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._useMsi = config.useMsi;
    this._alias = config.alias;
    this._features = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arm_endpoint - computed: false, optional: true, required: false
  private _armEndpoint?: string; 
  public get armEndpoint() {
    return this._armEndpoint;
  }
  public set armEndpoint(value: string | undefined) {
    this._armEndpoint = value;
  }
  public resetArmEndpoint() {
    this._armEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armEndpointInput() {
    return this._armEndpoint;
  }

  // auxiliary_tenant_ids - computed: false, optional: true, required: false
  private _auxiliaryTenantIds?: string[]; 
  public get auxiliaryTenantIds() {
    return this._auxiliaryTenantIds;
  }
  public set auxiliaryTenantIds(value: string[] | undefined) {
    this._auxiliaryTenantIds = value;
  }
  public resetAuxiliaryTenantIds() {
    this._auxiliaryTenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryTenantIdsInput() {
    return this._auxiliaryTenantIds;
  }

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string; 
  public get clientCertificatePassword() {
    return this._clientCertificatePassword;
  }
  public set clientCertificatePassword(value: string | undefined) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword;
  }

  // client_certificate_path - computed: false, optional: true, required: false
  private _clientCertificatePath?: string; 
  public get clientCertificatePath() {
    return this._clientCertificatePath;
  }
  public set clientCertificatePath(value: string | undefined) {
    this._clientCertificatePath = value;
  }
  public resetClientCertificatePath() {
    this._clientCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePathInput() {
    return this._clientCertificatePath;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // disable_correlation_request_id - computed: false, optional: true, required: false
  private _disableCorrelationRequestId?: boolean | cdktf.IResolvable; 
  public get disableCorrelationRequestId() {
    return this._disableCorrelationRequestId;
  }
  public set disableCorrelationRequestId(value: boolean | cdktf.IResolvable | undefined) {
    this._disableCorrelationRequestId = value;
  }
  public resetDisableCorrelationRequestId() {
    this._disableCorrelationRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCorrelationRequestIdInput() {
    return this._disableCorrelationRequestId;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // metadata_host - computed: false, optional: true, required: false
  private _metadataHost?: string; 
  public get metadataHost() {
    return this._metadataHost;
  }
  public set metadataHost(value: string | undefined) {
    this._metadataHost = value;
  }
  public resetMetadataHost() {
    this._metadataHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataHostInput() {
    return this._metadataHost;
  }

  // msi_endpoint - computed: false, optional: true, required: false
  private _msiEndpoint?: string; 
  public get msiEndpoint() {
    return this._msiEndpoint;
  }
  public set msiEndpoint(value: string | undefined) {
    this._msiEndpoint = value;
  }
  public resetMsiEndpoint() {
    this._msiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiEndpointInput() {
    return this._msiEndpoint;
  }

  // skip_provider_registration - computed: false, optional: true, required: false
  private _skipProviderRegistration?: boolean | cdktf.IResolvable; 
  public get skipProviderRegistration() {
    return this._skipProviderRegistration;
  }
  public set skipProviderRegistration(value: boolean | cdktf.IResolvable | undefined) {
    this._skipProviderRegistration = value;
  }
  public resetSkipProviderRegistration() {
    this._skipProviderRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipProviderRegistrationInput() {
    return this._skipProviderRegistration;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this._subscriptionId;
  }
  public set subscriptionId(value: string | undefined) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_msi - computed: false, optional: true, required: false
  private _useMsi?: boolean | cdktf.IResolvable; 
  public get useMsi() {
    return this._useMsi;
  }
  public set useMsi(value: boolean | cdktf.IResolvable | undefined) {
    this._useMsi = value;
  }
  public resetUseMsi() {
    this._useMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsiInput() {
    return this._useMsi;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // features - computed: false, optional: false, required: true
  private _features?: AzurestackProviderFeatures; 
  public get features() {
    return this._features;
  }
  public set features(value: AzurestackProviderFeatures | undefined) {
    this._features = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arm_endpoint: cdktf.stringToTerraform(this._armEndpoint),
      auxiliary_tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auxiliaryTenantIds),
      client_certificate_password: cdktf.stringToTerraform(this._clientCertificatePassword),
      client_certificate_path: cdktf.stringToTerraform(this._clientCertificatePath),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      disable_correlation_request_id: cdktf.booleanToTerraform(this._disableCorrelationRequestId),
      environment: cdktf.stringToTerraform(this._environment),
      metadata_host: cdktf.stringToTerraform(this._metadataHost),
      msi_endpoint: cdktf.stringToTerraform(this._msiEndpoint),
      skip_provider_registration: cdktf.booleanToTerraform(this._skipProviderRegistration),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_msi: cdktf.booleanToTerraform(this._useMsi),
      alias: cdktf.stringToTerraform(this._alias),
      features: azurestackProviderFeaturesToTerraform(this._features),
    };
  }
}
