# `dataAzurestackVirtualNetworkGatewayConnection` Submodule <a name="`dataAzurestackVirtualNetworkGatewayConnection` Submodule" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackVirtualNetworkGatewayConnection <a name="DataAzurestackVirtualNetworkGatewayConnection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection azurestack_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackVirtualNetworkGatewayConnection(Construct Scope, string Id, DataAzurestackVirtualNetworkGatewayConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig">DataAzurestackVirtualNetworkGatewayConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig">DataAzurestackVirtualNetworkGatewayConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurestackVirtualNetworkGatewayConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurestackVirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackVirtualNetworkGatewayConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackVirtualNetworkGatewayConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackVirtualNetworkGatewayConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

DataAzurestackVirtualNetworkGatewayConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurestackVirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurestackVirtualNetworkGatewayConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurestackVirtualNetworkGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurestackVirtualNetworkGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.authorizationKey">AuthorizationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.egressBytesTransferred">EgressBytesTransferred</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.enableBgp">EnableBgp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.expressRouteCircuitId">ExpressRouteCircuitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ingressBytesTransferred">IngressBytesTransferred</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.localNetworkGatewayId">LocalNetworkGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">PeerVirtualNetworkGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGuid">ResourceGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.routingWeight">RoutingWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.sharedKey">SharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">UsePolicyBasedTrafficSelectors</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">VirtualNetworkGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuthorizationKey`<sup>Required</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.authorizationKey"></a>

```csharp
public string AuthorizationKey { get; }
```

- *Type:* string

---

##### `EgressBytesTransferred`<sup>Required</sup> <a name="EgressBytesTransferred" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.egressBytesTransferred"></a>

```csharp
public double EgressBytesTransferred { get; }
```

- *Type:* double

---

##### `EnableBgp`<sup>Required</sup> <a name="EnableBgp" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.enableBgp"></a>

```csharp
public IResolvable EnableBgp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExpressRouteCircuitId`<sup>Required</sup> <a name="ExpressRouteCircuitId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```csharp
public string ExpressRouteCircuitId { get; }
```

- *Type:* string

---

##### `IngressBytesTransferred`<sup>Required</sup> <a name="IngressBytesTransferred" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ingressBytesTransferred"></a>

```csharp
public double IngressBytesTransferred { get; }
```

- *Type:* double

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```csharp
public DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList IpsecPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList</a>

---

##### `LocalNetworkGatewayId`<sup>Required</sup> <a name="LocalNetworkGatewayId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```csharp
public string LocalNetworkGatewayId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PeerVirtualNetworkGatewayId`<sup>Required</sup> <a name="PeerVirtualNetworkGatewayId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```csharp
public string PeerVirtualNetworkGatewayId { get; }
```

- *Type:* string

---

##### `ResourceGuid`<sup>Required</sup> <a name="ResourceGuid" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGuid"></a>

```csharp
public string ResourceGuid { get; }
```

- *Type:* string

---

##### `RoutingWeight`<sup>Required</sup> <a name="RoutingWeight" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.routingWeight"></a>

```csharp
public double RoutingWeight { get; }
```

- *Type:* double

---

##### `SharedKey`<sup>Required</sup> <a name="SharedKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.sharedKey"></a>

```csharp
public string SharedKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeouts"></a>

```csharp
public DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsePolicyBasedTrafficSelectors`<sup>Required</sup> <a name="UsePolicyBasedTrafficSelectors" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```csharp
public IResolvable UsePolicyBasedTrafficSelectors { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VirtualNetworkGatewayId`<sup>Required</sup> <a name="VirtualNetworkGatewayId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```csharp
public string VirtualNetworkGatewayId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackVirtualNetworkGatewayConnectionConfig <a name="DataAzurestackVirtualNetworkGatewayConnectionConfig" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackVirtualNetworkGatewayConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurestackVirtualNetworkGatewayConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```csharp
public DataAzurestackVirtualNetworkGatewayConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#timeouts DataAzurestackVirtualNetworkGatewayConnection#timeouts}

---

### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy {

};
```


### DataAzurestackVirtualNetworkGatewayConnectionTimeouts <a name="DataAzurestackVirtualNetworkGatewayConnectionTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackVirtualNetworkGatewayConnectionTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#read DataAzurestackVirtualNetworkGatewayConnection#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/data-sources/virtual_network_gateway_connection#read DataAzurestackVirtualNetworkGatewayConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get"></a>

```csharp
private DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">IkeEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">IkeIntegrity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">IpsecEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">SaDatasize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">SaLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```csharp
public string DhGroup { get; }
```

- *Type:* string

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```csharp
public string IkeEncryption { get; }
```

- *Type:* string

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```csharp
public string IkeIntegrity { get; }
```

- *Type:* string

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```csharp
public string IpsecEncryption { get; }
```

- *Type:* string

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```csharp
public string IpsecIntegrity { get; }
```

- *Type:* string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```csharp
public string PfsGroup { get; }
```

- *Type:* string

---

##### `SaDatasize`<sup>Required</sup> <a name="SaDatasize" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```csharp
public double SaDatasize { get; }
```

- *Type:* double

---

##### `SaLifetime`<sup>Required</sup> <a name="SaLifetime" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```csharp
public double SaLifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



