# `virtualNetworkPeering` Submodule <a name="`virtualNetworkPeering` Submodule" id="@cdktf/provider-azurestack.virtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkPeering <a name="VirtualNetworkPeering" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering azurestack_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualNetworkPeering(Construct Scope, string Id, VirtualNetworkPeeringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig">VirtualNetworkPeeringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig">VirtualNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetAllowForwardedTraffic">ResetAllowForwardedTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetAllowGatewayTransit">ResetAllowGatewayTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetAllowVirtualNetworkAccess">ResetAllowVirtualNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetUseRemoteGateways">ResetUseRemoteGateways</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualNetworkPeeringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a>

---

##### `ResetAllowForwardedTraffic` <a name="ResetAllowForwardedTraffic" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetAllowForwardedTraffic"></a>

```csharp
private void ResetAllowForwardedTraffic()
```

##### `ResetAllowGatewayTransit` <a name="ResetAllowGatewayTransit" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetAllowGatewayTransit"></a>

```csharp
private void ResetAllowGatewayTransit()
```

##### `ResetAllowVirtualNetworkAccess` <a name="ResetAllowVirtualNetworkAccess" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetAllowVirtualNetworkAccess"></a>

```csharp
private void ResetAllowVirtualNetworkAccess()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseRemoteGateways` <a name="ResetUseRemoteGateways" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.resetUseRemoteGateways"></a>

```csharp
private void ResetUseRemoteGateways()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

VirtualNetworkPeering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

VirtualNetworkPeering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

VirtualNetworkPeering.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

VirtualNetworkPeering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualNetworkPeering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference">VirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowForwardedTrafficInput">AllowForwardedTrafficInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowGatewayTransitInput">AllowGatewayTransitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowVirtualNetworkAccessInput">AllowVirtualNetworkAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.remoteVirtualNetworkIdInput">RemoteVirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.useRemoteGatewaysInput">UseRemoteGatewaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.virtualNetworkNameInput">VirtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowForwardedTraffic">AllowForwardedTraffic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowGatewayTransit">AllowGatewayTransit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowVirtualNetworkAccess">AllowVirtualNetworkAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.remoteVirtualNetworkId">RemoteVirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.useRemoteGateways">UseRemoteGateways</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.timeouts"></a>

```csharp
public VirtualNetworkPeeringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference">VirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `AllowForwardedTrafficInput`<sup>Optional</sup> <a name="AllowForwardedTrafficInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowForwardedTrafficInput"></a>

```csharp
public object AllowForwardedTrafficInput { get; }
```

- *Type:* object

---

##### `AllowGatewayTransitInput`<sup>Optional</sup> <a name="AllowGatewayTransitInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowGatewayTransitInput"></a>

```csharp
public object AllowGatewayTransitInput { get; }
```

- *Type:* object

---

##### `AllowVirtualNetworkAccessInput`<sup>Optional</sup> <a name="AllowVirtualNetworkAccessInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowVirtualNetworkAccessInput"></a>

```csharp
public object AllowVirtualNetworkAccessInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemoteVirtualNetworkIdInput`<sup>Optional</sup> <a name="RemoteVirtualNetworkIdInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.remoteVirtualNetworkIdInput"></a>

```csharp
public string RemoteVirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseRemoteGatewaysInput`<sup>Optional</sup> <a name="UseRemoteGatewaysInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.useRemoteGatewaysInput"></a>

```csharp
public object UseRemoteGatewaysInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkNameInput`<sup>Optional</sup> <a name="VirtualNetworkNameInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.virtualNetworkNameInput"></a>

```csharp
public string VirtualNetworkNameInput { get; }
```

- *Type:* string

---

##### `AllowForwardedTraffic`<sup>Required</sup> <a name="AllowForwardedTraffic" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowForwardedTraffic"></a>

```csharp
public object AllowForwardedTraffic { get; }
```

- *Type:* object

---

##### `AllowGatewayTransit`<sup>Required</sup> <a name="AllowGatewayTransit" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowGatewayTransit"></a>

```csharp
public object AllowGatewayTransit { get; }
```

- *Type:* object

---

##### `AllowVirtualNetworkAccess`<sup>Required</sup> <a name="AllowVirtualNetworkAccess" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```csharp
public object AllowVirtualNetworkAccess { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteVirtualNetworkId`<sup>Required</sup> <a name="RemoteVirtualNetworkId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```csharp
public string RemoteVirtualNetworkId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `UseRemoteGateways`<sup>Required</sup> <a name="UseRemoteGateways" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.useRemoteGateways"></a>

```csharp
public object UseRemoteGateways { get; }
```

- *Type:* object

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkPeeringConfig <a name="VirtualNetworkPeeringConfig" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualNetworkPeeringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RemoteVirtualNetworkId,
    string ResourceGroupName,
    string VirtualNetworkName,
    object AllowForwardedTraffic = null,
    object AllowGatewayTransit = null,
    object AllowVirtualNetworkAccess = null,
    string Id = null,
    VirtualNetworkPeeringTimeouts Timeouts = null,
    object UseRemoteGateways = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#name VirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.remoteVirtualNetworkId">RemoteVirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#remote_virtual_network_id VirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#resource_group_name VirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#virtual_network_name VirtualNetworkPeering#virtual_network_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowForwardedTraffic">AllowForwardedTraffic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#allow_forwarded_traffic VirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowGatewayTransit">AllowGatewayTransit</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#allow_gateway_transit VirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess">AllowVirtualNetworkAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#allow_virtual_network_access VirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#id VirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.useRemoteGateways">UseRemoteGateways</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#use_remote_gateways VirtualNetworkPeering#use_remote_gateways}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#name VirtualNetworkPeering#name}.

---

##### `RemoteVirtualNetworkId`<sup>Required</sup> <a name="RemoteVirtualNetworkId" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.remoteVirtualNetworkId"></a>

```csharp
public string RemoteVirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#remote_virtual_network_id VirtualNetworkPeering#remote_virtual_network_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#resource_group_name VirtualNetworkPeering#resource_group_name}.

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#virtual_network_name VirtualNetworkPeering#virtual_network_name}.

---

##### `AllowForwardedTraffic`<sup>Optional</sup> <a name="AllowForwardedTraffic" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowForwardedTraffic"></a>

```csharp
public object AllowForwardedTraffic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#allow_forwarded_traffic VirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `AllowGatewayTransit`<sup>Optional</sup> <a name="AllowGatewayTransit" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowGatewayTransit"></a>

```csharp
public object AllowGatewayTransit { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#allow_gateway_transit VirtualNetworkPeering#allow_gateway_transit}.

---

##### `AllowVirtualNetworkAccess`<sup>Optional</sup> <a name="AllowVirtualNetworkAccess" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess"></a>

```csharp
public object AllowVirtualNetworkAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#allow_virtual_network_access VirtualNetworkPeering#allow_virtual_network_access}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#id VirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.timeouts"></a>

```csharp
public VirtualNetworkPeeringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#timeouts VirtualNetworkPeering#timeouts}

---

##### `UseRemoteGateways`<sup>Optional</sup> <a name="UseRemoteGateways" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.useRemoteGateways"></a>

```csharp
public object UseRemoteGateways { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#use_remote_gateways VirtualNetworkPeering#use_remote_gateways}.

---

### VirtualNetworkPeeringTimeouts <a name="VirtualNetworkPeeringTimeouts" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualNetworkPeeringTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#create VirtualNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#delete VirtualNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#read VirtualNetworkPeering#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#update VirtualNetworkPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#create VirtualNetworkPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#delete VirtualNetworkPeering#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#read VirtualNetworkPeering#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_network_peering#update VirtualNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkPeeringTimeoutsOutputReference <a name="VirtualNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualNetworkPeeringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



