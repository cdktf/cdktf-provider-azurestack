# `storageAccount` Submodule <a name="`storageAccount` Submodule" id="@cdktf/provider-azurestack.storageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccount <a name="StorageAccount" id="@cdktf/provider-azurestack.storageAccount.StorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account azurestack_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new StorageAccount(Construct Scope, string Id, StorageAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig">StorageAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig">StorageAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.putCustomDomain">PutCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetAccountEncryptionSource">ResetAccountEncryptionSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetAccountKind">ResetAccountKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetCustomDomain">ResetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetEnableBlobEncryption">ResetEnableBlobEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly">ResetEnableHttpsTrafficOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomDomain` <a name="PutCustomDomain" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.putCustomDomain"></a>

```csharp
private void PutCustomDomain(StorageAccountCustomDomain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---

##### `ResetAccountEncryptionSource` <a name="ResetAccountEncryptionSource" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetAccountEncryptionSource"></a>

```csharp
private void ResetAccountEncryptionSource()
```

##### `ResetAccountKind` <a name="ResetAccountKind" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetAccountKind"></a>

```csharp
private void ResetAccountKind()
```

##### `ResetCustomDomain` <a name="ResetCustomDomain" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetCustomDomain"></a>

```csharp
private void ResetCustomDomain()
```

##### `ResetEnableBlobEncryption` <a name="ResetEnableBlobEncryption" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetEnableBlobEncryption"></a>

```csharp
private void ResetEnableBlobEncryption()
```

##### `ResetEnableHttpsTrafficOnly` <a name="ResetEnableHttpsTrafficOnly" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly"></a>

```csharp
private void ResetEnableHttpsTrafficOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

StorageAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

StorageAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

StorageAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

StorageAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryBlobConnectionString">PrimaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryBlobEndpoint">PrimaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryFileEndpoint">PrimaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryLocation">PrimaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryQueueEndpoint">PrimaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryTableEndpoint">PrimaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryBlobConnectionString">SecondaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryBlobEndpoint">SecondaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryLocation">SecondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryQueueEndpoint">SecondaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryTableEndpoint">SecondaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountEncryptionSourceInput">AccountEncryptionSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountKindInput">AccountKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountReplicationTypeInput">AccountReplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountTierInput">AccountTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.customDomainInput">CustomDomainInput</a></code> | <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.enableBlobEncryptionInput">EnableBlobEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput">EnableHttpsTrafficOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountEncryptionSource">AccountEncryptionSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountKind">AccountKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountReplicationType">AccountReplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountTier">AccountTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.enableBlobEncryption">EnableBlobEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.enableHttpsTrafficOnly">EnableHttpsTrafficOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.customDomain"></a>

```csharp
public StorageAccountCustomDomainOutputReference CustomDomain { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `PrimaryBlobConnectionString`<sup>Required</sup> <a name="PrimaryBlobConnectionString" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryBlobConnectionString"></a>

```csharp
public string PrimaryBlobConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryBlobEndpoint`<sup>Required</sup> <a name="PrimaryBlobEndpoint" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryBlobEndpoint"></a>

```csharp
public string PrimaryBlobEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryFileEndpoint`<sup>Required</sup> <a name="PrimaryFileEndpoint" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryFileEndpoint"></a>

```csharp
public string PrimaryFileEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryLocation`<sup>Required</sup> <a name="PrimaryLocation" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryLocation"></a>

```csharp
public string PrimaryLocation { get; }
```

- *Type:* string

---

##### `PrimaryQueueEndpoint`<sup>Required</sup> <a name="PrimaryQueueEndpoint" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryQueueEndpoint"></a>

```csharp
public string PrimaryQueueEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryTableEndpoint`<sup>Required</sup> <a name="PrimaryTableEndpoint" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.primaryTableEndpoint"></a>

```csharp
public string PrimaryTableEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryBlobConnectionString`<sup>Required</sup> <a name="SecondaryBlobConnectionString" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryBlobConnectionString"></a>

```csharp
public string SecondaryBlobConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryBlobEndpoint`<sup>Required</sup> <a name="SecondaryBlobEndpoint" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryBlobEndpoint"></a>

```csharp
public string SecondaryBlobEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryLocation`<sup>Required</sup> <a name="SecondaryLocation" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryLocation"></a>

```csharp
public string SecondaryLocation { get; }
```

- *Type:* string

---

##### `SecondaryQueueEndpoint`<sup>Required</sup> <a name="SecondaryQueueEndpoint" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryQueueEndpoint"></a>

```csharp
public string SecondaryQueueEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryTableEndpoint`<sup>Required</sup> <a name="SecondaryTableEndpoint" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.secondaryTableEndpoint"></a>

```csharp
public string SecondaryTableEndpoint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.timeouts"></a>

```csharp
public StorageAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a>

---

##### `AccountEncryptionSourceInput`<sup>Optional</sup> <a name="AccountEncryptionSourceInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountEncryptionSourceInput"></a>

```csharp
public string AccountEncryptionSourceInput { get; }
```

- *Type:* string

---

##### `AccountKindInput`<sup>Optional</sup> <a name="AccountKindInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountKindInput"></a>

```csharp
public string AccountKindInput { get; }
```

- *Type:* string

---

##### `AccountReplicationTypeInput`<sup>Optional</sup> <a name="AccountReplicationTypeInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountReplicationTypeInput"></a>

```csharp
public string AccountReplicationTypeInput { get; }
```

- *Type:* string

---

##### `AccountTierInput`<sup>Optional</sup> <a name="AccountTierInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountTierInput"></a>

```csharp
public string AccountTierInput { get; }
```

- *Type:* string

---

##### `CustomDomainInput`<sup>Optional</sup> <a name="CustomDomainInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.customDomainInput"></a>

```csharp
public StorageAccountCustomDomain CustomDomainInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `EnableBlobEncryptionInput`<sup>Optional</sup> <a name="EnableBlobEncryptionInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.enableBlobEncryptionInput"></a>

```csharp
public object EnableBlobEncryptionInput { get; }
```

- *Type:* object

---

##### `EnableHttpsTrafficOnlyInput`<sup>Optional</sup> <a name="EnableHttpsTrafficOnlyInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput"></a>

```csharp
public object EnableHttpsTrafficOnlyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountEncryptionSource`<sup>Required</sup> <a name="AccountEncryptionSource" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountEncryptionSource"></a>

```csharp
public string AccountEncryptionSource { get; }
```

- *Type:* string

---

##### `AccountKind`<sup>Required</sup> <a name="AccountKind" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountKind"></a>

```csharp
public string AccountKind { get; }
```

- *Type:* string

---

##### `AccountReplicationType`<sup>Required</sup> <a name="AccountReplicationType" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountReplicationType"></a>

```csharp
public string AccountReplicationType { get; }
```

- *Type:* string

---

##### `AccountTier`<sup>Required</sup> <a name="AccountTier" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.accountTier"></a>

```csharp
public string AccountTier { get; }
```

- *Type:* string

---

##### `EnableBlobEncryption`<sup>Required</sup> <a name="EnableBlobEncryption" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.enableBlobEncryption"></a>

```csharp
public object EnableBlobEncryption { get; }
```

- *Type:* object

---

##### `EnableHttpsTrafficOnly`<sup>Required</sup> <a name="EnableHttpsTrafficOnly" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.enableHttpsTrafficOnly"></a>

```csharp
public object EnableHttpsTrafficOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.storageAccount.StorageAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountConfig <a name="StorageAccountConfig" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new StorageAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountReplicationType,
    string AccountTier,
    string Location,
    string Name,
    string ResourceGroupName,
    string AccountEncryptionSource = null,
    string AccountKind = null,
    StorageAccountCustomDomain CustomDomain = null,
    object EnableBlobEncryption = null,
    object EnableHttpsTrafficOnly = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    StorageAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.accountReplicationType">AccountReplicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.accountTier">AccountTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#location StorageAccount#location}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.accountEncryptionSource">AccountEncryptionSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_encryption_source StorageAccount#account_encryption_source}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.accountKind">AccountKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.enableBlobEncryption">EnableBlobEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#enable_blob_encryption StorageAccount#enable_blob_encryption}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly">EnableHttpsTrafficOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#id StorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#tags StorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountReplicationType`<sup>Required</sup> <a name="AccountReplicationType" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.accountReplicationType"></a>

```csharp
public string AccountReplicationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}.

---

##### `AccountTier`<sup>Required</sup> <a name="AccountTier" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.accountTier"></a>

```csharp
public string AccountTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#location StorageAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}.

---

##### `AccountEncryptionSource`<sup>Optional</sup> <a name="AccountEncryptionSource" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.accountEncryptionSource"></a>

```csharp
public string AccountEncryptionSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_encryption_source StorageAccount#account_encryption_source}.

---

##### `AccountKind`<sup>Optional</sup> <a name="AccountKind" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.accountKind"></a>

```csharp
public string AccountKind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}.

---

##### `CustomDomain`<sup>Optional</sup> <a name="CustomDomain" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.customDomain"></a>

```csharp
public StorageAccountCustomDomain CustomDomain { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}

---

##### `EnableBlobEncryption`<sup>Optional</sup> <a name="EnableBlobEncryption" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.enableBlobEncryption"></a>

```csharp
public object EnableBlobEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#enable_blob_encryption StorageAccount#enable_blob_encryption}.

---

##### `EnableHttpsTrafficOnly`<sup>Optional</sup> <a name="EnableHttpsTrafficOnly" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly"></a>

```csharp
public object EnableHttpsTrafficOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#id StorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#tags StorageAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.storageAccount.StorageAccountConfig.property.timeouts"></a>

```csharp
public StorageAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}

---

### StorageAccountCustomDomain <a name="StorageAccountCustomDomain" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new StorageAccountCustomDomain {
    string Name,
    object UseSubdomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain.property.useSubdomain">UseSubdomain</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `UseSubdomain`<sup>Optional</sup> <a name="UseSubdomain" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain.property.useSubdomain"></a>

```csharp
public object UseSubdomain { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}.

---

### StorageAccountTimeouts <a name="StorageAccountTimeouts" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new StorageAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#create StorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#update StorageAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#create StorageAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/storage_account#update StorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountCustomDomainOutputReference <a name="StorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new StorageAccountCustomDomainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain">ResetUseSubdomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseSubdomain` <a name="ResetUseSubdomain" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain"></a>

```csharp
private void ResetUseSubdomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput">UseSubdomainInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain">UseSubdomain</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UseSubdomainInput`<sup>Optional</sup> <a name="UseSubdomainInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput"></a>

```csharp
public object UseSubdomainInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UseSubdomain`<sup>Required</sup> <a name="UseSubdomain" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain"></a>

```csharp
public object UseSubdomain { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue"></a>

```csharp
public StorageAccountCustomDomain InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---


### StorageAccountTimeoutsOutputReference <a name="StorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new StorageAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



