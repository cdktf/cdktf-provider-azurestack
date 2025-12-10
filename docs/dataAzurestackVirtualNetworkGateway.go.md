# `dataAzurestackVirtualNetworkGateway` Submodule <a name="`dataAzurestackVirtualNetworkGateway` Submodule" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackVirtualNetworkGateway <a name="DataAzurestackVirtualNetworkGateway" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway azurestack_virtual_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGateway(scope Construct, id *string, config DataAzurestackVirtualNetworkGatewayConfig) DataAzurestackVirtualNetworkGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig">DataAzurestackVirtualNetworkGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig">DataAzurestackVirtualNetworkGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurestackVirtualNetworkGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurestackVirtualNetworkGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurestackVirtualNetworkGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurestackVirtualNetworkGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurestackVirtualNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurestackVirtualNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.activeActive">ActiveActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.bgpSettings">BgpSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList">DataAzurestackVirtualNetworkGatewayBgpSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.defaultLocalNetworkGatewayId">DefaultLocalNetworkGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.enableBgp">EnableBgp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList">DataAzurestackVirtualNetworkGatewayIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.vpnClientConfiguration">VpnClientConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.vpnType">VpnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActiveActive`<sup>Required</sup> <a name="ActiveActive" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.activeActive"></a>

```go
func ActiveActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BgpSettings`<sup>Required</sup> <a name="BgpSettings" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.bgpSettings"></a>

```go
func BgpSettings() DataAzurestackVirtualNetworkGatewayBgpSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList">DataAzurestackVirtualNetworkGatewayBgpSettingsList</a>

---

##### `DefaultLocalNetworkGatewayId`<sup>Required</sup> <a name="DefaultLocalNetworkGatewayId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.defaultLocalNetworkGatewayId"></a>

```go
func DefaultLocalNetworkGatewayId() *string
```

- *Type:* *string

---

##### `EnableBgp`<sup>Required</sup> <a name="EnableBgp" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.enableBgp"></a>

```go
func EnableBgp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.ipConfiguration"></a>

```go
func IpConfiguration() DataAzurestackVirtualNetworkGatewayIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList">DataAzurestackVirtualNetworkGatewayIpConfigurationList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.timeouts"></a>

```go
func Timeouts() DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpnClientConfiguration`<sup>Required</sup> <a name="VpnClientConfiguration" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.vpnClientConfiguration"></a>

```go
func VpnClientConfiguration() DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList</a>

---

##### `VpnType`<sup>Required</sup> <a name="VpnType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.vpnType"></a>

```go
func VpnType() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackVirtualNetworkGatewayBgpSettings <a name="DataAzurestackVirtualNetworkGatewayBgpSettings" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

&dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGatewayBgpSettings {

}
```


### DataAzurestackVirtualNetworkGatewayConfig <a name="DataAzurestackVirtualNetworkGatewayConfig" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

&dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#name DataAzurestackVirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#resource_group_name DataAzurestackVirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#id DataAzurestackVirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#name DataAzurestackVirtualNetworkGateway#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#resource_group_name DataAzurestackVirtualNetworkGateway#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#id DataAzurestackVirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.timeouts"></a>

```go
Timeouts DataAzurestackVirtualNetworkGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#timeouts DataAzurestackVirtualNetworkGateway#timeouts}

---

### DataAzurestackVirtualNetworkGatewayIpConfiguration <a name="DataAzurestackVirtualNetworkGatewayIpConfiguration" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

&dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGatewayIpConfiguration {

}
```


### DataAzurestackVirtualNetworkGatewayTimeouts <a name="DataAzurestackVirtualNetworkGatewayTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

&dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGatewayTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#read DataAzurestackVirtualNetworkGateway#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway#read DataAzurestackVirtualNetworkGateway#read}.

---

### DataAzurestackVirtualNetworkGatewayVpnClientConfiguration <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfiguration" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

&dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration {

}
```


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

&dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate {

}
```


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

&dataazurestackvirtualnetworkgateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackVirtualNetworkGatewayBgpSettingsList <a name="DataAzurestackVirtualNetworkGatewayBgpSettingsList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayBgpSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurestackVirtualNetworkGatewayBgpSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.get"></a>

```go
func Get(index *f64) DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference <a name="DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddress">PeeringAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight">PeerWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettings">DataAzurestackVirtualNetworkGatewayBgpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `PeeringAddress`<sup>Required</sup> <a name="PeeringAddress" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddress"></a>

```go
func PeeringAddress() *string
```

- *Type:* *string

---

##### `PeerWeight`<sup>Required</sup> <a name="PeerWeight" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```go
func PeerWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurestackVirtualNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettings">DataAzurestackVirtualNetworkGatewayBgpSettings</a>

---


### DataAzurestackVirtualNetworkGatewayIpConfigurationList <a name="DataAzurestackVirtualNetworkGatewayIpConfigurationList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurestackVirtualNetworkGatewayIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.get"></a>

```go
func Get(index *f64) DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference <a name="DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation">PrivateIpAddressAllocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfiguration">DataAzurestackVirtualNetworkGatewayIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIpAddressAllocation`<sup>Required</sup> <a name="PrivateIpAddressAllocation" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```go
func PrivateIpAddressAllocation() *string
```

- *Type:* *string

---

##### `PublicIpAddressId`<sup>Required</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId"></a>

```go
func PublicIpAddressId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurestackVirtualNetworkGatewayIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfiguration">DataAzurestackVirtualNetworkGatewayIpConfiguration</a>

---


### DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference <a name="DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayVpnClientConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.get"></a>

```go
func Get(index *f64) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace">AddressSpace</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress">RadiusServerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret">RadiusServerSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate">RevokedCertificate</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate">RootCertificate</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols">VpnClientProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration">DataAzurestackVirtualNetworkGatewayVpnClientConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace"></a>

```go
func AddressSpace() *[]*string
```

- *Type:* *[]*string

---

##### `RadiusServerAddress`<sup>Required</sup> <a name="RadiusServerAddress" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress"></a>

```go
func RadiusServerAddress() *string
```

- *Type:* *string

---

##### `RadiusServerSecret`<sup>Required</sup> <a name="RadiusServerSecret" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret"></a>

```go
func RadiusServerSecret() *string
```

- *Type:* *string

---

##### `RevokedCertificate`<sup>Required</sup> <a name="RevokedCertificate" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate"></a>

```go
func RevokedCertificate() DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a>

---

##### `RootCertificate`<sup>Required</sup> <a name="RootCertificate" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate"></a>

```go
func RootCertificate() DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a>

---

##### `VpnClientProtocols`<sup>Required</sup> <a name="VpnClientProtocols" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols"></a>

```go
func VpnClientProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurestackVirtualNetworkGatewayVpnClientConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration">DataAzurestackVirtualNetworkGatewayVpnClientConfiguration</a>

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get"></a>

```go
func Get(index *f64) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get"></a>

```go
func Get(index *f64) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/v9/dataazurestackvirtualnetworkgateway"

dataazurestackvirtualnetworkgateway.NewDataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData"></a>

```go
func PublicCertData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>

---



