# `data_azurestack_client_config`

Refer to the Terraform Registory for docs: [`data_azurestack_client_config`](https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/client_config).

# `dataAzurestackClientConfig` Submodule <a name="`dataAzurestackClientConfig` Submodule" id="@cdktf/provider-azurestack.dataAzurestackClientConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackClientConfig <a name="DataAzurestackClientConfig" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/client_config azurestack_client_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackClientConfig(Construct Scope, string Id, DataAzurestackClientConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig">DataAzurestackClientConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig">DataAzurestackClientConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurestackClientConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeouts">DataAzurestackClientConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackClientConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackClientConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackClientConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.servicePrincipalApplicationId">ServicePrincipalApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.servicePrincipalObjectId">ServicePrincipalObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference">DataAzurestackClientConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ServicePrincipalApplicationId`<sup>Required</sup> <a name="ServicePrincipalApplicationId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.servicePrincipalApplicationId"></a>

```csharp
public string ServicePrincipalApplicationId { get; }
```

- *Type:* string

---

##### `ServicePrincipalObjectId`<sup>Required</sup> <a name="ServicePrincipalObjectId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.servicePrincipalObjectId"></a>

```csharp
public string ServicePrincipalObjectId { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.timeouts"></a>

```csharp
public DataAzurestackClientConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference">DataAzurestackClientConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackClientConfigConfig <a name="DataAzurestackClientConfigConfig" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackClientConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    DataAzurestackClientConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/client_config#id DataAzurestackClientConfig#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeouts">DataAzurestackClientConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/client_config#id DataAzurestackClientConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigConfig.property.timeouts"></a>

```csharp
public DataAzurestackClientConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeouts">DataAzurestackClientConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/client_config#timeouts DataAzurestackClientConfig#timeouts}

---

### DataAzurestackClientConfigTimeouts <a name="DataAzurestackClientConfigTimeouts" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackClientConfigTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/client_config#read DataAzurestackClientConfig#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/client_config#read DataAzurestackClientConfig#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackClientConfigTimeoutsOutputReference <a name="DataAzurestackClientConfigTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackClientConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackClientConfig.DataAzurestackClientConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



