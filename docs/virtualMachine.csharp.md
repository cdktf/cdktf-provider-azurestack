# `virtualMachine` Submodule <a name="`virtualMachine` Submodule" id="@cdktf/provider-azurestack.virtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachine <a name="VirtualMachine" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine azurestack_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachine(Construct Scope, string Id, VirtualMachineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig">VirtualMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig">VirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putBootDiagnostics">PutBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfile">PutOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileLinuxConfig">PutOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileSecrets">PutOsProfileSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileWindowsConfig">PutOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageDataDisk">PutStorageDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageImageReference">PutStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageOsDisk">PutStorageOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetAvailabilitySetId">ResetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetBootDiagnostics">ResetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetDeleteDataDisksOnTermination">ResetDeleteDataDisksOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetDeleteOsDiskOnTermination">ResetDeleteOsDiskOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfile">ResetOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileLinuxConfig">ResetOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileSecrets">ResetOsProfileSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileWindowsConfig">ResetOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetPrimaryNetworkInterfaceId">ResetPrimaryNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetStorageDataDisk">ResetStorageDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetStorageImageReference">ResetStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putBootDiagnostics"></a>

```csharp
private void PutBootDiagnostics(VirtualMachineBootDiagnostics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putIdentity"></a>

```csharp
private void PutIdentity(VirtualMachineIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

---

##### `PutOsProfile` <a name="PutOsProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfile"></a>

```csharp
private void PutOsProfile(VirtualMachineOsProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

---

##### `PutOsProfileLinuxConfig` <a name="PutOsProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileLinuxConfig"></a>

```csharp
private void PutOsProfileLinuxConfig(VirtualMachineOsProfileLinuxConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileLinuxConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

---

##### `PutOsProfileSecrets` <a name="PutOsProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileSecrets"></a>

```csharp
private void PutOsProfileSecrets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileSecrets.parameter.value"></a>

- *Type:* object

---

##### `PutOsProfileWindowsConfig` <a name="PutOsProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileWindowsConfig"></a>

```csharp
private void PutOsProfileWindowsConfig(VirtualMachineOsProfileWindowsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putOsProfileWindowsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putPlan"></a>

```csharp
private void PutPlan(VirtualMachinePlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

---

##### `PutStorageDataDisk` <a name="PutStorageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageDataDisk"></a>

```csharp
private void PutStorageDataDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageDataDisk.parameter.value"></a>

- *Type:* object

---

##### `PutStorageImageReference` <a name="PutStorageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageImageReference"></a>

```csharp
private void PutStorageImageReference(VirtualMachineStorageImageReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

---

##### `PutStorageOsDisk` <a name="PutStorageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageOsDisk"></a>

```csharp
private void PutStorageOsDisk(VirtualMachineStorageOsDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualMachineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

---

##### `ResetAvailabilitySetId` <a name="ResetAvailabilitySetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetAvailabilitySetId"></a>

```csharp
private void ResetAvailabilitySetId()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetBootDiagnostics"></a>

```csharp
private void ResetBootDiagnostics()
```

##### `ResetDeleteDataDisksOnTermination` <a name="ResetDeleteDataDisksOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetDeleteDataDisksOnTermination"></a>

```csharp
private void ResetDeleteDataDisksOnTermination()
```

##### `ResetDeleteOsDiskOnTermination` <a name="ResetDeleteOsDiskOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetDeleteOsDiskOnTermination"></a>

```csharp
private void ResetDeleteOsDiskOnTermination()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetOsProfile` <a name="ResetOsProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfile"></a>

```csharp
private void ResetOsProfile()
```

##### `ResetOsProfileLinuxConfig` <a name="ResetOsProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileLinuxConfig"></a>

```csharp
private void ResetOsProfileLinuxConfig()
```

##### `ResetOsProfileSecrets` <a name="ResetOsProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileSecrets"></a>

```csharp
private void ResetOsProfileSecrets()
```

##### `ResetOsProfileWindowsConfig` <a name="ResetOsProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetOsProfileWindowsConfig"></a>

```csharp
private void ResetOsProfileWindowsConfig()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetPrimaryNetworkInterfaceId` <a name="ResetPrimaryNetworkInterfaceId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetPrimaryNetworkInterfaceId"></a>

```csharp
private void ResetPrimaryNetworkInterfaceId()
```

##### `ResetStorageDataDisk` <a name="ResetStorageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetStorageDataDisk"></a>

```csharp
private void ResetStorageDataDisk()
```

##### `ResetStorageImageReference` <a name="ResetStorageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetStorageImageReference"></a>

```csharp
private void ResetStorageImageReference()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

VirtualMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

VirtualMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

VirtualMachine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

VirtualMachine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference">VirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference">VirtualMachineIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfile">OsProfile</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference">VirtualMachineOsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileLinuxConfig">OsProfileLinuxConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference">VirtualMachineOsProfileLinuxConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileSecrets">OsProfileSecrets</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList">VirtualMachineOsProfileSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileWindowsConfig">OsProfileWindowsConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference">VirtualMachineOsProfileWindowsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference">VirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageDataDisk">StorageDataDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList">VirtualMachineStorageDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageImageReference">StorageImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference">VirtualMachineStorageImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageOsDisk">StorageOsDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference">VirtualMachineStorageOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference">VirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.availabilitySetIdInput">AvailabilitySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteDataDisksOnTerminationInput">DeleteDataDisksOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteOsDiskOnTerminationInput">DeleteOsDiskOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.networkInterfaceIdsInput">NetworkInterfaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileInput">OsProfileInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileLinuxConfigInput">OsProfileLinuxConfigInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileSecretsInput">OsProfileSecretsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileWindowsConfigInput">OsProfileWindowsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceIdInput">PrimaryNetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageDataDiskInput">StorageDataDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageImageReferenceInput">StorageImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageOsDiskInput">StorageOsDiskInput</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.availabilitySetId">AvailabilitySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteDataDisksOnTermination">DeleteDataDisksOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteOsDiskOnTermination">DeleteOsDiskOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceId">PrimaryNetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.bootDiagnostics"></a>

```csharp
public VirtualMachineBootDiagnosticsOutputReference BootDiagnostics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference">VirtualMachineBootDiagnosticsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.identity"></a>

```csharp
public VirtualMachineIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference">VirtualMachineIdentityOutputReference</a>

---

##### `OsProfile`<sup>Required</sup> <a name="OsProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfile"></a>

```csharp
public VirtualMachineOsProfileOutputReference OsProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference">VirtualMachineOsProfileOutputReference</a>

---

##### `OsProfileLinuxConfig`<sup>Required</sup> <a name="OsProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileLinuxConfig"></a>

```csharp
public VirtualMachineOsProfileLinuxConfigOutputReference OsProfileLinuxConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference">VirtualMachineOsProfileLinuxConfigOutputReference</a>

---

##### `OsProfileSecrets`<sup>Required</sup> <a name="OsProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileSecrets"></a>

```csharp
public VirtualMachineOsProfileSecretsList OsProfileSecrets { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList">VirtualMachineOsProfileSecretsList</a>

---

##### `OsProfileWindowsConfig`<sup>Required</sup> <a name="OsProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileWindowsConfig"></a>

```csharp
public VirtualMachineOsProfileWindowsConfigOutputReference OsProfileWindowsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference">VirtualMachineOsProfileWindowsConfigOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.plan"></a>

```csharp
public VirtualMachinePlanOutputReference Plan { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference">VirtualMachinePlanOutputReference</a>

---

##### `StorageDataDisk`<sup>Required</sup> <a name="StorageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageDataDisk"></a>

```csharp
public VirtualMachineStorageDataDiskList StorageDataDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList">VirtualMachineStorageDataDiskList</a>

---

##### `StorageImageReference`<sup>Required</sup> <a name="StorageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageImageReference"></a>

```csharp
public VirtualMachineStorageImageReferenceOutputReference StorageImageReference { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference">VirtualMachineStorageImageReferenceOutputReference</a>

---

##### `StorageOsDisk`<sup>Required</sup> <a name="StorageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageOsDisk"></a>

```csharp
public VirtualMachineStorageOsDiskOutputReference StorageOsDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference">VirtualMachineStorageOsDiskOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.timeouts"></a>

```csharp
public VirtualMachineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference">VirtualMachineTimeoutsOutputReference</a>

---

##### `AvailabilitySetIdInput`<sup>Optional</sup> <a name="AvailabilitySetIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.availabilitySetIdInput"></a>

```csharp
public string AvailabilitySetIdInput { get; }
```

- *Type:* string

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.bootDiagnosticsInput"></a>

```csharp
public VirtualMachineBootDiagnostics BootDiagnosticsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

---

##### `DeleteDataDisksOnTerminationInput`<sup>Optional</sup> <a name="DeleteDataDisksOnTerminationInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteDataDisksOnTerminationInput"></a>

```csharp
public object DeleteDataDisksOnTerminationInput { get; }
```

- *Type:* object

---

##### `DeleteOsDiskOnTerminationInput`<sup>Optional</sup> <a name="DeleteOsDiskOnTerminationInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteOsDiskOnTerminationInput"></a>

```csharp
public object DeleteOsDiskOnTerminationInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.identityInput"></a>

```csharp
public VirtualMachineIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdsInput`<sup>Optional</sup> <a name="NetworkInterfaceIdsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.networkInterfaceIdsInput"></a>

```csharp
public string[] NetworkInterfaceIdsInput { get; }
```

- *Type:* string[]

---

##### `OsProfileInput`<sup>Optional</sup> <a name="OsProfileInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileInput"></a>

```csharp
public VirtualMachineOsProfile OsProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

---

##### `OsProfileLinuxConfigInput`<sup>Optional</sup> <a name="OsProfileLinuxConfigInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileLinuxConfigInput"></a>

```csharp
public VirtualMachineOsProfileLinuxConfig OsProfileLinuxConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

---

##### `OsProfileSecretsInput`<sup>Optional</sup> <a name="OsProfileSecretsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileSecretsInput"></a>

```csharp
public object OsProfileSecretsInput { get; }
```

- *Type:* object

---

##### `OsProfileWindowsConfigInput`<sup>Optional</sup> <a name="OsProfileWindowsConfigInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.osProfileWindowsConfigInput"></a>

```csharp
public VirtualMachineOsProfileWindowsConfig OsProfileWindowsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.planInput"></a>

```csharp
public VirtualMachinePlan PlanInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

---

##### `PrimaryNetworkInterfaceIdInput`<sup>Optional</sup> <a name="PrimaryNetworkInterfaceIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceIdInput"></a>

```csharp
public string PrimaryNetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StorageDataDiskInput`<sup>Optional</sup> <a name="StorageDataDiskInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageDataDiskInput"></a>

```csharp
public object StorageDataDiskInput { get; }
```

- *Type:* object

---

##### `StorageImageReferenceInput`<sup>Optional</sup> <a name="StorageImageReferenceInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageImageReferenceInput"></a>

```csharp
public VirtualMachineStorageImageReference StorageImageReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

---

##### `StorageOsDiskInput`<sup>Optional</sup> <a name="StorageOsDiskInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.storageOsDiskInput"></a>

```csharp
public VirtualMachineStorageOsDisk StorageOsDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `AvailabilitySetId`<sup>Required</sup> <a name="AvailabilitySetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.availabilitySetId"></a>

```csharp
public string AvailabilitySetId { get; }
```

- *Type:* string

---

##### `DeleteDataDisksOnTermination`<sup>Required</sup> <a name="DeleteDataDisksOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteDataDisksOnTermination"></a>

```csharp
public object DeleteDataDisksOnTermination { get; }
```

- *Type:* object

---

##### `DeleteOsDiskOnTermination`<sup>Required</sup> <a name="DeleteOsDiskOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.deleteOsDiskOnTermination"></a>

```csharp
public object DeleteOsDiskOnTermination { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `PrimaryNetworkInterfaceId`<sup>Required</sup> <a name="PrimaryNetworkInterfaceId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceId"></a>

```csharp
public string PrimaryNetworkInterfaceId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineBootDiagnostics <a name="VirtualMachineBootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineBootDiagnostics {
    object Enabled,
    string StorageUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#enabled VirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.property.storageUri">StorageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_uri VirtualMachine#storage_uri}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#enabled VirtualMachine#enabled}.

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics.property.storageUri"></a>

```csharp
public string StorageUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_uri VirtualMachine#storage_uri}.

---

### VirtualMachineConfig <a name="VirtualMachineConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string[] NetworkInterfaceIds,
    string ResourceGroupName,
    VirtualMachineStorageOsDisk StorageOsDisk,
    string VmSize,
    string AvailabilitySetId = null,
    VirtualMachineBootDiagnostics BootDiagnostics = null,
    object DeleteDataDisksOnTermination = null,
    object DeleteOsDiskOnTermination = null,
    string Id = null,
    VirtualMachineIdentity Identity = null,
    string LicenseType = null,
    VirtualMachineOsProfile OsProfile = null,
    VirtualMachineOsProfileLinuxConfig OsProfileLinuxConfig = null,
    object OsProfileSecrets = null,
    VirtualMachineOsProfileWindowsConfig OsProfileWindowsConfig = null,
    VirtualMachinePlan Plan = null,
    string PrimaryNetworkInterfaceId = null,
    object StorageDataDisk = null,
    VirtualMachineStorageImageReference StorageImageReference = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VirtualMachineTimeouts Timeouts = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#location VirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageOsDisk">StorageOsDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | storage_os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.availabilitySetId">AvailabilitySetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.deleteDataDisksOnTermination">DeleteDataDisksOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.deleteOsDiskOnTermination">DeleteOsDiskOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.licenseType">LicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfile">OsProfile</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileLinuxConfig">OsProfileLinuxConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | os_profile_linux_config block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileSecrets">OsProfileSecrets</a></code> | <code>object</code> | os_profile_secrets block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileWindowsConfig">OsProfileWindowsConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | os_profile_windows_config block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.primaryNetworkInterfaceId">PrimaryNetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageDataDisk">StorageDataDisk</a></code> | <code>object</code> | storage_data_disk block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageImageReference">StorageImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#tags VirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#zones VirtualMachine#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#location VirtualMachine#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}.

---

##### `StorageOsDisk`<sup>Required</sup> <a name="StorageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageOsDisk"></a>

```csharp
public VirtualMachineStorageOsDisk StorageOsDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

storage_os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_os_disk VirtualMachine#storage_os_disk}

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}.

---

##### `AvailabilitySetId`<sup>Optional</sup> <a name="AvailabilitySetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.availabilitySetId"></a>

```csharp
public string AvailabilitySetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}.

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.bootDiagnostics"></a>

```csharp
public VirtualMachineBootDiagnostics BootDiagnostics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#boot_diagnostics VirtualMachine#boot_diagnostics}

---

##### `DeleteDataDisksOnTermination`<sup>Optional</sup> <a name="DeleteDataDisksOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.deleteDataDisksOnTermination"></a>

```csharp
public object DeleteDataDisksOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}.

---

##### `DeleteOsDiskOnTermination`<sup>Optional</sup> <a name="DeleteOsDiskOnTermination" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.deleteOsDiskOnTermination"></a>

```csharp
public object DeleteOsDiskOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.identity"></a>

```csharp
public VirtualMachineIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#identity VirtualMachine#identity}

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}.

---

##### `OsProfile`<sup>Optional</sup> <a name="OsProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfile"></a>

```csharp
public VirtualMachineOsProfile OsProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile VirtualMachine#os_profile}

---

##### `OsProfileLinuxConfig`<sup>Optional</sup> <a name="OsProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileLinuxConfig"></a>

```csharp
public VirtualMachineOsProfileLinuxConfig OsProfileLinuxConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

os_profile_linux_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_linux_config VirtualMachine#os_profile_linux_config}

---

##### `OsProfileSecrets`<sup>Optional</sup> <a name="OsProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileSecrets"></a>

```csharp
public object OsProfileSecrets { get; set; }
```

- *Type:* object

os_profile_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_secrets VirtualMachine#os_profile_secrets}

---

##### `OsProfileWindowsConfig`<sup>Optional</sup> <a name="OsProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.osProfileWindowsConfig"></a>

```csharp
public VirtualMachineOsProfileWindowsConfig OsProfileWindowsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

os_profile_windows_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_profile_windows_config VirtualMachine#os_profile_windows_config}

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.plan"></a>

```csharp
public VirtualMachinePlan Plan { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#plan VirtualMachine#plan}

---

##### `PrimaryNetworkInterfaceId`<sup>Optional</sup> <a name="PrimaryNetworkInterfaceId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.primaryNetworkInterfaceId"></a>

```csharp
public string PrimaryNetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}.

---

##### `StorageDataDisk`<sup>Optional</sup> <a name="StorageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageDataDisk"></a>

```csharp
public object StorageDataDisk { get; set; }
```

- *Type:* object

storage_data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_data_disk VirtualMachine#storage_data_disk}

---

##### `StorageImageReference`<sup>Optional</sup> <a name="StorageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.storageImageReference"></a>

```csharp
public VirtualMachineStorageImageReference StorageImageReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#storage_image_reference VirtualMachine#storage_image_reference}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#tags VirtualMachine#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.timeouts"></a>

```csharp
public VirtualMachineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#timeouts VirtualMachine#timeouts}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#zones VirtualMachine#zones}.

---

### VirtualMachineIdentity <a name="VirtualMachineIdentity" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#type VirtualMachine#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#type VirtualMachine#type}.

---

### VirtualMachineOsProfile <a name="VirtualMachineOsProfile" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfile {
    string AdminUsername,
    string ComputerName,
    string AdminPassword = null,
    string CustomData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#admin_username VirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.computerName">ComputerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.customData">CustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#custom_data VirtualMachine#custom_data}. |

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#admin_username VirtualMachine#admin_username}.

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.computerName"></a>

```csharp
public string ComputerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}.

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}.

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile.property.customData"></a>

```csharp
public string CustomData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#custom_data VirtualMachine#custom_data}.

---

### VirtualMachineOsProfileLinuxConfig <a name="VirtualMachineOsProfileLinuxConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileLinuxConfig {
    object DisablePasswordAuthentication,
    object SshKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.disablePasswordAuthentication">DisablePasswordAuthentication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disable_password_authentication VirtualMachine#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.sshKeys">SshKeys</a></code> | <code>object</code> | ssh_keys block. |

---

##### `DisablePasswordAuthentication`<sup>Required</sup> <a name="DisablePasswordAuthentication" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.disablePasswordAuthentication"></a>

```csharp
public object DisablePasswordAuthentication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disable_password_authentication VirtualMachine#disable_password_authentication}.

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.sshKeys"></a>

```csharp
public object SshKeys { get; set; }
```

- *Type:* object

ssh_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#ssh_keys VirtualMachine#ssh_keys}

---

### VirtualMachineOsProfileLinuxConfigSshKeys <a name="VirtualMachineOsProfileLinuxConfigSshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileLinuxConfigSshKeys {
    string KeyData,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.keyData">KeyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#key_data VirtualMachine#key_data}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#path VirtualMachine#path}. |

---

##### `KeyData`<sup>Required</sup> <a name="KeyData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.keyData"></a>

```csharp
public string KeyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#key_data VirtualMachine#key_data}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#path VirtualMachine#path}.

---

### VirtualMachineOsProfileSecrets <a name="VirtualMachineOsProfileSecrets" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileSecrets {
    string SourceVaultId,
    object VaultCertificates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#source_vault_id VirtualMachine#source_vault_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.property.vaultCertificates">VaultCertificates</a></code> | <code>object</code> | vault_certificates block. |

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#source_vault_id VirtualMachine#source_vault_id}.

---

##### `VaultCertificates`<sup>Optional</sup> <a name="VaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecrets.property.vaultCertificates"></a>

```csharp
public object VaultCertificates { get; set; }
```

- *Type:* object

vault_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vault_certificates VirtualMachine#vault_certificates}

---

### VirtualMachineOsProfileSecretsVaultCertificates <a name="VirtualMachineOsProfileSecretsVaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileSecretsVaultCertificates {
    string CertificateUrl,
    string CertificateStore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateStore">CertificateStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_store VirtualMachine#certificate_store}. |

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}.

---

##### `CertificateStore`<sup>Optional</sup> <a name="CertificateStore" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateStore"></a>

```csharp
public string CertificateStore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_store VirtualMachine#certificate_store}.

---

### VirtualMachineOsProfileWindowsConfig <a name="VirtualMachineOsProfileWindowsConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileWindowsConfig {
    object AdditionalUnattendConfig = null,
    object EnableAutomaticUpgrades = null,
    object ProvisionVmAgent = null,
    string Timezone = null,
    object Winrm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.additionalUnattendConfig">AdditionalUnattendConfig</a></code> | <code>object</code> | additional_unattend_config block. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.enableAutomaticUpgrades">EnableAutomaticUpgrades</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#provision_vm_agent VirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#timezone VirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.winrm">Winrm</a></code> | <code>object</code> | winrm block. |

---

##### `AdditionalUnattendConfig`<sup>Optional</sup> <a name="AdditionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.additionalUnattendConfig"></a>

```csharp
public object AdditionalUnattendConfig { get; set; }
```

- *Type:* object

additional_unattend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#additional_unattend_config VirtualMachine#additional_unattend_config}

---

##### `EnableAutomaticUpgrades`<sup>Optional</sup> <a name="EnableAutomaticUpgrades" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.enableAutomaticUpgrades"></a>

```csharp
public object EnableAutomaticUpgrades { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}.

---

##### `ProvisionVmAgent`<sup>Optional</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.provisionVmAgent"></a>

```csharp
public object ProvisionVmAgent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#provision_vm_agent VirtualMachine#provision_vm_agent}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#timezone VirtualMachine#timezone}.

---

##### `Winrm`<sup>Optional</sup> <a name="Winrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.winrm"></a>

```csharp
public object Winrm { get; set; }
```

- *Type:* object

winrm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#winrm VirtualMachine#winrm}

---

### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig {
    string Component,
    string Content,
    string Pass,
    string SettingName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.component">Component</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#component VirtualMachine#component}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#content VirtualMachine#content}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.pass">Pass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#pass VirtualMachine#pass}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#setting_name VirtualMachine#setting_name}. |

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.component"></a>

```csharp
public string Component { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#component VirtualMachine#component}.

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#content VirtualMachine#content}.

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.pass"></a>

```csharp
public string Pass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#pass VirtualMachine#pass}.

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#setting_name VirtualMachine#setting_name}.

---

### VirtualMachineOsProfileWindowsConfigWinrm <a name="VirtualMachineOsProfileWindowsConfigWinrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileWindowsConfigWinrm {
    string Protocol,
    string CertificateUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#protocol VirtualMachine#protocol}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#protocol VirtualMachine#protocol}.

---

##### `CertificateUrl`<sup>Optional</sup> <a name="CertificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}.

---

### VirtualMachinePlan <a name="VirtualMachinePlan" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachinePlan {
    string Name,
    string Product,
    string Publisher
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#product VirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#product VirtualMachine#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}.

---

### VirtualMachineStorageDataDisk <a name="VirtualMachineStorageDataDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineStorageDataDisk {
    string CreateOption,
    double Lun,
    string Name,
    string Caching = null,
    double DiskSizeGb = null,
    string ManagedDiskId = null,
    string ManagedDiskType = null,
    string VhdUri = null,
    object WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.createOption">CreateOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.lun">Lun</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#lun VirtualMachine#lun}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#caching VirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskId">ManagedDiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskType">ManagedDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.vhdUri">VhdUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}. |

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.createOption"></a>

```csharp
public string CreateOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#lun VirtualMachine#lun}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#caching VirtualMachine#caching}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}.

---

##### `ManagedDiskId`<sup>Optional</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskId"></a>

```csharp
public string ManagedDiskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}.

---

##### `ManagedDiskType`<sup>Optional</sup> <a name="ManagedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskType"></a>

```csharp
public string ManagedDiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}.

---

##### `VhdUri`<sup>Optional</sup> <a name="VhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.vhdUri"></a>

```csharp
public string VhdUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDisk.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}.

---

### VirtualMachineStorageImageReference <a name="VirtualMachineStorageImageReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineStorageImageReference {
    string Id = null,
    string Offer = null,
    string Publisher = null,
    string Sku = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#offer VirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#sku VirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#version VirtualMachine#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Offer`<sup>Optional</sup> <a name="Offer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#offer VirtualMachine#offer}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#sku VirtualMachine#sku}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#version VirtualMachine#version}.

---

### VirtualMachineStorageOsDisk <a name="VirtualMachineStorageOsDisk" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineStorageOsDisk {
    string CreateOption,
    string Name,
    string Caching = null,
    double DiskSizeGb = null,
    string ImageUri = null,
    string ManagedDiskId = null,
    string ManagedDiskType = null,
    string OsType = null,
    string VhdUri = null,
    object WriteAcceleratorEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.createOption">CreateOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#caching VirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.imageUri">ImageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#image_uri VirtualMachine#image_uri}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskId">ManagedDiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskType">ManagedDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.osType">OsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_type VirtualMachine#os_type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.vhdUri">VhdUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}. |

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.createOption"></a>

```csharp
public string CreateOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#caching VirtualMachine#caching}.

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}.

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#image_uri VirtualMachine#image_uri}.

---

##### `ManagedDiskId`<sup>Optional</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskId"></a>

```csharp
public string ManagedDiskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}.

---

##### `ManagedDiskType`<sup>Optional</sup> <a name="ManagedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskType"></a>

```csharp
public string ManagedDiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#os_type VirtualMachine#os_type}.

---

##### `VhdUri`<sup>Optional</sup> <a name="VhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.vhdUri"></a>

```csharp
public string VhdUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}.

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}.

---

### VirtualMachineTimeouts <a name="VirtualMachineTimeouts" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create VirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete VirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#read VirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#update VirtualMachine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#create VirtualMachine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#delete VirtualMachine#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#read VirtualMachine#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine#update VirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineBootDiagnosticsOutputReference <a name="VirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineBootDiagnosticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUriInput">StorageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUri">StorageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `StorageUriInput`<sup>Optional</sup> <a name="StorageUriInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUriInput"></a>

```csharp
public string StorageUriInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUri"></a>

```csharp
public string StorageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineBootDiagnostics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

---


### VirtualMachineIdentityOutputReference <a name="VirtualMachineIdentityOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentityOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

---


### VirtualMachineOsProfileLinuxConfigOutputReference <a name="VirtualMachineOsProfileLinuxConfigOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileLinuxConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys">PutSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSshKeys` <a name="PutSshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys"></a>

```csharp
private void PutSshKeys(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys.parameter.value"></a>

- *Type:* object

---

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeys">SshKeys</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList">VirtualMachineOsProfileLinuxConfigSshKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthenticationInput">DisablePasswordAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthentication">DisablePasswordAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeys"></a>

```csharp
public VirtualMachineOsProfileLinuxConfigSshKeysList SshKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList">VirtualMachineOsProfileLinuxConfigSshKeysList</a>

---

##### `DisablePasswordAuthenticationInput`<sup>Optional</sup> <a name="DisablePasswordAuthenticationInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthenticationInput"></a>

```csharp
public object DisablePasswordAuthenticationInput { get; }
```

- *Type:* object

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeysInput"></a>

```csharp
public object SshKeysInput { get; }
```

- *Type:* object

---

##### `DisablePasswordAuthentication`<sup>Required</sup> <a name="DisablePasswordAuthentication" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthentication"></a>

```csharp
public object DisablePasswordAuthentication { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineOsProfileLinuxConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

---


### VirtualMachineOsProfileLinuxConfigSshKeysList <a name="VirtualMachineOsProfileLinuxConfigSshKeysList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileLinuxConfigSshKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get"></a>

```csharp
private VirtualMachineOsProfileLinuxConfigSshKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileLinuxConfigSshKeysOutputReference <a name="VirtualMachineOsProfileLinuxConfigSshKeysOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileLinuxConfigSshKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyDataInput">KeyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyData">KeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyDataInput`<sup>Optional</sup> <a name="KeyDataInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyDataInput"></a>

```csharp
public string KeyDataInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `KeyData`<sup>Required</sup> <a name="KeyData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyData"></a>

```csharp
public string KeyData { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileOutputReference <a name="VirtualMachineOsProfileOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resetCustomData">ResetCustomData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.resetCustomData"></a>

```csharp
private void ResetCustomData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerNameInput">ComputerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.customDataInput">CustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerName">ComputerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.customData">CustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `ComputerNameInput`<sup>Optional</sup> <a name="ComputerNameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerNameInput"></a>

```csharp
public string ComputerNameInput { get; }
```

- *Type:* string

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.customDataInput"></a>

```csharp
public string CustomDataInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerName"></a>

```csharp
public string ComputerName { get; }
```

- *Type:* string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.customData"></a>

```csharp
public string CustomData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineOsProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

---


### VirtualMachineOsProfileSecretsList <a name="VirtualMachineOsProfileSecretsList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.get"></a>

```csharp
private VirtualMachineOsProfileSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileSecretsOutputReference <a name="VirtualMachineOsProfileSecretsOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates">PutVaultCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resetVaultCertificates">ResetVaultCertificates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVaultCertificates` <a name="PutVaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates"></a>

```csharp
private void PutVaultCertificates(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates.parameter.value"></a>

- *Type:* object

---

##### `ResetVaultCertificates` <a name="ResetVaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resetVaultCertificates"></a>

```csharp
private void ResetVaultCertificates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificates">VaultCertificates</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList">VirtualMachineOsProfileSecretsVaultCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificatesInput">VaultCertificatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VaultCertificates`<sup>Required</sup> <a name="VaultCertificates" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificates"></a>

```csharp
public VirtualMachineOsProfileSecretsVaultCertificatesList VaultCertificates { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList">VirtualMachineOsProfileSecretsVaultCertificatesList</a>

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultIdInput"></a>

```csharp
public string SourceVaultIdInput { get; }
```

- *Type:* string

---

##### `VaultCertificatesInput`<sup>Optional</sup> <a name="VaultCertificatesInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificatesInput"></a>

```csharp
public object VaultCertificatesInput { get; }
```

- *Type:* object

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultId"></a>

```csharp
public string SourceVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileSecretsVaultCertificatesList <a name="VirtualMachineOsProfileSecretsVaultCertificatesList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileSecretsVaultCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get"></a>

```csharp
private VirtualMachineOsProfileSecretsVaultCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileSecretsVaultCertificatesOutputReference <a name="VirtualMachineOsProfileSecretsVaultCertificatesOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileSecretsVaultCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resetCertificateStore">ResetCertificateStore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStore` <a name="ResetCertificateStore" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resetCertificateStore"></a>

```csharp
private void ResetCertificateStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStoreInput">CertificateStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStore">CertificateStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateStoreInput`<sup>Optional</sup> <a name="CertificateStoreInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStoreInput"></a>

```csharp
public string CertificateStoreInput { get; }
```

- *Type:* string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrlInput"></a>

```csharp
public string CertificateUrlInput { get; }
```

- *Type:* string

---

##### `CertificateStore`<sup>Required</sup> <a name="CertificateStore" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStore"></a>

```csharp
public string CertificateStore { get; }
```

- *Type:* string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get"></a>

```csharp
private VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.componentInput">ComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.passInput">PassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.pass">Pass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.componentInput"></a>

```csharp
public string ComponentInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `PassInput`<sup>Optional</sup> <a name="PassInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.passInput"></a>

```csharp
public string PassInput { get; }
```

- *Type:* string

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.pass"></a>

```csharp
public string Pass { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileWindowsConfigOutputReference <a name="VirtualMachineOsProfileWindowsConfigOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileWindowsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig">PutAdditionalUnattendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm">PutWinrm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetAdditionalUnattendConfig">ResetAdditionalUnattendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetEnableAutomaticUpgrades">ResetEnableAutomaticUpgrades</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetProvisionVmAgent">ResetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetWinrm">ResetWinrm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalUnattendConfig` <a name="PutAdditionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig"></a>

```csharp
private void PutAdditionalUnattendConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig.parameter.value"></a>

- *Type:* object

---

##### `PutWinrm` <a name="PutWinrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm"></a>

```csharp
private void PutWinrm(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalUnattendConfig` <a name="ResetAdditionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetAdditionalUnattendConfig"></a>

```csharp
private void ResetAdditionalUnattendConfig()
```

##### `ResetEnableAutomaticUpgrades` <a name="ResetEnableAutomaticUpgrades" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetEnableAutomaticUpgrades"></a>

```csharp
private void ResetEnableAutomaticUpgrades()
```

##### `ResetProvisionVmAgent` <a name="ResetProvisionVmAgent" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetProvisionVmAgent"></a>

```csharp
private void ResetProvisionVmAgent()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetWinrm` <a name="ResetWinrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetWinrm"></a>

```csharp
private void ResetWinrm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfig">AdditionalUnattendConfig</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrm">Winrm</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList">VirtualMachineOsProfileWindowsConfigWinrmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfigInput">AdditionalUnattendConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgradesInput">EnableAutomaticUpgradesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgentInput">ProvisionVmAgentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrmInput">WinrmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgrades">EnableAutomaticUpgrades</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgent">ProvisionVmAgent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalUnattendConfig`<sup>Required</sup> <a name="AdditionalUnattendConfig" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfig"></a>

```csharp
public VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList AdditionalUnattendConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList</a>

---

##### `Winrm`<sup>Required</sup> <a name="Winrm" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrm"></a>

```csharp
public VirtualMachineOsProfileWindowsConfigWinrmList Winrm { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList">VirtualMachineOsProfileWindowsConfigWinrmList</a>

---

##### `AdditionalUnattendConfigInput`<sup>Optional</sup> <a name="AdditionalUnattendConfigInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfigInput"></a>

```csharp
public object AdditionalUnattendConfigInput { get; }
```

- *Type:* object

---

##### `EnableAutomaticUpgradesInput`<sup>Optional</sup> <a name="EnableAutomaticUpgradesInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgradesInput"></a>

```csharp
public object EnableAutomaticUpgradesInput { get; }
```

- *Type:* object

---

##### `ProvisionVmAgentInput`<sup>Optional</sup> <a name="ProvisionVmAgentInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgentInput"></a>

```csharp
public object ProvisionVmAgentInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `WinrmInput`<sup>Optional</sup> <a name="WinrmInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrmInput"></a>

```csharp
public object WinrmInput { get; }
```

- *Type:* object

---

##### `EnableAutomaticUpgrades`<sup>Required</sup> <a name="EnableAutomaticUpgrades" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgrades"></a>

```csharp
public object EnableAutomaticUpgrades { get; }
```

- *Type:* object

---

##### `ProvisionVmAgent`<sup>Required</sup> <a name="ProvisionVmAgent" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgent"></a>

```csharp
public object ProvisionVmAgent { get; }
```

- *Type:* object

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineOsProfileWindowsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

---


### VirtualMachineOsProfileWindowsConfigWinrmList <a name="VirtualMachineOsProfileWindowsConfigWinrmList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileWindowsConfigWinrmList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get"></a>

```csharp
private VirtualMachineOsProfileWindowsConfigWinrmOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOsProfileWindowsConfigWinrmOutputReference <a name="VirtualMachineOsProfileWindowsConfigWinrmOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineOsProfileWindowsConfigWinrmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resetCertificateUrl">ResetCertificateUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateUrl` <a name="ResetCertificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resetCertificateUrl"></a>

```csharp
private void ResetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrlInput"></a>

```csharp
public string CertificateUrlInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachinePlanOutputReference <a name="VirtualMachinePlanOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachinePlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlanOutputReference.property.internalValue"></a>

```csharp
public VirtualMachinePlan InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

---


### VirtualMachineStorageDataDiskList <a name="VirtualMachineStorageDataDiskList" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineStorageDataDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.get"></a>

```csharp
private VirtualMachineStorageDataDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineStorageDataDiskOutputReference <a name="VirtualMachineStorageDataDiskOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineStorageDataDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskId">ResetManagedDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskType">ResetManagedDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetVhdUri">ResetVhdUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaching` <a name="ResetCaching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetCaching"></a>

```csharp
private void ResetCaching()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetManagedDiskId` <a name="ResetManagedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskId"></a>

```csharp
private void ResetManagedDiskId()
```

##### `ResetManagedDiskType` <a name="ResetManagedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskType"></a>

```csharp
private void ResetManagedDiskType()
```

##### `ResetVhdUri` <a name="ResetVhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetVhdUri"></a>

```csharp
private void ResetVhdUri()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskIdInput">ManagedDiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskTypeInput">ManagedDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUriInput">VhdUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOption">CreateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskId">ManagedDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskType">ManagedDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUri">VhdUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOptionInput"></a>

```csharp
public string CreateOptionInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `ManagedDiskIdInput`<sup>Optional</sup> <a name="ManagedDiskIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskIdInput"></a>

```csharp
public string ManagedDiskIdInput { get; }
```

- *Type:* string

---

##### `ManagedDiskTypeInput`<sup>Optional</sup> <a name="ManagedDiskTypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskTypeInput"></a>

```csharp
public string ManagedDiskTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VhdUriInput`<sup>Optional</sup> <a name="VhdUriInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUriInput"></a>

```csharp
public string VhdUriInput { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```csharp
public object WriteAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOption"></a>

```csharp
public string CreateOption { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `ManagedDiskId`<sup>Required</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskId"></a>

```csharp
public string ManagedDiskId { get; }
```

- *Type:* string

---

##### `ManagedDiskType`<sup>Required</sup> <a name="ManagedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskType"></a>

```csharp
public string ManagedDiskType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VhdUri`<sup>Required</sup> <a name="VhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUri"></a>

```csharp
public string VhdUri { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineStorageImageReferenceOutputReference <a name="VirtualMachineStorageImageReferenceOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineStorageImageReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetOffer">ResetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOffer` <a name="ResetOffer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetOffer"></a>

```csharp
private void ResetOffer()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetPublisher"></a>

```csharp
private void ResetPublisher()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineStorageImageReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

---


### VirtualMachineStorageOsDiskOutputReference <a name="VirtualMachineStorageOsDiskOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineStorageOsDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskId">ResetManagedDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskType">ResetManagedDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetVhdUri">ResetVhdUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaching` <a name="ResetCaching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetCaching"></a>

```csharp
private void ResetCaching()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetManagedDiskId` <a name="ResetManagedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskId"></a>

```csharp
private void ResetManagedDiskId()
```

##### `ResetManagedDiskType` <a name="ResetManagedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskType"></a>

```csharp
private void ResetManagedDiskType()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetOsType"></a>

```csharp
private void ResetOsType()
```

##### `ResetVhdUri` <a name="ResetVhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetVhdUri"></a>

```csharp
private void ResetVhdUri()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```csharp
private void ResetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskIdInput">ManagedDiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskTypeInput">ManagedDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUriInput">VhdUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOption">CreateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskId">ManagedDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskType">ManagedDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUri">VhdUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOptionInput"></a>

```csharp
public string CreateOptionInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `ManagedDiskIdInput`<sup>Optional</sup> <a name="ManagedDiskIdInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskIdInput"></a>

```csharp
public string ManagedDiskIdInput { get; }
```

- *Type:* string

---

##### `ManagedDiskTypeInput`<sup>Optional</sup> <a name="ManagedDiskTypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskTypeInput"></a>

```csharp
public string ManagedDiskTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `VhdUriInput`<sup>Optional</sup> <a name="VhdUriInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUriInput"></a>

```csharp
public string VhdUriInput { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```csharp
public object WriteAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOption"></a>

```csharp
public string CreateOption { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `ManagedDiskId`<sup>Required</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskId"></a>

```csharp
public string ManagedDiskId { get; }
```

- *Type:* string

---

##### `ManagedDiskType`<sup>Required</sup> <a name="ManagedDiskType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskType"></a>

```csharp
public string ManagedDiskType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `VhdUri`<sup>Required</sup> <a name="VhdUri" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUri"></a>

```csharp
public string VhdUri { get; }
```

- *Type:* string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```csharp
public object WriteAcceleratorEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineStorageOsDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

---


### VirtualMachineTimeoutsOutputReference <a name="VirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurestack;

new VirtualMachineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurestack.virtualMachine.VirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



