// https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}
  */
  readonly authorizationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}
  */
  readonly enableBgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}
  */
  readonly expressRouteCircuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}
  */
  readonly localNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}
  */
  readonly peerVirtualNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}
  */
  readonly routingWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}
  */
  readonly usePolicyBasedTrafficSelectors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}
  */
  readonly virtualNetworkGatewayId: string;
  /**
  * ipsec_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}
  */
  readonly ipsecPolicy?: VirtualNetworkGatewayConnectionIpsecPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#timeouts VirtualNetworkGatewayConnection#timeouts}
  */
  readonly timeouts?: VirtualNetworkGatewayConnectionTimeouts;
}
export interface VirtualNetworkGatewayConnectionIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}
  */
  readonly ikeEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}
  */
  readonly ikeIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}
  */
  readonly ipsecEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}
  */
  readonly ipsecIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}
  */
  readonly saDatasize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}
  */
  readonly saLifetime?: number;
}

export function virtualNetworkGatewayConnectionIpsecPolicyToTerraform(struct?: VirtualNetworkGatewayConnectionIpsecPolicyOutputReference | VirtualNetworkGatewayConnectionIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    ike_encryption: cdktf.stringToTerraform(struct!.ikeEncryption),
    ike_integrity: cdktf.stringToTerraform(struct!.ikeIntegrity),
    ipsec_encryption: cdktf.stringToTerraform(struct!.ipsecEncryption),
    ipsec_integrity: cdktf.stringToTerraform(struct!.ipsecIntegrity),
    pfs_group: cdktf.stringToTerraform(struct!.pfsGroup),
    sa_datasize: cdktf.numberToTerraform(struct!.saDatasize),
    sa_lifetime: cdktf.numberToTerraform(struct!.saLifetime),
  }
}

export class VirtualNetworkGatewayConnectionIpsecPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionIpsecPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._ikeEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryption = this._ikeEncryption;
    }
    if (this._ikeIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeIntegrity = this._ikeIntegrity;
    }
    if (this._ipsecEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncryption = this._ipsecEncryption;
    }
    if (this._ipsecIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecIntegrity = this._ipsecIntegrity;
    }
    if (this._pfsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfsGroup = this._pfsGroup;
    }
    if (this._saDatasize !== undefined) {
      hasAnyValues = true;
      internalValueResult.saDatasize = this._saDatasize;
    }
    if (this._saLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLifetime = this._saLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayConnectionIpsecPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhGroup = undefined;
      this._ikeEncryption = undefined;
      this._ikeIntegrity = undefined;
      this._ipsecEncryption = undefined;
      this._ipsecIntegrity = undefined;
      this._pfsGroup = undefined;
      this._saDatasize = undefined;
      this._saLifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhGroup = value.dhGroup;
      this._ikeEncryption = value.ikeEncryption;
      this._ikeIntegrity = value.ikeIntegrity;
      this._ipsecEncryption = value.ipsecEncryption;
      this._ipsecIntegrity = value.ipsecIntegrity;
      this._pfsGroup = value.pfsGroup;
      this._saDatasize = value.saDatasize;
      this._saLifetime = value.saLifetime;
    }
  }

  // dh_group - computed: false, optional: false, required: true
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // ike_encryption - computed: false, optional: false, required: true
  private _ikeEncryption?: string; 
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }
  public set ikeEncryption(value: string) {
    this._ikeEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionInput() {
    return this._ikeEncryption;
  }

  // ike_integrity - computed: false, optional: false, required: true
  private _ikeIntegrity?: string; 
  public get ikeIntegrity() {
    return this.getStringAttribute('ike_integrity');
  }
  public set ikeIntegrity(value: string) {
    this._ikeIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityInput() {
    return this._ikeIntegrity;
  }

  // ipsec_encryption - computed: false, optional: false, required: true
  private _ipsecEncryption?: string; 
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }
  public set ipsecEncryption(value: string) {
    this._ipsecEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptionInput() {
    return this._ipsecEncryption;
  }

  // ipsec_integrity - computed: false, optional: false, required: true
  private _ipsecIntegrity?: string; 
  public get ipsecIntegrity() {
    return this.getStringAttribute('ipsec_integrity');
  }
  public set ipsecIntegrity(value: string) {
    this._ipsecIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIntegrityInput() {
    return this._ipsecIntegrity;
  }

  // pfs_group - computed: false, optional: false, required: true
  private _pfsGroup?: string; 
  public get pfsGroup() {
    return this.getStringAttribute('pfs_group');
  }
  public set pfsGroup(value: string) {
    this._pfsGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsGroupInput() {
    return this._pfsGroup;
  }

  // sa_datasize - computed: true, optional: true, required: false
  private _saDatasize?: number; 
  public get saDatasize() {
    return this.getNumberAttribute('sa_datasize');
  }
  public set saDatasize(value: number) {
    this._saDatasize = value;
  }
  public resetSaDatasize() {
    this._saDatasize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saDatasizeInput() {
    return this._saDatasize;
  }

  // sa_lifetime - computed: true, optional: true, required: false
  private _saLifetime?: number; 
  public get saLifetime() {
    return this.getNumberAttribute('sa_lifetime');
  }
  public set saLifetime(value: number) {
    this._saLifetime = value;
  }
  public resetSaLifetime() {
    this._saLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifetimeInput() {
    return this._saLifetime;
  }
}
export interface VirtualNetworkGatewayConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}
  */
  readonly update?: string;
}

export function virtualNetworkGatewayConnectionTimeoutsToTerraform(struct?: VirtualNetworkGatewayConnectionTimeoutsOutputReference | VirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable): any {
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

export class VirtualNetworkGatewayConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection azurestack_virtual_network_gateway_connection}
*/
export class VirtualNetworkGatewayConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurestack_virtual_network_gateway_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_network_gateway_connection azurestack_virtual_network_gateway_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConnectionConfig) {
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
    this._authorizationKey = config.authorizationKey;
    this._enableBgp = config.enableBgp;
    this._expressRouteCircuitId = config.expressRouteCircuitId;
    this._id = config.id;
    this._localNetworkGatewayId = config.localNetworkGatewayId;
    this._location = config.location;
    this._name = config.name;
    this._peerVirtualNetworkGatewayId = config.peerVirtualNetworkGatewayId;
    this._resourceGroupName = config.resourceGroupName;
    this._routingWeight = config.routingWeight;
    this._sharedKey = config.sharedKey;
    this._tags = config.tags;
    this._type = config.type;
    this._usePolicyBasedTrafficSelectors = config.usePolicyBasedTrafficSelectors;
    this._virtualNetworkGatewayId = config.virtualNetworkGatewayId;
    this._ipsecPolicy.internalValue = config.ipsecPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: false, optional: true, required: false
  private _authorizationKey?: string; 
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }
  public set authorizationKey(value: string) {
    this._authorizationKey = value;
  }
  public resetAuthorizationKey() {
    this._authorizationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationKeyInput() {
    return this._authorizationKey;
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

  // express_route_circuit_id - computed: false, optional: true, required: false
  private _expressRouteCircuitId?: string; 
  public get expressRouteCircuitId() {
    return this.getStringAttribute('express_route_circuit_id');
  }
  public set expressRouteCircuitId(value: string) {
    this._expressRouteCircuitId = value;
  }
  public resetExpressRouteCircuitId() {
    this._expressRouteCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitIdInput() {
    return this._expressRouteCircuitId;
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

  // local_network_gateway_id - computed: false, optional: true, required: false
  private _localNetworkGatewayId?: string; 
  public get localNetworkGatewayId() {
    return this.getStringAttribute('local_network_gateway_id');
  }
  public set localNetworkGatewayId(value: string) {
    this._localNetworkGatewayId = value;
  }
  public resetLocalNetworkGatewayId() {
    this._localNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworkGatewayIdInput() {
    return this._localNetworkGatewayId;
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

  // peer_virtual_network_gateway_id - computed: false, optional: true, required: false
  private _peerVirtualNetworkGatewayId?: string; 
  public get peerVirtualNetworkGatewayId() {
    return this.getStringAttribute('peer_virtual_network_gateway_id');
  }
  public set peerVirtualNetworkGatewayId(value: string) {
    this._peerVirtualNetworkGatewayId = value;
  }
  public resetPeerVirtualNetworkGatewayId() {
    this._peerVirtualNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVirtualNetworkGatewayIdInput() {
    return this._peerVirtualNetworkGatewayId;
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

  // routing_weight - computed: true, optional: true, required: false
  private _routingWeight?: number; 
  public get routingWeight() {
    return this.getNumberAttribute('routing_weight');
  }
  public set routingWeight(value: number) {
    this._routingWeight = value;
  }
  public resetRoutingWeight() {
    this._routingWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingWeightInput() {
    return this._routingWeight;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
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

  // use_policy_based_traffic_selectors - computed: true, optional: true, required: false
  private _usePolicyBasedTrafficSelectors?: boolean | cdktf.IResolvable; 
  public get usePolicyBasedTrafficSelectors() {
    return this.getBooleanAttribute('use_policy_based_traffic_selectors');
  }
  public set usePolicyBasedTrafficSelectors(value: boolean | cdktf.IResolvable) {
    this._usePolicyBasedTrafficSelectors = value;
  }
  public resetUsePolicyBasedTrafficSelectors() {
    this._usePolicyBasedTrafficSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePolicyBasedTrafficSelectorsInput() {
    return this._usePolicyBasedTrafficSelectors;
  }

  // virtual_network_gateway_id - computed: false, optional: false, required: true
  private _virtualNetworkGatewayId?: string; 
  public get virtualNetworkGatewayId() {
    return this.getStringAttribute('virtual_network_gateway_id');
  }
  public set virtualNetworkGatewayId(value: string) {
    this._virtualNetworkGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkGatewayIdInput() {
    return this._virtualNetworkGatewayId;
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy = new VirtualNetworkGatewayConnectionIpsecPolicyOutputReference(this, "ipsec_policy");
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }
  public putIpsecPolicy(value: VirtualNetworkGatewayConnectionIpsecPolicy) {
    this._ipsecPolicy.internalValue = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualNetworkGatewayConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualNetworkGatewayConnectionTimeouts) {
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
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      express_route_circuit_id: cdktf.stringToTerraform(this._expressRouteCircuitId),
      id: cdktf.stringToTerraform(this._id),
      local_network_gateway_id: cdktf.stringToTerraform(this._localNetworkGatewayId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      peer_virtual_network_gateway_id: cdktf.stringToTerraform(this._peerVirtualNetworkGatewayId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      routing_weight: cdktf.numberToTerraform(this._routingWeight),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      use_policy_based_traffic_selectors: cdktf.booleanToTerraform(this._usePolicyBasedTrafficSelectors),
      virtual_network_gateway_id: cdktf.stringToTerraform(this._virtualNetworkGatewayId),
      ipsec_policy: virtualNetworkGatewayConnectionIpsecPolicyToTerraform(this._ipsecPolicy.internalValue),
      timeouts: virtualNetworkGatewayConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
