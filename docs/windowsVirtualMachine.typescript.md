# `windowsVirtualMachine` Submodule <a name="`windowsVirtualMachine` Submodule" id="@cdktf/provider-azurestack.windowsVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsVirtualMachine <a name="WindowsVirtualMachine" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine azurestack_windows_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachine(scope: Construct, id: string, config: WindowsVirtualMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig">WindowsVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig">WindowsVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities">putAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent">putAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics">putBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk">putOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference">putSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener">putWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities">resetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent">resetAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations">resetAllowExtensionOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId">resetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics">resetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName">resetComputerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates">resetEnableAutomaticUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget">resetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice">resetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode">resetPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent">resetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId">resetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference">resetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId">resetVirtualMachineScaleSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener">resetWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalCapabilities` <a name="putAdditionalCapabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities"></a>

```typescript
public putAdditionalCapabilities(value: WindowsVirtualMachineAdditionalCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `putAdditionalUnattendContent` <a name="putAdditionalUnattendContent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent"></a>

```typescript
public putAdditionalUnattendContent(value: IResolvable | WindowsVirtualMachineAdditionalUnattendContent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---

##### `putBootDiagnostics` <a name="putBootDiagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics"></a>

```typescript
public putBootDiagnostics(value: WindowsVirtualMachineBootDiagnostics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `putOsDisk` <a name="putOsDisk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk"></a>

```typescript
public putOsDisk(value: WindowsVirtualMachineOsDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putPlan"></a>

```typescript
public putPlan(value: WindowsVirtualMachinePlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSecret"></a>

```typescript
public putSecret(value: IResolvable | WindowsVirtualMachineSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---

##### `putSourceImageReference` <a name="putSourceImageReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference"></a>

```typescript
public putSourceImageReference(value: WindowsVirtualMachineSourceImageReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts"></a>

```typescript
public putTimeouts(value: WindowsVirtualMachineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---

##### `putWinrmListener` <a name="putWinrmListener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener"></a>

```typescript
public putWinrmListener(value: IResolvable | WindowsVirtualMachineWinrmListener[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---

##### `resetAdditionalCapabilities` <a name="resetAdditionalCapabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities"></a>

```typescript
public resetAdditionalCapabilities(): void
```

##### `resetAdditionalUnattendContent` <a name="resetAdditionalUnattendContent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent"></a>

```typescript
public resetAdditionalUnattendContent(): void
```

##### `resetAllowExtensionOperations` <a name="resetAllowExtensionOperations" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations"></a>

```typescript
public resetAllowExtensionOperations(): void
```

##### `resetAvailabilitySetId` <a name="resetAvailabilitySetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId"></a>

```typescript
public resetAvailabilitySetId(): void
```

##### `resetBootDiagnostics` <a name="resetBootDiagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics"></a>

```typescript
public resetBootDiagnostics(): void
```

##### `resetComputerName` <a name="resetComputerName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName"></a>

```typescript
public resetComputerName(): void
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData"></a>

```typescript
public resetCustomData(): void
```

##### `resetEnableAutomaticUpdates` <a name="resetEnableAutomaticUpdates" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates"></a>

```typescript
public resetEnableAutomaticUpdates(): void
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled"></a>

```typescript
public resetEncryptionAtHostEnabled(): void
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy"></a>

```typescript
public resetEvictionPolicy(): void
```

##### `resetExtensionsTimeBudget` <a name="resetExtensionsTimeBudget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget"></a>

```typescript
public resetExtensionsTimeBudget(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType"></a>

```typescript
public resetLicenseType(): void
```

##### `resetMaxBidPrice` <a name="resetMaxBidPrice" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice"></a>

```typescript
public resetMaxBidPrice(): void
```

##### `resetPatchMode` <a name="resetPatchMode" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode"></a>

```typescript
public resetPatchMode(): void
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPlan"></a>

```typescript
public resetPlan(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProvisionVmAgent` <a name="resetProvisionVmAgent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent"></a>

```typescript
public resetProvisionVmAgent(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetSourceImageId` <a name="resetSourceImageId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId"></a>

```typescript
public resetSourceImageId(): void
```

##### `resetSourceImageReference` <a name="resetSourceImageReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference"></a>

```typescript
public resetSourceImageReference(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetVirtualMachineScaleSetId` <a name="resetVirtualMachineScaleSetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId"></a>

```typescript
public resetVirtualMachineScaleSetId(): void
```

##### `resetWinrmListener` <a name="resetWinrmListener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener"></a>

```typescript
public resetWinrmListener(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WindowsVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isConstruct"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

windowsVirtualMachine.WindowsVirtualMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WindowsVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WindowsVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WindowsVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WindowsVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent">additionalUnattendContent</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses">privateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses">publicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener">winrmListener</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput">additionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput">additionalUnattendContentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput">allowExtensionOperationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput">availabilitySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput">bootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput">computerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput">customDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput">enableAutomaticUpdatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput">extensionsTimeBudgetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput">maxBidPriceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput">networkInterfaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput">osDiskInput</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput">patchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput">provisionVmAgentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput">secretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput">sourceImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput">sourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput">virtualMachineScaleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput">winrmListenerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId">availabilitySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.computerName">computerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.customData">customData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice">maxBidPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode">patchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent">provisionVmAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId">sourceImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalCapabilities`<sup>Required</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities"></a>

```typescript
public readonly additionalCapabilities: WindowsVirtualMachineAdditionalCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `additionalUnattendContent`<sup>Required</sup> <a name="additionalUnattendContent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent"></a>

```typescript
public readonly additionalUnattendContent: WindowsVirtualMachineAdditionalUnattendContentList;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a>

---

##### `bootDiagnostics`<sup>Required</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics"></a>

```typescript
public readonly bootDiagnostics: WindowsVirtualMachineBootDiagnosticsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a>

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk"></a>

```typescript
public readonly osDisk: WindowsVirtualMachineOsDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.plan"></a>

```typescript
public readonly plan: WindowsVirtualMachinePlanOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: string[];
```

- *Type:* string[]

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses"></a>

```typescript
public readonly publicIpAddresses: string[];
```

- *Type:* string[]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.secret"></a>

```typescript
public readonly secret: WindowsVirtualMachineSecretList;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a>

---

##### `sourceImageReference`<sup>Required</sup> <a name="sourceImageReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference"></a>

```typescript
public readonly sourceImageReference: WindowsVirtualMachineSourceImageReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts"></a>

```typescript
public readonly timeouts: WindowsVirtualMachineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a>

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

##### `winrmListener`<sup>Required</sup> <a name="winrmListener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener"></a>

```typescript
public readonly winrmListener: WindowsVirtualMachineWinrmListenerList;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a>

---

##### `additionalCapabilitiesInput`<sup>Optional</sup> <a name="additionalCapabilitiesInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput"></a>

```typescript
public readonly additionalCapabilitiesInput: WindowsVirtualMachineAdditionalCapabilities;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `additionalUnattendContentInput`<sup>Optional</sup> <a name="additionalUnattendContentInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput"></a>

```typescript
public readonly additionalUnattendContentInput: IResolvable | WindowsVirtualMachineAdditionalUnattendContent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `allowExtensionOperationsInput`<sup>Optional</sup> <a name="allowExtensionOperationsInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput"></a>

```typescript
public readonly allowExtensionOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilitySetIdInput`<sup>Optional</sup> <a name="availabilitySetIdInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput"></a>

```typescript
public readonly availabilitySetIdInput: string;
```

- *Type:* string

---

##### `bootDiagnosticsInput`<sup>Optional</sup> <a name="bootDiagnosticsInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput"></a>

```typescript
public readonly bootDiagnosticsInput: WindowsVirtualMachineBootDiagnostics;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput"></a>

```typescript
public readonly computerNameInput: string;
```

- *Type:* string

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput"></a>

```typescript
public readonly customDataInput: string;
```

- *Type:* string

---

##### `enableAutomaticUpdatesInput`<sup>Optional</sup> <a name="enableAutomaticUpdatesInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput"></a>

```typescript
public readonly enableAutomaticUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput"></a>

```typescript
public readonly encryptionAtHostEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput"></a>

```typescript
public readonly evictionPolicyInput: string;
```

- *Type:* string

---

##### `extensionsTimeBudgetInput`<sup>Optional</sup> <a name="extensionsTimeBudgetInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput"></a>

```typescript
public readonly extensionsTimeBudgetInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maxBidPriceInput`<sup>Optional</sup> <a name="maxBidPriceInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput"></a>

```typescript
public readonly maxBidPriceInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdsInput`<sup>Optional</sup> <a name="networkInterfaceIdsInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput"></a>

```typescript
public readonly networkInterfaceIdsInput: string[];
```

- *Type:* string[]

---

##### `osDiskInput`<sup>Optional</sup> <a name="osDiskInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput"></a>

```typescript
public readonly osDiskInput: WindowsVirtualMachineOsDisk;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `patchModeInput`<sup>Optional</sup> <a name="patchModeInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput"></a>

```typescript
public readonly patchModeInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.planInput"></a>

```typescript
public readonly planInput: WindowsVirtualMachinePlan;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `provisionVmAgentInput`<sup>Optional</sup> <a name="provisionVmAgentInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput"></a>

```typescript
public readonly provisionVmAgentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | WindowsVirtualMachineSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `sourceImageIdInput`<sup>Optional</sup> <a name="sourceImageIdInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput"></a>

```typescript
public readonly sourceImageIdInput: string;
```

- *Type:* string

---

##### `sourceImageReferenceInput`<sup>Optional</sup> <a name="sourceImageReferenceInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput"></a>

```typescript
public readonly sourceImageReferenceInput: WindowsVirtualMachineSourceImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WindowsVirtualMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `virtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="virtualMachineScaleSetIdInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput"></a>

```typescript
public readonly virtualMachineScaleSetIdInput: string;
```

- *Type:* string

---

##### `winrmListenerInput`<sup>Optional</sup> <a name="winrmListenerInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput"></a>

```typescript
public readonly winrmListenerInput: IResolvable | WindowsVirtualMachineWinrmListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `allowExtensionOperations`<sup>Required</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations"></a>

```typescript
public readonly allowExtensionOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilitySetId`<sup>Required</sup> <a name="availabilitySetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId"></a>

```typescript
public readonly availabilitySetId: string;
```

- *Type:* string

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.customData"></a>

```typescript
public readonly customData: string;
```

- *Type:* string

---

##### `enableAutomaticUpdates`<sup>Required</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates"></a>

```typescript
public readonly enableAutomaticUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

---

##### `extensionsTimeBudget`<sup>Required</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget"></a>

```typescript
public readonly extensionsTimeBudget: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxBidPrice`<sup>Required</sup> <a name="maxBidPrice" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice"></a>

```typescript
public readonly maxBidPrice: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `patchMode`<sup>Required</sup> <a name="patchMode" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode"></a>

```typescript
public readonly patchMode: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `provisionVmAgent`<sup>Required</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent"></a>

```typescript
public readonly provisionVmAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId"></a>

```typescript
public readonly virtualMachineScaleSetId: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsVirtualMachineAdditionalCapabilities <a name="WindowsVirtualMachineAdditionalCapabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineAdditionalCapabilities: windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}. |

---

##### `ultraSsdEnabled`<sup>Optional</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```typescript
public readonly ultraSsdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}.

---

### WindowsVirtualMachineAdditionalUnattendContent <a name="WindowsVirtualMachineAdditionalUnattendContent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineAdditionalUnattendContent: windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting">setting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}.

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting"></a>

```typescript
public readonly setting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}.

---

### WindowsVirtualMachineBootDiagnostics <a name="WindowsVirtualMachineBootDiagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineBootDiagnostics: windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri">storageAccountUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}. |

---

##### `storageAccountUri`<sup>Required</sup> <a name="storageAccountUri" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri"></a>

```typescript
public readonly storageAccountUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}.

---

### WindowsVirtualMachineConfig <a name="WindowsVirtualMachineConfig" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineConfig: windowsVirtualMachine.WindowsVirtualMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername">adminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent">additionalUnattendContent</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId">availabilitySetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName">computerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData">customData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice">maxBidPrice</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode">patchMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority">priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent">provisionVmAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret">secret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId">sourceImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener">winrmListener</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | winrm_listener block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}.

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}.

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk"></a>

```typescript
public readonly osDisk: WindowsVirtualMachineOsDisk;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#os_disk WindowsVirtualMachine#os_disk}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}.

---

##### `additionalCapabilities`<sup>Optional</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities"></a>

```typescript
public readonly additionalCapabilities: WindowsVirtualMachineAdditionalCapabilities;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#additional_capabilities WindowsVirtualMachine#additional_capabilities}

---

##### `additionalUnattendContent`<sup>Optional</sup> <a name="additionalUnattendContent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent"></a>

```typescript
public readonly additionalUnattendContent: IResolvable | WindowsVirtualMachineAdditionalUnattendContent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#additional_unattend_content WindowsVirtualMachine#additional_unattend_content}

---

##### `allowExtensionOperations`<sup>Optional</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations"></a>

```typescript
public readonly allowExtensionOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId"></a>

```typescript
public readonly availabilitySetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics"></a>

```typescript
public readonly bootDiagnostics: WindowsVirtualMachineBootDiagnostics;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#boot_diagnostics WindowsVirtualMachine#boot_diagnostics}

---

##### `computerName`<sup>Optional</sup> <a name="computerName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData"></a>

```typescript
public readonly customData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}.

---

##### `enableAutomaticUpdates`<sup>Optional</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates"></a>

```typescript
public readonly enableAutomaticUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}.

---

##### `extensionsTimeBudget`<sup>Optional</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget"></a>

```typescript
public readonly extensionsTimeBudget: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}.

---

##### `maxBidPrice`<sup>Optional</sup> <a name="maxBidPrice" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice"></a>

```typescript
public readonly maxBidPrice: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}.

---

##### `patchMode`<sup>Optional</sup> <a name="patchMode" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode"></a>

```typescript
public readonly patchMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan"></a>

```typescript
public readonly plan: WindowsVirtualMachinePlan;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#plan WindowsVirtualMachine#plan}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent"></a>

```typescript
public readonly provisionVmAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret"></a>

```typescript
public readonly secret: IResolvable | WindowsVirtualMachineSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#secret WindowsVirtualMachine#secret}

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}.

---

##### `sourceImageReference`<sup>Optional</sup> <a name="sourceImageReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference"></a>

```typescript
public readonly sourceImageReference: WindowsVirtualMachineSourceImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_reference WindowsVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WindowsVirtualMachineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timeouts WindowsVirtualMachine#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}.

---

##### `virtualMachineScaleSetId`<sup>Optional</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId"></a>

```typescript
public readonly virtualMachineScaleSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}.

---

##### `winrmListener`<sup>Optional</sup> <a name="winrmListener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener"></a>

```typescript
public readonly winrmListener: IResolvable | WindowsVirtualMachineWinrmListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#winrm_listener WindowsVirtualMachine#winrm_listener}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}.

---

### WindowsVirtualMachineOsDisk <a name="WindowsVirtualMachineOsDisk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineOsDisk: windowsVirtualMachine.WindowsVirtualMachineOsDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching">caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}.

---

##### `diffDiskSettings`<sup>Optional</sup> <a name="diffDiskSettings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings"></a>

```typescript
public readonly diffDiskSettings: WindowsVirtualMachineOsDiskDiffDiskSettings;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#diff_disk_settings WindowsVirtualMachine#diff_disk_settings}

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `writeAcceleratorEnabled`<sup>Optional</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled"></a>

```typescript
public readonly writeAcceleratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}.

---

### WindowsVirtualMachineOsDiskDiffDiskSettings <a name="WindowsVirtualMachineOsDiskDiffDiskSettings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineOsDiskDiffDiskSettings: windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option">option</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}. |

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}.

---

### WindowsVirtualMachinePlan <a name="WindowsVirtualMachinePlan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachinePlan: windowsVirtualMachine.WindowsVirtualMachinePlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

### WindowsVirtualMachineSecret <a name="WindowsVirtualMachineSecret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineSecret: windowsVirtualMachine.WindowsVirtualMachineSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate">certificate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate"></a>

```typescript
public readonly certificate: IResolvable | WindowsVirtualMachineSecretCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#certificate WindowsVirtualMachine#certificate}

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}.

---

### WindowsVirtualMachineSecretCertificate <a name="WindowsVirtualMachineSecretCertificate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineSecretCertificate: windowsVirtualMachine.WindowsVirtualMachineSecretCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store">store</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}. |

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store"></a>

```typescript
public readonly store: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}.

---

### WindowsVirtualMachineSourceImageReference <a name="WindowsVirtualMachineSourceImageReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineSourceImageReference: windowsVirtualMachine.WindowsVirtualMachineSourceImageReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}.

---

### WindowsVirtualMachineTimeouts <a name="WindowsVirtualMachineTimeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineTimeouts: windowsVirtualMachine.WindowsVirtualMachineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}.

---

### WindowsVirtualMachineWinrmListener <a name="WindowsVirtualMachineWinrmListener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

const windowsVirtualMachineWinrmListener: windowsVirtualMachine.WindowsVirtualMachineWinrmListener = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsVirtualMachineAdditionalCapabilitiesOutputReference <a name="WindowsVirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">resetUltraSsdEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUltraSsdEnabled` <a name="resetUltraSsdEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```typescript
public resetUltraSsdEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultraSsdEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ultraSsdEnabledInput`<sup>Optional</sup> <a name="ultraSsdEnabledInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```typescript
public readonly ultraSsdEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ultraSsdEnabled`<sup>Required</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```typescript
public readonly ultraSsdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineAdditionalCapabilities;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---


### WindowsVirtualMachineAdditionalUnattendContentList <a name="WindowsVirtualMachineAdditionalUnattendContentList" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineAdditionalUnattendContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineAdditionalUnattendContent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---


### WindowsVirtualMachineAdditionalUnattendContentOutputReference <a name="WindowsVirtualMachineAdditionalUnattendContentOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput">settingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting">setting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput"></a>

```typescript
public readonly settingInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting"></a>

```typescript
public readonly setting: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineAdditionalUnattendContent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>

---


### WindowsVirtualMachineBootDiagnosticsOutputReference <a name="WindowsVirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput">storageAccountUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri">storageAccountUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageAccountUriInput`<sup>Optional</sup> <a name="storageAccountUriInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```typescript
public readonly storageAccountUriInput: string;
```

- *Type:* string

---

##### `storageAccountUri`<sup>Required</sup> <a name="storageAccountUri" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```typescript
public readonly storageAccountUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineBootDiagnostics;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---


### WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference <a name="WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput">optionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option">option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```typescript
public readonly optionInput: string;
```

- *Type:* string

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineOsDiskDiffDiskSettings;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---


### WindowsVirtualMachineOsDiskOutputReference <a name="WindowsVirtualMachineOsDiskOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings">putDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings">resetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled">resetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiffDiskSettings` <a name="putDiffDiskSettings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings"></a>

```typescript
public putDiffDiskSettings(value: WindowsVirtualMachineOsDiskDiffDiskSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `resetDiffDiskSettings` <a name="resetDiffDiskSettings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings"></a>

```typescript
public resetDiffDiskSettings(): void
```

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```typescript
public resetDiskEncryptionSetId(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetWriteAcceleratorEnabled` <a name="resetWriteAcceleratorEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```typescript
public resetWriteAcceleratorEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput">cachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput">diffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput">writeAcceleratorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching">caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diffDiskSettings`<sup>Required</sup> <a name="diffDiskSettings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings"></a>

```typescript
public readonly diffDiskSettings: WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a>

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput"></a>

```typescript
public readonly cachingInput: string;
```

- *Type:* string

---

##### `diffDiskSettingsInput`<sup>Optional</sup> <a name="diffDiskSettingsInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```typescript
public readonly diffDiskSettingsInput: WindowsVirtualMachineOsDiskDiffDiskSettings;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```typescript
public readonly diskEncryptionSetIdInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `writeAcceleratorEnabledInput`<sup>Optional</sup> <a name="writeAcceleratorEnabledInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```typescript
public readonly writeAcceleratorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `writeAcceleratorEnabled`<sup>Required</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```typescript
public readonly writeAcceleratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineOsDisk;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---


### WindowsVirtualMachinePlanOutputReference <a name="WindowsVirtualMachinePlanOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachinePlan;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---


### WindowsVirtualMachineSecretCertificateList <a name="WindowsVirtualMachineSecretCertificateList" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineSecretCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineSecretCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---


### WindowsVirtualMachineSecretCertificateOutputReference <a name="WindowsVirtualMachineSecretCertificateOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput">storeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store">store</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storeInput`<sup>Optional</sup> <a name="storeInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput"></a>

```typescript
public readonly storeInput: string;
```

- *Type:* string

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store"></a>

```typescript
public readonly store: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineSecretCertificate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>

---


### WindowsVirtualMachineSecretList <a name="WindowsVirtualMachineSecretList" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---


### WindowsVirtualMachineSecretOutputReference <a name="WindowsVirtualMachineSecretOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate">putCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate"></a>

```typescript
public putCertificate(value: IResolvable | WindowsVirtualMachineSecretCertificate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput">certificateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate"></a>

```typescript
public readonly certificate: WindowsVirtualMachineSecretCertificateList;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: IResolvable | WindowsVirtualMachineSecretCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineSecret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>

---


### WindowsVirtualMachineSourceImageReferenceOutputReference <a name="WindowsVirtualMachineSourceImageReferenceOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineSourceImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---


### WindowsVirtualMachineTimeoutsOutputReference <a name="WindowsVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---


### WindowsVirtualMachineWinrmListenerList <a name="WindowsVirtualMachineWinrmListenerList" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineWinrmListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineWinrmListener[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---


### WindowsVirtualMachineWinrmListenerOutputReference <a name="WindowsVirtualMachineWinrmListenerOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktf/provider-azurestack'

new windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineWinrmListener;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>

---



