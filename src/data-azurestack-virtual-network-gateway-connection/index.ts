/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurestackVirtualNetworkGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#timeouts DataAzurestackVirtualNetworkGatewayConnection#timeouts}
  */
  readonly timeouts?: DataAzurestackVirtualNetworkGatewayConnectionTimeouts;
}
export interface DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy {
}

export function dataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyToTerraform(struct?: DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dh_group - computed: true, optional: false, required: false
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }

  // ike_encryption - computed: true, optional: false, required: false
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }

  // ike_integrity - computed: true, optional: false, required: false
  public get ikeIntegrity() {
    return this.getStringAttribute('ike_integrity');
  }

  // ipsec_encryption - computed: true, optional: false, required: false
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }

  // ipsec_integrity - computed: true, optional: false, required: false
  public get ipsecIntegrity() {
    return this.getStringAttribute('ipsec_integrity');
  }

  // pfs_group - computed: true, optional: false, required: false
  public get pfsGroup() {
    return this.getStringAttribute('pfs_group');
  }

  // sa_datasize - computed: true, optional: false, required: false
  public get saDatasize() {
    return this.getNumberAttribute('sa_datasize');
  }

  // sa_lifetime - computed: true, optional: false, required: false
  public get saLifetime() {
    return this.getNumberAttribute('sa_lifetime');
  }
}

export class DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference {
    return new DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurestackVirtualNetworkGatewayConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#read DataAzurestackVirtualNetworkGatewayConnection#read}
  */
  readonly read?: string;
}

export function dataAzurestackVirtualNetworkGatewayConnectionTimeoutsToTerraform(struct?: DataAzurestackVirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurestackVirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurestackVirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection azurestack_virtual_network_gateway_connection}
*/
export class DataAzurestackVirtualNetworkGatewayConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurestack_virtual_network_gateway_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection azurestack_virtual_network_gateway_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurestackVirtualNetworkGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurestackVirtualNetworkGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurestack_virtual_network_gateway_connection',
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
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: true, optional: false, required: false
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }

  // egress_bytes_transferred - computed: true, optional: false, required: false
  public get egressBytesTransferred() {
    return this.getNumberAttribute('egress_bytes_transferred');
  }

  // enable_bgp - computed: true, optional: false, required: false
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }

  // express_route_circuit_id - computed: true, optional: false, required: false
  public get expressRouteCircuitId() {
    return this.getStringAttribute('express_route_circuit_id');
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

  // ingress_bytes_transferred - computed: true, optional: false, required: false
  public get ingressBytesTransferred() {
    return this.getNumberAttribute('ingress_bytes_transferred');
  }

  // ipsec_policy - computed: true, optional: false, required: false
  private _ipsecPolicy = new DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList(this, "ipsec_policy", false);
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }

  // local_network_gateway_id - computed: true, optional: false, required: false
  public get localNetworkGatewayId() {
    return this.getStringAttribute('local_network_gateway_id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // peer_virtual_network_gateway_id - computed: true, optional: false, required: false
  public get peerVirtualNetworkGatewayId() {
    return this.getStringAttribute('peer_virtual_network_gateway_id');
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

  // resource_guid - computed: true, optional: false, required: false
  public get resourceGuid() {
    return this.getStringAttribute('resource_guid');
  }

  // routing_weight - computed: true, optional: false, required: false
  public get routingWeight() {
    return this.getNumberAttribute('routing_weight');
  }

  // shared_key - computed: true, optional: false, required: false
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_policy_based_traffic_selectors - computed: true, optional: false, required: false
  public get usePolicyBasedTrafficSelectors() {
    return this.getBooleanAttribute('use_policy_based_traffic_selectors');
  }

  // virtual_network_gateway_id - computed: true, optional: false, required: false
  public get virtualNetworkGatewayId() {
    return this.getStringAttribute('virtual_network_gateway_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurestackVirtualNetworkGatewayConnectionTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurestackVirtualNetworkGatewayConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
