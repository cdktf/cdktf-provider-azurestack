# `dataAzurestackNetworkInterface` Submodule <a name="`dataAzurestackNetworkInterface` Submodule" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackNetworkInterface <a name="DataAzurestackNetworkInterface" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface azurestack_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

dataazurestacknetworkinterface.NewDataAzurestackNetworkInterface(scope Construct, id *string, config DataAzurestackNetworkInterfaceConfig) DataAzurestackNetworkInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig">DataAzurestackNetworkInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig">DataAzurestackNetworkInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurestackNetworkInterfaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

dataazurestacknetworkinterface.DataAzurestackNetworkInterface_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

dataazurestacknetworkinterface.DataAzurestackNetworkInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

dataazurestacknetworkinterface.DataAzurestackNetworkInterface_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.appliedDnsServers">AppliedDnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.internalDnsNameLabel">InternalDnsNameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList">DataAzurestackNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference">DataAzurestackNetworkInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AppliedDnsServers`<sup>Required</sup> <a name="AppliedDnsServers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.appliedDnsServers"></a>

```go
func AppliedDnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `EnableIpForwarding`<sup>Required</sup> <a name="EnableIpForwarding" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.enableIpForwarding"></a>

```go
func EnableIpForwarding() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalDnsNameLabel`<sup>Required</sup> <a name="InternalDnsNameLabel" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.internalDnsNameLabel"></a>

```go
func InternalDnsNameLabel() *string
```

- *Type:* *string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.ipConfiguration"></a>

```go
func IpConfiguration() DataAzurestackNetworkInterfaceIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList">DataAzurestackNetworkInterfaceIpConfigurationList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.networkSecurityGroupId"></a>

```go
func NetworkSecurityGroupId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.privateIpAddresses"></a>

```go
func PrivateIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.timeouts"></a>

```go
func Timeouts() DataAzurestackNetworkInterfaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference">DataAzurestackNetworkInterfaceTimeoutsOutputReference</a>

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackNetworkInterfaceConfig <a name="DataAzurestackNetworkInterfaceConfig" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

&dataazurestacknetworkinterface.DataAzurestackNetworkInterfaceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurestack-go/azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#name DataAzurestackNetworkInterface#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#resource_group_name DataAzurestackNetworkInterface#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#id DataAzurestackNetworkInterface#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#name DataAzurestackNetworkInterface#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#resource_group_name DataAzurestackNetworkInterface#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#id DataAzurestackNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.timeouts"></a>

```go
Timeouts DataAzurestackNetworkInterfaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#timeouts DataAzurestackNetworkInterface#timeouts}

---

### DataAzurestackNetworkInterfaceIpConfiguration <a name="DataAzurestackNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

&dataazurestacknetworkinterface.DataAzurestackNetworkInterfaceIpConfiguration {

}
```


### DataAzurestackNetworkInterfaceTimeouts <a name="DataAzurestackNetworkInterfaceTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

&dataazurestacknetworkinterface.DataAzurestackNetworkInterfaceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#read DataAzurestackNetworkInterface#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#read DataAzurestackNetworkInterface#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackNetworkInterfaceIpConfigurationList <a name="DataAzurestackNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

dataazurestacknetworkinterface.NewDataAzurestackNetworkInterfaceIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurestackNetworkInterfaceIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.get"></a>

```go
func Get(index *f64) DataAzurestackNetworkInterfaceIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurestackNetworkInterfaceIpConfigurationOutputReference <a name="DataAzurestackNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

dataazurestacknetworkinterface.NewDataAzurestackNetworkInterfaceIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurestackNetworkInterfaceIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolsIds">ApplicationGatewayBackendAddressPoolsIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolsIds">LoadBalancerBackendAddressPoolsIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressAllocation">PrivateIpAddressAllocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressVersion">PrivateIpAddressVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfiguration">DataAzurestackNetworkInterfaceIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationGatewayBackendAddressPoolsIds`<sup>Required</sup> <a name="ApplicationGatewayBackendAddressPoolsIds" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolsIds"></a>

```go
func ApplicationGatewayBackendAddressPoolsIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerBackendAddressPoolsIds`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolsIds" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolsIds"></a>

```go
func LoadBalancerBackendAddressPoolsIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```go
func LoadBalancerInboundNatRulesIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAddressAllocation`<sup>Required</sup> <a name="PrivateIpAddressAllocation" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```go
func PrivateIpAddressAllocation() *string
```

- *Type:* *string

---

##### `PrivateIpAddressVersion`<sup>Required</sup> <a name="PrivateIpAddressVersion" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressVersion"></a>

```go
func PrivateIpAddressVersion() *string
```

- *Type:* *string

---

##### `PublicIpAddressId`<sup>Required</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressId"></a>

```go
func PublicIpAddressId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurestackNetworkInterfaceIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfiguration">DataAzurestackNetworkInterfaceIpConfiguration</a>

---


### DataAzurestackNetworkInterfaceTimeoutsOutputReference <a name="DataAzurestackNetworkInterfaceTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworkinterface"

dataazurestacknetworkinterface.NewDataAzurestackNetworkInterfaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurestackNetworkInterfaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



