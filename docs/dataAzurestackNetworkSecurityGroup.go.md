# `dataAzurestackNetworkSecurityGroup` Submodule <a name="`dataAzurestackNetworkSecurityGroup` Submodule" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackNetworkSecurityGroup <a name="DataAzurestackNetworkSecurityGroup" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group azurestack_network_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

dataazurestacknetworksecuritygroup.NewDataAzurestackNetworkSecurityGroup(scope Construct, id *string, config DataAzurestackNetworkSecurityGroupConfig) DataAzurestackNetworkSecurityGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig">DataAzurestackNetworkSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig">DataAzurestackNetworkSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurestackNetworkSecurityGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeouts">DataAzurestackNetworkSecurityGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurestackNetworkSecurityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

dataazurestacknetworksecuritygroup.DataAzurestackNetworkSecurityGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

dataazurestacknetworksecuritygroup.DataAzurestackNetworkSecurityGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

dataazurestacknetworksecuritygroup.DataAzurestackNetworkSecurityGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

dataazurestacknetworksecuritygroup.DataAzurestackNetworkSecurityGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurestackNetworkSecurityGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurestackNetworkSecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurestackNetworkSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurestackNetworkSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.securityRule">SecurityRule</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList">DataAzurestackNetworkSecurityGroupSecurityRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference">DataAzurestackNetworkSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `SecurityRule`<sup>Required</sup> <a name="SecurityRule" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.securityRule"></a>

```go
func SecurityRule() DataAzurestackNetworkSecurityGroupSecurityRuleList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList">DataAzurestackNetworkSecurityGroupSecurityRuleList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.timeouts"></a>

```go
func Timeouts() DataAzurestackNetworkSecurityGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference">DataAzurestackNetworkSecurityGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackNetworkSecurityGroupConfig <a name="DataAzurestackNetworkSecurityGroupConfig" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

&dataazurestacknetworksecuritygroup.DataAzurestackNetworkSecurityGroupConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurestack-go/azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#name DataAzurestackNetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#resource_group_name DataAzurestackNetworkSecurityGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#id DataAzurestackNetworkSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeouts">DataAzurestackNetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#name DataAzurestackNetworkSecurityGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#resource_group_name DataAzurestackNetworkSecurityGroup#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#id DataAzurestackNetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupConfig.property.timeouts"></a>

```go
Timeouts DataAzurestackNetworkSecurityGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeouts">DataAzurestackNetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#timeouts DataAzurestackNetworkSecurityGroup#timeouts}

---

### DataAzurestackNetworkSecurityGroupSecurityRule <a name="DataAzurestackNetworkSecurityGroupSecurityRule" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

&dataazurestacknetworksecuritygroup.DataAzurestackNetworkSecurityGroupSecurityRule {

}
```


### DataAzurestackNetworkSecurityGroupTimeouts <a name="DataAzurestackNetworkSecurityGroupTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

&dataazurestacknetworksecuritygroup.DataAzurestackNetworkSecurityGroupTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#read DataAzurestackNetworkSecurityGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/network_security_group#read DataAzurestackNetworkSecurityGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackNetworkSecurityGroupSecurityRuleList <a name="DataAzurestackNetworkSecurityGroupSecurityRuleList" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

dataazurestacknetworksecuritygroup.NewDataAzurestackNetworkSecurityGroupSecurityRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurestackNetworkSecurityGroupSecurityRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.get"></a>

```go
func Get(index *f64) DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference <a name="DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

dataazurestacknetworksecuritygroup.NewDataAzurestackNetworkSecurityGroupSecurityRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix">DestinationAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes">DestinationAddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes">SourceAddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges">SourcePortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRule">DataAzurestackNetworkSecurityGroupSecurityRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationAddressPrefix`<sup>Required</sup> <a name="DestinationAddressPrefix" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix"></a>

```go
func DestinationAddressPrefix() *string
```

- *Type:* *string

---

##### `DestinationAddressPrefixes`<sup>Required</sup> <a name="DestinationAddressPrefixes" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes"></a>

```go
func DestinationAddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() *string
```

- *Type:* *string

---

##### `DestinationPortRanges`<sup>Required</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges"></a>

```go
func DestinationPortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceAddressPrefix`<sup>Required</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix"></a>

```go
func SourceAddressPrefix() *string
```

- *Type:* *string

---

##### `SourceAddressPrefixes`<sup>Required</sup> <a name="SourceAddressPrefixes" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes"></a>

```go
func SourceAddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() *string
```

- *Type:* *string

---

##### `SourcePortRanges`<sup>Required</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges"></a>

```go
func SourcePortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurestackNetworkSecurityGroupSecurityRule
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupSecurityRule">DataAzurestackNetworkSecurityGroupSecurityRule</a>

---


### DataAzurestackNetworkSecurityGroupTimeoutsOutputReference <a name="DataAzurestackNetworkSecurityGroupTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestacknetworksecuritygroup"

dataazurestacknetworksecuritygroup.NewDataAzurestackNetworkSecurityGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurestackNetworkSecurityGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackNetworkSecurityGroup.DataAzurestackNetworkSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



