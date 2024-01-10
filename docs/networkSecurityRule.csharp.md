# `networkSecurityRule` Submodule <a name="`networkSecurityRule` Submodule" id="@cdktf/provider-azurestack.networkSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityRule <a name="NetworkSecurityRule" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule azurestack_network_security_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new NetworkSecurityRule(Construct Scope, string Id, NetworkSecurityRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig">NetworkSecurityRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig">NetworkSecurityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefix">ResetDestinationAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefixes">ResetDestinationAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRanges">ResetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefix">ResetSourceAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefixes">ResetSourceAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetSourcePortRanges">ResetSourcePortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationAddressPrefix` <a name="ResetDestinationAddressPrefix" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefix"></a>

```csharp
private void ResetDestinationAddressPrefix()
```

##### `ResetDestinationAddressPrefixes` <a name="ResetDestinationAddressPrefixes" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefixes"></a>

```csharp
private void ResetDestinationAddressPrefixes()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetDestinationPortRanges` <a name="ResetDestinationPortRanges" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRanges"></a>

```csharp
private void ResetDestinationPortRanges()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSourceAddressPrefix` <a name="ResetSourceAddressPrefix" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefix"></a>

```csharp
private void ResetSourceAddressPrefix()
```

##### `ResetSourceAddressPrefixes` <a name="ResetSourceAddressPrefixes" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefixes"></a>

```csharp
private void ResetSourceAddressPrefixes()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```

##### `ResetSourcePortRanges` <a name="ResetSourcePortRanges" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetSourcePortRanges"></a>

```csharp
private void ResetSourcePortRanges()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

NetworkSecurityRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

NetworkSecurityRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

NetworkSecurityRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

NetworkSecurityRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecurityRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference">NetworkSecurityRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixesInput">DestinationAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixInput">DestinationAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangesInput">DestinationPortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupNameInput">NetworkSecurityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixesInput">SourceAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixInput">SourceAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangesInput">SourcePortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefix">DestinationAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixes">DestinationAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationPortRange">DestinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupName">NetworkSecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixes">SourceAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourcePortRange">SourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourcePortRanges">SourcePortRanges</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.timeouts"></a>

```csharp
public NetworkSecurityRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference">NetworkSecurityRuleTimeoutsOutputReference</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationAddressPrefixesInput`<sup>Optional</sup> <a name="DestinationAddressPrefixesInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixesInput"></a>

```csharp
public string[] DestinationAddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `DestinationAddressPrefixInput`<sup>Optional</sup> <a name="DestinationAddressPrefixInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixInput"></a>

```csharp
public string DestinationAddressPrefixInput { get; }
```

- *Type:* string

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangeInput"></a>

```csharp
public string DestinationPortRangeInput { get; }
```

- *Type:* string

---

##### `DestinationPortRangesInput`<sup>Optional</sup> <a name="DestinationPortRangesInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangesInput"></a>

```csharp
public string[] DestinationPortRangesInput { get; }
```

- *Type:* string[]

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupNameInput`<sup>Optional</sup> <a name="NetworkSecurityGroupNameInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupNameInput"></a>

```csharp
public string NetworkSecurityGroupNameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SourceAddressPrefixesInput`<sup>Optional</sup> <a name="SourceAddressPrefixesInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixesInput"></a>

```csharp
public string[] SourceAddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `SourceAddressPrefixInput`<sup>Optional</sup> <a name="SourceAddressPrefixInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixInput"></a>

```csharp
public string SourceAddressPrefixInput { get; }
```

- *Type:* string

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangeInput"></a>

```csharp
public string SourcePortRangeInput { get; }
```

- *Type:* string

---

##### `SourcePortRangesInput`<sup>Optional</sup> <a name="SourcePortRangesInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangesInput"></a>

```csharp
public string[] SourcePortRangesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationAddressPrefix`<sup>Required</sup> <a name="DestinationAddressPrefix" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefix"></a>

```csharp
public string DestinationAddressPrefix { get; }
```

- *Type:* string

---

##### `DestinationAddressPrefixes`<sup>Required</sup> <a name="DestinationAddressPrefixes" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixes"></a>

```csharp
public string[] DestinationAddressPrefixes { get; }
```

- *Type:* string[]

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationPortRange"></a>

```csharp
public string DestinationPortRange { get; }
```

- *Type:* string

---

##### `DestinationPortRanges`<sup>Required</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.destinationPortRanges"></a>

```csharp
public string[] DestinationPortRanges { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupName`<sup>Required</sup> <a name="NetworkSecurityGroupName" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupName"></a>

```csharp
public string NetworkSecurityGroupName { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SourceAddressPrefix`<sup>Required</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefix"></a>

```csharp
public string SourceAddressPrefix { get; }
```

- *Type:* string

---

##### `SourceAddressPrefixes`<sup>Required</sup> <a name="SourceAddressPrefixes" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixes"></a>

```csharp
public string[] SourceAddressPrefixes { get; }
```

- *Type:* string[]

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourcePortRange"></a>

```csharp
public string SourcePortRange { get; }
```

- *Type:* string

---

##### `SourcePortRanges`<sup>Required</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.sourcePortRanges"></a>

```csharp
public string[] SourcePortRanges { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityRuleConfig <a name="NetworkSecurityRuleConfig" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new NetworkSecurityRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Access,
    string Direction,
    string Name,
    string NetworkSecurityGroupName,
    double Priority,
    string Protocol,
    string ResourceGroupName,
    string Description = null,
    string DestinationAddressPrefix = null,
    string[] DestinationAddressPrefixes = null,
    string DestinationPortRange = null,
    string[] DestinationPortRanges = null,
    string Id = null,
    string SourceAddressPrefix = null,
    string[] SourceAddressPrefixes = null,
    string SourcePortRange = null,
    string[] SourcePortRanges = null,
    NetworkSecurityRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.access">Access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#access NetworkSecurityRule#access}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#direction NetworkSecurityRule#direction}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#name NetworkSecurityRule#name}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.networkSecurityGroupName">NetworkSecurityGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#priority NetworkSecurityRule#priority}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#description NetworkSecurityRule#description}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefix">DestinationAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefixes">DestinationAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRange">DestinationPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#id NetworkSecurityRule#id}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefixes">SourceAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRange">SourcePortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRanges">SourcePortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#access NetworkSecurityRule#access}.

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#direction NetworkSecurityRule#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#name NetworkSecurityRule#name}.

---

##### `NetworkSecurityGroupName`<sup>Required</sup> <a name="NetworkSecurityGroupName" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.networkSecurityGroupName"></a>

```csharp
public string NetworkSecurityGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#priority NetworkSecurityRule#priority}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#description NetworkSecurityRule#description}.

---

##### `DestinationAddressPrefix`<sup>Optional</sup> <a name="DestinationAddressPrefix" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefix"></a>

```csharp
public string DestinationAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}.

---

##### `DestinationAddressPrefixes`<sup>Optional</sup> <a name="DestinationAddressPrefixes" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefixes"></a>

```csharp
public string[] DestinationAddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}.

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRange"></a>

```csharp
public string DestinationPortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}.

---

##### `DestinationPortRanges`<sup>Optional</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRanges"></a>

```csharp
public string[] DestinationPortRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#id NetworkSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceAddressPrefix`<sup>Optional</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefix"></a>

```csharp
public string SourceAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}.

---

##### `SourceAddressPrefixes`<sup>Optional</sup> <a name="SourceAddressPrefixes" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefixes"></a>

```csharp
public string[] SourceAddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRange"></a>

```csharp
public string SourcePortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}.

---

##### `SourcePortRanges`<sup>Optional</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRanges"></a>

```csharp
public string[] SourcePortRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleConfig.property.timeouts"></a>

```csharp
public NetworkSecurityRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#timeouts NetworkSecurityRule#timeouts}

---

### NetworkSecurityRuleTimeouts <a name="NetworkSecurityRuleTimeouts" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new NetworkSecurityRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#create NetworkSecurityRule#create}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#delete NetworkSecurityRule#delete}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#read NetworkSecurityRule#read}. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#update NetworkSecurityRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#create NetworkSecurityRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#delete NetworkSecurityRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#read NetworkSecurityRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/network_security_rule#update NetworkSecurityRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityRuleTimeoutsOutputReference <a name="NetworkSecurityRuleTimeoutsOutputReference" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new NetworkSecurityRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



