// https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinuxVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}
  */
  readonly disablePasswordAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}
  */
  readonly doNotRunExtensionsOnOverprovisionedMachines?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}
  */
  readonly encryptionAtHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}
  */
  readonly healthProbeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}
  */
  readonly instances: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}
  */
  readonly overprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}
  */
  readonly platformFaultDomainCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#scale_in_policy LinuxVirtualMachineScaleSet#scale_in_policy}
  */
  readonly scaleInPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}
  */
  readonly singlePlacementGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}
  */
  readonly sourceImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}
  */
  readonly upgradeMode?: string;
  /**
  * additional_capabilities block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#additional_capabilities LinuxVirtualMachineScaleSet#additional_capabilities}
  */
  readonly additionalCapabilities?: LinuxVirtualMachineScaleSetAdditionalCapabilities;
  /**
  * admin_ssh_key block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_ssh_key LinuxVirtualMachineScaleSet#admin_ssh_key}
  */
  readonly adminSshKey?: LinuxVirtualMachineScaleSetAdminSshKey[] | cdktf.IResolvable;
  /**
  * automatic_instance_repair block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_instance_repair LinuxVirtualMachineScaleSet#automatic_instance_repair}
  */
  readonly automaticInstanceRepair?: LinuxVirtualMachineScaleSetAutomaticInstanceRepair;
  /**
  * automatic_os_upgrade_policy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_os_upgrade_policy LinuxVirtualMachineScaleSet#automatic_os_upgrade_policy}
  */
  readonly automaticOsUpgradePolicy?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy;
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#boot_diagnostics LinuxVirtualMachineScaleSet#boot_diagnostics}
  */
  readonly bootDiagnostics?: LinuxVirtualMachineScaleSetBootDiagnostics;
  /**
  * data_disk block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#data_disk LinuxVirtualMachineScaleSet#data_disk}
  */
  readonly dataDisk?: LinuxVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable;
  /**
  * extension block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#extension LinuxVirtualMachineScaleSet#extension}
  */
  readonly extension?: LinuxVirtualMachineScaleSetExtension[] | cdktf.IResolvable;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#network_interface LinuxVirtualMachineScaleSet#network_interface}
  */
  readonly networkInterface: LinuxVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable;
  /**
  * os_disk block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#os_disk LinuxVirtualMachineScaleSet#os_disk}
  */
  readonly osDisk: LinuxVirtualMachineScaleSetOsDisk;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#plan LinuxVirtualMachineScaleSet#plan}
  */
  readonly plan?: LinuxVirtualMachineScaleSetPlan;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#secret LinuxVirtualMachineScaleSet#secret}
  */
  readonly secret?: LinuxVirtualMachineScaleSetSecret[] | cdktf.IResolvable;
  /**
  * source_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#source_image_reference LinuxVirtualMachineScaleSet#source_image_reference}
  */
  readonly sourceImageReference?: LinuxVirtualMachineScaleSetSourceImageReference;
  /**
  * terminate_notification block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#terminate_notification LinuxVirtualMachineScaleSet#terminate_notification}
  */
  readonly terminateNotification?: LinuxVirtualMachineScaleSetTerminateNotification;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#timeouts LinuxVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: LinuxVirtualMachineScaleSetTimeouts;
}
export interface LinuxVirtualMachineScaleSetAdditionalCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_enabled LinuxVirtualMachineScaleSet#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled?: boolean | cdktf.IResolvable;
}

export function linuxVirtualMachineScaleSetAdditionalCapabilitiesToTerraform(struct?: LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference | LinuxVirtualMachineScaleSetAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
  }
}

export class LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetAdditionalCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ultraSsdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraSsdEnabled = this._ultraSsdEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetAdditionalCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ultraSsdEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ultraSsdEnabled = value.ultraSsdEnabled;
    }
  }

  // ultra_ssd_enabled - computed: false, optional: true, required: false
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled');
  }
  public set ultraSsdEnabled(value: boolean | cdktf.IResolvable) {
    this._ultraSsdEnabled = value;
  }
  public resetUltraSsdEnabled() {
    this._ultraSsdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdEnabledInput() {
    return this._ultraSsdEnabled;
  }
}
export interface LinuxVirtualMachineScaleSetAdminSshKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#public_key LinuxVirtualMachineScaleSet#public_key}
  */
  readonly publicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#username LinuxVirtualMachineScaleSet#username}
  */
  readonly username: string;
}

export function linuxVirtualMachineScaleSetAdminSshKeyToTerraform(struct?: LinuxVirtualMachineScaleSetAdminSshKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class LinuxVirtualMachineScaleSetAdminSshKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetAdminSshKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetAdminSshKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicKey = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicKey = value.publicKey;
      this._username = value.username;
    }
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class LinuxVirtualMachineScaleSetAdminSshKeyList extends cdktf.ComplexList {
  public internalValue? : LinuxVirtualMachineScaleSetAdminSshKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LinuxVirtualMachineScaleSetAdminSshKeyOutputReference {
    return new LinuxVirtualMachineScaleSetAdminSshKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxVirtualMachineScaleSetAutomaticInstanceRepair {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#grace_period LinuxVirtualMachineScaleSet#grace_period}
  */
  readonly gracePeriod?: string;
}

export function linuxVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(struct?: LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference | LinuxVirtualMachineScaleSetAutomaticInstanceRepair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
  }
}

export class LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetAutomaticInstanceRepair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetAutomaticInstanceRepair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._gracePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._gracePeriod = value.gracePeriod;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }
}
export interface LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_automatic_rollback LinuxVirtualMachineScaleSet#disable_automatic_rollback}
  */
  readonly disableAutomaticRollback: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enable_automatic_os_upgrade LinuxVirtualMachineScaleSet#enable_automatic_os_upgrade}
  */
  readonly enableAutomaticOsUpgrade: boolean | cdktf.IResolvable;
}

export function linuxVirtualMachineScaleSetAutomaticOsUpgradePolicyToTerraform(struct?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference | LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_automatic_rollback: cdktf.booleanToTerraform(struct!.disableAutomaticRollback),
    enable_automatic_os_upgrade: cdktf.booleanToTerraform(struct!.enableAutomaticOsUpgrade),
  }
}

export class LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAutomaticRollback !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutomaticRollback = this._disableAutomaticRollback;
    }
    if (this._enableAutomaticOsUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticOsUpgrade = this._enableAutomaticOsUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAutomaticRollback = undefined;
      this._enableAutomaticOsUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAutomaticRollback = value.disableAutomaticRollback;
      this._enableAutomaticOsUpgrade = value.enableAutomaticOsUpgrade;
    }
  }

  // disable_automatic_rollback - computed: false, optional: false, required: true
  private _disableAutomaticRollback?: boolean | cdktf.IResolvable; 
  public get disableAutomaticRollback() {
    return this.getBooleanAttribute('disable_automatic_rollback');
  }
  public set disableAutomaticRollback(value: boolean | cdktf.IResolvable) {
    this._disableAutomaticRollback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomaticRollbackInput() {
    return this._disableAutomaticRollback;
  }

  // enable_automatic_os_upgrade - computed: false, optional: false, required: true
  private _enableAutomaticOsUpgrade?: boolean | cdktf.IResolvable; 
  public get enableAutomaticOsUpgrade() {
    return this.getBooleanAttribute('enable_automatic_os_upgrade');
  }
  public set enableAutomaticOsUpgrade(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticOsUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticOsUpgradeInput() {
    return this._enableAutomaticOsUpgrade;
  }
}
export interface LinuxVirtualMachineScaleSetBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_uri LinuxVirtualMachineScaleSet#storage_account_uri}
  */
  readonly storageAccountUri: string;
}

export function linuxVirtualMachineScaleSetBootDiagnosticsToTerraform(struct?: LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference | LinuxVirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_uri: cdktf.stringToTerraform(struct!.storageAccountUri),
  }
}

export class LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetBootDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAccountUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountUri = this._storageAccountUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetBootDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageAccountUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageAccountUri = value.storageAccountUri;
    }
  }

  // storage_account_uri - computed: false, optional: false, required: true
  private _storageAccountUri?: string; 
  public get storageAccountUri() {
    return this.getStringAttribute('storage_account_uri');
  }
  public set storageAccountUri(value: string) {
    this._storageAccountUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountUriInput() {
    return this._storageAccountUri;
  }
}
export interface LinuxVirtualMachineScaleSetDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#create_option LinuxVirtualMachineScaleSet#create_option}
  */
  readonly createOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#lun LinuxVirtualMachineScaleSet#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

export function linuxVirtualMachineScaleSetDataDiskToTerraform(struct?: LinuxVirtualMachineScaleSetDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}

export class LinuxVirtualMachineScaleSetDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._createOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.createOption = this._createOption;
    }
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    if (this._writeAcceleratorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAcceleratorEnabled = this._writeAcceleratorEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caching = undefined;
      this._createOption = undefined;
      this._diskEncryptionSetId = undefined;
      this._diskSizeGb = undefined;
      this._lun = undefined;
      this._storageAccountType = undefined;
      this._writeAcceleratorEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caching = value.caching;
      this._createOption = value.createOption;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._diskSizeGb = value.diskSizeGb;
      this._lun = value.lun;
      this._storageAccountType = value.storageAccountType;
      this._writeAcceleratorEnabled = value.writeAcceleratorEnabled;
    }
  }

  // caching - computed: false, optional: false, required: true
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // create_option - computed: false, optional: true, required: false
  private _createOption?: string; 
  public get createOption() {
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string) {
    this._createOption = value;
  }
  public resetCreateOption() {
    this._createOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // storage_account_type - computed: false, optional: false, required: true
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean | cdktf.IResolvable; 
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled');
  }
  public set writeAcceleratorEnabled(value: boolean | cdktf.IResolvable) {
    this._writeAcceleratorEnabled = value;
  }
  public resetWriteAcceleratorEnabled() {
    this._writeAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAcceleratorEnabledInput() {
    return this._writeAcceleratorEnabled;
  }
}

export class LinuxVirtualMachineScaleSetDataDiskList extends cdktf.ComplexList {
  public internalValue? : LinuxVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LinuxVirtualMachineScaleSetDataDiskOutputReference {
    return new LinuxVirtualMachineScaleSetDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxVirtualMachineScaleSetExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#auto_upgrade_minor_version LinuxVirtualMachineScaleSet#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_upgrade_enabled LinuxVirtualMachineScaleSet#automatic_upgrade_enabled}
  */
  readonly automaticUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#force_update_tag LinuxVirtualMachineScaleSet#force_update_tag}
  */
  readonly forceUpdateTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#protected_settings LinuxVirtualMachineScaleSet#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#provision_after_extensions LinuxVirtualMachineScaleSet#provision_after_extensions}
  */
  readonly provisionAfterExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#settings LinuxVirtualMachineScaleSet#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#type_handler_version LinuxVirtualMachineScaleSet#type_handler_version}
  */
  readonly typeHandlerVersion: string;
}

export function linuxVirtualMachineScaleSetExtensionToTerraform(struct?: LinuxVirtualMachineScaleSetExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade_minor_version: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersion),
    automatic_upgrade_enabled: cdktf.booleanToTerraform(struct!.automaticUpgradeEnabled),
    force_update_tag: cdktf.stringToTerraform(struct!.forceUpdateTag),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provisionAfterExtensions),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
  }
}

export class LinuxVirtualMachineScaleSetExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgradeMinorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeMinorVersion = this._autoUpgradeMinorVersion;
    }
    if (this._automaticUpgradeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUpgradeEnabled = this._automaticUpgradeEnabled;
    }
    if (this._forceUpdateTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUpdateTag = this._forceUpdateTag;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectedSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedSettings = this._protectedSettings;
    }
    if (this._provisionAfterExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionAfterExtensions = this._provisionAfterExtensions;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeHandlerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeHandlerVersion = this._typeHandlerVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgradeMinorVersion = undefined;
      this._automaticUpgradeEnabled = undefined;
      this._forceUpdateTag = undefined;
      this._name = undefined;
      this._protectedSettings = undefined;
      this._provisionAfterExtensions = undefined;
      this._publisher = undefined;
      this._settings = undefined;
      this._type = undefined;
      this._typeHandlerVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgradeMinorVersion = value.autoUpgradeMinorVersion;
      this._automaticUpgradeEnabled = value.automaticUpgradeEnabled;
      this._forceUpdateTag = value.forceUpdateTag;
      this._name = value.name;
      this._protectedSettings = value.protectedSettings;
      this._provisionAfterExtensions = value.provisionAfterExtensions;
      this._publisher = value.publisher;
      this._settings = value.settings;
      this._type = value.type;
      this._typeHandlerVersion = value.typeHandlerVersion;
    }
  }

  // auto_upgrade_minor_version - computed: false, optional: true, required: false
  private _autoUpgradeMinorVersion?: boolean | cdktf.IResolvable; 
  public get autoUpgradeMinorVersion() {
    return this.getBooleanAttribute('auto_upgrade_minor_version');
  }
  public set autoUpgradeMinorVersion(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeMinorVersion = value;
  }
  public resetAutoUpgradeMinorVersion() {
    this._autoUpgradeMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeMinorVersionInput() {
    return this._autoUpgradeMinorVersion;
  }

  // automatic_upgrade_enabled - computed: false, optional: true, required: false
  private _automaticUpgradeEnabled?: boolean | cdktf.IResolvable; 
  public get automaticUpgradeEnabled() {
    return this.getBooleanAttribute('automatic_upgrade_enabled');
  }
  public set automaticUpgradeEnabled(value: boolean | cdktf.IResolvable) {
    this._automaticUpgradeEnabled = value;
  }
  public resetAutomaticUpgradeEnabled() {
    this._automaticUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeEnabledInput() {
    return this._automaticUpgradeEnabled;
  }

  // force_update_tag - computed: false, optional: true, required: false
  private _forceUpdateTag?: string; 
  public get forceUpdateTag() {
    return this.getStringAttribute('force_update_tag');
  }
  public set forceUpdateTag(value: string) {
    this._forceUpdateTag = value;
  }
  public resetForceUpdateTag() {
    this._forceUpdateTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateTagInput() {
    return this._forceUpdateTag;
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

  // protected_settings - computed: false, optional: true, required: false
  private _protectedSettings?: string; 
  public get protectedSettings() {
    return this.getStringAttribute('protected_settings');
  }
  public set protectedSettings(value: string) {
    this._protectedSettings = value;
  }
  public resetProtectedSettings() {
    this._protectedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsInput() {
    return this._protectedSettings;
  }

  // provision_after_extensions - computed: false, optional: true, required: false
  private _provisionAfterExtensions?: string[]; 
  public get provisionAfterExtensions() {
    return this.getListAttribute('provision_after_extensions');
  }
  public set provisionAfterExtensions(value: string[]) {
    this._provisionAfterExtensions = value;
  }
  public resetProvisionAfterExtensions() {
    this._provisionAfterExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionAfterExtensionsInput() {
    return this._provisionAfterExtensions;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_handler_version - computed: false, optional: false, required: true
  private _typeHandlerVersion?: string; 
  public get typeHandlerVersion() {
    return this.getStringAttribute('type_handler_version');
  }
  public set typeHandlerVersion(value: string) {
    this._typeHandlerVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeHandlerVersionInput() {
    return this._typeHandlerVersion;
  }
}

export class LinuxVirtualMachineScaleSetExtensionList extends cdktf.ComplexList {
  public internalValue? : LinuxVirtualMachineScaleSetExtension[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LinuxVirtualMachineScaleSetExtensionOutputReference {
    return new LinuxVirtualMachineScaleSetExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_backend_address_pool_ids LinuxVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}
  */
  readonly loadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids LinuxVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}
  */
  readonly loadBalancerInboundNatRulesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#subnet_id LinuxVirtualMachineScaleSet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}
  */
  readonly version?: string;
}

export function linuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform(struct?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerBackendAddressPoolIds),
    load_balancer_inbound_nat_rules_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerInboundNatRulesIds),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancerBackendAddressPoolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerBackendAddressPoolIds = this._loadBalancerBackendAddressPoolIds;
    }
    if (this._loadBalancerInboundNatRulesIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerInboundNatRulesIds = this._loadBalancerInboundNatRulesIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancerBackendAddressPoolIds = undefined;
      this._loadBalancerInboundNatRulesIds = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._subnetId = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancerBackendAddressPoolIds = value.loadBalancerBackendAddressPoolIds;
      this._loadBalancerInboundNatRulesIds = value.loadBalancerInboundNatRulesIds;
      this._name = value.name;
      this._primary = value.primary;
      this._subnetId = value.subnetId;
      this._version = value.version;
    }
  }

  // load_balancer_backend_address_pool_ids - computed: false, optional: true, required: false
  private _loadBalancerBackendAddressPoolIds?: string[]; 
  public get loadBalancerBackendAddressPoolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_backend_address_pool_ids'));
  }
  public set loadBalancerBackendAddressPoolIds(value: string[]) {
    this._loadBalancerBackendAddressPoolIds = value;
  }
  public resetLoadBalancerBackendAddressPoolIds() {
    this._loadBalancerBackendAddressPoolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerBackendAddressPoolIdsInput() {
    return this._loadBalancerBackendAddressPoolIds;
  }

  // load_balancer_inbound_nat_rules_ids - computed: false, optional: true, required: false
  private _loadBalancerInboundNatRulesIds?: string[]; 
  public get loadBalancerInboundNatRulesIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_inbound_nat_rules_ids'));
  }
  public set loadBalancerInboundNatRulesIds(value: string[]) {
    this._loadBalancerInboundNatRulesIds = value;
  }
  public resetLoadBalancerInboundNatRulesIds() {
    this._loadBalancerInboundNatRulesIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInboundNatRulesIdsInput() {
    return this._loadBalancerInboundNatRulesIds;
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference {
    return new LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxVirtualMachineScaleSetNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#dns_servers LinuxVirtualMachineScaleSet#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enable_ip_forwarding LinuxVirtualMachineScaleSet#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#network_security_group_id LinuxVirtualMachineScaleSet#network_security_group_id}
  */
  readonly networkSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#ip_configuration LinuxVirtualMachineScaleSet#ip_configuration}
  */
  readonly ipConfiguration: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration[] | cdktf.IResolvable;
}

export function linuxVirtualMachineScaleSetNetworkInterfaceToTerraform(struct?: LinuxVirtualMachineScaleSetNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    ip_configuration: cdktf.listMapper(linuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform, true)(struct!.ipConfiguration),
  }
}

export class LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._enableIpForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpForwarding = this._enableIpForwarding;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityGroupId = this._networkSecurityGroupId;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._ipConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServers = undefined;
      this._enableIpForwarding = undefined;
      this._name = undefined;
      this._networkSecurityGroupId = undefined;
      this._primary = undefined;
      this._ipConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsServers = value.dnsServers;
      this._enableIpForwarding = value.enableIpForwarding;
      this._name = value.name;
      this._networkSecurityGroupId = value.networkSecurityGroupId;
      this._primary = value.primary;
      this._ipConfiguration.internalValue = value.ipConfiguration;
    }
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // enable_ip_forwarding - computed: false, optional: true, required: false
  private _enableIpForwarding?: boolean | cdktf.IResolvable; 
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }
  public set enableIpForwarding(value: boolean | cdktf.IResolvable) {
    this._enableIpForwarding = value;
  }
  public resetEnableIpForwarding() {
    this._enableIpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpForwardingInput() {
    return this._enableIpForwarding;
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

  // network_security_group_id - computed: false, optional: true, required: false
  private _networkSecurityGroupId?: string; 
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }
  public resetNetworkSecurityGroupId() {
    this._networkSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdInput() {
    return this._networkSecurityGroupId;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration = new LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration[] | cdktf.IResolvable) {
    this._ipConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }
}

export class LinuxVirtualMachineScaleSetNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : LinuxVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference {
    return new LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#option LinuxVirtualMachineScaleSet#option}
  */
  readonly option: string;
}

export function linuxVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct?: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference | LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export class LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._option = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._option = value.option;
    }
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}
export interface LinuxVirtualMachineScaleSetOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
  /**
  * diff_disk_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#diff_disk_settings LinuxVirtualMachineScaleSet#diff_disk_settings}
  */
  readonly diffDiskSettings?: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings;
}

export function linuxVirtualMachineScaleSetOsDiskToTerraform(struct?: LinuxVirtualMachineScaleSetOsDiskOutputReference | LinuxVirtualMachineScaleSetOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
    diff_disk_settings: linuxVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct!.diffDiskSettings),
  }
}

export class LinuxVirtualMachineScaleSetOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetOsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    if (this._writeAcceleratorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAcceleratorEnabled = this._writeAcceleratorEnabled;
    }
    if (this._diffDiskSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffDiskSettings = this._diffDiskSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._diskEncryptionSetId = undefined;
      this._diskSizeGb = undefined;
      this._storageAccountType = undefined;
      this._writeAcceleratorEnabled = undefined;
      this._diffDiskSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._diskSizeGb = value.diskSizeGb;
      this._storageAccountType = value.storageAccountType;
      this._writeAcceleratorEnabled = value.writeAcceleratorEnabled;
      this._diffDiskSettings.internalValue = value.diffDiskSettings;
    }
  }

  // caching - computed: false, optional: false, required: true
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // storage_account_type - computed: false, optional: false, required: true
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean | cdktf.IResolvable; 
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled');
  }
  public set writeAcceleratorEnabled(value: boolean | cdktf.IResolvable) {
    this._writeAcceleratorEnabled = value;
  }
  public resetWriteAcceleratorEnabled() {
    this._writeAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAcceleratorEnabledInput() {
    return this._writeAcceleratorEnabled;
  }

  // diff_disk_settings - computed: false, optional: true, required: false
  private _diffDiskSettings = new LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(this, "diff_disk_settings");
  public get diffDiskSettings() {
    return this._diffDiskSettings;
  }
  public putDiffDiskSettings(value: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings) {
    this._diffDiskSettings.internalValue = value;
  }
  public resetDiffDiskSettings() {
    this._diffDiskSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffDiskSettingsInput() {
    return this._diffDiskSettings.internalValue;
  }
}
export interface LinuxVirtualMachineScaleSetPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#product LinuxVirtualMachineScaleSet#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
}

export function linuxVirtualMachineScaleSetPlanToTerraform(struct?: LinuxVirtualMachineScaleSetPlanOutputReference | LinuxVirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export class LinuxVirtualMachineScaleSetPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._product = undefined;
      this._publisher = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._product = value.product;
      this._publisher = value.publisher;
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }
}
export interface LinuxVirtualMachineScaleSetSecretCertificate {
}

export function linuxVirtualMachineScaleSetSecretCertificateToTerraform(struct?: LinuxVirtualMachineScaleSetSecretCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class LinuxVirtualMachineScaleSetSecretCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetSecretCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetSecretCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class LinuxVirtualMachineScaleSetSecretCertificateList extends cdktf.ComplexList {
  public internalValue? : LinuxVirtualMachineScaleSetSecretCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LinuxVirtualMachineScaleSetSecretCertificateOutputReference {
    return new LinuxVirtualMachineScaleSetSecretCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxVirtualMachineScaleSetSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#key_vault_id LinuxVirtualMachineScaleSet#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#certificate LinuxVirtualMachineScaleSet#certificate}
  */
  readonly certificate: LinuxVirtualMachineScaleSetSecretCertificate[] | cdktf.IResolvable;
}

export function linuxVirtualMachineScaleSetSecretToTerraform(struct?: LinuxVirtualMachineScaleSetSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(linuxVirtualMachineScaleSetSecretCertificateToTerraform, true)(struct!.certificate),
  }
}

export class LinuxVirtualMachineScaleSetSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyVaultId = undefined;
      this._certificate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyVaultId = value.keyVaultId;
      this._certificate.internalValue = value.certificate;
    }
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new LinuxVirtualMachineScaleSetSecretCertificateList(this, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: LinuxVirtualMachineScaleSetSecretCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}

export class LinuxVirtualMachineScaleSetSecretList extends cdktf.ComplexList {
  public internalValue? : LinuxVirtualMachineScaleSetSecret[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LinuxVirtualMachineScaleSetSecretOutputReference {
    return new LinuxVirtualMachineScaleSetSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxVirtualMachineScaleSetSourceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#offer LinuxVirtualMachineScaleSet#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}
  */
  readonly version: string;
}

export function linuxVirtualMachineScaleSetSourceImageReferenceToTerraform(struct?: LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference | LinuxVirtualMachineScaleSetSourceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetSourceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetSourceImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LinuxVirtualMachineScaleSetTerminateNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}
  */
  readonly timeout?: string;
}

export function linuxVirtualMachineScaleSetTerminateNotificationToTerraform(struct?: LinuxVirtualMachineScaleSetTerminateNotificationOutputReference | LinuxVirtualMachineScaleSetTerminateNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export class LinuxVirtualMachineScaleSetTerminateNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetTerminateNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineScaleSetTerminateNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._timeout = value.timeout;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface LinuxVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#create LinuxVirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#delete LinuxVirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#read LinuxVirtualMachineScaleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#update LinuxVirtualMachineScaleSet#update}
  */
  readonly update?: string;
}

export function linuxVirtualMachineScaleSetTimeoutsToTerraform(struct?: LinuxVirtualMachineScaleSetTimeouts | cdktf.IResolvable): any {
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

export class LinuxVirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LinuxVirtualMachineScaleSetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LinuxVirtualMachineScaleSetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set azurestack_linux_virtual_machine_scale_set}
*/
export class LinuxVirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurestack_linux_virtual_machine_scale_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set azurestack_linux_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinuxVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: LinuxVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurestack_linux_virtual_machine_scale_set',
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
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._computerNamePrefix = config.computerNamePrefix;
    this._customData = config.customData;
    this._disablePasswordAuthentication = config.disablePasswordAuthentication;
    this._doNotRunExtensionsOnOverprovisionedMachines = config.doNotRunExtensionsOnOverprovisionedMachines;
    this._encryptionAtHostEnabled = config.encryptionAtHostEnabled;
    this._healthProbeId = config.healthProbeId;
    this._id = config.id;
    this._instances = config.instances;
    this._location = config.location;
    this._name = config.name;
    this._overprovision = config.overprovision;
    this._platformFaultDomainCount = config.platformFaultDomainCount;
    this._provisionVmAgent = config.provisionVmAgent;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleInPolicy = config.scaleInPolicy;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._sku = config.sku;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._upgradeMode = config.upgradeMode;
    this._additionalCapabilities.internalValue = config.additionalCapabilities;
    this._adminSshKey.internalValue = config.adminSshKey;
    this._automaticInstanceRepair.internalValue = config.automaticInstanceRepair;
    this._automaticOsUpgradePolicy.internalValue = config.automaticOsUpgradePolicy;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._dataDisk.internalValue = config.dataDisk;
    this._extension.internalValue = config.extension;
    this._networkInterface.internalValue = config.networkInterface;
    this._osDisk.internalValue = config.osDisk;
    this._plan.internalValue = config.plan;
    this._secret.internalValue = config.secret;
    this._sourceImageReference.internalValue = config.sourceImageReference;
    this._terminateNotification.internalValue = config.terminateNotification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean | cdktf.IResolvable; 
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication');
  }
  public set disablePasswordAuthentication(value: boolean | cdktf.IResolvable) {
    this._disablePasswordAuthentication = value;
  }
  public resetDisablePasswordAuthentication() {
    this._disablePasswordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthenticationInput() {
    return this._disablePasswordAuthentication;
  }

  // do_not_run_extensions_on_overprovisioned_machines - computed: false, optional: true, required: false
  private _doNotRunExtensionsOnOverprovisionedMachines?: boolean | cdktf.IResolvable; 
  public get doNotRunExtensionsOnOverprovisionedMachines() {
    return this.getBooleanAttribute('do_not_run_extensions_on_overprovisioned_machines');
  }
  public set doNotRunExtensionsOnOverprovisionedMachines(value: boolean | cdktf.IResolvable) {
    this._doNotRunExtensionsOnOverprovisionedMachines = value;
  }
  public resetDoNotRunExtensionsOnOverprovisionedMachines() {
    this._doNotRunExtensionsOnOverprovisionedMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotRunExtensionsOnOverprovisionedMachinesInput() {
    return this._doNotRunExtensionsOnOverprovisionedMachines;
  }

  // encryption_at_host_enabled - computed: false, optional: true, required: false
  private _encryptionAtHostEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionAtHostEnabled() {
    return this.getBooleanAttribute('encryption_at_host_enabled');
  }
  public set encryptionAtHostEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionAtHostEnabled = value;
  }
  public resetEncryptionAtHostEnabled() {
    this._encryptionAtHostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostEnabledInput() {
    return this._encryptionAtHostEnabled;
  }

  // health_probe_id - computed: false, optional: true, required: false
  private _healthProbeId?: string; 
  public get healthProbeId() {
    return this.getStringAttribute('health_probe_id');
  }
  public set healthProbeId(value: string) {
    this._healthProbeId = value;
  }
  public resetHealthProbeId() {
    this._healthProbeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeIdInput() {
    return this._healthProbeId;
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

  // instances - computed: false, optional: false, required: true
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
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

  // overprovision - computed: false, optional: true, required: false
  private _overprovision?: boolean | cdktf.IResolvable; 
  public get overprovision() {
    return this.getBooleanAttribute('overprovision');
  }
  public set overprovision(value: boolean | cdktf.IResolvable) {
    this._overprovision = value;
  }
  public resetOverprovision() {
    this._overprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overprovisionInput() {
    return this._overprovision;
  }

  // platform_fault_domain_count - computed: true, optional: true, required: false
  private _platformFaultDomainCount?: number; 
  public get platformFaultDomainCount() {
    return this.getNumberAttribute('platform_fault_domain_count');
  }
  public set platformFaultDomainCount(value: number) {
    this._platformFaultDomainCount = value;
  }
  public resetPlatformFaultDomainCount() {
    this._platformFaultDomainCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformFaultDomainCountInput() {
    return this._platformFaultDomainCount;
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent');
  }
  public set provisionVmAgent(value: boolean | cdktf.IResolvable) {
    this._provisionVmAgent = value;
  }
  public resetProvisionVmAgent() {
    this._provisionVmAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVmAgentInput() {
    return this._provisionVmAgent;
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

  // scale_in_policy - computed: false, optional: true, required: false
  private _scaleInPolicy?: string; 
  public get scaleInPolicy() {
    return this.getStringAttribute('scale_in_policy');
  }
  public set scaleInPolicy(value: string) {
    this._scaleInPolicy = value;
  }
  public resetScaleInPolicy() {
    this._scaleInPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInPolicyInput() {
    return this._scaleInPolicy;
  }

  // single_placement_group - computed: false, optional: true, required: false
  private _singlePlacementGroup?: boolean | cdktf.IResolvable; 
  public get singlePlacementGroup() {
    return this.getBooleanAttribute('single_placement_group');
  }
  public set singlePlacementGroup(value: boolean | cdktf.IResolvable) {
    this._singlePlacementGroup = value;
  }
  public resetSinglePlacementGroup() {
    this._singlePlacementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singlePlacementGroupInput() {
    return this._singlePlacementGroup;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // source_image_id - computed: false, optional: true, required: false
  private _sourceImageId?: string; 
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }
  public set sourceImageId(value: string) {
    this._sourceImageId = value;
  }
  public resetSourceImageId() {
    this._sourceImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageIdInput() {
    return this._sourceImageId;
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

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities = new LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference(this, "additional_capabilities");
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public putAdditionalCapabilities(value: LinuxVirtualMachineScaleSetAdditionalCapabilities) {
    this._additionalCapabilities.internalValue = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities.internalValue;
  }

  // admin_ssh_key - computed: false, optional: true, required: false
  private _adminSshKey = new LinuxVirtualMachineScaleSetAdminSshKeyList(this, "admin_ssh_key", true);
  public get adminSshKey() {
    return this._adminSshKey;
  }
  public putAdminSshKey(value: LinuxVirtualMachineScaleSetAdminSshKey[] | cdktf.IResolvable) {
    this._adminSshKey.internalValue = value;
  }
  public resetAdminSshKey() {
    this._adminSshKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshKeyInput() {
    return this._adminSshKey.internalValue;
  }

  // automatic_instance_repair - computed: false, optional: true, required: false
  private _automaticInstanceRepair = new LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(this, "automatic_instance_repair");
  public get automaticInstanceRepair() {
    return this._automaticInstanceRepair;
  }
  public putAutomaticInstanceRepair(value: LinuxVirtualMachineScaleSetAutomaticInstanceRepair) {
    this._automaticInstanceRepair.internalValue = value;
  }
  public resetAutomaticInstanceRepair() {
    this._automaticInstanceRepair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInstanceRepairInput() {
    return this._automaticInstanceRepair.internalValue;
  }

  // automatic_os_upgrade_policy - computed: false, optional: true, required: false
  private _automaticOsUpgradePolicy = new LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference(this, "automatic_os_upgrade_policy");
  public get automaticOsUpgradePolicy() {
    return this._automaticOsUpgradePolicy;
  }
  public putAutomaticOsUpgradePolicy(value: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy) {
    this._automaticOsUpgradePolicy.internalValue = value;
  }
  public resetAutomaticOsUpgradePolicy() {
    this._automaticOsUpgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOsUpgradePolicyInput() {
    return this._automaticOsUpgradePolicy.internalValue;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference(this, "boot_diagnostics");
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: LinuxVirtualMachineScaleSetBootDiagnostics) {
    this._bootDiagnostics.internalValue = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics.internalValue;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new LinuxVirtualMachineScaleSetDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: LinuxVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new LinuxVirtualMachineScaleSetExtensionList(this, "extension", true);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: LinuxVirtualMachineScaleSetExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new LinuxVirtualMachineScaleSetNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: LinuxVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk = new LinuxVirtualMachineScaleSetOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: LinuxVirtualMachineScaleSetOsDisk) {
    this._osDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new LinuxVirtualMachineScaleSetPlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: LinuxVirtualMachineScaleSetPlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new LinuxVirtualMachineScaleSetSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: LinuxVirtualMachineScaleSetSecret[] | cdktf.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference = new LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference(this, "source_image_reference");
  public get sourceImageReference() {
    return this._sourceImageReference;
  }
  public putSourceImageReference(value: LinuxVirtualMachineScaleSetSourceImageReference) {
    this._sourceImageReference.internalValue = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference.internalValue;
  }

  // terminate_notification - computed: false, optional: true, required: false
  private _terminateNotification = new LinuxVirtualMachineScaleSetTerminateNotificationOutputReference(this, "terminate_notification");
  public get terminateNotification() {
    return this._terminateNotification;
  }
  public putTerminateNotification(value: LinuxVirtualMachineScaleSetTerminateNotification) {
    this._terminateNotification.internalValue = value;
  }
  public resetTerminateNotification() {
    this._terminateNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateNotificationInput() {
    return this._terminateNotification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LinuxVirtualMachineScaleSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LinuxVirtualMachineScaleSetTimeouts) {
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
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      computer_name_prefix: cdktf.stringToTerraform(this._computerNamePrefix),
      custom_data: cdktf.stringToTerraform(this._customData),
      disable_password_authentication: cdktf.booleanToTerraform(this._disablePasswordAuthentication),
      do_not_run_extensions_on_overprovisioned_machines: cdktf.booleanToTerraform(this._doNotRunExtensionsOnOverprovisionedMachines),
      encryption_at_host_enabled: cdktf.booleanToTerraform(this._encryptionAtHostEnabled),
      health_probe_id: cdktf.stringToTerraform(this._healthProbeId),
      id: cdktf.stringToTerraform(this._id),
      instances: cdktf.numberToTerraform(this._instances),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      overprovision: cdktf.booleanToTerraform(this._overprovision),
      platform_fault_domain_count: cdktf.numberToTerraform(this._platformFaultDomainCount),
      provision_vm_agent: cdktf.booleanToTerraform(this._provisionVmAgent),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scale_in_policy: cdktf.stringToTerraform(this._scaleInPolicy),
      single_placement_group: cdktf.booleanToTerraform(this._singlePlacementGroup),
      sku: cdktf.stringToTerraform(this._sku),
      source_image_id: cdktf.stringToTerraform(this._sourceImageId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      additional_capabilities: linuxVirtualMachineScaleSetAdditionalCapabilitiesToTerraform(this._additionalCapabilities.internalValue),
      admin_ssh_key: cdktf.listMapper(linuxVirtualMachineScaleSetAdminSshKeyToTerraform, true)(this._adminSshKey.internalValue),
      automatic_instance_repair: linuxVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(this._automaticInstanceRepair.internalValue),
      automatic_os_upgrade_policy: linuxVirtualMachineScaleSetAutomaticOsUpgradePolicyToTerraform(this._automaticOsUpgradePolicy.internalValue),
      boot_diagnostics: linuxVirtualMachineScaleSetBootDiagnosticsToTerraform(this._bootDiagnostics.internalValue),
      data_disk: cdktf.listMapper(linuxVirtualMachineScaleSetDataDiskToTerraform, true)(this._dataDisk.internalValue),
      extension: cdktf.listMapper(linuxVirtualMachineScaleSetExtensionToTerraform, true)(this._extension.internalValue),
      network_interface: cdktf.listMapper(linuxVirtualMachineScaleSetNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      os_disk: linuxVirtualMachineScaleSetOsDiskToTerraform(this._osDisk.internalValue),
      plan: linuxVirtualMachineScaleSetPlanToTerraform(this._plan.internalValue),
      secret: cdktf.listMapper(linuxVirtualMachineScaleSetSecretToTerraform, true)(this._secret.internalValue),
      source_image_reference: linuxVirtualMachineScaleSetSourceImageReferenceToTerraform(this._sourceImageReference.internalValue),
      terminate_notification: linuxVirtualMachineScaleSetTerminateNotificationToTerraform(this._terminateNotification.internalValue),
      timeouts: linuxVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
