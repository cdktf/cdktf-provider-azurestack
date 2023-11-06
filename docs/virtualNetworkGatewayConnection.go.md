# `azurestack_virtual_network_gateway_connection`

Refer to the Terraform Registory for docs: [`azurestack_virtual_network_gateway_connection`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection).

# `virtualNetworkGatewayConnection` Submodule <a name="`virtualNetworkGatewayConnection` Submodule" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGatewayConnection <a name="VirtualNetworkGatewayConnection" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection azurestack_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

virtualnetworkgatewayconnection.NewVirtualNetworkGatewayConnection(scope Construct, id *string, config VirtualNetworkGatewayConnectionConfig) VirtualNetworkGatewayConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig">VirtualNetworkGatewayConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig">VirtualNetworkGatewayConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy">PutIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetAuthorizationKey">ResetAuthorizationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEnableBgp">ResetEnableBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteCircuitId">ResetExpressRouteCircuitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIpsecPolicy">ResetIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalNetworkGatewayId">ResetLocalNetworkGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPeerVirtualNetworkGatewayId">ResetPeerVirtualNetworkGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetRoutingWeight">ResetRoutingWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetSharedKey">ResetSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetUsePolicyBasedTrafficSelectors">ResetUsePolicyBasedTrafficSelectors</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutIpsecPolicy` <a name="PutIpsecPolicy" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy"></a>

```go
func PutIpsecPolicy(value VirtualNetworkGatewayConnectionIpsecPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts"></a>

```go
func PutTimeouts(value VirtualNetworkGatewayConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

---

##### `ResetAuthorizationKey` <a name="ResetAuthorizationKey" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetAuthorizationKey"></a>

```go
func ResetAuthorizationKey()
```

##### `ResetEnableBgp` <a name="ResetEnableBgp" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEnableBgp"></a>

```go
func ResetEnableBgp()
```

##### `ResetExpressRouteCircuitId` <a name="ResetExpressRouteCircuitId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteCircuitId"></a>

```go
func ResetExpressRouteCircuitId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetIpsecPolicy` <a name="ResetIpsecPolicy" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIpsecPolicy"></a>

```go
func ResetIpsecPolicy()
```

##### `ResetLocalNetworkGatewayId` <a name="ResetLocalNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalNetworkGatewayId"></a>

```go
func ResetLocalNetworkGatewayId()
```

##### `ResetPeerVirtualNetworkGatewayId` <a name="ResetPeerVirtualNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPeerVirtualNetworkGatewayId"></a>

```go
func ResetPeerVirtualNetworkGatewayId()
```

##### `ResetRoutingWeight` <a name="ResetRoutingWeight" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetRoutingWeight"></a>

```go
func ResetRoutingWeight()
```

##### `ResetSharedKey` <a name="ResetSharedKey" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetSharedKey"></a>

```go
func ResetSharedKey()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUsePolicyBasedTrafficSelectors` <a name="ResetUsePolicyBasedTrafficSelectors" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetUsePolicyBasedTrafficSelectors"></a>

```go
func ResetUsePolicyBasedTrafficSelectors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

virtualnetworkgatewayconnection.VirtualNetworkGatewayConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

virtualnetworkgatewayconnection.VirtualNetworkGatewayConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

virtualnetworkgatewayconnection.VirtualNetworkGatewayConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

virtualnetworkgatewayconnection.VirtualNetworkGatewayConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualNetworkGatewayConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualNetworkGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualNetworkGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference">VirtualNetworkGatewayConnectionIpsecPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference">VirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKeyInput">AuthorizationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgpInput">EnableBgpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitIdInput">ExpressRouteCircuitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicyInput">IpsecPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayIdInput">LocalNetworkGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayIdInput">PeerVirtualNetworkGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeightInput">RoutingWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKeyInput">SharedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectorsInput">UsePolicyBasedTrafficSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayIdInput">VirtualNetworkGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKey">AuthorizationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgp">EnableBgp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitId">ExpressRouteCircuitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayId">LocalNetworkGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">PeerVirtualNetworkGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeight">RoutingWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKey">SharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">UsePolicyBasedTrafficSelectors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">VirtualNetworkGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```go
func IpsecPolicy() VirtualNetworkGatewayConnectionIpsecPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference">VirtualNetworkGatewayConnectionIpsecPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeouts"></a>

```go
func Timeouts() VirtualNetworkGatewayConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference">VirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `AuthorizationKeyInput`<sup>Optional</sup> <a name="AuthorizationKeyInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKeyInput"></a>

```go
func AuthorizationKeyInput() *string
```

- *Type:* *string

---

##### `EnableBgpInput`<sup>Optional</sup> <a name="EnableBgpInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgpInput"></a>

```go
func EnableBgpInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressRouteCircuitIdInput`<sup>Optional</sup> <a name="ExpressRouteCircuitIdInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitIdInput"></a>

```go
func ExpressRouteCircuitIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpsecPolicyInput`<sup>Optional</sup> <a name="IpsecPolicyInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicyInput"></a>

```go
func IpsecPolicyInput() VirtualNetworkGatewayConnectionIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---

##### `LocalNetworkGatewayIdInput`<sup>Optional</sup> <a name="LocalNetworkGatewayIdInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayIdInput"></a>

```go
func LocalNetworkGatewayIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeerVirtualNetworkGatewayIdInput`<sup>Optional</sup> <a name="PeerVirtualNetworkGatewayIdInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayIdInput"></a>

```go
func PeerVirtualNetworkGatewayIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RoutingWeightInput`<sup>Optional</sup> <a name="RoutingWeightInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeightInput"></a>

```go
func RoutingWeightInput() *f64
```

- *Type:* *f64

---

##### `SharedKeyInput`<sup>Optional</sup> <a name="SharedKeyInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKeyInput"></a>

```go
func SharedKeyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsePolicyBasedTrafficSelectorsInput`<sup>Optional</sup> <a name="UsePolicyBasedTrafficSelectorsInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectorsInput"></a>

```go
func UsePolicyBasedTrafficSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkGatewayIdInput`<sup>Optional</sup> <a name="VirtualNetworkGatewayIdInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayIdInput"></a>

```go
func VirtualNetworkGatewayIdInput() *string
```

- *Type:* *string

---

##### `AuthorizationKey`<sup>Required</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKey"></a>

```go
func AuthorizationKey() *string
```

- *Type:* *string

---

##### `EnableBgp`<sup>Required</sup> <a name="EnableBgp" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgp"></a>

```go
func EnableBgp() interface{}
```

- *Type:* interface{}

---

##### `ExpressRouteCircuitId`<sup>Required</sup> <a name="ExpressRouteCircuitId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```go
func ExpressRouteCircuitId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalNetworkGatewayId`<sup>Required</sup> <a name="LocalNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```go
func LocalNetworkGatewayId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeerVirtualNetworkGatewayId`<sup>Required</sup> <a name="PeerVirtualNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```go
func PeerVirtualNetworkGatewayId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RoutingWeight`<sup>Required</sup> <a name="RoutingWeight" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeight"></a>

```go
func RoutingWeight() *f64
```

- *Type:* *f64

---

##### `SharedKey`<sup>Required</sup> <a name="SharedKey" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKey"></a>

```go
func SharedKey() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsePolicyBasedTrafficSelectors`<sup>Required</sup> <a name="UsePolicyBasedTrafficSelectors" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```go
func UsePolicyBasedTrafficSelectors() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkGatewayId`<sup>Required</sup> <a name="VirtualNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```go
func VirtualNetworkGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayConnectionConfig <a name="VirtualNetworkGatewayConnectionConfig" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

&virtualnetworkgatewayconnection.VirtualNetworkGatewayConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Type: *string,
	VirtualNetworkGatewayId: *string,
	AuthorizationKey: *string,
	EnableBgp: interface{},
	ExpressRouteCircuitId: *string,
	Id: *string,
	IpsecPolicy: github.com/cdktf/cdktf-provider-azurestack-go/azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy,
	LocalNetworkGatewayId: *string,
	PeerVirtualNetworkGatewayId: *string,
	RoutingWeight: *f64,
	SharedKey: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurestack-go/azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts,
	UsePolicyBasedTrafficSelectors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.virtualNetworkGatewayId">VirtualNetworkGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.authorizationKey">AuthorizationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.enableBgp">EnableBgp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteCircuitId">ExpressRouteCircuitId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localNetworkGatewayId">LocalNetworkGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.peerVirtualNetworkGatewayId">PeerVirtualNetworkGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.routingWeight">RoutingWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.sharedKey">SharedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.usePolicyBasedTrafficSelectors">UsePolicyBasedTrafficSelectors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}.

---

##### `VirtualNetworkGatewayId`<sup>Required</sup> <a name="VirtualNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.virtualNetworkGatewayId"></a>

```go
VirtualNetworkGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}.

---

##### `AuthorizationKey`<sup>Optional</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.authorizationKey"></a>

```go
AuthorizationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}.

---

##### `EnableBgp`<sup>Optional</sup> <a name="EnableBgp" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.enableBgp"></a>

```go
EnableBgp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}.

---

##### `ExpressRouteCircuitId`<sup>Optional</sup> <a name="ExpressRouteCircuitId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteCircuitId"></a>

```go
ExpressRouteCircuitId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpsecPolicy`<sup>Optional</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ipsecPolicy"></a>

```go
IpsecPolicy VirtualNetworkGatewayConnectionIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}

---

##### `LocalNetworkGatewayId`<sup>Optional</sup> <a name="LocalNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localNetworkGatewayId"></a>

```go
LocalNetworkGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}.

---

##### `PeerVirtualNetworkGatewayId`<sup>Optional</sup> <a name="PeerVirtualNetworkGatewayId" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.peerVirtualNetworkGatewayId"></a>

```go
PeerVirtualNetworkGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}.

---

##### `RoutingWeight`<sup>Optional</sup> <a name="RoutingWeight" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.routingWeight"></a>

```go
RoutingWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}.

---

##### `SharedKey`<sup>Optional</sup> <a name="SharedKey" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.sharedKey"></a>

```go
SharedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```go
Timeouts VirtualNetworkGatewayConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#timeouts VirtualNetworkGatewayConnection#timeouts}

---

##### `UsePolicyBasedTrafficSelectors`<sup>Optional</sup> <a name="UsePolicyBasedTrafficSelectors" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.usePolicyBasedTrafficSelectors"></a>

```go
UsePolicyBasedTrafficSelectors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}.

---

### VirtualNetworkGatewayConnectionIpsecPolicy <a name="VirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

&virtualnetworkgatewayconnection.VirtualNetworkGatewayConnectionIpsecPolicy {
	DhGroup: *string,
	IkeEncryption: *string,
	IkeIntegrity: *string,
	IpsecEncryption: *string,
	IpsecIntegrity: *string,
	PfsGroup: *string,
	SaDatasize: *f64,
	SaLifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.dhGroup">DhGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeEncryption">IkeEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeIntegrity">IkeIntegrity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecEncryption">IpsecEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.pfsGroup">PfsGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saDatasize">SaDatasize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saLifetime">SaLifetime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}. |

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.dhGroup"></a>

```go
DhGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}.

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeEncryption"></a>

```go
IkeEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}.

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeIntegrity"></a>

```go
IkeIntegrity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}.

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecEncryption"></a>

```go
IpsecEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}.

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecIntegrity"></a>

```go
IpsecIntegrity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}.

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.pfsGroup"></a>

```go
PfsGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}.

---

##### `SaDatasize`<sup>Optional</sup> <a name="SaDatasize" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saDatasize"></a>

```go
SaDatasize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}.

---

##### `SaLifetime`<sup>Optional</sup> <a name="SaLifetime" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saLifetime"></a>

```go
SaLifetime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}.

---

### VirtualNetworkGatewayConnectionTimeouts <a name="VirtualNetworkGatewayConnectionTimeouts" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

&virtualnetworkgatewayconnection.VirtualNetworkGatewayConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="VirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

virtualnetworkgatewayconnection.NewVirtualNetworkGatewayConnectionIpsecPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualNetworkGatewayConnectionIpsecPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaDatasize">ResetSaDatasize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaLifetime">ResetSaLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSaDatasize` <a name="ResetSaDatasize" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaDatasize"></a>

```go
func ResetSaDatasize()
```

##### `ResetSaLifetime` <a name="ResetSaLifetime" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaLifetime"></a>

```go
func ResetSaLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryptionInput">IkeEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrityInput">IkeIntegrityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryptionInput">IpsecEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrityInput">IpsecIntegrityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroupInput">PfsGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasizeInput">SaDatasizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetimeInput">SaLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">IkeEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">IkeIntegrity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">IpsecEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">SaDatasize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">SaLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroupInput"></a>

```go
func DhGroupInput() *string
```

- *Type:* *string

---

##### `IkeEncryptionInput`<sup>Optional</sup> <a name="IkeEncryptionInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryptionInput"></a>

```go
func IkeEncryptionInput() *string
```

- *Type:* *string

---

##### `IkeIntegrityInput`<sup>Optional</sup> <a name="IkeIntegrityInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrityInput"></a>

```go
func IkeIntegrityInput() *string
```

- *Type:* *string

---

##### `IpsecEncryptionInput`<sup>Optional</sup> <a name="IpsecEncryptionInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryptionInput"></a>

```go
func IpsecEncryptionInput() *string
```

- *Type:* *string

---

##### `IpsecIntegrityInput`<sup>Optional</sup> <a name="IpsecIntegrityInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrityInput"></a>

```go
func IpsecIntegrityInput() *string
```

- *Type:* *string

---

##### `PfsGroupInput`<sup>Optional</sup> <a name="PfsGroupInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```go
func PfsGroupInput() *string
```

- *Type:* *string

---

##### `SaDatasizeInput`<sup>Optional</sup> <a name="SaDatasizeInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasizeInput"></a>

```go
func SaDatasizeInput() *f64
```

- *Type:* *f64

---

##### `SaLifetimeInput`<sup>Optional</sup> <a name="SaLifetimeInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetimeInput"></a>

```go
func SaLifetimeInput() *f64
```

- *Type:* *f64

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```go
func IkeEncryption() *string
```

- *Type:* *string

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```go
func IkeIntegrity() *string
```

- *Type:* *string

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```go
func IpsecEncryption() *string
```

- *Type:* *string

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```go
func IpsecIntegrity() *string
```

- *Type:* *string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```go
func PfsGroup() *string
```

- *Type:* *string

---

##### `SaDatasize`<sup>Required</sup> <a name="SaDatasize" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```go
func SaDatasize() *f64
```

- *Type:* *f64

---

##### `SaLifetime`<sup>Required</sup> <a name="SaLifetime" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```go
func SaLifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualNetworkGatewayConnectionIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### VirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="VirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualnetworkgatewayconnection"

virtualnetworkgatewayconnection.NewVirtualNetworkGatewayConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualNetworkGatewayConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



