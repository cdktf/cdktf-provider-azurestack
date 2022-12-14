// https://www.terraform.io/docs/providers/azurestack/r/network_security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#access NetworkSecurityRule#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#description NetworkSecurityRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}
  */
  readonly destinationAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}
  */
  readonly destinationAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}
  */
  readonly destinationPortRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#direction NetworkSecurityRule#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#id NetworkSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}
  */
  readonly networkSecurityGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#priority NetworkSecurityRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#protocol NetworkSecurityRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}
  */
  readonly sourceAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}
  */
  readonly sourceAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}
  */
  readonly sourcePortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}
  */
  readonly sourcePortRanges?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#timeouts NetworkSecurityRule#timeouts}
  */
  readonly timeouts?: NetworkSecurityRuleTimeouts;
}
export interface NetworkSecurityRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#create NetworkSecurityRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#delete NetworkSecurityRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#read NetworkSecurityRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule#update NetworkSecurityRule#update}
  */
  readonly update?: string;
}

export function networkSecurityRuleTimeoutsToTerraform(struct?: NetworkSecurityRuleTimeoutsOutputReference | NetworkSecurityRuleTimeouts | cdktf.IResolvable): any {
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

export class NetworkSecurityRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule azurestack_network_security_rule}
*/
export class NetworkSecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurestack_network_security_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurestack/r/network_security_rule azurestack_network_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurestack_network_security_rule',
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
    this._access = config.access;
    this._description = config.description;
    this._destinationAddressPrefix = config.destinationAddressPrefix;
    this._destinationAddressPrefixes = config.destinationAddressPrefixes;
    this._destinationPortRange = config.destinationPortRange;
    this._destinationPortRanges = config.destinationPortRanges;
    this._direction = config.direction;
    this._id = config.id;
    this._name = config.name;
    this._networkSecurityGroupName = config.networkSecurityGroupName;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceAddressPrefix = config.sourceAddressPrefix;
    this._sourceAddressPrefixes = config.sourceAddressPrefixes;
    this._sourcePortRange = config.sourcePortRange;
    this._sourcePortRanges = config.sourcePortRanges;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_address_prefix - computed: false, optional: true, required: false
  private _destinationAddressPrefix?: string; 
  public get destinationAddressPrefix() {
    return this.getStringAttribute('destination_address_prefix');
  }
  public set destinationAddressPrefix(value: string) {
    this._destinationAddressPrefix = value;
  }
  public resetDestinationAddressPrefix() {
    this._destinationAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressPrefixInput() {
    return this._destinationAddressPrefix;
  }

  // destination_address_prefixes - computed: false, optional: true, required: false
  private _destinationAddressPrefixes?: string[]; 
  public get destinationAddressPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address_prefixes'));
  }
  public set destinationAddressPrefixes(value: string[]) {
    this._destinationAddressPrefixes = value;
  }
  public resetDestinationAddressPrefixes() {
    this._destinationAddressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressPrefixesInput() {
    return this._destinationAddressPrefixes;
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange?: string; 
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }
  public set destinationPortRange(value: string) {
    this._destinationPortRange = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange;
  }

  // destination_port_ranges - computed: false, optional: true, required: false
  private _destinationPortRanges?: string[]; 
  public get destinationPortRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_port_ranges'));
  }
  public set destinationPortRanges(value: string[]) {
    this._destinationPortRanges = value;
  }
  public resetDestinationPortRanges() {
    this._destinationPortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangesInput() {
    return this._destinationPortRanges;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // network_security_group_name - computed: false, optional: false, required: true
  private _networkSecurityGroupName?: string; 
  public get networkSecurityGroupName() {
    return this.getStringAttribute('network_security_group_name');
  }
  public set networkSecurityGroupName(value: string) {
    this._networkSecurityGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupNameInput() {
    return this._networkSecurityGroupName;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // source_address_prefix - computed: false, optional: true, required: false
  private _sourceAddressPrefix?: string; 
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }
  public set sourceAddressPrefix(value: string) {
    this._sourceAddressPrefix = value;
  }
  public resetSourceAddressPrefix() {
    this._sourceAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressPrefixInput() {
    return this._sourceAddressPrefix;
  }

  // source_address_prefixes - computed: false, optional: true, required: false
  private _sourceAddressPrefixes?: string[]; 
  public get sourceAddressPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address_prefixes'));
  }
  public set sourceAddressPrefixes(value: string[]) {
    this._sourceAddressPrefixes = value;
  }
  public resetSourceAddressPrefixes() {
    this._sourceAddressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressPrefixesInput() {
    return this._sourceAddressPrefixes;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange?: string; 
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string) {
    this._sourcePortRange = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange;
  }

  // source_port_ranges - computed: false, optional: true, required: false
  private _sourcePortRanges?: string[]; 
  public get sourcePortRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('source_port_ranges'));
  }
  public set sourcePortRanges(value: string[]) {
    this._sourcePortRanges = value;
  }
  public resetSourcePortRanges() {
    this._sourcePortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangesInput() {
    return this._sourcePortRanges;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityRuleTimeouts) {
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
      access: cdktf.stringToTerraform(this._access),
      description: cdktf.stringToTerraform(this._description),
      destination_address_prefix: cdktf.stringToTerraform(this._destinationAddressPrefix),
      destination_address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationAddressPrefixes),
      destination_port_range: cdktf.stringToTerraform(this._destinationPortRange),
      destination_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationPortRanges),
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_security_group_name: cdktf.stringToTerraform(this._networkSecurityGroupName),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_address_prefix: cdktf.stringToTerraform(this._sourceAddressPrefix),
      source_address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceAddressPrefixes),
      source_port_range: cdktf.stringToTerraform(this._sourcePortRange),
      source_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourcePortRanges),
      timeouts: networkSecurityRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
