/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}
  */
  readonly activeActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}
  */
  readonly defaultLocalNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}
  */
  readonly enableBgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}
  */
  readonly vpnType?: string;
  /**
  * bgp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#bgp_settings VirtualNetworkGateway#bgp_settings}
  */
  readonly bgpSettings?: VirtualNetworkGatewayBgpSettings;
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#ip_configuration VirtualNetworkGateway#ip_configuration}
  */
  readonly ipConfiguration: VirtualNetworkGatewayIpConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#timeouts VirtualNetworkGateway#timeouts}
  */
  readonly timeouts?: VirtualNetworkGatewayTimeouts;
  /**
  * vpn_client_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}
  */
  readonly vpnClientConfiguration?: VirtualNetworkGatewayVpnClientConfiguration;
}
export interface VirtualNetworkGatewayBgpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}
  */
  readonly peerWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#peering_address VirtualNetworkGateway#peering_address}
  */
  readonly peeringAddress?: string;
}

export function virtualNetworkGatewayBgpSettingsToTerraform(struct?: VirtualNetworkGatewayBgpSettingsOutputReference | VirtualNetworkGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
    peering_address: cdktf.stringToTerraform(struct!.peeringAddress),
  }
}


export function virtualNetworkGatewayBgpSettingsToHclTerraform(struct?: VirtualNetworkGatewayBgpSettingsOutputReference | VirtualNetworkGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_weight: {
      value: cdktf.numberToHclTerraform(struct!.peerWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peering_address: {
      value: cdktf.stringToHclTerraform(struct!.peeringAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayBgpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayBgpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._peerWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerWeight = this._peerWeight;
    }
    if (this._peeringAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringAddress = this._peeringAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayBgpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._peerWeight = undefined;
      this._peeringAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._peerWeight = value.peerWeight;
      this._peeringAddress = value.peeringAddress;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // peer_weight - computed: false, optional: true, required: false
  private _peerWeight?: number; 
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }
  public set peerWeight(value: number) {
    this._peerWeight = value;
  }
  public resetPeerWeight() {
    this._peerWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerWeightInput() {
    return this._peerWeight;
  }

  // peering_address - computed: true, optional: true, required: false
  private _peeringAddress?: string; 
  public get peeringAddress() {
    return this.getStringAttribute('peering_address');
  }
  public set peeringAddress(value: string) {
    this._peeringAddress = value;
  }
  public resetPeeringAddress() {
    this._peeringAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringAddressInput() {
    return this._peeringAddress;
  }
}
export interface VirtualNetworkGatewayIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#subnet_id VirtualNetworkGateway#subnet_id}
  */
  readonly subnetId: string;
}

export function virtualNetworkGatewayIpConfigurationToTerraform(struct?: VirtualNetworkGatewayIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_address_allocation: cdktf.stringToTerraform(struct!.privateIpAddressAllocation),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function virtualNetworkGatewayIpConfigurationToHclTerraform(struct?: VirtualNetworkGatewayIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address_allocation: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address_id: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayIpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkGatewayIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateIpAddressAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressAllocation = this._privateIpAddressAllocation;
    }
    if (this._publicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressId = this._publicIpAddressId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._privateIpAddressAllocation = undefined;
      this._publicIpAddressId = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._privateIpAddressAllocation = value.privateIpAddressAllocation;
      this._publicIpAddressId = value.publicIpAddressId;
      this._subnetId = value.subnetId;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_ip_address_allocation - computed: false, optional: true, required: false
  private _privateIpAddressAllocation?: string; 
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }
  public set privateIpAddressAllocation(value: string) {
    this._privateIpAddressAllocation = value;
  }
  public resetPrivateIpAddressAllocation() {
    this._privateIpAddressAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressAllocationInput() {
    return this._privateIpAddressAllocation;
  }

  // public_ip_address_id - computed: false, optional: false, required: true
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class VirtualNetworkGatewayIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayIpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkGatewayIpConfigurationOutputReference {
    return new VirtualNetworkGatewayIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}
  */
  readonly update?: string;
}

export function virtualNetworkGatewayTimeoutsToTerraform(struct?: VirtualNetworkGatewayTimeouts | cdktf.IResolvable): any {
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


export function virtualNetworkGatewayTimeoutsToHclTerraform(struct?: VirtualNetworkGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkGatewayTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualNetworkGatewayTimeouts | cdktf.IResolvable | undefined) {
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
export interface VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#thumbprint VirtualNetworkGateway#thumbprint}
  */
  readonly thumbprint: string;
}

export function virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._thumbprint = value.thumbprint;
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

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}

export class VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference {
    return new VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayVpnClientConfigurationRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#public_cert_data VirtualNetworkGateway#public_cert_data}
  */
  readonly publicCertData: string;
}

export function virtualNetworkGatewayVpnClientConfigurationRootCertificateToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_cert_data: cdktf.stringToTerraform(struct!.publicCertData),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationRootCertificateToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.publicCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkGatewayVpnClientConfigurationRootCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicCertData = this._publicCertData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfigurationRootCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._publicCertData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._publicCertData = value.publicCertData;
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

  // public_cert_data - computed: false, optional: false, required: true
  private _publicCertData?: string; 
  public get publicCertData() {
    return this.getStringAttribute('public_cert_data');
  }
  public set publicCertData(value: string) {
    this._publicCertData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertDataInput() {
    return this._publicCertData;
  }
}

export class VirtualNetworkGatewayVpnClientConfigurationRootCertificateList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayVpnClientConfigurationRootCertificate[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference {
    return new VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayVpnClientConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}
  */
  readonly addressSpace: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}
  */
  readonly radiusServerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}
  */
  readonly radiusServerSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}
  */
  readonly vpnClientProtocols?: string[];
  /**
  * revoked_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#revoked_certificate VirtualNetworkGateway#revoked_certificate}
  */
  readonly revokedCertificate?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[] | cdktf.IResolvable;
  /**
  * root_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#root_certificate VirtualNetworkGateway#root_certificate}
  */
  readonly rootCertificate?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[] | cdktf.IResolvable;
}

export function virtualNetworkGatewayVpnClientConfigurationToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationOutputReference | VirtualNetworkGatewayVpnClientConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_space: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressSpace),
    radius_server_address: cdktf.stringToTerraform(struct!.radiusServerAddress),
    radius_server_secret: cdktf.stringToTerraform(struct!.radiusServerSecret),
    vpn_client_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnClientProtocols),
    revoked_certificate: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToTerraform, true)(struct!.revokedCertificate),
    root_certificate: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRootCertificateToTerraform, true)(struct!.rootCertificate),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationOutputReference | VirtualNetworkGatewayVpnClientConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_space: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressSpace),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    radius_server_address: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_server_secret: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_client_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpnClientProtocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    revoked_certificate: {
      value: cdktf.listMapperHcl(virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToHclTerraform, true)(struct!.revokedCertificate),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList",
    },
    root_certificate: {
      value: cdktf.listMapperHcl(virtualNetworkGatewayVpnClientConfigurationRootCertificateToHclTerraform, true)(struct!.rootCertificate),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualNetworkGatewayVpnClientConfigurationRootCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayVpnClientConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSpace = this._addressSpace;
    }
    if (this._radiusServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerAddress = this._radiusServerAddress;
    }
    if (this._radiusServerSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerSecret = this._radiusServerSecret;
    }
    if (this._vpnClientProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnClientProtocols = this._vpnClientProtocols;
    }
    if (this._revokedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedCertificate = this._revokedCertificate?.internalValue;
    }
    if (this._rootCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCertificate = this._rootCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressSpace = undefined;
      this._radiusServerAddress = undefined;
      this._radiusServerSecret = undefined;
      this._vpnClientProtocols = undefined;
      this._revokedCertificate.internalValue = undefined;
      this._rootCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressSpace = value.addressSpace;
      this._radiusServerAddress = value.radiusServerAddress;
      this._radiusServerSecret = value.radiusServerSecret;
      this._vpnClientProtocols = value.vpnClientProtocols;
      this._revokedCertificate.internalValue = value.revokedCertificate;
      this._rootCertificate.internalValue = value.rootCertificate;
    }
  }

  // address_space - computed: false, optional: false, required: true
  private _addressSpace?: string[]; 
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }
  public set addressSpace(value: string[]) {
    this._addressSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceInput() {
    return this._addressSpace;
  }

  // radius_server_address - computed: false, optional: true, required: false
  private _radiusServerAddress?: string; 
  public get radiusServerAddress() {
    return this.getStringAttribute('radius_server_address');
  }
  public set radiusServerAddress(value: string) {
    this._radiusServerAddress = value;
  }
  public resetRadiusServerAddress() {
    this._radiusServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerAddressInput() {
    return this._radiusServerAddress;
  }

  // radius_server_secret - computed: false, optional: true, required: false
  private _radiusServerSecret?: string; 
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }
  public set radiusServerSecret(value: string) {
    this._radiusServerSecret = value;
  }
  public resetRadiusServerSecret() {
    this._radiusServerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerSecretInput() {
    return this._radiusServerSecret;
  }

  // vpn_client_protocols - computed: true, optional: true, required: false
  private _vpnClientProtocols?: string[]; 
  public get vpnClientProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_client_protocols'));
  }
  public set vpnClientProtocols(value: string[]) {
    this._vpnClientProtocols = value;
  }
  public resetVpnClientProtocols() {
    this._vpnClientProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientProtocolsInput() {
    return this._vpnClientProtocols;
  }

  // revoked_certificate - computed: false, optional: true, required: false
  private _revokedCertificate = new VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList(this, "revoked_certificate", true);
  public get revokedCertificate() {
    return this._revokedCertificate;
  }
  public putRevokedCertificate(value: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[] | cdktf.IResolvable) {
    this._revokedCertificate.internalValue = value;
  }
  public resetRevokedCertificate() {
    this._revokedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedCertificateInput() {
    return this._revokedCertificate.internalValue;
  }

  // root_certificate - computed: false, optional: true, required: false
  private _rootCertificate = new VirtualNetworkGatewayVpnClientConfigurationRootCertificateList(this, "root_certificate", true);
  public get rootCertificate() {
    return this._rootCertificate;
  }
  public putRootCertificate(value: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[] | cdktf.IResolvable) {
    this._rootCertificate.internalValue = value;
  }
  public resetRootCertificate() {
    this._rootCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateInput() {
    return this._rootCertificate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway azurestack_virtual_network_gateway}
*/
export class VirtualNetworkGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurestack_virtual_network_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetworkGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetworkGateway to import
  * @param importFromId The id of the existing VirtualNetworkGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetworkGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurestack_virtual_network_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway azurestack_virtual_network_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurestack_virtual_network_gateway',
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
    this._activeActive = config.activeActive;
    this._defaultLocalNetworkGatewayId = config.defaultLocalNetworkGatewayId;
    this._enableBgp = config.enableBgp;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._type = config.type;
    this._vpnType = config.vpnType;
    this._bgpSettings.internalValue = config.bgpSettings;
    this._ipConfiguration.internalValue = config.ipConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._vpnClientConfiguration.internalValue = config.vpnClientConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active - computed: true, optional: true, required: false
  private _activeActive?: boolean | cdktf.IResolvable; 
  public get activeActive() {
    return this.getBooleanAttribute('active_active');
  }
  public set activeActive(value: boolean | cdktf.IResolvable) {
    this._activeActive = value;
  }
  public resetActiveActive() {
    this._activeActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveInput() {
    return this._activeActive;
  }

  // default_local_network_gateway_id - computed: false, optional: true, required: false
  private _defaultLocalNetworkGatewayId?: string; 
  public get defaultLocalNetworkGatewayId() {
    return this.getStringAttribute('default_local_network_gateway_id');
  }
  public set defaultLocalNetworkGatewayId(value: string) {
    this._defaultLocalNetworkGatewayId = value;
  }
  public resetDefaultLocalNetworkGatewayId() {
    this._defaultLocalNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocalNetworkGatewayIdInput() {
    return this._defaultLocalNetworkGatewayId;
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean | cdktf.IResolvable; 
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }
  public set enableBgp(value: boolean | cdktf.IResolvable) {
    this._enableBgp = value;
  }
  public resetEnableBgp() {
    this._enableBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpInput() {
    return this._enableBgp;
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

  // vpn_type - computed: false, optional: true, required: false
  private _vpnType?: string; 
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }
  public set vpnType(value: string) {
    this._vpnType = value;
  }
  public resetVpnType() {
    this._vpnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTypeInput() {
    return this._vpnType;
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings = new VirtualNetworkGatewayBgpSettingsOutputReference(this, "bgp_settings");
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public putBgpSettings(value: VirtualNetworkGatewayBgpSettings) {
    this._bgpSettings.internalValue = value;
  }
  public resetBgpSettings() {
    this._bgpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings.internalValue;
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration = new VirtualNetworkGatewayIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: VirtualNetworkGatewayIpConfiguration[] | cdktf.IResolvable) {
    this._ipConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualNetworkGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualNetworkGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpn_client_configuration - computed: false, optional: true, required: false
  private _vpnClientConfiguration = new VirtualNetworkGatewayVpnClientConfigurationOutputReference(this, "vpn_client_configuration");
  public get vpnClientConfiguration() {
    return this._vpnClientConfiguration;
  }
  public putVpnClientConfiguration(value: VirtualNetworkGatewayVpnClientConfiguration) {
    this._vpnClientConfiguration.internalValue = value;
  }
  public resetVpnClientConfiguration() {
    this._vpnClientConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientConfigurationInput() {
    return this._vpnClientConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_active: cdktf.booleanToTerraform(this._activeActive),
      default_local_network_gateway_id: cdktf.stringToTerraform(this._defaultLocalNetworkGatewayId),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      vpn_type: cdktf.stringToTerraform(this._vpnType),
      bgp_settings: virtualNetworkGatewayBgpSettingsToTerraform(this._bgpSettings.internalValue),
      ip_configuration: cdktf.listMapper(virtualNetworkGatewayIpConfigurationToTerraform, true)(this._ipConfiguration.internalValue),
      timeouts: virtualNetworkGatewayTimeoutsToTerraform(this._timeouts.internalValue),
      vpn_client_configuration: virtualNetworkGatewayVpnClientConfigurationToTerraform(this._vpnClientConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_active: {
        value: cdktf.booleanToHclTerraform(this._activeActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_local_network_gateway_id: {
        value: cdktf.stringToHclTerraform(this._defaultLocalNetworkGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_bgp: {
        value: cdktf.booleanToHclTerraform(this._enableBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_type: {
        value: cdktf.stringToHclTerraform(this._vpnType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_settings: {
        value: virtualNetworkGatewayBgpSettingsToHclTerraform(this._bgpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayBgpSettingsList",
      },
      ip_configuration: {
        value: cdktf.listMapperHcl(virtualNetworkGatewayIpConfigurationToHclTerraform, true)(this._ipConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayIpConfigurationList",
      },
      timeouts: {
        value: virtualNetworkGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualNetworkGatewayTimeouts",
      },
      vpn_client_configuration: {
        value: virtualNetworkGatewayVpnClientConfigurationToHclTerraform(this._vpnClientConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayVpnClientConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
