# `virtualMachineDataDiskAttachment` Submodule <a name="`virtualMachineDataDiskAttachment` Submodule" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineDataDiskAttachment <a name="VirtualMachineDataDiskAttachment" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment azurestack_virtual_machine_data_disk_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualmachinedatadiskattachment"

virtualmachinedatadiskattachment.NewVirtualMachineDataDiskAttachment(scope Construct, id *string, config VirtualMachineDataDiskAttachmentConfig) VirtualMachineDataDiskAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig">VirtualMachineDataDiskAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig">VirtualMachineDataDiskAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetCreateOption">ResetCreateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts"></a>

```go
func PutTimeouts(value VirtualMachineDataDiskAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>

---

##### `ResetCreateOption` <a name="ResetCreateOption" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetCreateOption"></a>

```go
func ResetCreateOption()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.resetWriteAcceleratorEnabled"></a>

```go
func ResetWriteAcceleratorEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualmachinedatadiskattachment"

virtualmachinedatadiskattachment.VirtualMachineDataDiskAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualmachinedatadiskattachment"

virtualmachinedatadiskattachment.VirtualMachineDataDiskAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualmachinedatadiskattachment"

virtualmachinedatadiskattachment.VirtualMachineDataDiskAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference">VirtualMachineDataDiskAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cachingInput">CachingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOptionInput">CreateOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lunInput">LunInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskIdInput">ManagedDiskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.caching">Caching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOption">CreateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lun">Lun</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskId">ManagedDiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeouts"></a>

```go
func Timeouts() VirtualMachineDataDiskAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference">VirtualMachineDataDiskAttachmentTimeoutsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.cachingInput"></a>

```go
func CachingInput() *string
```

- *Type:* *string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOptionInput"></a>

```go
func CreateOptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lunInput"></a>

```go
func LunInput() *f64
```

- *Type:* *f64

---

##### `ManagedDiskIdInput`<sup>Optional</sup> <a name="ManagedDiskIdInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskIdInput"></a>

```go
func ManagedDiskIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineIdInput"></a>

```go
func VirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabledInput"></a>

```go
func WriteAcceleratorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.caching"></a>

```go
func Caching() *string
```

- *Type:* *string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.createOption"></a>

```go
func CreateOption() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.lun"></a>

```go
func Lun() *f64
```

- *Type:* *f64

---

##### `ManagedDiskId`<sup>Required</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.managedDiskId"></a>

```go
func ManagedDiskId() *string
```

- *Type:* *string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.writeAcceleratorEnabled"></a>

```go
func WriteAcceleratorEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineDataDiskAttachmentConfig <a name="VirtualMachineDataDiskAttachmentConfig" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualmachinedatadiskattachment"

&virtualmachinedatadiskattachment.VirtualMachineDataDiskAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Caching: *string,
	Lun: *f64,
	ManagedDiskId: *string,
	VirtualMachineId: *string,
	CreateOption: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurestack-go/azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts,
	WriteAcceleratorEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.caching">Caching</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#caching VirtualMachineDataDiskAttachment#caching}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lun">Lun</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#lun VirtualMachineDataDiskAttachment#lun}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.managedDiskId">ManagedDiskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.createOption">CreateOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#create_option VirtualMachineDataDiskAttachment#create_option}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#id VirtualMachineDataDiskAttachment#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.caching"></a>

```go
Caching *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#caching VirtualMachineDataDiskAttachment#caching}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.lun"></a>

```go
Lun *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#lun VirtualMachineDataDiskAttachment#lun}.

---

##### `ManagedDiskId`<sup>Required</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.managedDiskId"></a>

```go
ManagedDiskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#managed_disk_id VirtualMachineDataDiskAttachment#managed_disk_id}.

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.virtualMachineId"></a>

```go
VirtualMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#virtual_machine_id VirtualMachineDataDiskAttachment#virtual_machine_id}.

---

##### `CreateOption`<sup>Optional</sup> <a name="CreateOption" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.createOption"></a>

```go
CreateOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#create_option VirtualMachineDataDiskAttachment#create_option}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#id VirtualMachineDataDiskAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.timeouts"></a>

```go
Timeouts VirtualMachineDataDiskAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts">VirtualMachineDataDiskAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#timeouts VirtualMachineDataDiskAttachment#timeouts}

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentConfig.property.writeAcceleratorEnabled"></a>

```go
WriteAcceleratorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#write_accelerator_enabled VirtualMachineDataDiskAttachment#write_accelerator_enabled}.

---

### VirtualMachineDataDiskAttachmentTimeouts <a name="VirtualMachineDataDiskAttachmentTimeouts" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualmachinedatadiskattachment"

&virtualmachinedatadiskattachment.VirtualMachineDataDiskAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#create VirtualMachineDataDiskAttachment#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#delete VirtualMachineDataDiskAttachment#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#read VirtualMachineDataDiskAttachment#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#update VirtualMachineDataDiskAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#create VirtualMachineDataDiskAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#delete VirtualMachineDataDiskAttachment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#read VirtualMachineDataDiskAttachment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/virtual_machine_data_disk_attachment#update VirtualMachineDataDiskAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineDataDiskAttachmentTimeoutsOutputReference <a name="VirtualMachineDataDiskAttachmentTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurestack-go/azurestack/virtualmachinedatadiskattachment"

virtualmachinedatadiskattachment.NewVirtualMachineDataDiskAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineDataDiskAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachineDataDiskAttachment.VirtualMachineDataDiskAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


