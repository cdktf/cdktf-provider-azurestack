# `data_azurestack_key_vault_access_policy`

Refer to the Terraform Registory for docs: [`data_azurestack_key_vault_access_policy`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy).

# `dataAzurestackKeyVaultAccessPolicy` Submodule <a name="`dataAzurestackKeyVaultAccessPolicy` Submodule" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackKeyVaultAccessPolicyA <a name="DataAzurestackKeyVaultAccessPolicyA" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy azurestack_key_vault_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestackkeyvaultaccesspolicy"

dataazurestackkeyvaultaccesspolicy.NewDataAzurestackKeyVaultAccessPolicyA(scope Construct, id *string, config DataAzurestackKeyVaultAccessPolicyAConfig) DataAzurestackKeyVaultAccessPolicyA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig">DataAzurestackKeyVaultAccessPolicyAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig">DataAzurestackKeyVaultAccessPolicyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurestackKeyVaultAccessPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeouts">DataAzurestackKeyVaultAccessPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurestackKeyVaultAccessPolicyA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestackkeyvaultaccesspolicy"

dataazurestackkeyvaultaccesspolicy.DataAzurestackKeyVaultAccessPolicyA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestackkeyvaultaccesspolicy"

dataazurestackkeyvaultaccesspolicy.DataAzurestackKeyVaultAccessPolicyA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestackkeyvaultaccesspolicy"

dataazurestackkeyvaultaccesspolicy.DataAzurestackKeyVaultAccessPolicyA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestackkeyvaultaccesspolicy"

dataazurestackkeyvaultaccesspolicy.DataAzurestackKeyVaultAccessPolicyA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurestackKeyVaultAccessPolicyA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurestackKeyVaultAccessPolicyA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurestackKeyVaultAccessPolicyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurestackKeyVaultAccessPolicyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.certificatePermissions">CertificatePermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.keyPermissions">KeyPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.secretPermissions">SecretPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference">DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CertificatePermissions`<sup>Required</sup> <a name="CertificatePermissions" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.certificatePermissions"></a>

```go
func CertificatePermissions() *[]*string
```

- *Type:* *[]*string

---

##### `KeyPermissions`<sup>Required</sup> <a name="KeyPermissions" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.keyPermissions"></a>

```go
func KeyPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `SecretPermissions`<sup>Required</sup> <a name="SecretPermissions" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.secretPermissions"></a>

```go
func SecretPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.timeouts"></a>

```go
func Timeouts() DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference">DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackKeyVaultAccessPolicyAConfig <a name="DataAzurestackKeyVaultAccessPolicyAConfig" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestackkeyvaultaccesspolicy"

&dataazurestackkeyvaultaccesspolicy.DataAzurestackKeyVaultAccessPolicyAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurestack-go/azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy#name DataAzurestackKeyVaultAccessPolicyA#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy#id DataAzurestackKeyVaultAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeouts">DataAzurestackKeyVaultAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy#name DataAzurestackKeyVaultAccessPolicyA#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy#id DataAzurestackKeyVaultAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyAConfig.property.timeouts"></a>

```go
Timeouts DataAzurestackKeyVaultAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeouts">DataAzurestackKeyVaultAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy#timeouts DataAzurestackKeyVaultAccessPolicyA#timeouts}

---

### DataAzurestackKeyVaultAccessPolicyTimeouts <a name="DataAzurestackKeyVaultAccessPolicyTimeouts" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestackkeyvaultaccesspolicy"

&dataazurestackkeyvaultaccesspolicy.DataAzurestackKeyVaultAccessPolicyTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy#read DataAzurestackKeyVaultAccessPolicyA#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/key_vault_access_policy#read DataAzurestackKeyVaultAccessPolicyA#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference <a name="DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/dataazurestackkeyvaultaccesspolicy"

dataazurestackkeyvaultaccesspolicy.NewDataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackKeyVaultAccessPolicy.DataAzurestackKeyVaultAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



