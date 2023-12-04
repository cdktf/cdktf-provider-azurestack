/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_encryption_source StorageAccount#account_encryption_source}
  */
  readonly accountEncryptionSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}
  */
  readonly accountKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}
  */
  readonly accountReplicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}
  */
  readonly accountTier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#enable_blob_encryption StorageAccount#enable_blob_encryption}
  */
  readonly enableBlobEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}
  */
  readonly enableHttpsTrafficOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#id StorageAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#location StorageAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#name StorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#tags StorageAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * custom_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}
  */
  readonly customDomain?: StorageAccountCustomDomain;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}
  */
  readonly timeouts?: StorageAccountTimeouts;
}
export interface StorageAccountCustomDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#name StorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}
  */
  readonly useSubdomain?: boolean | cdktf.IResolvable;
}

export function storageAccountCustomDomainToTerraform(struct?: StorageAccountCustomDomainOutputReference | StorageAccountCustomDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_subdomain: cdktf.booleanToTerraform(struct!.useSubdomain),
  }
}

export class StorageAccountCustomDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountCustomDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useSubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSubdomain = this._useSubdomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountCustomDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._useSubdomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._useSubdomain = value.useSubdomain;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // use_subdomain - computed: false, optional: true, required: false
  private _useSubdomain?: boolean | cdktf.IResolvable; 
  public get useSubdomain() {
    return this.getBooleanAttribute('use_subdomain');
  }
  public set useSubdomain(value: boolean | cdktf.IResolvable) {
    this._useSubdomain = value;
  }
  public resetUseSubdomain() {
    this._useSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSubdomainInput() {
    return this._useSubdomain;
  }
}
export interface StorageAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#create StorageAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#delete StorageAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#read StorageAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#update StorageAccount#update}
  */
  readonly update?: string;
}

export function storageAccountTimeoutsToTerraform(struct?: StorageAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class StorageAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageAccountTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account azurestack_storage_account}
*/
export class StorageAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurestack_storage_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageAccount to import
  * @param importFromId The id of the existing StorageAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurestack_storage_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account azurestack_storage_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurestack_storage_account',
      terraformGeneratorMetadata: {
        providerName: 'azurestack',
        providerVersion: '1.0.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountEncryptionSource = config.accountEncryptionSource;
    this._accountKind = config.accountKind;
    this._accountReplicationType = config.accountReplicationType;
    this._accountTier = config.accountTier;
    this._enableBlobEncryption = config.enableBlobEncryption;
    this._enableHttpsTrafficOnly = config.enableHttpsTrafficOnly;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._customDomain.internalValue = config.customDomain;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_encryption_source - computed: false, optional: true, required: false
  private _accountEncryptionSource?: string; 
  public get accountEncryptionSource() {
    return this.getStringAttribute('account_encryption_source');
  }
  public set accountEncryptionSource(value: string) {
    this._accountEncryptionSource = value;
  }
  public resetAccountEncryptionSource() {
    this._accountEncryptionSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEncryptionSourceInput() {
    return this._accountEncryptionSource;
  }

  // account_kind - computed: false, optional: true, required: false
  private _accountKind?: string; 
  public get accountKind() {
    return this.getStringAttribute('account_kind');
  }
  public set accountKind(value: string) {
    this._accountKind = value;
  }
  public resetAccountKind() {
    this._accountKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKindInput() {
    return this._accountKind;
  }

  // account_replication_type - computed: false, optional: false, required: true
  private _accountReplicationType?: string; 
  public get accountReplicationType() {
    return this.getStringAttribute('account_replication_type');
  }
  public set accountReplicationType(value: string) {
    this._accountReplicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountReplicationTypeInput() {
    return this._accountReplicationType;
  }

  // account_tier - computed: false, optional: false, required: true
  private _accountTier?: string; 
  public get accountTier() {
    return this.getStringAttribute('account_tier');
  }
  public set accountTier(value: string) {
    this._accountTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTierInput() {
    return this._accountTier;
  }

  // enable_blob_encryption - computed: true, optional: true, required: false
  private _enableBlobEncryption?: boolean | cdktf.IResolvable; 
  public get enableBlobEncryption() {
    return this.getBooleanAttribute('enable_blob_encryption');
  }
  public set enableBlobEncryption(value: boolean | cdktf.IResolvable) {
    this._enableBlobEncryption = value;
  }
  public resetEnableBlobEncryption() {
    this._enableBlobEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBlobEncryptionInput() {
    return this._enableBlobEncryption;
  }

  // enable_https_traffic_only - computed: false, optional: true, required: false
  private _enableHttpsTrafficOnly?: boolean | cdktf.IResolvable; 
  public get enableHttpsTrafficOnly() {
    return this.getBooleanAttribute('enable_https_traffic_only');
  }
  public set enableHttpsTrafficOnly(value: boolean | cdktf.IResolvable) {
    this._enableHttpsTrafficOnly = value;
  }
  public resetEnableHttpsTrafficOnly() {
    this._enableHttpsTrafficOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpsTrafficOnlyInput() {
    return this._enableHttpsTrafficOnly;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_blob_connection_string - computed: true, optional: false, required: false
  public get primaryBlobConnectionString() {
    return this.getStringAttribute('primary_blob_connection_string');
  }

  // primary_blob_endpoint - computed: true, optional: false, required: false
  public get primaryBlobEndpoint() {
    return this.getStringAttribute('primary_blob_endpoint');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_file_endpoint - computed: true, optional: false, required: false
  public get primaryFileEndpoint() {
    return this.getStringAttribute('primary_file_endpoint');
  }

  // primary_location - computed: true, optional: false, required: false
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }

  // primary_queue_endpoint - computed: true, optional: false, required: false
  public get primaryQueueEndpoint() {
    return this.getStringAttribute('primary_queue_endpoint');
  }

  // primary_table_endpoint - computed: true, optional: false, required: false
  public get primaryTableEndpoint() {
    return this.getStringAttribute('primary_table_endpoint');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_blob_connection_string - computed: true, optional: false, required: false
  public get secondaryBlobConnectionString() {
    return this.getStringAttribute('secondary_blob_connection_string');
  }

  // secondary_blob_endpoint - computed: true, optional: false, required: false
  public get secondaryBlobEndpoint() {
    return this.getStringAttribute('secondary_blob_endpoint');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_location - computed: true, optional: false, required: false
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }

  // secondary_queue_endpoint - computed: true, optional: false, required: false
  public get secondaryQueueEndpoint() {
    return this.getStringAttribute('secondary_queue_endpoint');
  }

  // secondary_table_endpoint - computed: true, optional: false, required: false
  public get secondaryTableEndpoint() {
    return this.getStringAttribute('secondary_table_endpoint');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain = new StorageAccountCustomDomainOutputReference(this, "custom_domain");
  public get customDomain() {
    return this._customDomain;
  }
  public putCustomDomain(value: StorageAccountCustomDomain) {
    this._customDomain.internalValue = value;
  }
  public resetCustomDomain() {
    this._customDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageAccountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_encryption_source: cdktf.stringToTerraform(this._accountEncryptionSource),
      account_kind: cdktf.stringToTerraform(this._accountKind),
      account_replication_type: cdktf.stringToTerraform(this._accountReplicationType),
      account_tier: cdktf.stringToTerraform(this._accountTier),
      enable_blob_encryption: cdktf.booleanToTerraform(this._enableBlobEncryption),
      enable_https_traffic_only: cdktf.booleanToTerraform(this._enableHttpsTrafficOnly),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      custom_domain: storageAccountCustomDomainToTerraform(this._customDomain.internalValue),
      timeouts: storageAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
